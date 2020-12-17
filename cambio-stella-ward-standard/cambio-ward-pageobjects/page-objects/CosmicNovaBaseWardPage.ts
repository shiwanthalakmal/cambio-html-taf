/**
 * Created by SLakmal on 3/30/2017.
 */
import {PageBase, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaTopNavigationModule} from "../module-objects/CosmicNovaTopNavigationModule";
import {CosmicNovaAdminUnitPage} from "./CosmicNovaAdminUnitPage";
import {CosmicNovaSubLoginPage} from "./CosmicNovaSubLoginPage";
import {Navigate} from "../aspect-objects/Navigate";
import {Component} from "../aspect-objects/Component";
import {CosmicNovaStaffingViewPage} from "./CosmicNovaStaffingViewPage";
import {element, by} from "protractor";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Button} from "../../../ui-core/ui-elements/Button";
import {CosmicNovaActivityViewPage} from "./CosmicNovaActivityViewPage";
import {CosmicNovaActivitySummaryModule} from "../module-objects/CosmicNovaActivitySummaryModule";
import {CosmicNovaTeamViewPage} from "./CosmicNovaTeamViewPage";
import {CosmicNovaBedsViewPage} from "./CosmicNovaBedsViewPage";
import {CosmicNovaStaffPlanViewPage} from "./CosmicNovaStaffPlanViewPage";
import {CosmicNovaResponsibilitiesPage} from "./CosmicNovaResponsibilitiesPage";

const log = Factory.getLogger("Page.CosmicNovaBaseWardPage")

export class CosmicNovaBaseWardPage extends PageBase{

    private divAdmittedWithBeds         : any;
    private divAdmittedWithOutBeds      : any;
    private divAdmittedTechnicalBeds    : any;
    private divAdmittedAllBeds          : any;
    private btnBedIcons                 : any;
    private btnRoundStatus              : any;
    private btnAlertIcon                : any;
    private lblAdmissionDate            : any;
    private lblLeaveDate                : any;
    private lblMarkers                  : any;
    private lblMarkerModalList          : any;

