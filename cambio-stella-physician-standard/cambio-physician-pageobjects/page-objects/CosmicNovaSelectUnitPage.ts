/**
 * Created by PPabasara on 7/11/2017.
 */
import {PageBase, Button, Factory} from "../class-loader";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {CosmicNovaSelectRolePage} from "./CosmicNovaSelectRolePage";
import {CosmicNovaSelectWardPage} from "./CosmicNovaSelectWardPage";
import {CosmicNovaBasePhysicianPage} from "./CosmicNovaBasePhysicianPage";


const log = Factory.getLogger("Page.CosmicNovaSelectUnitPage")

export class CosmicNovaSelectUnitPage extends PageBase{

    private btnUnitList     : any;
    private lblHeaderTitle  : any;
    private btnCancel       : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaSelectUnitPage;
        this.btnUnitList = super.findLocators(element.btnUnitList.findBy,element.btnUnitList.value);
        this.lblHeaderTitle = super.findLocators(element.lblHeaderTitle.findBy,element.lblHeaderTitle.value);
        this.btnCancel = super.findLocators(element.btnCancel.findBy,element.btnCancel.value);
    }

    /**
     * Step: select specific unit from given unit list
     * @param unit
     * @returns {CosmicNovaSelectWardPage}
     */

   public step_selectUserUnit(unit: string): CosmicNovaBasePhysicianPage{
       log.info("Step: choose "+unit+" in unit list [:step_selectUserUnit:]");
        this.Helper_Actions.findTextAndClick(this.btnUnitList,unit);this.Helper_Waits.waitFor(2000);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Step: select specific department from given unit list for basic users
     * @param unit
     * @returns {CosmicNovaSelectWardPage}
     */
   public step_selectUserUnitForBasicUser(unit: string): CosmicNovaBasePhysicianPage{
        log.info("Step: choose "+unit+" in unit list [:step_selectUserUnit:]");
        this.Helper_Actions.findTextAndClick(this.btnUnitList,unit);
         return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Step: cancel unit list view and move back to role list page
     * @returns {CosmicNovaSelectRolePage}
     */
    public step_cancelSelectUnitListView(): CosmicNovaSelectRolePage{
        log.info("Step: cancel select unit list and back to role page [:step_cancelSelectUnitListView:]");
        new Button(this.btnCancel).click();
        return new CosmicNovaSelectRolePage();
    }

    /**
     * Validate: verify the unit list header title
     * @param title
     * @returns {CosmicNovaSelectUnitPage}
     */
    public check_And_Validate_selectUnitListTitle(title: string): CosmicNovaSelectUnitPage{
        log.info("Validate: verify the select unit header title [:check_And_Validate_selectUnitListTitle:]");
        this.Helper_Actions.checkTextAvailability(this.lblHeaderTitle,title);
        return new CosmicNovaSelectUnitPage();
    }
}