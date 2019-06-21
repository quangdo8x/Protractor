import { element, by} from "protractor";
import { CommonFunctions } from "../supports/CommonFunctions";

export class LoginPage{

    txtUserName = element(by.model("Auth.user.name"));
    txtPassWord = element(by.model("Auth.user.password"));
    txtDescription = element(by.model('model[options.key]'));
    btnLogin = element(by.className('btn btn-danger'));
    lblMessage = element(by.xpath('//p[text()="You\'re logged in!!"]'));
    btnLogout = element(by.xpath('//a[@href="#/login"]'));
    btnCustomerLogin = element(by.xpath('//button[text()="Customer Login"]'));
    btnBankManagerLogin = element(by.xpath('//button[text()="Bank Manager Login"]'));
    btnLoginWithCustomer = element(by.xpath('//button[text()="Login"]'));

    async logIn(UserName:string, PassWord:string){
        
        await this.txtUserName.sendKeys(UserName);
        await this.txtPassWord.sendKeys(PassWord);
        await this.txtDescription.sendKeys("This is description.");
        await this.btnLogin.click();
    }

    async selectCustomer(name:string){

        let action = new CommonFunctions();

        await this.btnCustomerLogin.click();
        await action.selectOption(name);
        await this.btnLoginWithCustomer.click();
    }
}