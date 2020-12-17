// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/featureConfig.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor suiteConfig.js`.
import {browser, Config} from 'protractor';
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
declare const allure: any;
var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {

    // global timeouts
    getPageTimeout: 60000,
    allScriptsTimeout: 60000,
    defaultTimeoutInterval: 180000,
    directConnect: true,

    // protactor unit test framework
    framework: 'jasmine2',

    // selenium web-driver remote access
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // project base url
    baseUrl : 'xxx',

    // load new browser for each test
    restartBrowserBetweenTests: false,

    useAllAngular2AppRoots: true,

    // test browser capabilities
    capabilities: {
        browserName: 'chrome'
    },

    // call -> (protractor target/suiteConfig.js --suite general,search)
    suites: {
        general: ['./cambio-physician-tests/resources/testcases/nova-stella-cps1-scenarios.js',
            './cambio-physician-tests/resources/testcases/nova-stella-cps2-scenarios.js',
            './cambio-physician-tests/resources/testcases/nova-stella-cps3-scenarios.js',
            './cambio-physician-tests/resources/testcases/nova-stella-cps4-scenarios.js',
            './cambio-physician-tests/resources/testcases/nova-stella-cps5-scenarios.js',
            './cambio-physician-tests/resources/testcases/nova-stella-cps6-scenarios.js',
            './cambio-physician-tests/resources/testcases/nova-stella-cps7-scenarios.js',
            './cambio-physician-tests/resources/testcases/nova-stella-cps8-scenarios.js'],

       cps01: './cambio-physician-tests/resources/testcases/nova-stella-cps1-scenarios.js',

       cps03: './cambio-physician-tests/resources/testcases/nova-stella-cps3-scenarios.js',

       cps08: './cambio-physician-tests/resources/testcases/nova-stella-cps8-scenarios.js',

        cps05: './cambio-physician-tests/resources/testcases/nova-stella-cps5-scenarios.js',
    },

    beforeLaunch: () => {
        console.log('URL: http://cslk-hfdb-81-03:8380/nova-physician/#/Login');
        console.log('APPLICATION: Nova 2.1 Physician App');
    },

    onPrepare: () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(180000);
        browser.ignoreSynchronization = false;

        // --------------------- emailable reporter ------------------------------------
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './emailable-report/',
            consolidateAll: false,
            screenshotsFolder: 'reportsscreenshots',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));


        var JasmineConsoleReporter = require('jasmine-console-reporter');
        var reporter = new JasmineConsoleReporter({
            colors: 1,           // (0|false)|(1|true)|2
            cleanStack: 1,       // (0|false)|(1|true)|2|3
            verbosity: 4,        // (0|false)|1|2|(3|true)|4
            listStyle: 'indent', // "flat"|"indent"
            activity: false
        });
        // -------------------------------- end ------------------------------------------

        // ----------------------------- allure dashboard settings -----------------------
        var AllureReporter = require('jasmine-allure-reporter');
        var reporter = new AllureReporter({
            allureReport : {
                resultsDir : 'allure-results'
            }
        });
        jasmine.getEnv().addReporter(reporter);
        jasmine.getEnv().afterEach(function(){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
            })
        });
        // -------------------------------- end ------------------------------------------

        // ----------------------------- summary report ----------------------------------
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './summary-report',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'NAVA 2.1 Tablet Site Automation Execution Summary ..'
        }).getJasmine2Reporter());
        // -------------------------------- end ------------------------------------------

    },

    onComplete: () => {

        console.log('======================================== SUITE COMPLETED !!! ====================================');
    },

    onCleanUp: () => {

    },

    afterLaunch: () => {

    },

    // jasmin global configuration
    jasmineNodeOpts:{
        showColors: true,
        defaultTimeoutInterval: 180000,
        isVerbose: false,
        includeStackTrace: true,
    },

};
