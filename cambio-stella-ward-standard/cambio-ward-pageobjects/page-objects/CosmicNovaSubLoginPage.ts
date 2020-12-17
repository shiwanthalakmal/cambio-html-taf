/**
 * Created by SLakmal on 4/27/2017.
 */
import {PageBase, TextField, Button, Factory, ConfigRoute} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaWarnModule} from "../module-objects/CosmicNovaWarnModule";
import {CosmicNovaSelectRolePage} from "./CosmicNovaSelectRolePage";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";
import {CosmicNovaSubSelectRolePage} from "./CosmicNovaSubSelectRolePage";

const log = Factory.getLogger("Page.CosmicNovaSubLoginPage")

export class CosmicNovaSubLoginPage extends PageBase{

    private txtFldSubUsername   : any;
    private txtFldSubPassword   : any;
    private btnLoginCancel      : any;
    private btnLoginOk          : any;
    private btnSaml             : any;
    private lblErrorMsg         : any;

    constructor() {
        super();
        const element = Elements.CosmicNovaSubLoginPage;
        this.txtFldSubUsername  = super.findLocators(element.txtFldSubUsername.findBy, element.txtFldSubUsername.value);
        this.txtFldSubPassword  = super.findLocators(element.txtFldSubPassword.findBy, element.txtFldSubPassword.value);
        this.btnLoginCancel     = super.findLocators(element.btnLoginCancel.findBy, element.btnLoginCancel.value);
        this.btnLoginOk         = super.findLocators(element.btnLoginOk.findBy, element.btnLoginOk.value);
        this.btnSaml            = super.findLocators(element.btnSaml.findBy, element.btnSaml.value);
        this.lblErrorMsg        = super.findLocators(element.lblErrorMsg.findBy, element.lblErrorMsg.value);
    }

    public step_SetReLoginDetails(user: string, pass: string): CosmicNovaSubLoginPage{
        new TextField(this.txtFldSubUsername).enterText(user);
        new TextField(this.txtFldSubPassword).enterText(pass);
        return new CosmicNovaSubLoginPage();
    }

    public step_PressSubLoginOK(): CosmicNovaSubSelectRolePage{
        new Button(this.btnLoginOk).click();
        return new CosmicNovaSubSelectRolePage();
    }

    public step_PressSubLoginCancel(): CosmicNovaBaseWardPage{
        new Button(this.btnLoginCancel).click();
        return new CosmicNovaBaseWardPage();
    }

    public step_InvalidLoginSubmit(): CosmicNovaSubLoginPage{
        new Button(this.btnLoginOk).click();
        return new CosmicNovaSubLoginPage();
    }

    public check_And_Validate_LoginErrorMsg(error: string): CosmicNovaSubLoginPage{
        this.Helper_Assertion.expectToEqual(this.lblErrorMsg,error);
        return new CosmicNovaSubLoginPage();
    }
}