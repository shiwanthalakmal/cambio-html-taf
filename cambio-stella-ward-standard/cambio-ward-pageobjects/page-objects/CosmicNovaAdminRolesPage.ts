/**
 * Created by SLakmal on 4/18/2017.
 */
import {PageBase, TextField, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";
import {element, by} from "protractor";

const log = Factory.getLogger("Page.CosmicNovaAdminRolesPage")

export class CosmicNovaAdminRolesPage extends PageBase{

    private btnAddRoles             : any;
    private ulListOfRoles           : any;
    private btnDeleteRoles          : any;
    private btnDeleteRolesNo        : any;
    private btnDeleteRolesYes       : any;
    private txtFldUpdateRolesName   : any;
    private txtFldUpdateAbbreviation: any;
    private ulListOfStaffWith       : any;
    private ulListOfShowOn          : any;
    private ulListOfResponsibility  : any;

    private administrationMenuModule: CosmicNovaAdministrationMenuModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAdminRolesPage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.btnAddRoles            = super.findLocators(element.btnAddRoles.findBy, element.btnAddRoles.value);
        this.ulListOfRoles          = super.findLocators(element.ulListOfRoles.findBy, element.ulListOfRoles.value);
        this.btnDeleteRoles         = super.findLocators(element.btnDeleteRoles.findBy, element.btnDeleteRoles.value);
        this.btnDeleteRolesNo       = super.findLocators(element.btnDeleteRolesNo.findBy, element.btnDeleteRolesNo.value);
        this.btnDeleteRolesYes      = super.findLocators(element.btnDeleteRolesYes.findBy, element.btnDeleteRolesYes.value);
        this.txtFldUpdateRolesName  = super.findLocators(element.txtFldUpdateRolesName.findBy, element.txtFldUpdateRolesName.value);
        this.txtFldUpdateAbbreviation = super.findLocators(element.txtFldUpdateAbbreviation.findBy, element.txtFldUpdateAbbreviation.value);
        this.ulListOfStaffWith      = super.findLocators(element.ulListOfStaffWith.findBy, element.ulListOfStaffWith.value);
        this.ulListOfShowOn         = super.findLocators(element.ulListOfShowOn.findBy, element.ulListOfShowOn.value);
        this.ulListOfResponsibility = super.findLocators(element.ulListOfResponsibility.findBy, element.ulListOfResponsibility.value);
    }

    /**
     * Step: press add new roles button
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_PressAddNewRolesButton(): CosmicNovaAdminRolesPage{
        log.info("Step: Press add new role button [:step_PressAddNewRolesButton:]");
        new Button(this.btnAddRoles).click();this.Helper_Waits.waitFor(3000);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: choose given role record from role list and click on it
     * @param level
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_ChooseRolesLevels(level: string): CosmicNovaAdminRolesPage{
        log.info("Step: Select given role under existing role list [:step_ChooseRolesLevels:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfRoles,level);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: perform delete for the given role record and ignore the deletion
     * @param record
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_DeleteRolesIgnore(record: number): CosmicNovaAdminRolesPage{
        log.info("Step: Existing role delete and reject deletion flow [:step_DeleteRolesIgnore:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteRoles,record);
        new Button(this.btnDeleteRolesNo).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: perform delete for the given role record and accept the deletion
     * @param record
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_DeleteRolesLevelsAccept(record: number): CosmicNovaAdminRolesPage{
        log.info("Step: Existing role delete and accept deletion flow [:step_DeleteRolesLevelsAccept:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteRoles,record);
        new Button(this.btnDeleteRolesYes).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: enter new role name
     * @param value
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_EnterNewRoleDetails(value: string): CosmicNovaAdminRolesPage{
        log.info("Step: Enter new or update existing role name [:step_EnterNewRoleDetails:]");
        new TextField(this.txtFldUpdateRolesName).enterText(value);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: enter new abbreviation value
     * @param value
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_EnterNewAbbreviationValue(value: string): CosmicNovaAdminRolesPage{
        log.info("Step: Enter new or update existing abbreviation name [:step_EnterNewAbbreviationValue:]");
        new TextField(this.txtFldUpdateAbbreviation).enterText(value);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: choose staffed with given option
     * @param option
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_ChooseRolesStaffedWithOptions(option: string): CosmicNovaAdminRolesPage{
        log.info("Step: Select staffed given option using selection list [:step_ChooseRolesStaffedWithOptions:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfStaffWith,option);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: choose show on given option
     * @param option
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_ChooseShowOnOptions(option: string): CosmicNovaAdminRolesPage{
        log.info("Step: Select shows given option using selection list [:step_ChooseShowOnOptions:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfShowOn,option);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: choose responsibility given option
     * @param option
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_ChooseResponsibilityOption(option: string): CosmicNovaAdminRolesPage{
        log.info("Step: Select responsibility given option using selection list [:step_ChooseResponsibilityOption:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfResponsibility,option);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: press admin unit page cancel button and accept
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_PressCancelButtonAndAccept(): CosmicNovaBaseWardPage{
        log.info("Step: Press page cancel button and accept [:step_PressCancelButtonAndAccept:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelAccept();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: press admin unit page cancel button and ignore
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_PressCancelButtonAndIgnore(): CosmicNovaAdminRolesPage{
        log.info("Step: Press page save button and reject [:step_PressCancelButtonAndIgnore:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelIgnore();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: press admin unit page save button
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_PressSaveButton(): CosmicNovaBaseWardPage{
        log.info("Step: Press page save button [:step_PressSaveButton:]");
        this.administrationMenuModule.action_ClickOnSave();
        return new CosmicNovaBaseWardPage();
    }
}