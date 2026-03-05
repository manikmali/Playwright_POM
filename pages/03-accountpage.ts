import { homePage } from "./02-welcomepage"
import { locators } from "../utility/locators"
import { faker } from "@faker-js/faker"
import {expect} from "@playwright/test"
import { time } from "node:console"


export class account extends homePage {

    Email = faker.internet.email()
    noun = faker.hacker.noun()
    acc_name = faker.finance.accountName().concat(this.noun)

    async createAccount() {
        await this.click(locators.Account.createAcc)
        await this.clearAndFill(locators.Account.AccountName,this.acc_name)
        await this.dropdownbyvalue(locators.Account.Industry, locators.Account.Industry_val )
        await this.dropdownbyvalue(locators.Account.Currency, locators.Account.Currency_val )
        await this.clearAndFill(locators.Account.Email,this.Email)
        await this.click(locators.Account.Createbutton)
        console.log(`\nAccount Create button has been clicked`);        
        await this.page_wait(3000)
        console.log(`\n📒 - Created New Account is ${this.acc_name}`); 
    }

    // async createdAccount() {
    //     const createACName = await this.getInnerText(locators.Account.CreatedAccName)
    //     console.log(`\n📒 - Created New Account is ${createACName}`);        
    //     return createACName
    // }

    async verify_createdAccount(){
        const Created_Acc_name = await this.getInnerText(locators.Account.CreatedAccName)
        if (expect.soft(Created_Acc_name.match(this.acc_name)) ) {
        console.log(`\n📒 - Verified the Newly created Account`);     
        }
        await this.page_wait(3000)
    }

    async accounts_menu() {
        await this.clickbyRole('link',locators.Account.accountsMenu.name)
        await this.page_wait(3000)

    }

    async find_accounts(ac_name ?: string){
        const title = await this.getTitle()
        console.log(`Actual title is ${title}`);

        if (ac_name == undefined) {
            ac_name = this.acc_name
        }
        
        if (title == 'Account Details | opentaps CRM') {
            this.accounts_menu()
        }     
        else if (await this.textContains(locators.PageHeading, 'Welcome')) {
            await this.click(locators.crmLink)   //Click the CRM link in home page  
            console.log(`\nCRM link has been clicked from home page`);
            await this.page_wait(3000)
            this.accounts_menu()
        } 
        await this.clickbyRole('link', locators.Account.findaccounts.name )

        // Enter the account Name to search the account

        /**fillbyRole(role -- Accessible role, data --Accessible option, value -- Value to be filled, 
         * index -- index value to mention if it has more elements )**/
        await this.fillbyRole('textbox', locators.Account.accountname.name, ac_name,1 )
        console.log('\nAccount names were entered to search...');    


        await this.clickbyRole('button', locators.Account.findaccbtn.name)
        console.log('\nFind accounts button were clicked');    
        await this.page_wait(3000)

        const acc_name_text =  await this.getInnerText(locators.Account.find_AccName)
        console.log(`\nViewed account 📒 is ${acc_name_text}`);
        expect.soft(acc_name_text).toBe(ac_name)
        await this.page_wait(3000)

         
    }


}