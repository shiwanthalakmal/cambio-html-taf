/**
 * Created by SLakmal on 4/27/2017.
 */
import {PageBase, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";
import {CosmicNovaSubSelectRolePage} from "./CosmicNovaSubSelectRolePage";

const log = Factory.getLogger("Page.CosmicNovaSubSelectUnitPage")

export class CosmicNovaSubSelectUnitPage extends PageBase{

    private ulSubUnitsList   : any;
    private btnUnitsCancel   : any;

    constructor() {
        super();
        const element = Elements.CosmicNovaSubSelectUnitPage;
        this.ulSubUnitsList = super.findLocators(element.ulSubUnitsList.findBy, element.ulSubUnitsList.value);
        this.btnUnitsCancel = super.findLocators(element.btnUnitsCancel.findBy, element.btnUnitsCancel.value);
    }

    public step_ChooseSubUnit(): CosmicNovaBaseWardPage{
        this.Helper_Actions.findFirstElementAndClick(this.ulSubUnitsList);
        return new CosmicNovaBaseWardPage();
    }

    public step_CancelSubUnitView(): CosmicNovaSubSelectRolePage{
        new Button(this.btnUnitsCancel).click();
        return new CosmicNovaSubSelectRolePage();
    }
}