/**
 * Created by PPabasara on 7/11/2017.
 */


import {PageBase, TextField, Button, Factory, ConfigRoute} from "../class-loader";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";

import {CosmicNovaWarnModule} from "../module-objects/CosmicNovaWarnModule";
import {CosmicNovaSelectRolePage} from "./CosmicNovaSelectRolePage";


const log = Factory.getLogger("Page.CosmicNovaLoginPagex")

export class CosmicNovaLoginPage extends PageBase {

    private lblDashboardTitle: any;
    private lblHeaderTitle: any;
    private txtFldUsername: any;
    private txtFldPassword: any;
    private btnLogin: any;
    private btnSAML: any;
    private btnSettings: any;
    private lblErrorMsg: any;

    private warningModule: CosmicNovaWarnModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaLoginPage;

        this.warningModule = new CosmicNovaWarnModule();
        this.lblDashboardTitle = super.findLocators(element.lblDashboardTitle.findBy, element.lblDashboardTitle.value);
        this.lblHeaderTitle = super.findLocators(element.lblHeaderTitle.findBy, element.lblHeaderTitle.value);
        this.txtFldUsername = super.findLocators(element.txtFldUsername.findBy, element.txtFldUsername.value);
        this.txtFldPassword = super.findLocators(element.txtFldPassword.findBy, element.txtFldPassword.value);
        this.btnLogin = super.findLocators(element.btnLogin.findBy, element.btnLogin.value);
        this.btnSAML = super.findLocators(element.btnSAML.findBy, element.btnSAML.value);
        this.btnSettings = super.findLocators(element.btnSettings.findBy, element.btnSettings.value);
        this.lblErrorMsg = super.findLocators(element.lblErrorMsg.findBy, element.lblErrorMsg.value);
    }


    /**
     * Get: load nova-ward base url
     * @returns {CosmicNovaLoginPage}
     */
    public get(): CosmicNovaLoginPage{
        ConfigRoute.visit_page('http://cslk-ciix-81-03:8240/nova-physician/#/Login');
        log.info("Step: navigate to http://cslk-ciix-81-03:8240/nova-physician/ [:CosmicNovaLoginPage:]");
        return new CosmicNovaLoginPage();
    }

    /**
     * Step: accept initial server setting waning overlay
     * @returns {CosmicNovaLoginPage}
     */
    public step_acceptServerWaningMessage(): CosmicNovaLoginPage{
        this.Helper_Waits.waitFor(3000);
        log.info("Step: accept server warning message [:step_acceptServerWaningMessage:]");
        this.warningModule.action_acceptServerWarning();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaLoginPage();
    }

    /**
     * Step: enter username text-field
     * @param username
     * @returns {CosmicNovaLoginPage}
     */
    public step_enterUserNameField(username: string): CosmicNovaLoginPage{
        log.info("Step: set username text field [:step_enterUserNameField:]");
        new TextField(this.txtFldUsername).enterText(username);
        return new CosmicNovaLoginPage();
    }

    /**
     * Step: enter password text-field
     * @param password
     * @returns {CosmicNovaLoginPage}
     */
    public step_enterPasswordField(password: string): CosmicNovaLoginPage{
        log.info("Step: set password text field [:step_enterPasswordField:]");
        new TextField(this.txtFldPassword).enterText(password);
        return new CosmicNovaLoginPage();
    }

    public step_pressLoginButton(): CosmicNovaSelectRolePage{
        log.info("Step: press login button [:step_pressLoginButton:]");
        this.Helper_Waits.waitFor(2000);
        new Button(this.btnLogin).click();
        return new CosmicNovaSelectRolePage();
    }
}


