import { PWWrapper } from "../utility/playwrightwrapper"
import { locators } from "../utility/locators"

/* Actionables
1. Load URL
2. Enter Credentisl
3. Click submit to login
 */

export class LoginPage extends PWWrapper{

async login_app(url: string, uname: string, pwd: string){
    await this.load_app(url)
    await this.fill(locators.login.unamefield, uname)
    await this.fill(locators.login.pwdfield, pwd)
}

async loginsubmit() {
    await this.click(locators.login.submitbtn)
    await this.page_wait(3000)
}


}