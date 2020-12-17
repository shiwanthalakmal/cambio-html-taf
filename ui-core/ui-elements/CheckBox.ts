/**
 * Created by SLakmal on 3/15/2017.
 */
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseCheckBox} from "../ui-element-base/core/BaseCheckBox";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class CheckBox extends BaseCheckBox{

    constructor(locator: WebElement) {
        super(locator);
    }

}