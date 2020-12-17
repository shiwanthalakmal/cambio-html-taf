/**
 * Created by SLakmal on 3/16/2017.
 */
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseDiv} from "../ui-element-base/core/BaseDiv";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class Div extends BaseDiv{

    constructor(locator: WebElement) {
        super(locator);
    }

}
