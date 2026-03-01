import { LoginPage } from "../pages/01-loginpage"
import { homePage } from "../pages/02-welcomepage"
import { account } from "../pages/03-accountpage"

import {test as BT} from "@playwright/test"

type myFixture = {
    loginfix : LoginPage,
    homefix : homePage,
    accfix : account
}

export const pltest = BT.extend<myFixture>({
    
    loginfix: async({page}, use ) => {
        const lfix = new LoginPage(page)
        await use(lfix)
    },

    homefix: async({page}, use ) => {
        const hfix = new homePage(page)
        await use(hfix)
    },

    accfix: async({page}, use ) => {
        const acfix = new account(page)
        await use(acfix)
    }
})