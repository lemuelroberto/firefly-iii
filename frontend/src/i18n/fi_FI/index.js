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
        "html_language": "fi",
        "month_and_day_fns": "MMMM d, y"
    },
    "form": {
        "name": "Nimi",
        "amount_min": "V\u00e4himm\u00e4issumma",
        "amount_max": "Enimm\u00e4issumma",
        "url": "URL-osoite",
        "title": "Otsikko",
        "first_date": "Aloitusp\u00e4iv\u00e4",
        "repetitions": "Toistot",
        "description": "Kuvaus",
        "iban": "IBAN",
        "skip": "Ohita",
        "date": "P\u00e4iv\u00e4m\u00e4\u00e4r\u00e4"
    },
    "list": {
        "name": "Nimi",
        "account_number": "Tilinumero",
        "currentBalance": "T\u00e4m\u00e4nhetkinen saldo",
        "lastActivity": "Viimeisin tapahtuma",
        "active": "Aktiivinen?"
    },
    "breadcrumbs": {
        "placeholder": "[Placeholder]",
        "budgets": "Budjetit",
        "subscriptions": "Tilaukset",
        "transactions": "Tapahtumat",
        "title_expenses": "Kustannukset",
        "title_withdrawal": "Kustannukset",
        "title_revenue": "Tuotto \/ ansio",
        "title_deposit": "Tuotto \/ ansio",
        "title_transfer": "Tilisiirrot",
        "title_transfers": "Tilisiirrot",
        "asset_accounts": "K\u00e4ytt\u00f6tilit",
        "expense_accounts": "Kulutustilit",
        "revenue_accounts": "Tuottotilit",
        "liabilities_accounts": "Lainat"
    },
    "firefly": {
        "administration_index": "Financial administration",
        "actions": "Toiminnot",
        "edit": "Muokkaa",
        "delete": "Poista",
        "reconcile": "T\u00e4sm\u00e4yt\u00e4",
        "create_new_asset": "Luo uusi omaisuustili",
        "confirm_action": "Vahvista toiminto",
        "new_budget": "Uusi budjetti",
        "new_asset_account": "Uusi omaisuustili",
        "newTransfer": "Uusi siirto",
        "submission_options": "Submission options",
        "apply_rules_checkbox": "Apply rules",
        "fire_webhooks_checkbox": "Fire webhooks",
        "newDeposit": "Uusi talletus",
        "newWithdrawal": "Uusi kustannus",
        "bills_paid": "Maksetut laskut",
        "left_to_spend": "K\u00e4ytett\u00e4viss\u00e4",
        "no_budget": "(ei budjettia)",
        "budgeted": "Budjetoitu",
        "spent": "K\u00e4ytetty",
        "no_bill": "(ei laskua)",
        "rule_trigger_source_account_starts_choice": "L\u00e4hdetilin nimi alkaa ...",
        "rule_trigger_source_account_ends_choice": "L\u00e4hdetilin nimi p\u00e4\u00e4ttyy..",
        "rule_trigger_source_account_is_choice": "L\u00e4hdetilin nimi on..",
        "rule_trigger_source_account_contains_choice": "L\u00e4hdetilin nimi sis\u00e4lt\u00e4\u00e4..",
        "rule_trigger_account_id_choice": "Either account ID is exactly..",
        "rule_trigger_source_account_id_choice": "L\u00e4hdetili ID on tarkalleen..",
        "rule_trigger_destination_account_id_choice": "Kohdetilin ID on tarkalleen..",
        "rule_trigger_account_is_cash_choice": "Either account is cash",
        "rule_trigger_source_is_cash_choice": "L\u00e4hdetili on (k\u00e4teis) tili",
        "rule_trigger_destination_is_cash_choice": "Kohdetili on (k\u00e4teis) tili",
        "rule_trigger_source_account_nr_starts_choice": "L\u00e4hdetilin numero \/ IBAN alkaa..",
        "rule_trigger_source_account_nr_ends_choice": "L\u00e4hdetilin numero \/ IBAN p\u00e4\u00e4ttyy..",
        "rule_trigger_source_account_nr_is_choice": "L\u00e4hdetilin numero \/ IBAN on..",
        "rule_trigger_source_account_nr_contains_choice": "L\u00e4hdetilin numero \/ IBAN sis\u00e4lt\u00e4\u00e4..",
        "rule_trigger_destination_account_starts_choice": "Kohdetilin nimi alkaa..",
        "rule_trigger_destination_account_ends_choice": "Kohdetilin nimi p\u00e4\u00e4ttyy..",
        "rule_trigger_destination_account_is_choice": "Kohdetilin nimi on..",
        "rule_trigger_destination_account_contains_choice": "Kohdetilin nimi sis\u00e4lt\u00e4\u00e4..",
        "rule_trigger_destination_account_nr_starts_choice": "Kohdetilin numero \/ IBAN alkaa..",
        "rule_trigger_destination_account_nr_ends_choice": "Kohdetilin numero \/ IBAN p\u00e4\u00e4ttyy..",
        "rule_trigger_destination_account_nr_is_choice": "Kohdetilin numero \/ IBAN on..",
        "rule_trigger_destination_account_nr_contains_choice": "Kohdetilin numero \/ IBAN sis\u00e4lt\u00e4\u00e4..",
        "rule_trigger_transaction_type_choice": "Tapahtuman tyyppi on ...",
        "rule_trigger_category_is_choice": "Kategoria on ...",
        "rule_trigger_amount_less_choice": "Amount is less than or equal to ..",
        "rule_trigger_amount_is_choice": "Summa on..",
        "rule_trigger_amount_more_choice": "Amount is more than or equal to..",
        "rule_trigger_description_starts_choice": "Kuvaus alkaa tekstill\u00e4 ...",
        "rule_trigger_description_ends_choice": "Kuvaus p\u00e4\u00e4ttyy tekstiin ...",
        "rule_trigger_description_contains_choice": "Kuvaus sis\u00e4lt\u00e4\u00e4 ...",
        "rule_trigger_description_is_choice": "Kuvaus on ...",
        "rule_trigger_date_on_choice": "Tapahtumap\u00e4iv\u00e4 on..",
        "rule_trigger_date_before_choice": "Tapahtumap\u00e4iv\u00e4 on ennen..",
        "rule_trigger_date_after_choice": "Tapahtumap\u00e4iv\u00e4 on j\u00e4lkeen..",
        "rule_trigger_created_at_on_choice": "Transaction was made on..",
        "rule_trigger_updated_at_on_choice": "Transaction was last edited on..",
        "rule_trigger_budget_is_choice": "Budjetti on ...",
        "rule_trigger_tag_is_choice": "Any tag is..",
        "rule_trigger_currency_is_choice": "Tapahtuman valuutta on ...",
        "rule_trigger_foreign_currency_is_choice": "Tapahtuman valuutta on..",
        "rule_trigger_has_attachments_choice": "Tapahtumalla on v\u00e4hint\u00e4\u00e4n n\u00e4in monta liitett\u00e4",
        "rule_trigger_has_no_category_choice": "Ei kategoriaa",
        "rule_trigger_has_any_category_choice": "Mik\u00e4 tahansa kategoria",
        "rule_trigger_has_no_budget_choice": "Ei budjettia",
        "rule_trigger_has_any_budget_choice": "On budjetti (mik\u00e4 tahansa)",
        "rule_trigger_has_no_bill_choice": "Ei laskua",
        "rule_trigger_has_any_bill_choice": "On lasku (mik\u00e4 tahansa)",
        "rule_trigger_has_no_tag_choice": "Ei t\u00e4gej\u00e4",
        "rule_trigger_has_any_tag_choice": "On t\u00e4gi\/t\u00e4gej\u00e4 (mit\u00e4 tahansa)",
        "rule_trigger_any_notes_choice": "On muistiinpano (mit\u00e4 tahansa)",
        "rule_trigger_no_notes_choice": "Ei muistiinpanoja",
        "rule_trigger_notes_is_choice": "Notes are..",
        "rule_trigger_notes_contains_choice": "Notes contain..",
        "rule_trigger_notes_starts_choice": "Notes start with..",
        "rule_trigger_notes_ends_choice": "Notes end with..",
        "rule_trigger_bill_is_choice": "Lasku on..",
        "rule_trigger_external_id_is_choice": "External ID is..",
        "rule_trigger_internal_reference_is_choice": "Internal reference is..",
        "rule_trigger_journal_id_choice": "Tapahtumatietueen tunnus on..",
        "rule_trigger_any_external_url_choice": "Transaction has an (any) external URL",
        "rule_trigger_no_external_url_choice": "Tapahtumalla ei ole ulkoista URL-osoitetta",
        "rule_trigger_id_choice": "Tapahtuman tunnus on..",
        "rule_action_delete_transaction_choice": "DELETE transaction(!)",
        "rule_action_set_category_choice": "Set category to ..",
        "rule_action_clear_category_choice": "Tyhjenn\u00e4 kategoria",
        "rule_action_set_budget_choice": "Set budget to ..",
        "rule_action_clear_budget_choice": "Tyhjenn\u00e4 budjetti",
        "rule_action_add_tag_choice": "Add tag ..",
        "rule_action_remove_tag_choice": "Remove tag ..",
        "rule_action_remove_all_tags_choice": "Poista kaikki t\u00e4git",
        "rule_action_set_description_choice": "Set description to ..",
        "rule_action_update_piggy_choice": "Add \/ remove transaction amount in piggy bank ..",
        "rule_action_append_description_choice": "Append description with ..",
        "rule_action_prepend_description_choice": "Prepend description with ..",
        "rule_action_set_source_account_choice": "Set source account to ..",
        "rule_action_set_destination_account_choice": "Set destination account to ..",
        "rule_action_append_notes_choice": "Append notes with ..",
        "rule_action_prepend_notes_choice": "Prepend notes with ..",
        "rule_action_clear_notes_choice": "Poista kaikki muistiinpanot",
        "rule_action_set_notes_choice": "Set notes to ..",
        "rule_action_link_to_bill_choice": "Link to a bill ..",
        "rule_action_convert_deposit_choice": "Muuta tapahtuma talletukseksi",
        "rule_action_convert_withdrawal_choice": "Muuta tapahtuma nostoksi",
        "rule_action_convert_transfer_choice": "Muuta tapahtuma siirroksi",
        "placeholder": "[Placeholder]",
        "recurrences": "Toistuvat tapahtumat",
        "title_expenses": "Kustannukset",
        "title_withdrawal": "Kustannukset",
        "title_revenue": "Tuotto \/ ansio",
        "pref_1D": "Yksi p\u00e4iv\u00e4",
        "pref_1W": "Yksi viikko",
        "pref_1M": "Yksi kuukausi",
        "pref_3M": "Kolme kuukautta (vuosinelj\u00e4nnes)",
        "pref_6M": "Kuusi kuukautta",
        "pref_1Y": "Yksi vuosi",
        "repeat_freq_yearly": "vuosittain",
        "repeat_freq_half-year": "puoli-vuosittain",
        "repeat_freq_quarterly": "nelj\u00e4nnesvuosittain",
        "repeat_freq_monthly": "kuukausittain",
        "repeat_freq_weekly": "viikoittain",
        "single_split": "Jako",
        "asset_accounts": "K\u00e4ytt\u00f6tilit",
        "expense_accounts": "Kulutustilit",
        "liabilities_accounts": "Lainat",
        "undefined_accounts": "Tilit",
        "name": "Nimi",
        "revenue_accounts": "Tuottotilit",
        "description": "Kuvaus",
        "category": "Kategoria",
        "title_deposit": "Tuotto \/ ansio",
        "title_transfer": "Tilisiirrot",
        "title_transfers": "Tilisiirrot",
        "piggyBanks": "S\u00e4\u00e4st\u00f6possut",
        "rules": "S\u00e4\u00e4nn\u00f6t",
        "accounts": "Tilit",
        "categories": "Kategoriat",
        "tags": "T\u00e4git",
        "object_groups_page_title": "Ryhm\u00e4t",
        "reports": "Raportit",
        "webhooks": "Webhookit",
        "currencies": "Valuutat",
        "administration": "Yll\u00e4pito",
        "profile": "Profiili",
        "source_account": "L\u00e4hdetili",
        "destination_account": "Kohdetili",
        "amount": "Summa",
        "date": "P\u00e4iv\u00e4m\u00e4\u00e4r\u00e4",
        "time": "Aika",
        "preferences": "Asetukset",
        "transactions": "Tapahtumat",
        "balance": "Saldo",
        "budgets": "Budjetit",
        "subscriptions": "Tilaukset",
        "welcome_back": "Mit\u00e4 kuuluu?",
        "bills_to_pay": "Laskuja maksettavana",
        "net_worth": "Varallisuus",
        "pref_last365": "Edellinen vuosi",
        "pref_last90": "Viimeiset 90 p\u00e4iv\u00e4\u00e4",
        "pref_last30": "Viimeiset 30 p\u00e4iv\u00e4\u00e4",
        "pref_last7": "Viimeiset 7 p\u00e4iv\u00e4\u00e4",
        "pref_YTD": "Vuoden alusta",
        "pref_QTD": "Nelj\u00e4nnesvuoden alusta",
        "pref_MTD": "Kuukauden alusta"
    }
}
