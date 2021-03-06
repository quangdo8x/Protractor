// conf.js
var dateFormat = require('dateformat');

exports.config = {
    framework: 'jasmine',
    // The address of a running selenium server.
    seleniumAddress: 'http://192.168.213.21:4444/wd/hub',
    
    //This is used to run multiple specs
    specs: [
        'src/tests/Bank.ts',
        'src/tests/Deposit.ts',
        'src/tests/Withdraw.ts'
    ],
    
    //run directly with browser driver without using webdriver manager
    directConnect: false,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        
        //Number of browsers at the same execution time
        maxInstances: 1
    },
    // multiCapabilities: [
    //     {
    //       browserName: 'chrome',
    //       shardTestFiles: true,
    //       maxInstances: 2
    //     }, {
    //       browserName: 'firefox',  
    //       shardTestFiles: true,
    //       maxInstances: 2
    //     }], 
    // restartBrowserBetweenTests: true,
    onPrepare: function() {
        require('ts-node').register({
          project: require('path').join(__dirname, './tsconfig.json')
        })
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));

        var HtmlReporter = require('protractor-beautiful-reporter');
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        
        browser.getCapabilities().then((cap) => {
        
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: __dirname + '\\outputs\\reports\\' + cap.get('browserName') + '\\' + dateFormat(new Date(), "yyyy_mm_dd_HH_MM_ss")
        }).getJasmine2Reporter());
      })  
    },
    SELENIUM_PROMISE_MANAGER: false,
    //HTMLReport called once tests are finished
    onComplete: function() {
        
        var HtmlReporter = require('protractor-beautiful-reporter');
        var path = require('path');
        var reporter = new HtmlReporter({
            //baseDirectory: '/tmp/screenshots'
            baseDirectory: __dirname + '\\outputs\\reports\\' + dateFormat(new Date(), "yyyy_mm_dd_HH_MM_ss")
            , pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
                // Return '<browser>/<specname>' as path for screenshots:
                // Example: 'firefox/list-should work'.
                return path.join(capabilities.caps_.browser, descriptions.join('-'));
            }
            , screenshotsSubfolder: 'images'
            , docTitle: 'my reporter'
            , sortFunction: function sortFunction(a, b) {
            if (a.cachedBase === undefined) {
                var aTemp = a.description.split('|').reverse();
                a.cachedBase = aTemp.slice(0).slice(0,-1);
                a.cachedName = aTemp.slice(0).join('');
            };
            if (b.cachedBase === undefined) {
                var bTemp = b.description.split('|').reverse();
                b.cachedBase = bTemp.slice(0).slice(0,-1);
                b.cachedName = bTemp.slice(0).join('');
            };
        
            var firstBase = a.cachedBase;
            var secondBase = b.cachedBase;
        
            for (var i = 0; i < firstBase.length || i < secondBase.length; i++) {
        
                if (firstBase[i] === undefined) { return -1; }
                if (secondBase[i] === undefined) { return 1; }
                if (firstBase[i].localeCompare(secondBase[i]) === 0) { continue; }
                return firstBase[i].localeCompare(secondBase[i]);
            }
        
            var firstTimestamp = a.timestamp;
            var secondTimestamp = b.timestamp;
        
            if(firstTimestamp < secondTimestamp) return -1;
            else return 1;
            }
         });
    },

    // Options to be passed to Jasmine-node.
    //allScriptsTimeout: 15000, //allScriptsTimeout is timeout for EACH async command in protractor, to not execute for too long
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 999999 //apply jasmine timeouts for all specs
    }
  }
