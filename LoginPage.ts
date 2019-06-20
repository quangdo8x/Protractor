import { element, by, browser, ProtractorBrowser } from "protractor";

export class LoginPage{

    btnCustomerLogin:string
    btnLogin:string

    constructor(browser:ProtractorBrowser){
        this.btnCustomerLogin = '//button[text()="Customer Login"]';
        this.btnLogin = '//button[text()="Login"]';
    }

    async login(name:string){
        await browser.element(by.xpath(this.btnCustomerLogin)).click();
        await browser.element(by.cssContainingText('option', name)).click();
        await browser.element(by.xpath(this.btnLogin)).click();
    }
}