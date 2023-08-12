/*
 * index.js
 * Copyright (c) 2022 james@firefly-iii.org
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

export default {
    "config": {
        "html_language": "zh-cn",
        "month_and_day_fns": "MMMM d, y"
    },
    "form": {
        "name": "\u540d\u79f0",
        "amount_min": "\u6700\u5c0f\u91d1\u989d",
        "amount_max": "\u6700\u5927\u91d1\u989d",
        "url": "\u7f51\u5740",
        "title": "\u6807\u9898",
        "first_date": "\u521d\u6b21\u65e5\u671f",
        "repetitions": "\u91cd\u590d",
        "description": "\u63cf\u8ff0",
        "iban": "\u56fd\u9645\u94f6\u884c\u8d26\u6237\u53f7\u7801 IBAN",
        "skip": "\u8df3\u8fc7",
        "date": "\u65e5\u671f"
    },
    "list": {
        "name": "\u540d\u79f0",
        "account_number": "\u8d26\u6237\u53f7\u7801",
        "currentBalance": "\u76ee\u524d\u4f59\u989d",
        "lastActivity": "\u4e0a\u6b21\u6d3b\u52a8",
        "active": "\u662f\u5426\u542f\u7528\uff1f"
    },
    "breadcrumbs": {
        "placeholder": "[Placeholder][\u5360\u4f4d\u7b26]",
        "budgets": "\u9884\u7b97",
        "subscriptions": "\u8ba2\u9605\u5217\u8868",
        "transactions": "\u4ea4\u6613",
        "title_expenses": "\u652f\u51fa",
        "title_withdrawal": "\u652f\u51fa",
        "title_revenue": "\u6536\u76ca\/\u6536\u5165",
        "title_deposit": "\u6536\u76ca\/\u6536\u5165",
        "title_transfer": "\u8f6c\u8d26",
        "title_transfers": "\u8f6c\u8d26",
        "asset_accounts": "\u8d44\u4ea7\u8d26\u6237",
        "expense_accounts": "\u652f\u51fa\u8d26\u6237",
        "revenue_accounts": "\u6536\u5165\u8d26\u6237",
        "liabilities_accounts": "\u503a\u52a1"
    },
    "firefly": {
        "administration_index": "Financial administration",
        "actions": "\u64cd\u4f5c",
        "edit": "\u7f16\u8f91",
        "delete": "\u5220\u9664",
        "reconcile": "\u5bf9\u8d26",
        "create_new_asset": "\u521b\u5efa\u65b0\u8d44\u4ea7\u8d26\u6237",
        "confirm_action": "\u786e\u8ba4\u64cd\u4f5c",
        "new_budget": "\u65b0\u9884\u7b97",
        "new_asset_account": "\u65b0\u8d44\u4ea7\u8d26\u6237",
        "newTransfer": "\u65b0\u8f6c\u8d26",
        "submission_options": "Submission options",
        "apply_rules_checkbox": "\u5e94\u7528\u89c4\u5219",
        "fire_webhooks_checkbox": "\u89e6\u53d1 webhook",
        "newDeposit": "\u65b0\u6536\u5165",
        "newWithdrawal": "\u65b0\u652f\u51fa",
        "bills_paid": "\u5df2\u4ed8\u8d26\u5355",
        "left_to_spend": "\u5269\u4f59\u652f\u51fa",
        "no_budget": "(\u65e0\u9884\u7b97)",
        "budgeted": "\u9884\u7b97\u4e0a\u9650",
        "spent": "\u652f\u51fa",
        "no_bill": "(\u65e0\u8d26\u5355)",
        "rule_trigger_source_account_starts_choice": "\u6765\u6e90\u8d26\u6237\u540d\u79f0\u5f00\u5934\u4e3a...",
        "rule_trigger_source_account_ends_choice": "\u6765\u6e90\u8d26\u6237\u7ed3\u5c3e\u4e3a\u2026",
        "rule_trigger_source_account_is_choice": "\u6765\u6e90\u8d26\u6237\u540d\u79f0\u4e3a...",
        "rule_trigger_source_account_contains_choice": "\u6765\u6e90\u8d26\u6237\u540d\u79f0\u5305\u542b...",
        "rule_trigger_account_id_choice": "\u5176\u4e2d\u4e00\u4e2a\u8d26\u6237ID\u4e3a...",
        "rule_trigger_source_account_id_choice": "\u6765\u6e90\u8d26\u6237 ID \u4e3a...",
        "rule_trigger_destination_account_id_choice": "\u76ee\u6807\u8d26\u6237 ID \u4e3a...",
        "rule_trigger_account_is_cash_choice": "\u5176\u4e2d\u4e00\u4e2a\u8d26\u6237\u662f\u73b0\u91d1\u8d26\u6237",
        "rule_trigger_source_is_cash_choice": "\u6765\u6e90\u8d26\u6237\u4e3a (\u73b0\u91d1) \u8d26\u6237",
        "rule_trigger_destination_is_cash_choice": "\u76ee\u6807\u8d26\u6237\u4e3a (\u73b0\u91d1) \u8d26\u6237",
        "rule_trigger_source_account_nr_starts_choice": "\u6765\u6e90\u8d26\u6237\u7f16\u53f7 \/ IBAN \u5f00\u5934\u4e3a...",
        "rule_trigger_source_account_nr_ends_choice": "\u6765\u6e90\u8d26\u6237\u7f16\u53f7 \/ IBAN \u7ed3\u5c3e\u4e3a...",
        "rule_trigger_source_account_nr_is_choice": "\u6765\u6e90\u8d26\u6237\u7f16\u53f7 \/ IBAN \u4e3a...",
        "rule_trigger_source_account_nr_contains_choice": "\u6765\u6e90\u8d26\u6237\u7f16\u53f7 \/ IBAN \u5305\u542b...",
        "rule_trigger_destination_account_starts_choice": "\u76ee\u6807\u8d26\u6237\u540d\u79f0\u5f00\u5934\u4e3a...",
        "rule_trigger_destination_account_ends_choice": "\u76ee\u6807\u8d26\u6237\u540d\u79f0\u7ed3\u5c3e\u4e3a...",
        "rule_trigger_destination_account_is_choice": "\u76ee\u6807\u8d26\u6237\u540d\u79f0\u4e3a...",
        "rule_trigger_destination_account_contains_choice": "\u76ee\u6807\u8d26\u6237\u540d\u79f0\u5305\u542b...",
        "rule_trigger_destination_account_nr_starts_choice": "\u76ee\u6807\u8d26\u6237\u7f16\u53f7 \/ IBAN \u5f00\u5934\u4e3a...",
        "rule_trigger_destination_account_nr_ends_choice": "\u76ee\u6807\u8d26\u6237\u7f16\u53f7 \/ IBAN \u7ed3\u5c3e\u4e3a...",
        "rule_trigger_destination_account_nr_is_choice": "\u76ee\u6807\u8d26\u6237\u7f16\u53f7 \/ IBAN \u4e3a...",
        "rule_trigger_destination_account_nr_contains_choice": "\u76ee\u6807\u8d26\u6237\u7f16\u53f7 \/ IBAN \u5305\u542b...",
        "rule_trigger_transaction_type_choice": "\u4ea4\u6613\u7c7b\u578b\u4e3a\u2026",
        "rule_trigger_category_is_choice": "\u5206\u7c7b\u4e3a...",
        "rule_trigger_amount_less_choice": "Amount is less than or equal to ..",
        "rule_trigger_amount_is_choice": "\u91d1\u989d\u662f...",
        "rule_trigger_amount_more_choice": "Amount is more than or equal to..",
        "rule_trigger_description_starts_choice": "\u63cf\u8ff0\u5f00\u5934\u4e3a...",
        "rule_trigger_description_ends_choice": "\u63cf\u8ff0\u7ed3\u5c3e\u4e3a...",
        "rule_trigger_description_contains_choice": "\u63cf\u8ff0\u5305\u542b\u2026",
        "rule_trigger_description_is_choice": "\u63cf\u8ff0\u4e3a\u2026",
        "rule_trigger_date_on_choice": "\u4ea4\u6613\u65e5\u671f\u4e3a...",
        "rule_trigger_date_before_choice": "\u4ea4\u6613\u65e5\u671f\u65e9\u4e8e...",
        "rule_trigger_date_after_choice": "\u4ea4\u6613\u65e5\u671f\u665a\u4e8e...",
        "rule_trigger_created_at_on_choice": "Transaction was made on..",
        "rule_trigger_updated_at_on_choice": "Transaction was last edited on..",
        "rule_trigger_budget_is_choice": "\u9884\u7b97\u4e3a\u2026",
        "rule_trigger_tag_is_choice": "\u5176\u4e2d\u4e00\u4e2a\u6807\u7b7e\u4e3a...",
        "rule_trigger_currency_is_choice": "\u4ea4\u6613\u8d27\u5e01\u4e3a\u2026",
        "rule_trigger_foreign_currency_is_choice": "\u4ea4\u6613\u5916\u5e01\u4e3a...",
        "rule_trigger_has_attachments_choice": "\u81f3\u5c11\u6709\u8fd9\u4e48\u591a\u9644\u4ef6",
        "rule_trigger_has_no_category_choice": "\u65e0\u5206\u7c7b",
        "rule_trigger_has_any_category_choice": "\u6709\u4e00\u4e2a (\u4efb\u4f55) \u5206\u7c7b",
        "rule_trigger_has_no_budget_choice": "\u6ca1\u6709\u9884\u7b97",
        "rule_trigger_has_any_budget_choice": "\u6709\u4e00\u4e2a (\u4efb\u4f55) \u9884\u7b97",
        "rule_trigger_has_no_bill_choice": "\u672a\u6709\u8d26\u5355",
        "rule_trigger_has_any_bill_choice": "\u6709\u4e00\u4e2a\uff08\u4efb\u4f55\uff09\u8d26\u5355",
        "rule_trigger_has_no_tag_choice": "\u6ca1\u6709\u6807\u7b7e",
        "rule_trigger_has_any_tag_choice": "\u6709\u4e00\u4e2a\u6216\u591a\u4e2a (\u4efb\u4f55) \u6807\u7b7e",
        "rule_trigger_any_notes_choice": "\u6709 (\u4efb\u610f) \u5907\u6ce8",
        "rule_trigger_no_notes_choice": "\u65e0\u5907\u6ce8",
        "rule_trigger_notes_is_choice": "\u5907\u6ce8\u4e3a...",
        "rule_trigger_notes_contains_choice": "\u5907\u6ce8\u5305\u542b...",
        "rule_trigger_notes_starts_choice": "\u5907\u6ce8\u5f00\u5934\u4e3a...",
        "rule_trigger_notes_ends_choice": "\u5907\u6ce8\u7ed3\u5c3e\u4e3a...",
        "rule_trigger_bill_is_choice": "\u8d26\u5355\u662f...",
        "rule_trigger_external_id_is_choice": "\u5916\u90e8ID\u4e3a...",
        "rule_trigger_internal_reference_is_choice": "\u5185\u90e8\u5f15\u7528\u4e3a...",
        "rule_trigger_journal_id_choice": "\u4ea4\u6613\u65e5\u5fd7 ID \u4e3a...",
        "rule_trigger_any_external_url_choice": "Transaction has an (any) external URL",
        "rule_trigger_no_external_url_choice": "\u4ea4\u6613\u6ca1\u6709\u5916\u90e8\u94fe\u63a5",
        "rule_trigger_id_choice": "\u4ea4\u6613ID\u4e3a...",
        "rule_action_delete_transaction_choice": "DELETE transaction(!)",
        "rule_action_set_category_choice": "Set category to ..",
        "rule_action_clear_category_choice": "\u6e05\u7a7a\u4efb\u4f55\u5206\u7c7b",
        "rule_action_set_budget_choice": "Set budget to ..",
        "rule_action_clear_budget_choice": "\u6e05\u7a7a\u4efb\u4f55\u9884\u7b97",
        "rule_action_add_tag_choice": "\u6dfb\u52a0\u6807\u7b7e..",
        "rule_action_remove_tag_choice": "\u79fb\u9664\u6807\u7b7e..",
        "rule_action_remove_all_tags_choice": "\u79fb\u9664\u6240\u6709\u6807\u7b7e",
        "rule_action_set_description_choice": "\u8bbe\u7f6e\u63cf\u8ff0\u4e3a",
        "rule_action_update_piggy_choice": "Add \/ remove transaction amount in piggy bank ..",
        "rule_action_append_description_choice": "Append description with ..",
        "rule_action_prepend_description_choice": "Prepend description with ..",
        "rule_action_set_source_account_choice": "Set source account to ..",
        "rule_action_set_destination_account_choice": "Set destination account to ..",
        "rule_action_append_notes_choice": "Append notes with ..",
        "rule_action_prepend_notes_choice": "Prepend notes with ..",
        "rule_action_clear_notes_choice": "\u79fb\u9664\u6240\u6709\u5907\u6ce8",
        "rule_action_set_notes_choice": "\u8bbe\u7f6e\u5907\u6ce8\u4e3a..",
        "rule_action_link_to_bill_choice": "\u5173\u8054\u81f3\u8d26\u5355\u2026",
        "rule_action_convert_deposit_choice": "\u8f6c\u6362\u4ea4\u6613\u4e3a\u6536\u5165",
        "rule_action_convert_withdrawal_choice": "\u8f6c\u6362\u4ea4\u6613\u4e3a\u652f\u51fa",
        "rule_action_convert_transfer_choice": "\u8f6c\u6362\u4ea4\u6613\u4e3a\u8f6c\u8d26",
        "placeholder": "[Placeholder]",
        "recurrences": "\u5b9a\u671f\u4ea4\u6613",
        "title_expenses": "\u652f\u51fa",
        "title_withdrawal": "\u652f\u51fa",
        "title_revenue": "\u6536\u5165",
        "pref_1D": "1\u5929",
        "pref_1W": "1\u5468",
        "pref_1M": "1\u4e2a\u6708",
        "pref_3M": "3\u4e2a\u6708 (1\u5b63\u5ea6)",
        "pref_6M": "6\u4e2a\u6708",
        "pref_1Y": "1\u5e74",
        "repeat_freq_yearly": "\u6bcf\u5e74",
        "repeat_freq_half-year": "\u6bcf\u534a\u5e74",
        "repeat_freq_quarterly": "\u6bcf\u5b63",
        "repeat_freq_monthly": "\u6bcf\u6708",
        "repeat_freq_weekly": "\u6bcf\u5468",
        "single_split": "\u62c6\u5206",
        "asset_accounts": "\u8d44\u4ea7\u8d26\u6237",
        "expense_accounts": "\u652f\u51fa\u8d26\u6237",
        "liabilities_accounts": "\u503a\u52a1\u8d26\u6237",
        "undefined_accounts": "\u8d26\u6237",
        "name": "\u540d\u79f0",
        "revenue_accounts": "\u6536\u5165\u8d26\u6237",
        "description": "\u63cf\u8ff0",
        "category": "\u5206\u7c7b",
        "title_deposit": "\u6536\u5165",
        "title_transfer": "\u8f6c\u8d26",
        "title_transfers": "\u8f6c\u8d26",
        "piggyBanks": "\u5b58\u94b1\u7f50",
        "rules": "\u89c4\u5219",
        "accounts": "\u8d26\u6237",
        "categories": "\u5206\u7c7b",
        "tags": "\u6807\u7b7e",
        "object_groups_page_title": "\u7ec4",
        "reports": "\u62a5\u8868",
        "webhooks": "Webhooks",
        "currencies": "\u8d27\u5e01",
        "administration": "\u7ba1\u7406",
        "profile": "\u4e2a\u4eba\u6863\u6848",
        "source_account": "\u6765\u6e90\u8d26\u6237",
        "destination_account": "\u76ee\u6807\u8d26\u6237",
        "amount": "\u91d1\u989d",
        "date": "\u65e5\u671f",
        "time": "\u65f6\u95f4",
        "preferences": "\u504f\u597d\u8bbe\u5b9a",
        "transactions": "\u4ea4\u6613",
        "balance": "\u4f59\u989d",
        "budgets": "\u9884\u7b97",
        "subscriptions": "Subscriptions",
        "welcome_back": "\u4eca\u5929\u7406\u8d22\u4e86\u5417\uff1f",
        "bills_to_pay": "\u5f85\u4ed8\u8d26\u5355",
        "net_worth": "\u51c0\u8d44\u4ea7",
        "pref_last365": "\u6700\u8fd1\u4e00\u5e74",
        "pref_last90": "\u6700\u8fd190\u5929",
        "pref_last30": "\u6700\u8fd1 30 \u5929",
        "pref_last7": "\u6700\u8fd17\u5929",
        "pref_YTD": "\u4eca\u5e74\u81f3\u4eca",
        "pref_QTD": "\u672c\u5b63\u5ea6\u81f3\u4eca",
        "pref_MTD": "\u672c\u6708\u81f3\u4eca"
    }
}
