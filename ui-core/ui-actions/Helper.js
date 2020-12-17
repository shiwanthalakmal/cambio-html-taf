"use strict";
/**
 * Created by user on 2/18/2017.
 */
var protractor_1 = require('protractor');
var Helper;
(function (Helper) {
    var Navigation = (function () {
        function Navigation() {
        }
        Navigation.prototype.safeGet = function (url, timeout) {
            protractor_1.browser.get(url, timeout);
        };
        Navigation.prototype.expectUrl = function (url) {
            if (!url) {
                return false;
            }
            expect(protractor_1.browser.getCurrentUrl()).toContain(url);
        };
        Navigation.prototype.getCurrentUrl = function () {
            return protractor_1.browser.getLocationAbsUrl();
        };
        Navigation.prototype.navigateBack = function () {
            protractor_1.browser.navigate().back();
        };
        Navigation.prototype.navigateForward = function () {
            protractor_1.browser.navigate().forward();
        };
        Navigation.prototype.browserRefresh = function () {
            protractor_1.browser.refresh();
        };
        Navigation.prototype.browserMaximize = function () {
            protractor_1.browser.manage().window().maximize();
        };
        Navigation.prototype.browserTitle = function () {
            protractor_1.browser.getTitle();
        };
        Navigation.prototype.executeScript = function (script, element) {
            return protractor_1.browser.executeScript(script, element);
        };
        return Navigation;
    }());
    Helper.Navigation = Navigation;
    var Waits = (function () {
        function Waits() {
        }
        Waits.prototype.waitForAlertText = function (expectedAlertText) {
            protractor_1.browser.wait(function () {
                return protractor_1.browser.switchTo().alert().then(function () { return true; }, function () { return false; });
            }, 5000);
            protractor_1.browser.switchTo().alert().then(function (alert) {
                expect(alert.getText(function (alertText) {
                    expect(alertText).toContain(expectedAlertText);
                }));
                alert.dismiss();
            });
        };
        Waits.prototype.waitForElementPresent = function (element) {
            return protractor_1.browser.wait(function () {
                return protractor_1.browser.isElementPresent(element);
            }, this.mainElementsWaitTime);
        };
        Waits.prototype.waitForElementDisplayed = function (element) {
            return protractor_1.browser.wait(function () {
                return element.isDisplayed();
            }, this.mainElementsWaitTime);
        };
        Waits.prototype.waitForElementMissed = function (element) {
            return element.isPresent().then(function (present) {
                return expect(present).toBeFalsy();
            });
        };
        Waits.prototype.waitForAngular = function () {
            protractor_1.browser.waitForAngular();
        };
        Waits.prototype.waitFor = function (milliseconds) {
            protractor_1.browser.sleep(milliseconds);
        };
        return Waits;
    }());
    Helper.Waits = Waits;
    var Actions = (function () {
        function Actions() {
        }
        Actions.prototype.randomDigits = function (digitsNumber) {
            return Math.floor(Math.random() * (Math.pow(10, digitsNumber) + 1));
        };
        Actions.prototype.click = function (element) {
            element.click();
        };
        Actions.prototype.getCssValue = function (element) {
        };
        Actions.prototype.getOuterHtml = function (element) {
            return element.getOuterHtml();
        };
        Actions.prototype.getText = function (element) {
            return element.getText();
        };
        Actions.prototype.isEnabled = function (element) {
            return element.isEnabled();
        };
        Actions.prototype.enterText = function (element, text) {
            element.sendKeys(text);
        };
        Actions.prototype.getInnerHtml = function (element) {
            return element.getInnerHtml();
        };
        Actions.prototype.getSize = function (element) {
            return element.getSize();
        };
        Actions.prototype.isDisplayed = function (element) {
            return element.isDisplayed();
        };
        Actions.prototype.isPresent = function (element) {
            return element.isPresent();
        };
        Actions.prototype.submit = function (element) {
            element.submit();
        };
        Actions.prototype.clearText = function (element) {
            element.clear();
        };
        Actions.prototype.getAttribute = function (element, attribute) {
            return element.getAttribute(attribute);
        };
        Actions.prototype.getLocation = function (element) {
            return element.getLocation();
        };
        Actions.prototype.getTagName = function (element) {
            return element.getTagName();
        };
        Actions.prototype.isElementPresent = function (element, locator) {
            return element.isElementPresent(locator);
        };
        Actions.prototype.isSelected = function (element) {
            return element.isSelected();
        };
        return Actions;
    }());
    Helper.Actions = Actions;
})(Helper = exports.Helper || (exports.Helper = {}));
