/**
 * Created by SLakmal on 3/29/2017.
 */
import {PageBase, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaLoginPage} from "./CosmicNovaLoginPage";
import {CosmicNovaSelectUnitPage} from "./CosmicNovaSelectUnitPage";

const log = Factory.getLogger("Page.CosmicNovaSelectRolePage")

export class CosmicNovaSelectRolePage extends PageBase{

    private btnCancel       : any;
    private lblHeaderTitle  : any;
    private btnRoleList     : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaSelectRolePage;
        this.btnCancel = super.findLocators(element.btnCancel.findBy,element.btnCancel.value);
        this.lblHeaderTitle = super.findLocators(element.lblHeaderTitle.findBy,element.lblHeaderTitle.value);
        this.btnRoleList = super.findLocators(element.btnRoleList.findBy,element.btnRoleList.value);

    }

    /**
     * Step: select specific role from given role list
     * @param role
     * @returns {CosmicNovaSelectUnitPage}
     */
    public step_selectUserRole(role: string): CosmicNovaSelectUnitPage{
        log.info("Step: choose "+role+" in role list [:step_selectUserRole:]");
        this.Helper_Actions.findTextAndClick(this.btnRoleList,role);this.Helper_Waits.waitFor(2000);
        return new CosmicNovaSelectUnitPage();
    }

    /**
     * Step: cancel role list view and move back to login page
     * @returns {CosmicNovaLoginPage}
     */
    public step_cancelSelectRoleListView(): CosmicNovaLoginPage{
        log.info("Step: cancel select role list and back to login page [:step_cancelSelectRoleListView:]");
        new Button(this.btnCancel).click();
        return new CosmicNovaLoginPage();
    }

    /**
     * Validate: verify the role list header title
     * @param title
     * @returns {CosmicNovaSelectRolePage}
     */
    public check_And_Validate_selectRoleListTitle(title: string): CosmicNovaSelectRolePage{
        log.info("Validate: verify the select role header title [:check_And_Validate_selectRoleListTitle:]");
        this.Helper_Actions.checkTextAvailability(this.lblHeaderTitle,title);
        return new CosmicNovaSelectRolePage();
    }

}