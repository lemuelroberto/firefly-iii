<?php
/**
 * CurrencyExchangeRate.php
 * Copyright (c) 2019 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
declare(strict_types=1);

namespace FireflyIII\Models;

use Eloquent;
use FireflyIII\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class CurrencyExchangeRate
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property int $user_id
 * @property int $from_currency_id
 * @property int $to_currency_id
 * @property \Illuminate\Support\Carbon $date
 * @property string $rate
 * @property string|null $user_rate
 * @property-read \FireflyIII\Models\TransactionCurrency $fromCurrency
 * @property-read \FireflyIII\Models\TransactionCurrency $toCurrency
 * @property-read User $user
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate query()
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereFromCurrencyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereToCurrencyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CurrencyExchangeRate whereUserRate($value)
 * @mixin Eloquent
 */
class CurrencyExchangeRate extends Model
{
    /** @var array Convert these fields to other data types */
    protected $casts
                        = [
            'created_at'       => 'datetime',
            'updated_at'       => 'datetime',
            'user_id'          => 'int',
            'from_currency_id' => 'int',
            'to_currency_id'   => 'int',
            'date'             => 'datetime',
        ];
    protected $fillable = ['user_id', 'from_currency_id', 'to_currency_id', 'date', 'rate'];

    /**
     * @codeCoverageIgnore
     * @return BelongsTo
     */
    public function fromCurrency(): BelongsTo
    {
        return $this->belongsTo(TransactionCurrency::class, 'from_currency_id');
    }

    /**
     * @codeCoverageIgnore
     * @return BelongsTo
     */
    public function toCurrency(): BelongsTo
    {
        return $this->belongsTo(TransactionCurrency::class, 'to_currency_id');
    }

    /**
     * @codeCoverageIgnore
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
