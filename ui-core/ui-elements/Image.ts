/**
 * Created by SLakmal on 3/16/2017.
 */
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseImage} from "../ui-element-base/core/BaseImage";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class Image extends BaseImage{

    constructor(locator: WebElement) {
        super(locator);
    }

}
