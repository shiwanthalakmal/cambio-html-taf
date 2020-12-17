/**
 * Created by SLakmal on 4/24/2017.
 */
import {PageBase, TextField, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";
import {TextArea} from "../../../ui-core/ui-elements/TextArea";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";

const log = Factory.getLogger("Page.CosmicNovaAdminActivityPage");

export class CosmicNovaAdminActivityPage extends PageBase{

    private ddlActivitySelection    : any;
    private btnAddActivity          : any;
    private ulListOfActivities      : any;
    private btnDeleteActivity       : any;
    private btnDeleteActivityNo     : any;
    private btnDeleteActivityYes    : any;
    private txtFldUpdateActivityName: any;
    private txtAraDescription       : any;
    private ulListOfOptions         : any;
    private ulListOfResponsibilities: any;

    private administrationMenuModule : CosmicNovaAdministrationMenuModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAdminActivityPage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.ddlActivitySelection   = super.findLocators(element.ddlActivitySelection.findBy, element.ddlActivitySelection.value);
        this.btnAddActivity         = super.findLocators(element.btnAddActivity.findBy, element.btnAddActivity.value);
        this.ulListOfActivities     = super.findLocators(element.btnAddActivity.findBy, element.btnAddActivity.value);
        this.ulListOfActivities     = super.findLocators(element.ulListOfActivities.findBy, element.ulListOfActivities.value);
        this.btnDeleteActivity      = super.findLocators(element.btnDeleteActivity.findBy, element.btnDeleteActivity.value);
        this.btnDeleteActivityNo    = super.findLocators(element.btnDeleteActivityNo.findBy, element.btnDeleteActivityNo.value);
        this.btnDeleteActivityYes   = super.findLocators(element.btnDeleteActivityYes.findBy, element.btnDeleteActivityYes.value);
        this.txtFldUpdateActivityName = super.findLocators(element.txtFldUpdateActivityName.findBy, element.txtFldUpdateActivityName.value);
        this.txtAraDescription      = super.findLocators(element.txtAraDescription.findBy, element.txtAraDescription.value);
        this.ulListOfOptions        = super.findLocators(element.ulListOfOptions.findBy, element.ulListOfOptions.value);
        this.ulListOfResponsibilities = super.findLocators(element.ulListOfResponsibilities.findBy, element.ulListOfResponsibilities.value);
    }

    public step_SelectGivenRoleUsingDropdown(option: string): CosmicNovaAdminActivityPage{
        log.info("Step: Select given role option using drop-down list [:step_SelectGivenRoleUsingDropdown:]");
        this.Helper_Actions.selectOptionByVisibleText(this.ddlActivitySelection, option);
        this.Helper_Waits.waitFor(2000);
        return new CosmicNovaAdminActivityPage();
    }

    public step_PressAddNewActivityButton(): CosmicNovaAdminActivityPage{
        log.info("Step: Press add new activity button [:step_PressAddNewButton:]");
        new Button(this.btnAddActivity).click();
        return new CosmicNovaAdminActivityPage();
    }

    public step_ChooseActivityFromList(activity: string): CosmicNovaAdminActivityPage{
        log.info("Step: Select activity role record using filted result list [:step_ChooseActivityFromList:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfActivities,activity);
        return new CosmicNovaAdminActivityPage();
    }

    public step_DeleteActivityAndIgnore(info: number): CosmicNovaAdminActivityPage{
        log.info("Step: Existing activity make delete and reject deletion flow [:step_DeleteActivityAndIgnore:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteActivity,info);
        this.Helper_Waits.waitFor(1000);
        new Button(this.btnDeleteActivityNo).click();
        return new CosmicNovaAdminActivityPage();
    }

    public step_DeleteActivityAndAccept(info: number): CosmicNovaAdminActivityPage{
        log.info("Step: Existing activity make delete and accept deletion flow [:step_DeleteActivityAndAccept:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteActivity,info);
        this.Helper_Waits.waitFor(1000);
        new Button(this.btnDeleteActivityYes).click();
        return new CosmicNovaAdminActivityPage();
    }

    public step_EnterNewActivityName(value: string): CosmicNovaAdminActivityPage{
        log.info("Step: Enter new or update exsiting activity name [:step_EnterNewActivityName:]");
        new TextField(this.txtFldUpdateActivityName).enterText(value);
        return new CosmicNovaAdminActivityPage();
    }

    public step_EnterActivityDescription(value: string): CosmicNovaAdminActivityPage{
        log.info("Step: Enter activity description [:step_EnterActivityDescription:]");
        new TextArea(this.txtAraDescription).enterText(value);
        return new CosmicNovaAdminActivityPage();
    }

    public step_ChooseShowsWardSummaryOptions(option: string): CosmicNovaAdminActivityPage{
        log.info("Step: Select shows ward summary option [:step_ChooseShowsWardSummaryOptions:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfOptions,option);
        return new CosmicNovaAdminActivityPage();
    }

    public step_ChooseResponsibleRecord(option: string): CosmicNovaAdminActivityPage{
        log.info("Step: Select responsible role using role list [:step_ChooseResponsibleRecord:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfResponsibilities,option);
        return new CosmicNovaAdminActivityPage();
    }

    public check_And_Validate_DuplicateActivityAdded(): CosmicNovaAdminActivityPage{
        //[Pending]
        return new CosmicNovaAdminActivityPage();
    }

    public check_And_Validate_ActivityAvailability(record): CosmicNovaAdminActivityPage{
        this.Helper_Actions.checkTextFromList(this.ulListOfActivities,record);
        return new CosmicNovaAdminActivityPage();
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
    public step_PressCancelButtonAndIgnore(): CosmicNovaAdminActivityPage{
        log.info("Step: Press page save button and reject [:step_PressCancelButtonAndIgnore:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelIgnore();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminActivityPage();
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