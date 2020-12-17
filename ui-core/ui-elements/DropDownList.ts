/**
 * Created by SLakmal on 3/16/2017.
 */
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseDropDownList} from "../ui-element-base/core/BaseDropDownList";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class DropDownList extends BaseDropDownList{

    constructor(locator: WebElement) {
        super(locator);
    }

}
