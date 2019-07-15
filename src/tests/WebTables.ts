import { async } from "q";
import { browser, element, by } from "protractor";

describe('test table', function(){

    it('should get data in table row successfully', async function(){
        await browser.get('http://www.way2automation.com/angularjs-protractor/webtables/')

        element.all(by.repeater('dataRow in displayedCollection')).getText().then(function(items){
                console.log(items[0])
                console.log(items[1])
                console.log(items[2])
        })
    })
})