import { browser, by } from "protractor";
import { LoginPage } from "../PageObjects/LoginPage";
import { HomePage } from "../PageObjects/HomePage";

describe('Withdraw', function(){
    
    let loginPage:LoginPage
    let homePage:HomePage

    beforeEach(async function(){
        loginPage = new LoginPage(browser);
        homePage = new HomePage(browser);
        // Navigate to Bank Login page
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        await browser.manage().window().maximize();
    })

    it('should withdraw successfully', async function(){

        loginPage.login('Harry Potter');
        homePage.depositCurrency("999");
        homePage.withdrawCurrency("666");
        await expect(browser.element(by.xpath(homePage.lblMessage)).getText()).toEqual('Transaction successful');
    })
})