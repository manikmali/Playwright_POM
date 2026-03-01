export const locators = {
    login: {

        unamefield: "#username",
        pwdfield: "#password",
        submitbtn: ".decorativeSubmit",
        logout: `.//input[@class= 'decorativeSubmit'][@value="Logout"]`,
        crmLink: `//a[contains(text(),"CRM")]`
    },

    Account: {
        createAcc: `//a[text()='Create Account']`,
        AccountName: `input#accountName`,
        Industry : `.inputBox[name="industryEnumId"]`,
        Industry_val : `IND_SOFTWARE`,
        Currency : "#currencyUomId",
        Currency_val : `INR`,
        Email : `#primaryEmail`,
        Createbutton : `input[value="Create Account"]`,
        CreatedAccName : `(//table/tbody/tr/td[2]/span[@class='tabletext'])[1]`,
        find_AccName : `//table/tbody/tr/td[3]/div/a`
     }
}