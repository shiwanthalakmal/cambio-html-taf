/**
 * Created by SLakmal on 3/16/2017.
 */
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseUnorderedList} from "../ui-element-base/core/BaseUnorderedList";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class UnorderedList extends BaseUnorderedList{

    constructor(locator: WebElement) {
        super(locator);
    }

}
