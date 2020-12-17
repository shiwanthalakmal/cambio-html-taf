/**
 * Created by user on 2/18/2017.
 */
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseButton} from "../ui-element-base/core/BaseButton";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";


export class Button extends BaseButton{

    constructor(locator: WebElement) {
        super(locator);
    }

}