    private topNavigationModule : CosmicNovaTopNavigationModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaBaseWardPage;
        this.topNavigationModule    = new CosmicNovaTopNavigationModule();
        this.divAdmittedWithBeds        = super.findLocators(element.divAdmittedWithBeds.findBy, element.divAdmittedWithBeds.value);
        this.divAdmittedWithOutBeds     = super.findLocators(element.divAdmittedWithOutBeds.findBy, element.divAdmittedWithOutBeds.value);
        this.divAdmittedTechnicalBeds   = super.findLocators(element.divAdmittedTechnicalBeds.findBy, element.divAdmittedTechnicalBeds.value);
        this.divAdmittedAllBeds         = super.findLocators(element.divAdmittedAllBeds.findBy, element.divAdmittedAllBeds.value);
        this.btnBedIcons                = super.findLocators(element.btnBedIcons.findBy, element.btnBedIcons.value);
        this.btnRoundStatus             = super.findLocators(element.btnRoundStatus.findBy, element.btnRoundStatus.value);
        this.btnAlertIcon               = super.findLocators(element.btnAlertIcon.findBy, element.btnAlertIcon.value);
        this.lblAdmissionDate           = super.findLocators(element.lblAdmissionDate.findBy, element.lblAdmissionDate.value);
        this.lblLeaveDate               = super.findLocators(element.lblLeaveDate.findBy, element.lblLeaveDate.value);
        this.lblMarkers                 = super.findLocators(element.lblMarkers.findBy, element.lblMarkers.value);
        this.lblMarkerModalList         = super.findLocators(element.lblMarkerModalList.findBy, element.lblMarkerModalList.value);
    }

    /**
     * Validate: verify the ward unit header title
     * @param unit
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_WardUnitTitle(unit: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify ward unit title [:check_And_Validate_WardUnitTitle:]");
        this.topNavigationModule.action_CheckWardUnitTitle(unit);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the ward currently logged user
     * @param user
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_WardLoggedUser(user: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify ward logged user [:check_And_Validate_WardLoggedUser:]");this.Helper_Waits.waitFor(2000);
        this.topNavigationModule.action_CheckWardLoggedUser(user);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: change the ward selection and verify
     * @param ward
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_Select_Ward_View_Option(ward: string): CosmicNovaBaseWardPage{
        log.info("Step: Change the ward selection [:step_Select_Ward_View_Option:]");
        this.topNavigationModule.action_ClickSelectWardArrowIcon();
        this.topNavigationModule.action_ChooseAnotherWard(ward); this.Helper_Waits.waitFor(12000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: move to administrator portal
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_MoveToAdminPortal(): CosmicNovaAdminUnitPage{
        log.info("Step: Move to admin portal [:step_MoveToAdminPortal:]");
        this.topNavigationModule.action_ClickOnAdminButton();
        return new CosmicNovaAdminUnitPage();
    }

    /**
     * Step: make refresh ward page
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_RefreshBaseWardView(): CosmicNovaBaseWardPage{
        log.info("Step: Refresh the ward view [:step_RefreshBaseWardView:]");
        this.topNavigationModule.action_ClickOnRefreshButton();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: make snooze ward view
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SnoozeWardView(): CosmicNovaBaseWardPage{
        log.info("Step: Snooze the ward view [:step_SnoozeWardView:]");
        this.topNavigationModule.action_ClickOnSnoozeButton();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: make ward view full-screen
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_FullScreenWardView(): CosmicNovaBaseWardPage{
        log.info("Step: Make full screen ward view [:step_FullScreenWardView:]");
        this.topNavigationModule.action_ClickOnFullScreenButton();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: load re-login user view modal dialog
     * @returns {CosmicNovaSubLoginPage}
     */
    public step_ReLoginUserView(): CosmicNovaSubLoginPage{
        log.info("Step: Get login user panel [:step_ReLoginUserView:]");
        this.topNavigationModule.action_ClickOnReLoginButton();
        return new CosmicNovaSubLoginPage();
    }

    /**
     * Step: click on the re-logout button
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_ReLogoutUserView(): CosmicNovaBaseWardPage{
        log.info("Step: Get logout user panel [:step_ReLoginUserView:]");
        this.topNavigationModule.action_ClickOnReLogoutButton();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the basic user's top icon list
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_BasicUserTopIconsSet(): CosmicNovaBaseWardPage{
        log.info("Validate: Verify top icon set for basic users [:check_And_Validate_BasicUserTopIconsSet:]");
        this.topNavigationModule.action_CheckTopIconSetWithBasicUser();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validation: verify the advance user's top icon list
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_AdvanceUserTopIconsSet(): CosmicNovaBaseWardPage{
        log.info("Validate: Verify top icon set for advance users [:check_And_Validate_AdvanceUserTopIconsSet:]");
        this.topNavigationModule.action_CheckTopIconSetWithAdvanceUser();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify given tab availability under main menu
     * @param tab
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_MainMenusAvailability(tab: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify main menu availability [:check_And_Validate_MainMenusAvailability:]");
        this.topNavigationModule.action_CheckMenuOptionAvailability(tab);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify given tab not availability under main menu
     * @param tab
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_MainMenusNotAvailability(tab: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify main menu availability [:check_And_Validate_MainMenusAvailability:]");
        this.topNavigationModule.action_CheckMenuOptionNotAvailability(tab);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: move to view using main menu
     */
    public step_MoveToWardView(){
        log.info("Step: Move to ward view page [:step_MoveToWardView:]");
        this.topNavigationModule.action_ClickMainMenu('Ward');
    }

    /**
     * Step: move to team-view using main menu
     * @param team
     */
    public step_MoveToTeamView(team: string): CosmicNovaTeamViewPage{
        log.info("Step: Move to "+team+" team view page [:step_MoveToTeamView:]");
        this.topNavigationModule.action_ClickMainMenu(team);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Step: move to staff-plan view using main menu
     */
    public step_MoveToStaffPlanView(): CosmicNovaStaffPlanViewPage{
        log.info("Step: Move to staff plan view page [:step_MoveToStaffPlanView:]");
        this.topNavigationModule.action_ClickMainMenu('Staff Plan');
        return new CosmicNovaStaffPlanViewPage();
    }

    /**
     * Step: move to staffing view using main menu
     */
    public step_MoveToStaffingView(): CosmicNovaStaffingViewPage{
        log.info("Step: Move to staffing view page [:step_MoveToStaffingView:]");
        this.topNavigationModule.action_ClickMainMenu('Staffing');
        return new CosmicNovaStaffingViewPage();
    }

    /**
     * Step: move to bed view using main menu
     */
    public step_MoveToBedView(): CosmicNovaBedsViewPage{
        log.info("Step: Move to bed view page [:step_MoveToBedView:]");
        this.topNavigationModule.action_ClickMainMenu('Bed');
        return new CosmicNovaBedsViewPage();
    }

    /**
     * Step: move to responsibility view using main menu
     */
    public step_MoveToResponsibilitiesView(): CosmicNovaResponsibilitiesPage{
        log.info("Step: Move to responsibilities view page [:step_MoveToResponsibilitiesView:]");
        this.topNavigationModule.action_ClickMainMenu('Responsibilities');
        return new CosmicNovaResponsibilitiesPage();
    }

    /**
     * Step: search and find given admitted patient and click on it
     * @param patient
     */
    public step_SelectAdmittedPatientWithBed(patient: string): CosmicNovaActivityViewPage{
        log.info("Step: Select "+patient+" from admitted patient with bed list [:step_SelectAdmittedPatientWithBed:]");
        this.Helper_Actions.findContentAndClick(this.divAdmittedWithBeds,patient);
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: search and find given admitted patient without bed and click on it
     * @param patient
     * @constructor
     */
    public SelectAdmittedPatientWithOutBed(patient: string): CosmicNovaActivityViewPage{
        log.info("Step: Select "+patient+" from admitted patient without bed list [:SelectAdmittedPatientWithOutBed:]");
        this.Helper_Actions.findContentAndClick(this.divAdmittedWithOutBeds,patient);
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: search and find given technical bed and click on it
     * @param patient
     * @constructor
     */
    public SelectAdmittedPatientWithTechnicalBed(patient: string): CosmicNovaBaseWardPage{
        log.info("Step: Select "+patient+" from admitted patient in technical bed list [:SelectAdmittedPatientWithTechnicalBed:]");
        this.Helper_Actions.findContentAndClick(this.divAdmittedTechnicalBeds,patient);
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the given admitted patient bed record under list
     * @param patient
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_AdmittedPatientUnderWithBedArea(patient: string): CosmicNovaBaseWardPage{
        log.info("Validate: Admitted patient availability under with bed section [:check_And_Validate_AdmittedPatientUnderWithBedArea:]")
        this.Helper_Actions.checkTextContentFromList(this.divAdmittedWithBeds,patient);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify not in the given admitted patient bed record under list
     * @param patient
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_NotInAdmittedPatientUnderWithBedArea(patient: string): CosmicNovaBaseWardPage{
        log.info("Validate: Admitted patient availability under with bed section [:check_And_Validate_NotInAdmittedPatientUnderWithBedArea:]")
        this.Helper_Actions.checkTextNotAvailability(this.divAdmittedWithBeds,patient);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the given admitted patient without bed record under list
     * @param patient
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_AdmittedPatientUnderWithOutBedArea(patient: string): CosmicNovaBaseWardPage{
        log.info("Validate: Admitted patient availability under without bed section [:check_And_Validate_AdmittedPatientUnderWithOutBedArea:]")
        this.Helper_Actions.checkTextContentFromList(this.divAdmittedWithOutBeds,patient);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the given technical bed record under list
     * @param patient
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_AdmittedPatientUnderTechnicalBedArea(patient: string): CosmicNovaBaseWardPage{
        log.info("Validate: Admitted patient availability under technical bed section [:check_And_Validate_AdmittedPatientUnderTechnicalBedArea:]")
        this.Helper_Actions.checkTextContentFromList(this.divAdmittedTechnicalBeds,patient);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: select given bed icon
     * @param bed
     */
    public step_SelectBedIcon(bed: string): CosmicNovaBaseWardPage{
        log.info("Step: Select "+bed+" bed from bed list [:step_SelectBedIcon:]");
        this.Helper_Actions.findTextAndClick(this.btnBedIcons, bed);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: select given non-assigned patient bed icon
     * @param bed
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SelectGivenNonAssignedBedIcon(bed: number): CosmicNovaBaseWardPage{
        log.info("Step: Select "+bed+" th place bed from non-assinged bed list [:step_SelectGivenNonAssignedBedIcon:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnBedIcons, bed);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: adding bed comment using empty bed pop-up
     * @param comment
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_AddingBedCommentUsingEmptyBedPopup(comment: string): CosmicNovaBaseWardPage{
        log.info("Step: enter empty bed comment [:step_AddingBedCommentUsingEmptyBedPopup:]");
        var bedComment : any = this.findLocators("model","model");
        new TextField(bedComment).enterText(comment);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: move patient into bed using empty bed pop-up
     * @param patient
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_MovePatientToBedUsingBedExchageModal(patient: string): CosmicNovaBaseWardPage{
        log.info("Step: Move patient into bed using empty bed pop-up [:step_MovePatientToBedUsingBedExchageModal:]");
        var bedComment : any = this.findLocators("className","ContactInfo");
        this.Helper_Actions.findContentAndClick(bedComment,patient);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: move patient using empty bed pop-up
     * @param patient
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SearchMovePatientToBedUsingEmptyBedPopup(patient: string): CosmicNovaBaseWardPage{
        log.info("Step: Search patient who can move using empty bed pop-up [:step_SearchMovePatientToBedUsingEmptyBedPopup:]");
        var patientSearch : any = this.findLocators("model","text");
        new TextField(patientSearch).clickOnText();this.Helper_Waits.waitFor(1000);
        var patientList : any = this.findLocators("className","NameAndAge");
        this.Helper_Actions.findContentAndClick(patientList,patient);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: save empty bed comment and move patient using empty popup
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SaveEmptyBedCommentPopup(): CosmicNovaBaseWardPage{
        log.info("Step: Press save in empty bed comment pop-up [:step_SaveEmptyBedCommentPopup:]");
        var bedCommentSave : any = this.findLocators("css","button[ng-click='save($event)']");
        new Button(bedCommentSave).click();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the empty bed comment message
     * @param comment
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_EmptyBedCommentMsg(comment: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify empty bed comment message availability [:check_And_Validate_EmptyBedCommentMsg:]");
        var commentMsg : any = this.findLocators("className","WhenEmpty");
        this.Helper_Actions.checkTextContentFromList(commentMsg,comment);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the availability of the given bed icon
     * @param bed
     */
    public check_And_Validate_BedIconAvailability(bed: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify "+bed+" bed availability in ward view [:check_And_Validate_BedIconAvailability:]");
        this.Helper_Actions.checkTextFromList(this.btnBedIcons, bed);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: click on the given patient round status icon
     * @param record
     */
    public step_SelectRoundStateIcon(record: number): CosmicNovaBaseWardPage{
        log.info("Step: Click on the given "+record+" place round status icon [:step_SelectRoundStateIcon:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnRoundStatus,record);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: select given round status option using status pop-up
     * @param state
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_ChooseRoundStateColorCode(state: string): CosmicNovaBaseWardPage{
        log.info("Step: Click on the "+state+" round status code in pop-up [:step_ChooseRoundStateColorCode:]");
        var statusColorPanel : any = this.findLocators("repeater","roundStatus in roundStatusList");
        this.Helper_Actions.findTextAndClick(statusColorPanel, state);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the slert icon color combination
     * @param color
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_AlertIcon(color: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify the alert color code as "+color+" [:check_And_Validate_AlertIcon:]");
        this.Helper_Actions.checkSpecificElementAttributeValue(this.btnAlertIcon,1,'style',color)
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the given patient record admission date
     * @param date
     */
    public check_And_Validate_AdmissionDate(date: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify the admission date as "+date+" [:check_And_Validate_AdmissionDate:]");
        this.Helper_Actions.checkTextContentFromList(this.lblAdmissionDate,date);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validation: verify the given patient record leave date
     * @param date
     */
    public check_And_Validate_LeaveDate(date: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify the leave date as "+date+" [:check_And_Validate_LeaveDate:]");
        this.Helper_Actions.checkTextContentFromList(this.lblLeaveDate,date);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: load patient leave setting popup by clicking out date
     * @param record
     */
    public step_ClickOnLeaveDateAndLoadPopup(record: number): CosmicNovaBaseWardPage{
        log.info("Step: Click on the -out- date and load popup [:step_ClickOnLeaveDateAndLoadPopup:]");
        this.Helper_Actions.findSpecificElementAndClick(this.lblLeaveDate,record);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: perform existing planned discharge label remove feature
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_MakePlannedDischargeRemoveOption(): CosmicNovaBaseWardPage{
        log.info("Step: Make remove existing planned discharge label [:step_MakePlannedDischargeRemoveOption:]");
        var deletePlannedDischarge : any = this.findLocators("css","div[ng-click='openRemovePopup($event)']");
        new Button(deletePlannedDischarge).click();
        var deleteConfirm : any = this.findLocators("css","button[ng-click='ok()']");
        new Button(deleteConfirm).click();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: set time range for planned discharge
     * @param time
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SetTimeRangeForPlannedDischarge(time: string): CosmicNovaBaseWardPage{
        log.info("Step: Set time range for planned discharge [:step_SetTimeRangeForPlannedDischarge:]");
        var timeDischarge : any = this.findLocators("xpath","//nova-popup-box//div[2]/textarea");
        new Button(timeDischarge).click();
        var timeDischarge : any = this.findLocators("css","div[ng-click='selectPartOfDay(option)']");
        this.Helper_Actions.findTextAndClick(timeDischarge,time);

        /*var timeDischargeX : any = element.all(by.model("model.timeOfDay"));
        new Button(timeDischargeX).click();
        var timeDischarge : any = element.all(by.css(".labelsContainer")).find('i');
        this.Helper_Actions.findTextAndClick(timeDischarge,time);this.Helper_Waits.waitFor(2000);*/
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: set add-on message for planned discharge
     * @param addon
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SetAddOnForPlannedDischarge(addon: string): CosmicNovaBaseWardPage{
        log.info("Step: Set add-on message for planned discharge [:step_SetAddOnForPlannedDischarge:]");
        var addonDischarge : any = this.findLocators("xpath","//nova-text-box//div[2]/textarea");
        new TextField(addonDischarge).enterText(addon);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: save planned discharge changes
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SavePlannedDischargePopup(): CosmicNovaBaseWardPage{
        log.info("Step: Save planned discharged changes [:step_SavePlannedDischargePopup:]");
        var saveDischarge : any = element.all(by.css("button[ng-click='save($event)']"));
        new Button(saveDischarge).click();this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify applied planned discharged time under ward patient record
     * @param time
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_PlannedDischargeTime(time: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify planned discharge time period [:check_And_Validate_PlannedDischargeTime:]");
        this.Helper_Actions.checkTextContentFromList(this.lblLeaveDate,time);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify applied planned discharged add-on comment under ward patient record
     * @param addon
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_PlannedDischargeAddOn(addon: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify planned discharge add-on message [:check_And_Validate_PlannedDischargeAddOn:]");
        this.Helper_Actions.checkTextContentFromList(this.lblLeaveDate,addon);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: load given record information-marker pop-up in ward view
     * @param recod
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SelectInforMarkerPanel(recod: number): CosmicNovaBaseWardPage{
        log.info("Step: Click on the "+recod+" record information marker panel [:step_SelectInforMarkerPanel:]");
        this.Helper_Actions.findSpecificElementAndClick(this.lblMarkers,recod);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify given information-marker keyword under pop-up
     * @param info
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_InfoMarkersAndPackageTagsUnderPopUp(info: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify info marker pop-up with "+info+" record [:check_And_Validate_InfoMarkersAndPackageTagsUnderPopUp:]");
        this.Helper_Actions.checkTextFromList(this.lblMarkerModalList,info);
        Navigate.visit('CosmicNovaBaseWardPage');//[Pending]
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify given information-marker keyword under patient record tag list
     * @param info
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_InfoMarkerAndPackageAvailabilityUnderTags(info: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify info marker tags with "+info+" record [:check_And_Validate_InfoMarkerTags:]");
        this.Helper_Actions.checkTextContentFromList(this.lblMarkers,info);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify given information-marker keyword not available under patient record tag list
     * @param info
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_InfoMarkerAndPackageNotAvailableUnderTags(info: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify info marker tags with "+info+" record [:check_And_Validate_InfoMarkerTags:]");
        this.Helper_Actions.checkTextNotAvailability(this.lblMarkers,info);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify patient name record against given bed id
     * @param bed
     * @param patient
     */
    public check_And_Validate_PatientNameAgainstBedId(bed: string, patient: string):CosmicNovaBaseWardPage{
        log.info("Validate: Verify "+patient+" patient admit on "+bed+" bed [:check_And_Validate_PatientNameAgainstBedId:]");
        Component.CheckPatientAgainstBedId(this.divAdmittedAllBeds, bed ,patient);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the current round status color code
     * @param color
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_RoundStatusIconColorCode(color: string, record: number): CosmicNovaBaseWardPage{
        log.info("Validate: Verify given round status color code [:check_And_Validate_RoundStatusIconColorCode:]");
        this.Helper_Actions.checkSpecificElementAttributeValue(this.btnRoundStatus,record,'style',color);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the bed exchange modal view title
     * @param title
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_BedChangeModalView(title: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify bed change modal view load [:check_And_Validate_BedChangeModalView:]");
        var titleBedChangeModal : any = this.findLocators("xpath","//div[@class='dialog-body']/h4");
        this.Helper_Actions.checkTextAvailability(titleBedChangeModal, title);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: select given book clip tag under change modal view
     * @param clip
     * @returns {CosmicNovaBaseWardPage}
     */
    public selectGivenBookClipChangeModalView(clip: number): CosmicNovaBaseWardPage{
        log.info("Step: Select given book clip record under change modal view");
        //var bookClipsList : any = this.findLocators("className","NovaBookedPatientClip");
        var bookClipsList : any = this.findLocators("className","NovaBookedPatientClip");
        this.Helper_Actions.findSpecificElementAndClick(bookClipsList,clip);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the applied book clip under ward view
     * @param clip
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_BookClipAvailablityOnPatient(clip: string): CosmicNovaBaseWardPage{
        log.info("Validate: Verify the applied book clip under ward view [:check_And_Validate_BookClipAvailablityOnPatient:]");
        var bookClipsList : any = this.findLocators("className","NovaBookedPatientText");
        this.Helper_Actions.checkTextContentFromList(bookClipsList,clip);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: remove existing book-clip tag using pop-up
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_RemoveExistingBookClip(): CosmicNovaBaseWardPage{
        log.info("Step: remove existing book clip using pop-up [:step_RemoveExistingBookClip:]");
        var bookClipsList : any = this.findLocators("className","NovaBookedPatientText");
        this.Helper_Actions.findFirstElementAndClick(bookClipsList);
        var removeBookClip : any = this.findLocators("css","div[ng-click='removeBooking()");
        new Button(removeBookClip).click();this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: assigned bed for patient via book-clip
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_AssignBedViaBookClip(): CosmicNovaBaseWardPage{
        log.info("Step: Assigned bed for patient via book-clip [:step_AssignBedViaBookClip:]");
        var bookClipsList : any = this.findLocators("className","NovaBookedPatientText");
        this.Helper_Actions.findFirstElementAndClick(bookClipsList);
        var assignBookClip : any = this.findLocators("css","div[ng-click='assignBed()");
        new Button(assignBookClip).click();this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: remove patient from selected bed using bed exchange modal view
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_RemoveFromBedUsingBedChangeModalView(): CosmicNovaBaseWardPage{
        log.info("Step: Remove from bed given bed record using bed change modal dialog view [:step_RemoveFromBedUsingBedChangeModalView:]");
        var removeFromBed : any = this.findLocators("css","button[ng-click='removeFromBed(contact.bed)']");
        new Button(removeFromBed).click();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step:
     * @param bed
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_LoadBedChangeModalView(bed: string): CosmicNovaBaseWardPage{
        log.info("Step: Load given bed change modal dialog view [:step_LoadBedChangeModalView:]");

        return new CosmicNovaBaseWardPage();
    }

    public step_SelectBedMovePatientUsingBedChangeModalView(patient: string): CosmicNovaBaseWardPage{
        log.info("Step: Select patient who can assign to new bed using bed change modal dialog view [:step_SelectBedMovePatientUsingBedChangeModalView:]");

        return new CosmicNovaBaseWardPage();
    }


}