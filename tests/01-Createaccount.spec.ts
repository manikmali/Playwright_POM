import {expect} from "@playwright/test"
import { pltest } from "../utility/customfixtures"
// import {locators} from "../utility/locators"
import dotenv from 'dotenv'

// let filename= process.env.envfile || "qa"
// dotenv.config({path: `${filename}\qa.env`})

dotenv.config({path: `Data/qa.env`})    //Before set $env:envfile = 'qa' in terminal

pltest(`Login to TestLeaf and Create Account`, async ({loginfix,homefix,accfix }) => {
    //Load LeafTaps URL
    await loginfix.login_app(process.env.lturl as string, process.env.uname as string, process.env.password as string )
    await loginfix.loginsubmit() 
    await homefix.clickCRM()
    await accfix.createAccount()
    await accfix.verify_createdAccount()
    // const Created_Acc_name = await accfix.createdAccount()
    // expect.soft(Created_Acc_name).toContain(accfix.acc_name)
    // await accfix.wait(3000)

    const acc_name_text = await accfix.find_accounts()
    console.log(`Viewed account 📒 is ${acc_name_text}`);
    
    expect.soft(acc_name_text).toBe(accfix.acc_name)
    // await (3000)

})

