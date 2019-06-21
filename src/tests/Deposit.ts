import { browser, by } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/Account";

describe('Deposit', function(){

    let loginPage:LoginPage
    let homePage:HomePage

    beforeEach(async function(){
        loginPage = new LoginPage();
        homePage = new HomePage();
        // Navigate to Bank Login page
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        await browser.manage().window().maximize();
    })

    it('should deposit successfully', async function(){
        debugger;
        await loginPage.selectCustomer('Harry Potter');
        await homePage.depositCurrency("999");
        await expect(homePage.lblMessage.getText()).toEqual('Deposit Successful');
    })
})