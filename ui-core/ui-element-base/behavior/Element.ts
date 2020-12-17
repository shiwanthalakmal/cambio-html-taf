/**
 * Created by user on 2/18/2017.
 */
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export interface Element{

    getText() : string;

    getElement() : WebElement;

}
