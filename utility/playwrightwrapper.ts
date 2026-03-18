import { Page } from "@playwright/test"

export abstract class PWWrapper{

        lpage : Page // lppage ==> globally declared as well as assigned with "page" reference through Lpage local variable  used under constructor method and at
//First step inside a class should be assigning the reference to the page variable

constructor(Lpage:Page){ // constructor method is invoked first
      this.lpage=Lpage // Lpage is a local varible to capture the page reference passed as an argument through the parameterized constructor 
//Lpage === page (through argument passing)// lppage(global variable) == Lpage asssigned with the value of local variable
//page(constructor argument) --> Lpage(local) --> lppage(global)
}

    /** Method to load application URL */
    async load_app(url: string) {
        await this.lpage.goto(url)
    }

    /** */
    async getTitle() : Promise<string> {
        const title = await this.lpage.title()
        return title
    }

    /**To Set storage state post successful login*/
    async storeState(Path: string ) {
        await this.lpage.context().storageState({path: Path})
    }

    /** Method to wait for pageload explicitly for mentioned time */
    async page_wait(time: number) { 
        await this.lpage.waitForTimeout(time)        
    }

    /** Method to clear and fill the values in located element */
    async clearAndFill(selector:string, data:string){
       await this.lpage.locator(selector).clear() // "#username"
       await this.lpage.locator(selector).fill(data)       
    }
  
    /** Method to click the element */
    async click(selector: string) {
        (await this.lpage.waitForSelector(selector)).isVisible()
        await this.lpage.locator(selector).click()
    }

    /** Method to select the option from dropdown element */
    async dropdownbyvalue(selector: string, data: string) {
        (await this.lpage.waitForSelector(selector)).isVisible()
        await this.lpage.selectOption(selector, {value: data})
    }

   /** Method to get the accessibility role by link element and perform click action*/
    async clickbyRole(role: any, data: string) {
        await this.lpage.getByRole(role, {name:data, exact: true}).click()
    }

    /** Method to get the accessibility role by textbox element and fill value
     * * Interacts with a web element based on the given attribute and action.    * 
    * @param {string} role - The type of roles to use ("button", "link").
    * @param {string} data - The data for Name attribute as {name: data}.
    * @param {string} value - The value to be filled in the field.
    * @param {string} [index] - The index to be provided if matches with more elements" (optional).
    * @throws {Error} Throws an error if an unsupported attribute or action is used.
    */    
    async fillbyRole(
        role: any,
        data: string,
        value: string,
        index?: any) {
        if (index === undefined) { 
        await this.lpage.getByRole(role,{name: data}).nth(0).fill(value)
        }
        else {
            await this.lpage.getByRole(role,{name: data}).nth(index).fill(value)
        }
    }

    // async getbyRole(role: any, data : string){
    //     await this.lpage.getByRole(role, {name: data} ).innerText()
    // }


    /** Method to get the inner text value from the element and return*/
    async getInnerText(selector: string, element_name: string) : Promise<string>{
        try {   
        await this.lpage.waitForSelector(selector, { state: 'visible', timeout: 3000 })
        return await this.lpage.locator(selector).innerText()
        } catch (error) { 
            console.log(`Locator (or) value of the ${element_name} is not found`)
            console.log(error)
            return '-- Not Found --'
        }
    }

    async textContains(selector:string, value: string) : Promise<boolean> {
        await this.lpage.waitForSelector(selector,{ state: 'visible', timeout: 3000 })
        const text = await this.getInnerText(selector, value)
        if (text.includes(value)) {
            return true
        }
        else { return false }
    }


}