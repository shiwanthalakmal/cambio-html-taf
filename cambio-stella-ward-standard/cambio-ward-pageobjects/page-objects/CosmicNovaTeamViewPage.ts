/**
 * Created by SLakmal on 6/5/2017.
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
import {Div} from "../../../ui-core/ui-elements/Div";
import {CosmicNovaBedsViewPage} from "./CosmicNovaBedsViewPage";

const log = Factory.getLogger("Page.CosmicNovaTeamViewPage")

export class CosmicNovaTeamViewPage extends PageBase{

    private divTitleBedIcon         : any;
    private divTitleActiveSignal    : any;
    private divTitlePatientName     : any;
    private divTitlePatientAge      : any;
    private divInforMarkerArea      : any;
    private divStatusBar            : any;
    private divTagBar               : any;
    private divStaffAssignArea      : any;
    private divInTimeBar            : any;
    private divOutTimeBar           : any;
    private divActivityPackagesList : any;

    private topNavigationModule : CosmicNovaTopNavigationModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaTeamViewPage;
        this.topNavigationModule = new CosmicNovaTopNavigationModule();
        this.divTitleBedIcon        = super.findLocators(element.divTitleBedIcon.findBy, element.divTitleBedIcon.value);
        this.divTitleActiveSignal   = super.findLocators(element.divTitleActiveSignal.findBy, element.divTitleActiveSignal.value);
        this.divTitlePatientName    = super.findLocators(element.divTitlePatientName.findBy, element.divTitlePatientName.value);
        this.divTitlePatientAge     = super.findLocators(element.divTitlePatientAge.findBy, element.divTitlePatientAge.value);
        this.divInforMarkerArea     = super.findLocators(element.divInforMarkerArea.findBy, element.divInforMarkerArea.value);
        this.divStatusBar           = super.findLocators(element.divStatusBar.findBy, element.divStatusBar.value);
        this.divTagBar              = super.findLocators(element.divTagBar.findBy, element.divTagBar.value);
        this.divStaffAssignArea     = super.findLocators(element.divStaffAssignArea.findBy, element.divStaffAssignArea.value);
        this.divInTimeBar           = super.findLocators(element.divInTimeBar.findBy, element.divInTimeBar.value);
        this.divOutTimeBar          = super.findLocators(element.divOutTimeBar.findBy, element.divOutTimeBar.value);
        this.divActivityPackagesList= super.findLocators(element.divActivityPackagesList.findBy, element.divActivityPackagesList.value);
    }

    /**
     * Step: move to view using main menu
     */
    public step_MoveToWardView(){
        log.info("Step: Move to ward view page [:step_MoveToWardView:]");
        this.topNavigationModule.action_ClickMainMenu('Ward');
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
     * Step: click on the given bed icon
     * @returns {CosmicNovaTeamViewPage}
     */
    public step_ClickOnTeamBedIcon(): CosmicNovaTeamViewPage{
        log.info("Step: Click on the given bed icon [:step_ClickOnTeamBedIcon:]")
        new Button(this.divTitleBedIcon).click();
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify given team bed icon availability
     * @param bed
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_TeamBedIcon(bed: string): CosmicNovaTeamViewPage{
        log.info("Validate: Verify given team bed icon availability [:check_And_Validate_TeamBedIcon:]")
        this.Helper_Actions.checkTextAvailability(this.divTitleBedIcon,bed);
        return new CosmicNovaTeamViewPage();
    }

    public check_And_Validate_TeamActiveSignalIcon(state: string): CosmicNovaTeamViewPage{

        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify team title patient name
     * @param name
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_TeamPatientName(name: string): CosmicNovaTeamViewPage{
        log.info("Validate: Verify team title patient name [:check_And_Validate_TeamPatientName:]");
        this.Helper_Assertion.expectToEqual(this.divTitlePatientName,name);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify team title patient age
     * @param age
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_TeamPatientAge(age: string): CosmicNovaTeamViewPage{
        log.info("Validate: Verify team title patient age [:check_And_Validate_TeamPatientAge:]");
        this.Helper_Assertion.expectToEqual(this.divTitlePatientAge,'-'+age);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify applied information markers under team view
     * @param info
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_AppliedInforMarker(info: string): CosmicNovaTeamViewPage{
        log.info("Validate: Verify applied information markers under team view [:check_And_Validate_AppliedInforMarker:]")
        this.Helper_Actions.checkTextAvailability(this.divInforMarkerArea,info);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Step: applied tag under team panel
     * @param tag
     * @returns {CosmicNovaTeamViewPage}
     */
    public step_ApplyTagUnderTeamView(tag: string): CosmicNovaTeamViewPage{
        log.info("Step: Applied tag details under team panel");
        new Button(this.divTagBar).click();
        var tagBtn : any = this.findLocators("xpath","//section/nova-list-box[1]/div/div[2]/div[1]");
        new Button(tagBtn).click();
        var tagList : any = this.findLocators("xpath","//nova-modal[2]//form/div");
        this.Helper_Actions.findTextAndClick(tagList,tag);
        var tagSave : any = this.findLocators("css","button[ng-click='save($event)']");
        new Button(tagSave).click();
        return new CosmicNovaTeamViewPage();
    }

    public check_And_Validate_TagDetails(tag: string): CosmicNovaTeamViewPage{

        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify enlistment date under team panel
     * @param date
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_EnlistmentDate(date: string): CosmicNovaTeamViewPage{
        log.info("Validate: Verify enlistment date under team panel");
        this.Helper_Actions.checkTextContentFromList(this.divInTimeBar,date);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Step: make patient discharge via team panel
     * @param time
     * @returns {CosmicNovaTeamViewPage}
     */
    public step_TeamDischargePatient(time: string): CosmicNovaTeamViewPage{
        log.info("Step: Make patient discharge via team panel [:step_TeamDischargePatient:]");
        new Div(this.divOutTimeBar).click();
        var timeDischarge : any = this.findLocators("xpath","//nova-popup-box//div[2]/textarea");
        new Button(timeDischarge).click();
        var timeDischarge : any = this.findLocators("css","div[ng-click='selectPartOfDay(option)']");
        this.Helper_Actions.findTextAndClick(timeDischarge,time);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Step: set patient discharge add-on details
     * @param addon
     * @returns {CosmicNovaTeamViewPage}
     */
    public step_TeamDischargeAddOnDetails(addon: string): CosmicNovaTeamViewPage{
        log.info("Step: Set patient discharge add-on details [:step_TeamDischargeAddOnDetails:]");
        var addonDischarge : any = this.findLocators("xpath","//nova-text-box//div[2]/textarea");
        new TextField(addonDischarge).enterText(addon);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Step: save planned discharge popup under team panel
     * @returns {CosmicNovaTeamViewPage}
     */
    public step_SavePlannedDischargePopup(): CosmicNovaTeamViewPage{
        log.info("Step: Save planned discharge popup under team panel [:step_SavePlannedDischargePopup:]");
        var saveDischarge : any = this.findLocators("css","button[ng-click='save($event)']");
        new Button(saveDischarge).click();this.Helper_Waits.waitFor(1000);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify discharge time period under team panel
     * @param info
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_DischargeTimeAndAddOn(info: string): CosmicNovaTeamViewPage{
        log.info("Validate: Verify discharge time period under team panel [:check_And_Validate_DischargeTimeAndAddOn:]");
        this.Helper_Actions.checkTextContentFromList(this.divOutTimeBar,info);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Step: make remove existing planned discharge label
     * @returns {CosmicNovaTeamViewPage}
     */
    public step_TeamDischargeRemoveOption(): CosmicNovaTeamViewPage{
        log.info("Step: Make remove existing planned discharge label [:step_MakePlannedDischargeRemoveOption:]");
        new Div(this.divOutTimeBar).click();
        var deletePlannedDischarge : any = element.all(by.css("div[ng-click='openRemovePopup($event)']"));
        new Button(deletePlannedDischarge).click();
        var deleteConfirm : any = element.all(by.css("button[ng-click='ok()']"));
        new Button(deleteConfirm).click();
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify applied round status
     * @param state
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_TeamRoundStatus(state: string): CosmicNovaTeamViewPage{
        log.info("Validate: Verify applied round status [:check_And_Validate_TeamRoundStatus:]");
        this.Helper_Actions.checkTextAvailability(this.divStatusBar,state);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Step: change existing round status
     * @param status
     * @returns {CosmicNovaTeamViewPage}
     */
    public step_TeamRoundStatusChange(status: string): CosmicNovaTeamViewPage{
        log.info("Step: make change existing round status [:step_TeamRoundStatusChange:]");
        new Div(this.divStatusBar).click();
        var statusColorPanel : any = this.findLocators("repeater","roundStatus in roundStatusList");
        this.Helper_Actions.findTextAndClick(statusColorPanel, status);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify package and activity details under team panel
     * @param detial
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_TeamPackageAndActivitySummary(detial: string): CosmicNovaTeamViewPage{
        log.info("Validate: Verify package and activity details under team panel");
        this.Helper_Actions.checkTextContentFromList(this.divActivityPackagesList,detial);
        return new CosmicNovaTeamViewPage();
    }

    /**
     * Validate: verify active signal icon with empty signals
     * @returns {CosmicNovaTeamViewPage}
     */
    public check_And_Validate_TeamEmptyActiveSignalIcon(): CosmicNovaTeamViewPage{
        log.info("Validate: Verify active signal icon with empty signals [:check_And_Validate_TeamEmptyActiveSignalIcon:]");
        new Div(this.divTitleActiveSignal).click();
        var activeSignalPopup : any = element.all(by.css(".modal-dialog"));
        this.Helper_Actions.checkTextAvailability(activeSignalPopup, 'This patient has no active signals.')
        return new CosmicNovaTeamViewPage();
    }
}