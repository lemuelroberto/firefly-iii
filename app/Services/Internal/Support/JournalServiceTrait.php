<?php
/**
 * JournalServiceTrait.php
 * Copyright (c) 2018 thegrumpydictator@gmail.com
 *
 * This file is part of Firefly III.
 *
 * Firefly III is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Firefly III is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Firefly III. If not, see <http://www.gnu.org/licenses/>.
 */

declare(strict_types=1);

namespace FireflyIII\Services\Internal\Support;

use Exception;
use FireflyIII\Exceptions\FireflyException;
use FireflyIII\Factory\TagFactory;
use FireflyIII\Models\Account;
use FireflyIII\Models\AccountType;
use FireflyIII\Models\Note;
use FireflyIII\Models\TransactionJournal;
use FireflyIII\Models\TransactionType;
use FireflyIII\Repositories\Account\AccountRepositoryInterface;
use FireflyIII\Repositories\Budget\BudgetRepositoryInterface;
use FireflyIII\Repositories\Category\CategoryRepositoryInterface;
use FireflyIII\Support\NullArrayObject;
use Log;

/**
 * Trait JournalServiceTrait
 *
 */
trait JournalServiceTrait
{
    /** @var AccountRepositoryInterface */
    private $accountRepository;
    /** @var BudgetRepositoryInterface */
    private $budgetRepository;
    /** @var CategoryRepositoryInterface */
    private $categoryRepository;
    /** @var TagFactory */
    private $tagFactory;


    /**
     * @param string|null $amount
     *
     * @return string
     */
    protected function getForeignAmount(?string $amount): ?string
    {
        if (null === $amount) {
            Log::debug('No foreign amount info in array. Return NULL');

            return null;
        }
        if ('' === $amount) {
            Log::debug('Foreign amount is empty string, return NULL.');

            return null;
        }
        if (0 === bccomp('0', $amount)) {
            Log::debug('Foreign amount is 0.0, return NULL.');

            return null;
        }
        Log::debug(sprintf('Foreign amount is %s', $amount));

        return $amount;
    }

    /**
     * @param string      $transactionType
     * @param string      $direction
     * @param int|null    $accountId
     * @param string|null $accountName
     *
     * @return Account
     */
    protected function getAccount(string $transactionType, string $direction, ?int $accountId, ?string $accountName): Account
    {
        // some debug logging:
        Log::debug(sprintf('Now in getAccount(%s, %d, %s)', $direction, $accountId, $accountName));

        // final result:
        $result = null;

        // expected type of source account, in order of preference
        /** @var array $array */
        $array         = config('firefly.expected_source_types');
        $expectedTypes = $array[$direction];
        unset($array);

        // and now try to find it, based on the type of transaction.
        $message = 'Based on the fact that the transaction is a %s, the %s account should be in: %s';
        Log::debug(sprintf($message, $transactionType, $direction, implode(', ', $expectedTypes[$transactionType])));

        // first attempt, find by ID.
        if (null !== $accountId) {
            $search = $this->accountRepository->findNull($accountId);
            if (null !== $search && in_array($search->accountType->type, $expectedTypes[$transactionType], true)) {
                Log::debug(
                    sprintf('Found "account_id" object  for %s: #%d, "%s" of type %s', $direction, $search->id, $search->name, $search->accountType->type)
                );
                $result = $search;
            }
        }

        // second attempt, find by name.
        if (null === $result && null !== $accountName) {
            Log::debug('Found nothing by account ID.');
            // find by preferred type.
            $source = $this->accountRepository->findByName($accountName, [$expectedTypes[$transactionType][0]]);
            // or any expected type.
            $source = $source ?? $this->accountRepository->findByName($accountName, $expectedTypes[$transactionType]);

            if (null !== $source) {
                Log::debug(sprintf('Found "account_name" object for %s: #%d, %s', $direction, $source->id, $source->name));

                $result = $source;
            }
        }

        // return cash account.
        if (null === $result && null === $accountName
            && in_array(AccountType::CASH, $expectedTypes[$transactionType], true)) {
            $result = $this->accountRepository->getCashAccount();
        }

        // return new account.
        if (null === $result) {
            $accountName = $accountName ?? '(no name)';
            // final attempt, create it.
            $preferredType = $expectedTypes[$transactionType][0];
            if (AccountType::ASSET === $preferredType) {
                throw new FireflyException(sprintf('TransactionFactory: Cannot create asset account with ID #%d or name "%s".', $accountId, $accountName));
            }

            $result = $this->accountRepository->store(
                [
                    'account_type_id' => null,
                    'account_type'     => $preferredType,
                    'name'            => $accountName,
                    'active'          => true,
                    'iban'            => null,
                ]
            );
        }

        return $result;
    }

