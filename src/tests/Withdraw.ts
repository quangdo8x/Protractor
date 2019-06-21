import { browser, by } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/Account";

describe('Withdraw', function(){
    
    let loginPage:LoginPage
    let homePage:HomePage

    beforeEach(async function(){
        loginPage = new LoginPage();
        homePage = new HomePage();
        // Navigate to Bank Login page
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        await browser.manage().window().maximize();
    })

    it('should withdraw successfully', async function(){

        await loginPage.selectCustomer('Harry Potter');
        await homePage.depositCurrency("999");
        await homePage.withdrawCurrency("666");
        await expect(homePage.lblMessage.getText()).toEqual('Transaction successful');
    })
})