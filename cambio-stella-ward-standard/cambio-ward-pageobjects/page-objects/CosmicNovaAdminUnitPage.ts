/**
 * Created by SLakmal on 3/30/2017.
 */
import {PageBase, TextField, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";
import {CosmicNovaAdminStaffPage} from "./CosmicNovaAdminStaffPage";
import {CosmicNovaAdminRolesPage} from "./CosmicNovaAdminRolesPage";
import {CosmicNovaAdminInformationPage} from "./CosmicNovaAdminInformationPage";
import {CosmicNovaAdminPackagePage} from "./CosmicNovaAdminPackagePage";
import {CosmicNovaAdminTagsPage} from "./CosmicNovaAdminTagsPage";
import {CosmicNovaAdminStatusPage} from "./CosmicNovaAdminStatusPage";
import {CosmicNovaAdminPatientViewPage} from "./CosmicNovaAdminPatientViewPage";
import {CosmicNovaAdminActivityPage} from "./CosmicNovaAdminActivityPage";
import {CosmicNovaAdminWardViewPage} from "./CosmicNovaAdminWardViewPage";
import {element, by} from "protractor";

const log = Factory.getLogger("Page.CosmicNovaAdminUnitPage")

export class CosmicNovaAdminUnitPage extends PageBase{

    private txtFldUnitName      : any;
    private txtFldLoadingPeriod : any;
    private txtFldTeamName      : any;
    private btnColorSelection   : any;
    private btnShowInDayView    : any;
    private btnShowInDateView   : any;
    private btnTeamAdd          : any;
    private ulTeamSelectionList : any;
    private btnTeamDelete       : any;
    private btnTeamDeleteAccept : any;
    private btnTeamDeleteReject : any;

    private administrationMenuModule : CosmicNovaAdministrationMenuModule;

    constructor(){
        super();
        const element = Elements.CosmicNovaAdminUnitPage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.txtFldUnitName         = super.findLocators(element.txtFldUnitName.findBy,element.txtFldUnitName.value);
        this.txtFldLoadingPeriod    = super.findLocators(element.txtFldLoadingPeriod.findBy,element.txtFldLoadingPeriod.value);
        this.txtFldTeamName         = super.findLocators(element.txtFldTeamName.findBy,element.txtFldTeamName.value);
        this.btnColorSelection      = super.findLocators(element.btnColorSelection.findBy,element.btnColorSelection.value);
        this.btnShowInDayView       = super.findLocators(element.btnShowInDayView.findBy,element.btnShowInDayView.value);
        this.btnShowInDateView      = super.findLocators(element.btnShowInDateView.findBy,element.btnShowInDateView.value);
        this.btnTeamAdd             = super.findLocators(element.btnTeamAdd.findBy,element.btnTeamAdd.value);
        this.ulTeamSelectionList    = super.findLocators(element.ulTeamSelectionList.findBy,element.ulTeamSelectionList.value);
        this.btnTeamDelete          = super.findLocators(element.btnTeamDelete.findBy,element.btnTeamDelete.value);
        this.btnTeamDeleteAccept    = super.findLocators(element.btnTeamDeleteAccept.findBy,element.btnTeamDeleteAccept.value);
        this.btnTeamDeleteReject    = super.findLocators(element.btnTeamDeleteReject.findBy,element.btnTeamDeleteReject.value);
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
    public step_PressCancelButtonAndIgnore(): CosmicNovaAdminUnitPage{
        log.info("Step: Press page save button and reject [:step_PressCancelButtonAndIgnore:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelIgnore();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminUnitPage();
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

    /**
     * Validate: verify the save button disable state
     * @returns {CosmicNovaAdminUnitPage}
     */
    public check_And_Validate_SaveButtonDisable(): CosmicNovaAdminUnitPage{
        this.administrationMenuModule.action_CheckSaveButtonDisable();
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: modify the existing unit name
     * @param unit
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_ChangeUnitName(unit: string): CosmicNovaAdminUnitPage{
        log.info("Step: Modify the existing unit name [:step_ChangeUnitName:]");
        new TextField(this.txtFldUnitName).enterText(unit);
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: modify the existing loading period
     * @param time
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_ChangeLoadingPeriod(time: string): CosmicNovaAdminUnitPage{
        log.info("Step: Modify the existing patient loading time [:step_ChangeLoadingPeriod:]");
        new TextField(this.txtFldLoadingPeriod).enterText(time);
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: modify or add new team selection name
     * @param team
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_ChangeTeamSelectionName(team: string): CosmicNovaAdminUnitPage{
        log.info("Step: Modify the existing team name [:step_ChangeTeamSelectionName:]");
        new TextField(this.txtFldTeamName).enterText(team);
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: choose shows in column ward view types
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_ChooseShowsInDaysColumnView(): CosmicNovaAdminUnitPage{
        log.info("Step: Select show in days ago view option [:step_ChooseShowsInDaysColumnView:]");
        new Button(this.btnShowInDayView).click();
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: choose shows in column ward view types
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_ChooseShowsInDateColumnView(): CosmicNovaAdminUnitPage{
        log.info("Step: Select show in date view option [:step_ChooseShowsInDateColumnView:]");
        new Button(this.btnShowInDateView).click();
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: press team add button
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_PressTeamAddButton(): CosmicNovaAdminUnitPage{
        log.info("Step: Press new team add button [:step_PressTeamAddButton:]");
        new Button(this.btnTeamAdd).click();
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: choose given color code using color panel
     * @param color
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_ChooseGivenColorCode(color: number): CosmicNovaAdminUnitPage{
        log.info("Step: Choose given color code for team [:step_ChooseGivenColorCode:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnColorSelection,color);
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Validate: verify the team details not availability
     * @param text
     * @returns {CosmicNovaAdminUnitPage}
     */
    public check_And_Validate_TeamNotAvailability(text: string): CosmicNovaAdminUnitPage{
        log.info("Validate: Verify the given team record availablity under team list [:check_And_Validate_TeamNotAvailability:]");
        this.Helper_Waits.waitFor(1000);
        this.Helper_Actions.checkTextNotAvailability(this.ulTeamSelectionList,text);
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Validate: verify the team details availability
     * @param text
     * @returns {CosmicNovaAdminUnitPage}
     */
    public check_And_Validate_TeamAvailability(text: string): CosmicNovaAdminUnitPage{
        log.info("Validate: Verify the given team record availablity under team list [:check_And_Validate_TeamAvailability:]");
        this.Helper_Waits.waitFor(1000);
        this.Helper_Actions.checkTextFromList(this.ulTeamSelectionList,text);
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: perform delete for the given unit record and ignore the deletion
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_PressTeamDeleteIconAndReject(): CosmicNovaAdminUnitPage{
        log.info("Step: Delete existing team record and reject deletion flow [:step_PressTeamDeleteIconAndReject:]");
        this.Helper_Actions.findFirstElementAndClick(this.btnTeamDelete);
        this.Helper_Actions.findFirstElementAndClick(this.btnTeamDeleteReject);
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: perform delete for the given unit record and accept the deletion
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_PressTeamDeleteIconAndAccept(): CosmicNovaAdminUnitPage{
        log.info("Step: Delete existing team record and accept deletion flow [:step_PressTeamDeleteIconAndAccept:]");
        this.Helper_Actions.findFirstElementAndClick(this.btnTeamDelete);
        this.Helper_Actions.findFirstElementAndClick(this.btnTeamDeleteAccept);
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: move from unit page to staff page
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_MoveToStaffAdminPanel(): CosmicNovaAdminStaffPage{
        log.info("Step: Move to admin staff page [:step_MoveToStaffAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Staff');
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: move from unit page to role page
     * @returns {CosmicNovaAdminRolesPage}
     */
    public step_MoveToRolesAdminPanel(): CosmicNovaAdminRolesPage{
        log.info("Step: Move to admin roles page [:step_MoveToRolesAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Roles');
        return new CosmicNovaAdminRolesPage();
    }

    /**
     * Step: move from unit page to info-marker page
     * @returns {CosmicNovaAdminInformationPage}
     */
    public step_MoveToInfoMarkAdminPanel(): CosmicNovaAdminInformationPage{
        log.info("Step: Move to admin information marker page [:step_MoveToInfoMarkAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Information Markers');
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Step: move from unit page to package page
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_MoveToPackagesAdminPanel(): CosmicNovaAdminPackagePage{
        log.info("Step: Move to admin packages page [:step_MoveToPackagesAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Packages');
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: move from unit page to tag page
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_MoveToTagsAdminPanel(): CosmicNovaAdminTagsPage{
        log.info("Step: Move to admin tags page [:step_MoveToTagsAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Tags');
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: move from unit page to status page
     * @returns {CosmicNovaAdminStatusPage}
     */
    public step_MoveToStatusAdminPanel(): CosmicNovaAdminStatusPage{
        log.info("Step: Move to admin status page [:step_MoveToStatusAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Status');
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Step: move from unit page to patient-view page
     * @returns {CosmicNovaAdminPatientViewPage}
     */
    public step_MoveToPatientViewAdminPanel(): CosmicNovaAdminPatientViewPage{
        log.info("Step: Move to admin patient view page [:step_MoveToPatientViewAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Patient View Summary');
        return new CosmicNovaAdminPatientViewPage();
    }

    public step_MoveToActivitiesAdminPanel(): CosmicNovaAdminActivityPage{
        log.info("Step: Move to admin activities page [:step_MoveToActivitiesAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Activities');
        return new CosmicNovaAdminActivityPage();
    }

    public step_MoveToWardViewAdminPanel(): CosmicNovaAdminWardViewPage{
        log.info("Step: Move to admin ward view page [:step_MoveToWardViewAdminPanel:]");
        this.administrationMenuModule.action_ChooseRightPanelOption('Ward View Summary');
        return new CosmicNovaAdminWardViewPage();
    }

    public check_And_Validate_AdminMenuToolTips(menu: number,infor: string): CosmicNovaAdminUnitPage{
        log.info("Validate: Verify admin panel menus tool tip information [:check_And_Validate_AdminMenuToolTips:]");
        var inforBtn : any = element.all(by.xpath("//div[1]/ul/li["+menu+"]/span/span"));
        new Button(inforBtn).click();this.Helper_Waits.waitFor(1000);
        var toolTip : any = element.all(by.xpath("//nova-modal/div/div[1]/div[1]"));
        this.Helper_Actions.checkTextContentFromList(toolTip,infor);
        return new CosmicNovaAdminUnitPage();
    }

}