    /**
     * @param string $amount
     *
     * @return string
     * @throws FireflyException
     */
    protected function getAmount(string $amount): string
    {
        if ('' === $amount) {
            throw new FireflyException(sprintf('The amount cannot be an empty string: "%s"', $amount));
        }
        if (0 === bccomp('0', $amount)) {
            throw new FireflyException(sprintf('The amount seems to be zero: "%s"', $amount));
        }

        return $amount;
    }

    /**
     * @param TransactionJournal $journal
     * @param NullArrayObject    $data
     */
    protected function storeBudget(TransactionJournal $journal, NullArrayObject $data): void
    {
        if (TransactionType::WITHDRAWAL !== $journal->transactionType->type) {
            $journal->budgets()->sync([]);

            return;
        }
        $budget = $this->budgetRepository->findBudget($data['budget_id'], $data['budget_name']);
        if (null !== $budget) {
            Log::debug(sprintf('Link budget #%d to journal #%d', $budget->id, $journal->id));
            $journal->budgets()->sync([$budget->id]);

            return;
        }
        // if the budget is NULL, sync empty.
        $journal->budgets()->sync([]);
    }

    /**
     * @param TransactionJournal $journal
     * @param NullArrayObject    $data
     */
    protected function storeCategory(TransactionJournal $journal, NullArrayObject $data): void
    {
        $category = $this->categoryRepository->findCategory($data['category_id'], $data['category_name']);
        if (null !== $category) {
            Log::debug(sprintf('Link category #%d to journal #%d', $category->id, $journal->id));
            $journal->categories()->sync([$category->id]);

            return;
        }
        // if the category is NULL, sync empty.
        $journal->categories()->sync([]);
    }

    /**
     * @param TransactionJournal $journal
     * @param string             $notes
     */
    protected function storeNotes(TransactionJournal $journal, ?string $notes): void
    {
        $notes = (string)$notes;
        $note  = $journal->notes()->first();
        if ('' !== $notes) {
            if (null === $note) {
                $note = new Note;
                $note->noteable()->associate($journal);
            }
            $note->text = $notes;
            $note->save();
            Log::debug(sprintf('Stored notes for journal #%d', $journal->id));

            return;
        }
        if ('' === $notes && null !== $note) {
            // try to delete existing notes.
            try {
                $note->delete();
                // @codeCoverageIgnoreStart
            } catch (Exception $e) {
                Log::debug(sprintf('Could not delete journal notes: %s', $e->getMessage()));
            }
            // @codeCoverageIgnoreEnd
        }
    }

    /**
     * Link tags to journal.
     *
     * @param TransactionJournal $journal
     * @param array              $tags
     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
     */
    protected function storeTags(TransactionJournal $journal, ?array $tags): void
    {
        $this->tagFactory->setUser($journal->user);
        $set = [];
        if (!is_array($tags)) {
            return;
        }
        foreach ($tags as $string) {
            $string = (string)$string;
            if ('' !== $string) {
                $tag = $this->tagFactory->findOrCreate($string);
                if (null !== $tag) {
                    $set[] = $tag->id;
                }
            }
        }
        $journal->tags()->sync($set);
    }



