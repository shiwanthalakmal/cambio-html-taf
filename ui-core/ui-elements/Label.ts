/**
 * Created by SLakmal on 3/16/2017.
 */
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseLabel} from "../ui-element-base/core/BaseLabel";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class Label extends BaseLabel{

    constructor(locator: WebElement) {
        super(locator);
    }

}
