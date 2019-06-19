import { browser, by, element } from "protractor";

describe('Bank', function(){

  it('should login successfully', async function(){

    await browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
    await browser.manage().window().maximize()

    await browser.element(by.model("Auth.user.name")).sendKeys("angular")
    await browser.element(by.model("Auth.user.password")).sendKeys("password")
    await browser.element(by.model('model[options.key]')).sendKeys("description")
    await browser.element(by.className('btn btn-danger')).click()

    await expect(browser.element(by.xpath('//p[text()="You\'re logged in!!"]')).isDisplayed()).toBe(true)

    await browser.element(by.xpath('//a[@href="#/login"]')).click()
    await browser.sleep(3000)
  })

  it('should add customer successfully', async function(){

    await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')
    await browser.manage().window().maximize()

    await browser.element(by.xpath('//button[text()="Bank Manager Login"]')).click()
    await browser.element(by.xpath('//button[starts-with(text(),"Add Customer")]')).click();

    await browser.element(by.model('fName')).sendKeys('John')
    await browser.element(by.model('lName')).sendKeys('Kenedy')
    await browser.element(by.model('postCd')).sendKeys('123456')
    await browser.element(by.xpath('//button[text()="Add Customer"]')).click()

    await expect(browser.switchTo().alert().getText()).toContain('successfully')
    await browser.sleep(3000)
    await browser.switchTo().alert().accept()
    await browser.sleep(7000)
  });

  // it('should open account successfully', async function() {

  //   await browser.element(by.xpath('//button[starts-with(text(),"Open Account")]')).click();

  //   let customerSelection = element(by.model('custId'))
  //   await customerSelection.$('[value="John Kenedy"]').click()

  //   let currencySelection = element(by.model('currency'))
  //   await currencySelection.$('[value="Dollar"]').click()

  //   await browser.element(by.xpath('//button[text()="Process"]')).click()
  //   await expect(browser.switchTo().alert().getText()).toContain('successfully')
  //   await browser.sleep(3000)
  //   await browser.switchTo().alert().accept()
  //   await browser.sleep(7000)
  // });
  // it('should delete customer successfully', async function(){
    
  //   await browser.element(by.xpath('//button[starts-with(text(),"Customer")]')).click()
  //   await browser.element(by.model('searchCustomer')).sendKeys('John Kenedy')
  //   await browser.element(by.xpath('//button[text()="Delete"]')).click()
  //   await browser.sleep(7000)
  // });
  
});