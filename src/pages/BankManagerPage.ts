import { element, by} from "protractor";
import { CommonFunctions } from "../supports/CommonFunctions";

export class BankManagerPage{

    btnRedirectToAddCustomer = element(by.xpath('//button[starts-with(text(),"Add Customer")]'));
    txtFirstName = element(by.model('fName'));
    txtLastName = element(by.model('lName'));
    txtPostCode = element(by.model('postCd'));
    btnAddCustomer = element(by.xpath('//button[text()="Add Customer"]'));
    btnOpenAccount = element(by.xpath('//button[starts-with(text(),"Open Account")]'));
    btnProcess = element(by.xpath('//button[text()="Process"]'));
    btnCustomers = element(by.xpath('//button[starts-with(text(),"Customer")]'));
    txtSearchCustomer = element(by.model('searchCustomer'));
    btnDelete = element(by.xpath('//button[text()="Delete"]'));

    async addCustomer(FirstName:string, LastName:string, PostCode:string){
        await this.btnRedirectToAddCustomer.click();
        await this.txtFirstName.sendKeys(FirstName);
        await this.txtLastName.sendKeys(LastName);
        await this.txtPostCode.sendKeys(PostCode);
        await this.btnAddCustomer.click();
    }

    async openCustomerAccount(CustomerName:string, Currency:string){

        let action = new CommonFunctions();

        await this.btnOpenAccount.click();
        action.selectOption(CustomerName);
        action.selectOption(Currency);
        await this.btnProcess.click();
    }

    async deleteCustomer(CustomerName:string){
        await this.btnCustomers.click();
        await this.txtSearchCustomer.sendKeys(CustomerName);
        await this.btnDelete.click();
    }
}