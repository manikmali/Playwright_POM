import { PWWrapper } from "../utility/playwrightwrapper"
import { locators } from "../utility/locators"

/* Actionables
1. Load URL
2. Enter Credentisl
3. Click submit to login
 */

export class LoginPage extends PWWrapper{

async login_app(url: string, uname: string, pwd: string){
    //Launch the app URL in browser
    await this.load_app(url)

   //If page heading is related to login page then proceed login action or else skip the login action
    const result = await this.textContains(locators.PageHeading, 'Login')
    if (result) {
    await this.clearAndFill(locators.unamefield, uname)
    await this.clearAndFill(locators.pwdfield, pwd)
    await this.click(locators.submitbtn)
    console.log(`\nLogged in submitted with credentials`);    
    await this.page_wait(3000)
    await this.storeState(`./Data/login_data.json`)
    }
    else { console.log('Login page has been skipped and session to be continued....');
    }
}

async loginapp() {
    await this.load_app(`http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL768264409239`)
}

// async loginsubmit() {
//     //If page heading is related to login page then proceed login action or else skip the login action
//     const result = await this.textContains(locators.login.PageHeading, 'Login')
//     if (result)  {
//     await this.click(locators.login.submitbtn)
//     console.log(`\nLogged in submitted with credentials`);    
//     await this.page_wait(3000)
//     await this.storageState()
//     }
//     else { console.log(`\n ########## Already logged in, and session to be continued....  ##########`); }
    
// }


}