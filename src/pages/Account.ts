import { by, element } from "protractor";

export class HomePage{
    
    btnRedirectDeposit = element(by.xpath('//button[starts-with(text(),"Deposit")]'));
    btnWithdrawl = element(by.xpath('//button[starts-with(text(),"Withdrawl")]'));
    txtAmount = element(by.model('amount'));
    btnDeposit = element(by.xpath('//button[text()="Deposit"]'));
    btnWithdraw = element(by.xpath('//button[text()="Withdraw"]'));
    lblMessage = element(by.xpath('//span[@ng-show="message"]'));

    async depositCurrency(amount:string){
        await this.btnRedirectDeposit.click();
        await this.txtAmount.sendKeys(amount);
        await this.btnDeposit.click();
    }

    async withdrawCurrency(amount:string){
        await this.btnWithdrawl.click();
        await this.txtAmount.sendKeys(amount);
        await this.btnWithdraw.click();
    }
}