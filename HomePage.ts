import { ProtractorBrowser, browser, by } from "protractor";

export class HomePage{
    
    btnRedirectDeposit:string
    btnWithdrawl:string
    txtAmount:string
    btnDeposit:string
    btnWithdraw:string
    lblMessage:string


    constructor(browser:ProtractorBrowser){
        this.btnRedirectDeposit = '//button[starts-with(text(),"Deposit")]';
        this.btnWithdrawl = '//button[starts-with(text(),"Withdrawl")]';
        this.txtAmount = 'amount';
        this.btnDeposit = '//button[text()="Deposit"]';
        this.btnWithdraw = '//button[text()="Withdraw"]';
        this.lblMessage = '//span[@ng-show="message"]';
    }

    async depositCurrency(amount:string){
        await browser.element(by.xpath(this.btnRedirectDeposit)).click();
        await browser.element(by.xpath(this.txtAmount)).sendKeys(amount);
        await browser.element(by.xpath(this.btnDeposit)).click();
    }

    async withdrawCurrency(amount:string){
        await browser.element(by.xpath(this.btnWithdrawl)).click();
        await browser.element(by.xpath(this.txtAmount)).sendKeys(amount);
        await browser.element(by.xpath(this.btnWithdraw)).click();
    }
}