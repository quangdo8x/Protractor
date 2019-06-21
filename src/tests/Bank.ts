import { browser, by, element } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { BankManagerPage } from "../pages/BankManagerPage";
import { CommonFunctions } from "../supports/CommonFunctions";

describe('Bank', function(){

  let loginPage:LoginPage
  let bankManagerPage:BankManagerPage
  let action:CommonFunctions

  beforeEach(function(){
    loginPage = new LoginPage();
    bankManagerPage = new BankManagerPage();
    action = new CommonFunctions();
  })

  it('should login successfully', async function(){

    await browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    await browser.manage().window().maximize();

    await loginPage.logIn('angular', 'password');
    await expect(loginPage.lblMessage.isDisplayed()).toBe(true);
  })

  it('should add customer successfully', async function(){

    await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    await browser.manage().window().maximize();

    await loginPage.btnBankManagerLogin.click();
    await bankManagerPage.addCustomer('John', 'Kenedy', '123456');
    await expect(action.getAlertContent()).toContain('successfully');
  });

  it('should open account successfully', async function() {

    await bankManagerPage.openCustomerAccount('John Kenedy', 'Dollar')
    await browser.sleep(5000);
    await expect(action.getAlertContent()).toContain('successfully');
  });

  it('should delete customer successfully', async function(){

    await bankManagerPage.deleteCustomer('John');
  });
  
});