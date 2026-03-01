import { homePage } from "./02-welcomepage"
import { locators } from "../utility/locators"
import { faker } from "@faker-js/faker"
import {expect} from "@playwright/test"


export class account extends homePage {

    Email = faker.internet.email()
    acc_name = faker.finance.accountName()

    async createAccount() {
        await this.click(locators.Account.createAcc)
        await this.fill(locators.Account.AccountName,this.acc_name)
        await this.dropdownbyvalue(locators.Account.Industry, locators.Account.Industry_val )
        await this.dropdownbyvalue(locators.Account.Currency, locators.Account.Currency_val )
        await this.fill(locators.Account.Email,this.Email)
        await this.click(locators.Account.Createbutton)
        await this.page_wait(3000)
    }

    async createdAccount() {
        const createACName = await this.lpage.locator(locators.Account.CreatedAccName).innerText()
        console.log(`📒 - Created New Account is ${createACName}`);        
        return createACName
    }

    async verify_createdAccount(){
        const Created_Acc_name = this.createdAccount()
        expect.soft(Created_Acc_name).toContain(this.acc_name)
        await this.page_wait(3000)
    }

    async accounts_tab() {
        await this.lpage.getByRole('link', {name: 'Accounts'}).click()
    }

    async find_accounts(){
        await this.lpage.getByRole('link', {name: 'Find Accounts'}).click()
        await this.lpage.getByRole('textbox', {name: 'Account Name'}).fill(this.acc_name)
        await this.lpage.getByRole('button', {name: 'Find Accounts'}).click()
        await this.page_wait(4000)
        return (await this.lpage.locator(locators.Account.find_AccName).innerText())
         
    }


}