import { Page } from "@playwright/test"

export abstract class PWWrapper{

        lpage : Page // lppage ==> globally declared as well as assigned with "page" reference through Lpage local variable  used under constructor method and at
//First step inside a class should be assigning the reference to the page variable

constructor(Lpage:Page){ // constructor method is invoked first
      this.lpage=Lpage // Lpage is a local varible to capture the page reference passed as an argument through the parameterized constructor 
//Lpage === page (through argument passing)// lppage(global variable) == Lpage asssigned with the value of local variable
//page(constructor argument) --> Lpage(local) --> lppage(global)
}
    async load_app(url: string) {
        await this.lpage.goto(url)
    }
    
    async fill(selector: string, value : string) {
        await this.lpage.locator(selector).fill(value)
    }
    
    async page_wait(time: number) { 
        const waittime = await this.lpage.waitForTimeout(time)
        return waittime
    }

    async clearAndFill(selector:string, data:string){
       await this.lpage.locator(selector).clear() // "#username"
       await this.lpage.locator(selector).fill(data)       
    }
  
    async click(selector: string) {
        await this.lpage.locator(selector).click()
    }

    async dropdownbyvalue(selector: string, data: string) {
        await this.lpage.selectOption(selector, {value: data})
    }

}