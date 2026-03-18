import {expect} from "@playwright/test"
import { pltest } from "../utility/customfixtures"
// import {locators} from "../utility/locators"
import dotenv from 'dotenv'

// let filename= process.env.envfile || "qa"
// dotenv.config({path: `${filename}\qa.env`})

dotenv.config({path: `Data/qa.env`})    //Before set $env:envfile = 'qa' in terminal

pltest.use({ storageState: "./Data/login_data.json" })

pltest(`Login to TestLeaf and Create Account`, async ({loginfix,homefix,accfix }) => {
    //Load LeafTaps URL
    console.log(`\n ###### Test - Login to TestLeaf and Create Account`)

    await loginfix.login_app(process.env.lturl as string, process.env.uname as string, process.env.password as string )
    // await loginfix.loginsubmit() 
    await homefix.clickCRM()
    await accfix.createAccount()
    await accfix.verify_createdAccount() 
    await accfix.find_accounts()

    console.log(`\n ###########################################`)

})

pltest(`Verify the user able to find the existing account`, async ({loginfix, accfix }) => {
    console.log(`\n ###### Test - Verify the user able to find the existing account`)
    await loginfix.load_app(process.env.lturl as string)
    await accfix.find_accounts('Investment Accountpixel')
    // await accfix.find_accounts('Tester2')
    console.log(`\n ###########################################`)
 
})

