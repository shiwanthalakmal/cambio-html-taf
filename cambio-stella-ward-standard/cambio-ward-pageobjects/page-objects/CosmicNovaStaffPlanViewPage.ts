/**
 * Created by SLakmal on 6/12/2017.
 */
import {PageBase, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaTopNavigationModule} from "../module-objects/CosmicNovaTopNavigationModule";
import {CosmicNovaAdminUnitPage} from "./CosmicNovaAdminUnitPage";
import {CosmicNovaSubLoginPage} from "./CosmicNovaSubLoginPage";
import {Navigate} from "../aspect-objects/Navigate";
import {Component} from "../aspect-objects/Component";
import {CosmicNovaStaffingViewPage} from "./CosmicNovaStaffingViewPage";
import {element, by, protractor} from "protractor";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Button} from "../../../ui-core/ui-elements/Button";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";
import {link} from "fs";
import {Link} from "../../../ui-core/ui-elements/Link";
import {CosmicNovaActivitySummaryModule} from "../module-objects/CosmicNovaActivitySummaryModule";
import {CosmicNovaActivityViewPage} from "./CosmicNovaActivityViewPage";

const log = Factory.getLogger("Page.CosmicNovaStaffPlanViewPage")

export class CosmicNovaStaffPlanViewPage extends PageBase {

    private lblTeamList             : any;
    private lblRolesList            : any;
    private ulStaffMembersUnderRole : any;
    private btnTeamPhone            : any;
    private btnStaffPhone           : any;
    private btnBedIcon              : any;
    private lblPatientName          : any;
    private lblInTime               : any;
    private lblOutTime              : any;
    private lblMembersOfTeam        : any;
    private lblPatientOfRole        : any;

