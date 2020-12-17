/**
 * Created by SLakmal on 4/27/2017.
 */
import {PageBase, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaSubLoginPage} from "./CosmicNovaSubLoginPage";
import {CosmicNovaSubSelectUnitPage} from "./CosmicNovaSubSelectUnitPage";

const log = Factory.getLogger("Page.CosmicNovaSubSelectRolePage")

export class CosmicNovaSubSelectRolePage extends PageBase{

    private ulSubRoleList   : any;
    private btnRoleCancel   : any;

    constructor() {
        super();
        const element = Elements.CosmicNovaSubSelectRolePage;
        this.ulSubRoleList = super.findLocators(element.ulSubRoleList.findBy, element.ulSubRoleList.value);
        this.btnRoleCancel = super.findLocators(element.btnRoleCancel.findBy, element.btnRoleCancel.value);
    }

    public step_ChooseSubRole(): CosmicNovaSubSelectUnitPage{
        this.Helper_Actions.findFirstElementAndClick(this.ulSubRoleList);
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaSubSelectUnitPage();
    }

    public step_CancelSubRoleView(): CosmicNovaSubLoginPage{
        new Button(this.btnRoleCancel).click();
        return new CosmicNovaSubLoginPage();
    }
}