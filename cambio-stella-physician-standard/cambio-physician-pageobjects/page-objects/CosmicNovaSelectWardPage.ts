/**
 * Created by PPabasara on 7/12/2017.
 */

import {browser, ElementArrayFinder, element} from "protractor";
import {PageBase, TextField, Button, Factory, ConfigRoute} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/element-loader.json';
import {CosmicNovaSelectUnitPage} from "./CosmicNovaSelectUnitPage";
import {CosmicNovaBasePhysicianPage} from "./CosmicNovaBasePhysicianPage";


const log = Factory.getLogger("Page.CosmicNovaSelectWardPage")

export class CosmicNovaSelectWardPage extends PageBase {

    private btnWardList     : any;
    private lblHeaderTitle  : any;
    private btnCancel       : any;

    constructor() {
        super();
        const element = Elements.CosmicNovaSelectWardPage;
        this.btnWardList = super.findLocators(element.btnWardList.findBy, element.btnWardList.value);
        this.lblHeaderTitle = super.findLocators(element.lblHeaderTitle.findBy, element.lblHeaderTitle.value);
        this.btnCancel = super.findLocators(element.btnCancel.findBy, element.btnCancel.value);
    }

    /**
     * Step: select specific ward from given ward list
     * @param ward
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_selectUserWard(ward: string): CosmicNovaBasePhysicianPage{
      log.info("Step: choose "+ward+" in ward list [:step_selectUserWard:]");
      this.Helper_Actions.findTextAndClick(this.btnWardList,ward);
      return new CosmicNovaBasePhysicianPage();
   }

    /**
     * Step: cancel ward list view and move back to unit list page
     * @returns {CosmicNovaSelectUnitPage}
     */
    public step_cancelSelectWardListView(): CosmicNovaSelectUnitPage{
        log.info("Step: cancel select ward list and back to unit page [:step_cancelSelectWardListView:]");
        new Button(this.btnCancel).click();
        return new CosmicNovaSelectUnitPage();
    }

    /**
     * Validate: verify the ward list header title
     * @param title
     * @returns {CosmicNovaSelectWardPage}
     */
    public check_And_Validate_selectWardListTitle(title: string): CosmicNovaSelectWardPage{
        log.info("Validate: verify the select ward header title [:check_And_Validate_selectWardListTitle:]");
        this.Helper_Assertion.expectToEqual(this.lblHeaderTitle,title);
        return new CosmicNovaSelectWardPage();
    }
}