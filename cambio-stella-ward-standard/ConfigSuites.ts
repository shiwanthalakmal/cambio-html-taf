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
        general: ['./cambio-ward-tests/resources/testcases/nova-stella-login-scenarios.js',
            './cambio-ward-tests/resources/testcases/nova-stella-admin-scenarios.js',
            './cambio-ward-tests/resources/testcases/nova-stella-team-scenarios.js',
            './cambio-ward-tests/resources/testcases/nova-stella-beds-scenarios.js',
            './cambio-ward-tests/resources/testcases/nova-stella-staff-scenarios.js',
            './cambio-ward-tests/resources/testcases/nova-stella-respon-scenarios.js',
            './cambio-ward-tests/resources/testcases/nova-stella-ward-scenarios.js'],

        login: './cambio-ward-tests/resources/testcases/nova-stella-login-scenarios.js',
        admin: './cambio-ward-tests/resources/testcases/nova-stella-admin-scenarios.js',
        teams: './cambio-ward-tests/resources/testcases/nova-stella-team-scenarios.js',
        beds:  './cambio-ward-tests/resources/testcases/nova-stella-beds-scenarios.js',
        staff: './cambio-ward-tests/resources/testcases/nova-stella-staff-scenarios.js',
        respo: './cambio-ward-tests/resources/testcases/nova-stella-respon-scenarios.js',
        wards: './cambio-ward-tests/resources/testcases/nova-stella-ward-scenarios.js',
    },

    beforeLaunch: () => {
        console.log('URL: http://cslk-cin14-81t:8180/nova-board/');
        console.log('APPLICATION: Nova 2.1 Ward App');
    },

    onPrepare: () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(180000);
        browser.ignoreSynchronization = false;

        // --------------------- emailable reporter ------------------------------------
        /*jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
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
        });*/
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
            docTitle: 'NAVA 2.1 Ward Site Automation Execution Summary ..'
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