    //
    //    /**
    //     * Link tags to journal.
    //     *
    //     * @param TransactionJournal $journal
    //     * @param array              $data
    //     * @SuppressWarnings(PHPMD.CyclomaticComplexity)
    //     */
    //    public function connectTags(TransactionJournal $journal, array $data): void
    //    {
    //        /** @var TagFactory $factory */
    //        $factory = app(TagFactory::class);
    //        $factory->setUser($journal->user);
    //        $set = [];
    //        if (!is_array($data['tags'])) {
    //            return; // @codeCoverageIgnore
    //        }
    //        foreach ($data['tags'] as $string) {
    //            if ('' !== $string) {
    //                $tag = $factory->findOrCreate($string);
    //                if (null !== $tag) {
    //                    $set[] = $tag->id;
    //                }
    //            }
    //        }
    //        $journal->tags()->sync($set);
    //    }
    //
    //
    //    /**
    //     * @param int|null    $budgetId
    //     * @param null|string $budgetName
    //     *
    //     * @return Budget|null
    //     */
    //    protected function findBudget(?int $budgetId, ?string $budgetName): ?Budget
    //    {
    //        /** @var BudgetFactory $factory */
    //        $factory = app(BudgetFactory::class);
    //        $factory->setUser($this->user);
    //
    //        return $factory->find($budgetId, $budgetName);
    //    }
    //
    //    /**
    //     * @param int|null    $categoryId
    //     * @param null|string $categoryName
    //     *
    //     * @return Category|null
    //     */
    //    protected function findCategory(?int $categoryId, ?string $categoryName): ?Category
    //    {
    //        Log::debug(sprintf('Going to find or create category #%d, with name "%s"', $categoryId, $categoryName));
    //        /** @var CategoryFactory $factory */
    //        $factory = app(CategoryFactory::class);
    //        $factory->setUser($this->user);
    //
    //        return $factory->findOrCreate($categoryId, $categoryName);
    //    }
    //
    //
    //    /**
    //     * @param TransactionJournal $journal
    //     * @param Budget|null        $budget
    //     */
    //    protected function setBudget(TransactionJournal $journal, ?Budget $budget): void
    //    {
    //        if (null === $budget) {
    //            $journal->budgets()->sync([]);
    //
    //            return;
    //        }
    //        $journal->budgets()->sync([$budget->id]);
    //
    //    }
    //
    //
    //    /**
    //     * @param TransactionJournal $journal
    //     * @param Category|null      $category
    //     */
    //    protected function setCategory(TransactionJournal $journal, ?Category $category): void
    //    {
    //        if (null === $category) {
    //            $journal->categories()->sync([]);
    //
    //            return;
    //        }
    //        $journal->categories()->sync([$category->id]);
    //
    //    }
    //
    //
    //    /**
    //     * @param TransactionJournal $journal
    //     * @param array              $data
    //     * @param string             $field
    //     */
    //    protected function storeMeta(TransactionJournal $journal, array $data, string $field): void
    //    {
    //        $set = [
    //            'journal' => $journal,
    //            'name'    => $field,
    //            'data'    => (string)($data[$field] ?? ''),
    //        ];
    //
    //        Log::debug(sprintf('Going to store meta-field "%s", with value "%s".', $set['name'], $set['data']));
    //
    //        /** @var TransactionJournalMetaFactory $factory */
    //        $factory = app(TransactionJournalMetaFactory::class);
    //        $factory->updateOrCreate($set);
    //    }
    //
    //    /**
    //     * @param TransactionJournal $journal
    //     * @param string             $notes
    //     */
    //    protected function storeNote(TransactionJournal $journal, ?string $notes): void
    //    {
    //        $notes = (string)$notes;
    //        if ('' !== $notes) {
    //            $note = $journal->notes()->first();
    //            if (null === $note) {
    //                $note = new Note;
    //                $note->noteable()->associate($journal);
    //            }
    //            $note->text = $notes;
    //            $note->save();
    //
    //            return;
    //        }
    //        $note = $journal->notes()->first();
    //        if (null !== $note) {
    //            try {
    //                $note->delete();
    //            } catch (Exception $e) {
    //                Log::debug(sprintf('Journal service trait could not delete note: %s', $e->getMessage()));
    //            }
    //        }
    //
    //
    //    }
}
