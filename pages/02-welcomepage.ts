import { locators } from "../utility/locators";
import { LoginPage } from "./01-loginpage";

export class homePage extends LoginPage {

async clickCRM() {
    await this.click(locators.login.crmLink)
    await this.page_wait(3000)
}



}