    private topNavigationModule : CosmicNovaTopNavigationModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaStaffPlanViewPage;
        this.topNavigationModule = new CosmicNovaTopNavigationModule();
        this.lblTeamList            = super.findLocators(element.lblTeamList.findBy, element.lblTeamList.value);
        this.lblRolesList           = super.findLocators(element.lblRolesList.findBy, element.lblRolesList.value);
        this.ulStaffMembersUnderRole = super.findLocators(element.ulStaffMembersUnderRole.findBy, element.ulStaffMembersUnderRole.value);
        this.btnTeamPhone           = super.findLocators(element.btnTeamPhone.findBy, element.btnTeamPhone.value);
        this.btnStaffPhone          = super.findLocators(element.btnStaffPhone.findBy, element.btnStaffPhone.value);
        this.btnBedIcon             = super.findLocators(element.btnBedIcon.findBy, element.btnBedIcon.value);
        this.lblPatientName         = super.findLocators(element.lblPatientName.findBy, element.lblPatientName.value);
        this.lblInTime              = super.findLocators(element.lblInTime.findBy, element.lblInTime.value);
        this.lblOutTime             = super.findLocators(element.lblOutTime.findBy, element.lblOutTime.value);
        this.lblMembersOfTeam       = super.findLocators(element.lblMembersOfTeam.findBy, element.lblMembersOfTeam.value);
        this.lblPatientOfRole       = super.findLocators(element.lblPatientOfRole.findBy, element.lblPatientOfRole.value);
    }

    /**
     * Step: move to view using main menu
     */
    public step_MoveToWardView(){
        log.info("Step: Move to ward view page [:step_MoveToWardView:]");
        this.topNavigationModule.action_ClickMainMenu('Ward');
    }

    public check_And_Validate_TeamsAvailability(team: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Actions.findTextAndClick(this.lblTeamList,team);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Validate_RolesAvailability(role: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Actions.checkTextContentFromList(this.lblRolesList,role);
        return new CosmicNovaStaffPlanViewPage();
    }

    public step_EnterContactNumberForTeam(number: string): CosmicNovaStaffPlanViewPage{
        new Button(this.btnTeamPhone).click();
        var numberPopup : any = this.findLocators("model","telephoneNumber");
        var btnDone : any = this.findLocators("css","button[ng-click='done()']");
        new TextField(numberPopup).enterText(number);
        new Button(btnDone).click();
        return new CosmicNovaStaffPlanViewPage();
    }

    public step_EnterContactNumberForStaff(number: string): CosmicNovaStaffPlanViewPage{
        new Button(this.btnStaffPhone).click();
        var numberPopup : any = this.findLocators("model","telephoneNumber");
        var btnDone : any = this.findLocators("css","button[ng-click='done()']");
        new TextField(numberPopup).enterText(number);
        new Button(btnDone).click();
        return new CosmicNovaStaffPlanViewPage();
    }

    public step_LoadGivenPatientSummaryView(patient: string): CosmicNovaActivityViewPage{
        this.Helper_Actions.findContentAndClick(this.lblPatientName, patient);
        return new CosmicNovaActivityViewPage();
    }

    public check_And_Validate_AppliedPhoneNumber(number: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Waits.waitFor(1000);var lblPhoneNo : any = this.findLocators("css",".TelephoneNumberLabel");
        this.Helper_Actions.checkTextFromList(lblPhoneNo,number);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Validate_StaffMemberUnderRole(member: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Actions.checkTextContentFromList(this.lblPatientOfRole,member);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Validate_UnPerformedActivitiesCount(count: string): CosmicNovaStaffPlanViewPage{
        var taskCounter : any = this.findLocators("css",".NovaTaskCounter");
        this.Helper_Actions.checkTextFromList(taskCounter,count);
        return new CosmicNovaStaffPlanViewPage();
    }

    public step_ClickOnGivenStaffMember(member: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Actions.findContentAndClick(this.lblPatientOfRole,member);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Validate_PatientUnderStaffMember(patient: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Actions.checkTextContentFromList(this.lblPatientName,patient);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Verify_GivenRoleUnderTeamSection(role: string): CosmicNovaStaffPlanViewPage{
        var teamSection : any = this.findLocators("repeater","team in novaModel.getTeamList() | orderBy:'name'");
        this.Helper_Actions.checkTextContentFromList(teamSection,role);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Verify_GivenStaffUnderRoleSection(staff: string): CosmicNovaStaffPlanViewPage{
        var roleSection : any = this.findLocators("repeater","role in novaModel().getRoleList() | filter:roleFilter | orderBy:'sortOrder'");
        this.Helper_Actions.checkTextContentFromList(roleSection,staff);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Validate_PatientBedUnderStaffMember(bed: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Actions.checkTextContentFromList(this.btnBedIcon,bed);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Validate_PatientInTimeFormte(format: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Actions.checkTextContentFromList(this.lblInTime,format);
        return new CosmicNovaStaffPlanViewPage();
    }

    public check_And_Validate_PatientOutTimeFormat(format: string): CosmicNovaStaffPlanViewPage{
        this.Helper_Actions.checkTextContentFromList(this.lblOutTime,format);
        return new CosmicNovaStaffPlanViewPage();
    }

    public step_ClickOnOutTimeAndLoadPopup(): CosmicNovaStaffPlanViewPage{
        new Button(this.lblOutTime).click();
        return new CosmicNovaStaffPlanViewPage();
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
        var timeDischarge : any = this.findLocators("xpath","//nova-popup-box[2]//div[2]/textarea");
        new Button(timeDischarge).click();
        var timeDischarge : any = this.findLocators("css","div[ng-click='selectPartOfDay(option)']");
        this.Helper_Actions.findTextAndClick(timeDischarge,time);

        /*var timeDischargeX : any = element.all(by.model("model.timeOfDay"));
         new Button(timeDischargeX).click();
         var timeDischarge : any = element.all(by.css(".labelsContainer")).find('i');
         this.Helper_Actions.findTextAndClick(timeDischarge,time);this.Helper_Waits.waitFor(2000);*/
        return new CosmicNovaBaseWardPage();
    }

}