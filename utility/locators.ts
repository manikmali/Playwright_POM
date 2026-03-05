export const locators = {
   
    PageHeading: `//h2`,
    // loginTitle: 'Leaftaps - TestLeaf Automation Platform',
    unamefield: "#username",
    pwdfield: "#password",
    submitbtn: ".decorativeSubmit",
    logout: `.//input[@class= 'decorativeSubmit'][@value="Logout"]`,
    crmLink: `//a[contains(text(),"CRM")]`,

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
        AccName: `(//input[@name="accountName"])[2]`,
        find_AccName : `(//table/tbody/tr/td[3]/div/a)[1]`,
        accountsMenu: {role : 'link', name : 'Accounts'},
        findaccounts: {role : 'link', name : 'Find Accounts'},
        accountname: {role : 'textbox', name : 'Account Name'},
        findaccbtn: {role : 'button', name : 'Find Accounts'}   
        }
     }