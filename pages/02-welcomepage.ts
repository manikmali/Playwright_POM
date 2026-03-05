import { locators } from "../utility/locators";
import { LoginPage } from "./01-loginpage";



export class homePage extends LoginPage {

async clickCRM() {
    console.log('Entered to home page to click CRM');    
    
    //If page heading is related to Welcome page then proceed to landing page or else skip the action
    const result = await this.textContains(locators.PageHeading, 'Welcome')    
    if (result) {
    await this.click(locators.crmLink)   //Click the CRM link in home page  
    console.log(`\nCRM link has been clicked from home page`);
    await this.page_wait(3000)
    } else { console.log('\n Current page is not in the Home Page');
    }
}

}