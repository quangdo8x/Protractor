import { browser, element, by } from "protractor";

export class CommonFunctions{

    async getAlertContent(){
        let content = browser.switchTo().alert().getText();
        await browser.switchTo().alert().accept();
        return content;
    }

    async selectOption(Option:string){
        await element(by.cssContainingText('option', Option)).click();
    }
}