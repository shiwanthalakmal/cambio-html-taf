/**
 * Created by SLakmal on 5/25/2017.
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

const log = Factory.getLogger("Page.CosmicNovaActivityViewPage")

export class CosmicNovaActivityViewPage extends PageBase{

    private btnAttentionSignalIcon      : any;
    private lblPatientName              : any;
    private lblPatientNumber            : any;
    private lblGenderIcon               : any;
    private btnCloseView                : any;
    private lblRoundStatusInfo          : any;
    private lblBedInfo                  : any;
    private lblTagInfo                  : any;
    private btnPresent                  : any;
    private lnkAddPackage               : any;
    private ulAddPackageList            : any;
    private lnkAddInfoMarker            : any;
    private ulAddInforMarkerList        : any;
    private lblEnlistmentDateValue      : any;
    private lblDischargeValue           : any;
    private lnkChangePlannedDischarge   : any;
    private lnkChangeActivitySummary    : any;

    private activitySummaryModule : CosmicNovaActivitySummaryModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaActivityViewPage;
        this.activitySummaryModule  = new CosmicNovaActivitySummaryModule();
        this.btnAttentionSignalIcon     = super.findLocators(element.btnAttentionSignalIcon.findBy, element.btnAttentionSignalIcon.value);
        this.lblPatientName             = super.findLocators(element.lblPatientName.findBy, element.lblPatientName.value);
        this.lblPatientNumber           = super.findLocators(element.lblPatientNumber.findBy, element.lblPatientNumber.value);
        this.lblGenderIcon              = super.findLocators(element.lblGenderIcon.findBy, element.lblGenderIcon.value);
        this.btnCloseView               = super.findLocators(element.btnCloseView.findBy, element.btnCloseView.value);
        this.lblRoundStatusInfo         = super.findLocators(element.lblRoundStatusInfo.findBy, element.lblRoundStatusInfo.value);
        this.lblBedInfo                 = super.findLocators(element.lblBedInfo.findBy, element.lblBedInfo.value);
        this.lblTagInfo                 = super.findLocators(element.lblTagInfo.findBy, element.lblTagInfo.value);
        this.btnPresent                 = super.findLocators(element.btnPresent.findBy, element.btnPresent.value);
        this.lnkAddPackage              = super.findLocators(element.lnkAddPackage.findBy, element.lnkAddPackage.value);
        this.ulAddPackageList           = super.findLocators(element.ulAddPackageList.findBy, element.ulAddPackageList.value);
        this.lnkAddInfoMarker           = super.findLocators(element.lnkAddInfoMarker.findBy, element.lnkAddInfoMarker.value);
        this.ulAddInforMarkerList       = super.findLocators(element.ulAddInforMarkerList.findBy, element.ulAddInforMarkerList.value);
        this.lblEnlistmentDateValue     = super.findLocators(element.lblEnlistmentDateValue.findBy, element.lblEnlistmentDateValue.value);
        this.lblDischargeValue          = super.findLocators(element.lblDischargeValue.findBy, element.lblDischargeValue.value);
        this.lnkChangePlannedDischarge  = super.findLocators(element.lnkChangePlannedDischarge.findBy, element.lnkChangePlannedDischarge.value);
        this.lnkChangeActivitySummary   = super.findLocators(element.lnkChangeActivitySummary.findBy, element.lnkChangeActivitySummary.value);
    }

    /**
     * Step: close patient summary view
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_ClosePatientSummaryView(): CosmicNovaBaseWardPage{
        log.info("Step: Close patient summary view [:step_ClosePatientSummaryView:]");
        new Button(this.btnCloseView).click();
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Validate: verify the patient name under summary view
     * @param name
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PatientNameUnderSummaryView(name: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify patient name under summary view [:check_And_Validate_PatientNameUnderSummaryView:]");
        this.Helper_Assertion.expectToEqual(this.lblPatientName,name);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify the patient gender icon availability
     * @param gen
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PatientGenderIcon(gen: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify patient gender icon [:check_And_Validate_PatientGenderIcon:]");
        var genderIcon : any = element.all(by.css(".icon-"+gen));
        this.Helper_Actions.isDisplayed(genderIcon);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify the patient id number under summary view
     * @param number
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PatientNumberUnderSummaryView(number: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify patient id number under summary view [:check_And_Validate_PatientNumberUnderSummaryView:]");
        this.Helper_Assertion.expectToContain(this.lblPatientNumber,number);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify the patient round status under summary view
     * @param code
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PatientRoundStatusCode(code: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify patient round status code under summary view [:check_And_Validate_PatientRoundStatusCode:]");
        this.Helper_Assertion.expectToEqual(this.lblRoundStatusInfo,code);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify patient bed id under summary view
     * @param id
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PatientBedIdDetails(id: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify patient bed id code under summary view [:check_And_Validate_PatientBedIdDetails:]");
        this.Helper_Assertion.expectToEqual(this.lblBedInfo,id);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: click on the bed tab under summary view
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_ClickOnThePatientBedTab(): CosmicNovaActivityViewPage{
        log.info("Step: Click on the patient summary bed tab [:step_ClickOnThePatientBedTab:]");
        new Button(this.lblBedInfo).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: click on the loaded patient's attention signal icon
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_ClickOnTheAttentionSignalIcon(): CosmicNovaActivityViewPage{
        log.info("Step: Click on the loaded patient's attention signal icon [:step_ClickOnTheAttentionSignalIcon:]");
        new Button(this.btnAttentionSignalIcon).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify empty attention signal popup message
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_EmptyAttentionSignal(): CosmicNovaActivityViewPage{
        log.info("Validate: Verify empty attention signal popup message [:check_And_Validate_EmptyAttentionSignal:]");
        var attentionSigPopup : any = element.all(by.xpath("//div[@ng-if='isAttentionSignalEmpty()']")); this.Helper_Waits.waitFor(1000);
        this.Helper_Assertion.expectToEqual(attentionSigPopup,'No warnings have been registered for this patient');
        return new CosmicNovaActivityViewPage();
    }

    public check_And_Validate_AttentionSignalList(record: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify attention signal record availability under list view [:check_And_Validate_AttentionSignalList:]");
        var attentionSigList : any = element.all(by.css(".entrySpacing")); this.Helper_Waits.waitFor(1000);
        this.Helper_Actions.checkTextContentFromList(attentionSigList,record);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: change patient mode from present state into un-present state
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_MakePatientUnPresentStateUnderSummaryView(): CosmicNovaActivityViewPage{
        log.info("Step: Change patient present state under summary view [:step_MakePatientUnPresentStateUnderSummaryView:]");
        new Button(this.btnPresent).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: change patient mode from un-present state into present state
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_MakePatientPresentStateUnderSummaryView(): CosmicNovaActivityViewPage{
        log.info("Step: Change patient present state under summary view [:step_MakePatientUnPresentStateUnderSummaryView:]");
        var presentIcon : any = element.all(by.css('.ng-untouched.ng-valid.animate.ng-dirty.ng-valid-parse>div'));
        new Button(presentIcon).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify bed icon color change according to present state
     * @param color
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_BedIconPresentStateChange(color: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify bed icon color code according to present state change [:check_And_Validate_BedIconPresentStateChange:]");
        this.Helper_Actions.checkElementAttributeValue(this.lblBedInfo,'style',color);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify enlistment date under summary view
     * @param type
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_EnlistmentDateUnderSummaryView(type: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify enlistment date under summary view [:check_And_Validate_EnlistmentDateUnderSummaryView:]");
        this.Helper_Actions.checkTextContentFromList(this.lblEnlistmentDateValue,type);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: set tag under summary view
     * @param tag
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SetPatientTagUsingSummaryView(tag: string): CosmicNovaActivityViewPage{
        log.info("Step: Set patient tag using summary view [:step_SetPatientTagUsingSummaryView:]");
        new Button(this.lblTagInfo).click();
        var tagBtn : any = element.all(by.xpath("//section/nova-list-box[1]//div[2]/div[1]"));
        new Button(tagBtn).click();
        var tagList : any = element.all(by.repeater("option in options track by $index"));
        this.Helper_Actions.findTextAndClick(tagList,tag);
        var tagSave : any = element.all(by.css("button[ng-click='save($event)']"));
        new Button(tagSave).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify patient tags info unde summary view
     * @param tags
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PatientTagUnderSummaryView(tags: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify tag info unader summary view [:check_And_Validate_PatientTagUnderSummaryView:]");
        this.Helper_Assertion.expectToEqual(this.lblTagInfo,tags);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: click on the planned discharge change link under summary view
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_ClickOnPlannedDischargeChangeLink(): CosmicNovaActivityViewPage{
        log.info("Step: Click on the planned discharge change link [:step_ClickOnPlannedDischargeChangeLink:]");
        new Link(this.lnkChangePlannedDischarge).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: perform existing planned discharge label remove option
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_MakePlannedDischargeRemoveOption(): CosmicNovaActivityViewPage{
        log.info("Step: Make remove existing planned discharge label [:step_MakePlannedDischargeRemoveOption:]");
        var deletePlannedDischarge : any = element.all(by.css("div[ng-click='openRemovePopup($event)']"));
        new Button(deletePlannedDischarge).click();
        var deleteConfirm : any = element.all(by.css("button[ng-click='ok()']"));
        new Button(deleteConfirm).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: set time range for planned discharge
     * @param time
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SetTimeRangeForPlannedDischarge(time: string): CosmicNovaActivityViewPage{
        log.info("Step: Set time range for planned discharge [:step_SetTimeRangeForPlannedDischarge:]");
        var timeDischarge : any = element.all(by.xpath("//nova-popup-box//div[2]/textarea"));
        new Button(timeDischarge).click();
        var timeDischarge : any = element.all(by.css("div[ng-click='selectPartOfDay(option)']"));
        this.Helper_Actions.findTextAndClick(timeDischarge,time);

        /*var timeDischargeX : any = element.all(by.model("model.timeOfDay"));
         new Button(timeDischargeX).click();
         var timeDischarge : any = element.all(by.css(".labelsContainer")).find('i');
         this.Helper_Actions.findTextAndClick(timeDischarge,time);this.Helper_Waits.waitFor(2000);*/
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: set add-on message for planned discharge
     * @param addon
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SetAddOnForPlannedDischarge(addon: string): CosmicNovaActivityViewPage{
        log.info("Step: Set add-on message for planned discharge [:step_SetAddOnForPlannedDischarge:]");
        var addonDischarge : any = element.all(by.xpath("//nova-text-box//div[2]/textarea"));
        new TextField(addonDischarge).enterText(addon);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: save planned discharge changes
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_SavePlannedDischargePopup(): CosmicNovaActivityViewPage{
        log.info("Step: Save planned discharged changes [:step_SavePlannedDischargePopup:]");
        var saveDischarge : any = this.findLocators("css","button[ng-click='save($event)']");
        new Button(saveDischarge).click();this.Helper_Waits.waitFor(1000);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify planned discharge time under summary view
     * @param time
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_PlannedDischargeTime(time: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify planned discharge time period [:check_And_Validate_PlannedDischargeTime:]");
        this.Helper_Actions.checkTextContentFromList(this.lblDischargeValue,time);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify planned discharge add-on under summary view
     * @param addon
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PlannedDischargeAddOn(addon: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify planned discharge add-on message [:check_And_Validate_PlannedDischargeAddOn:]");
        this.Helper_Actions.checkTextContentFromList(this.lblDischargeValue,addon);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: click on the add package link in summary view
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_ClickOnAddPackageLink(): CosmicNovaActivityViewPage{
        log.info("Step: Click on add package link [:step_ClickOnAddPackageLink:]");
        new Link(this.lnkAddPackage).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: enter search package details
     * @param pack
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SearchAddPackagePopup(pack: string): CosmicNovaActivityViewPage{
        log.info("Step: Search packages using add package pop-up [:step_SearchAddPackagePopup:]");
        var searchPackage : any = this.findLocators("xpath","//nova-text-box//div[2]/textarea");
        new TextField(searchPackage).enterText(pack);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: select given package record from search list
     * @param pack
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SelectGivenPackageInPopup(pack: string): CosmicNovaActivityViewPage{
        log.info("Step: Select "+pack+" from package list [:step_SelectGivenPackageInPopup:]");
        var packageListPopup : any = this.findLocators("repeater","item in values | orderBy:getOrderByValue track by $index");
        this.Helper_Actions.findContentAndClick(packageListPopup,pack);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: save selected adding packages
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SavePackageAddingUsingSummaryView(): CosmicNovaActivityViewPage{
        log.info("Step: Save add package selection pop-up");
        var savePackage : any = this.findLocators("css","button[ng-click='ok($event)']");
        new Button(savePackage).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify applied packages availability under summary view
     * @param pack
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PackageAvailabilityUnderSummaryView(pack: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify the package availability under summary list");
        this.Helper_Actions.checkTextContentFromList(this.ulAddPackageList,pack);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: remove existing given package from summary view
     * @param pack
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_RemoveGivenAppliedPackage(pack: string): CosmicNovaActivityViewPage{
        log.info("Step: Remove existing given package from summary view");
        this.Helper_Actions.findContentAndClick(this.ulAddPackageList,pack);
        var packageDeleteBtn : any = this.findLocators("css","div[ng-click='removeMarker($event)']");
        new Button(packageDeleteBtn).click();
        var packageDeleteBtn : any = this.findLocators("css","button[ng-click='ok()']");
        new Button(packageDeleteBtn).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: set a comment on applied package under summary view
     * @param comment
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SetCommentOnAppliedPackage(pack: string, comment: string): CosmicNovaActivityViewPage{
        this.Helper_Actions.findContentAndClick(this.ulAddPackageList,pack);
        log.info("Step: Set a comment on applied package");
        var txtComment : any = this.findLocators("xpath","//nova-text-box[1]//div[2]/textarea");
        new TextField(txtComment).enterText(comment);
        var saveComment : any = this.findLocators("css","button[ng-click='save($event)']");
        new Button(saveComment).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: set a add-on on applied package under summary view
     * @param addon
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SetAddOnOnAppliedPackage(pack: string, addon: string): CosmicNovaActivityViewPage{
        this.Helper_Actions.findContentAndClick(this.ulAddPackageList,pack);
        log.info("Step: Set a add-on on applied package");
        var txtAddon : any = this.findLocators("xpath","//nova-text-box[2]//div[2]/textarea");
        new TextField(txtAddon).enterText(addon);
        var saveComment : any = this.findLocators("css","button[ng-click='save($event)']");
        new Button(saveComment).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify set comment and add-on information under package record
     * @param addon
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_PackageCommentAndAddon(addon: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify the set package comments and add-on text");
        this.Helper_Actions.checkTextContentFromList(this.ulAddPackageList,addon);
        var commentImage : any = this.findLocators("css",".HasComment");
        this.Helper_Actions.isDisplayed(commentImage);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: click on the add infor-marker link in summary view
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_ClickOnAddInforMarkerLink(): CosmicNovaActivityViewPage{
        log.info("Step: Click on the add infor-marker link");
        new Link(this.lnkAddInfoMarker).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: Search infor-marker using add inform-marker pop-up
     * @param info
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SearchAddInfomarkerPopup(info: string): CosmicNovaActivityViewPage{
        log.info("Step: Search infor-marker using add inform-marker pop-up [:step_SearchAddInfomarkerPopup:]");
        var txtSearch : any = this.findLocators("xpath","//div/nova-text-box/div/div[2]/textarea");
        new TextField(txtSearch).enterText(info);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: enter free-text marker
     * @param info
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_EnterFreeTextMarkerForInforMarker(info: string): CosmicNovaActivityViewPage{
        log.info("Step: Enter free-text marker in infor-marker pop-up [:step_EnterFreeTextMarkerForInforMarker:]");
        var txtFreetext : any = this.findLocators("xpath","//form/nova-text-box/div/div[2]/textarea");
        new TextField(txtFreetext).enterText(info);
        txtFreetext.sendKeys(protractor.Key.ENTER);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: select given infor-marker from pop-up infor-markers available list
     * @param info
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SelectInforMarkerFromSearchList(info: string): CosmicNovaActivityViewPage{
        log.info("Step: Select "+info+" infor-marker record in search list [:step_SelectInforMarkerFromSearchList:]");
        var inforMarkerPopupList : any = this.findLocators("css",".Marker");
        this.Helper_Actions.findContentAndClick(inforMarkerPopupList,info);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: save information marker changes and selection
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SaveInforMarkerPopupSelection(): CosmicNovaActivityViewPage{
        log.info("Step: Save infor marker section [:step_SaveInforMarkerPopupSelection:]");
        var saveInforMarker : any = this.findLocators("css","button[ng-click='ok($event)']");
        new Button(saveInforMarker).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify applied infor-marker record availability under summary view
     * @param infor
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validation_InforMarkerAvailabilityUnderSummaryView(infor: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify applied infor-marker record availability under summary view [:check_And_Validation_InforMarkerAvailabilityUnderSummaryView:]");
        this.Helper_Actions.checkTextContentFromList(this.ulAddInforMarkerList,infor);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: remove given existing information marker
     * @param infor
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_RemoveExistingGivenInforMarkerRecord(infor: string): CosmicNovaActivityViewPage{
        log.info("Step: Remove given existing information marker [:step_RemoveExistingGivenInforMarkerRecord:]");
        this.Helper_Actions.findContentAndClick(this.ulAddInforMarkerList,infor);
        var btnInforMarkerDelete : any = this.findLocators("css","div[ng-click='removeMarker()']");
        new Button(btnInforMarkerDelete).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: set comment for existing inforMarker record
     * @param comment
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SetCommetForExistingInforMarker(infor: string, comment: string): CosmicNovaActivityViewPage{
        log.info("Step: Set comment for existing inforMarker record [:step_SetCommetForExistingInforMarker:]");
        this.Helper_Actions.findContentAndClick(this.ulAddInforMarkerList,infor);
        var txtComment : any = this.findLocators("xpath","//nova-text-box[1]//div[2]/textarea");
        new TextField(txtComment).enterText(comment);
        var saveComment : any = this.findLocators("css","button[ng-click='save($event)']");
        new Button(saveComment).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: set add-on message for existing inforMarker record
     * @param addon
     * @returns {CosmicNovaActivityViewPage}
     */
    public step_SetAddOnForExistingInfoMarker(infor: string,addon: string): CosmicNovaActivityViewPage{
        log.info("Step: Set add-on message for existing inforMarker record [:step_SetAddOnForExistingInfoMarker:]");
        this.Helper_Actions.findContentAndClick(this.ulAddInforMarkerList,infor);
        var txtAddon : any = this.findLocators("xpath","//nova-text-box[2]//div[2]/textarea");
        new TextField(txtAddon).enterText(addon);
        var saveAddon : any = this.findLocators("css","button[ng-click='save($event)']");
        new Button(saveAddon).click();
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify given infor-marker record comment and add-on details
     * @param details
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validation_InforMarkerCommetAndAddonDetails(details: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify commets and add-on details under infor-marker record [:check_And_Validation_InforMarkerCommetAndAddonDetails:]");
        this.Helper_Actions.checkTextContentFromList(this.ulAddInforMarkerList,details);
        var commentImage : any = this.findLocators("css",".HasComment");
        this.Helper_Actions.isDisplayed(commentImage);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify the given activity records under patient view summary area (right hand side summary panel)
     * @param activity
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_ActivityAvailabilityUnderPatientSummary(activity: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify given activity under patient summary view [:check_And_Validate_ActivityAvailabilityUnderPatientSummary:]");
        var patientSummaryList : any = this.findLocators("repeater","teamViewMarker in getTeamViewMarkers(contact)");
        this.Helper_Actions.checkTextContentFromList(patientSummaryList,activity);
        return new CosmicNovaActivityViewPage();
    }
    /**
     * Validate: verify the given activity records not existing under patient view summary area (right hand side summary panel)
     * @param activity
     * @returns {CosmicNovaActivityViewPage}
     */
    public check_And_Validate_ActivityNotAvailabilityUnderPatientSummary(activity: string): CosmicNovaActivityViewPage{
        log.info("Validate: Verify given activity under patient summary view [:check_And_Validate_ActivityAvailabilityUnderPatientSummary:]");
        var patientSummaryList : any = this.findLocators("repeater","teamViewMarker in getTeamViewMarkers(contact)");
        this.Helper_Actions.checkTextNotAvailability(patientSummaryList,activity);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Validate: verify the bed exchange modal view title
     * @param title
     * @returns {CosmicNovaBaseWardPage}
     */
    public check_And_Validate_BedChangeModalView(): CosmicNovaActivityViewPage{
        log.info("Validate: Verify bed change modal view load [:check_And_Validate_BedChangeModalView:]");
        var removeFromBed : any = element.all(by.css("button[ng-click='removeFromBed(contact.bed)']"));
        this.Helper_Actions.isDisplayed(removeFromBed);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: move patient into bed using bed exchange modal view
     * @param patient
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_MovePatientToBedUsingBedExchageModal(patient: string): CosmicNovaActivityViewPage{
        log.info("Step: Move patient into bed using empty bed pop-up [:step_MovePatientToBedUsingBedExchageModal:]");
        var bedComment : any = this.findLocators("className","ContactInfo");
        this.Helper_Actions.findContentAndClick(bedComment,patient);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaActivityViewPage();
    }

    /**
     * Step: remove patient from selected bed using bed exchange modal view
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_RemoveFromBedUsingBedChangeModalView(): CosmicNovaActivityViewPage{
        log.info("Step: Remove from bed given bed record using bed change modal dialog view [:step_RemoveFromBedUsingBedChangeModalView:]");
        var removeFromBed : any = element.all(by.css("button[ng-click='removeFromBed(contact.bed)']"));
        new Button(removeFromBed).click();
        return new CosmicNovaActivityViewPage();
    }








    public step_PerformParentActivityAdding(date: number): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_PerformParentActivityAdding(date);
        return new CosmicNovaActivityViewPage();
    }

    public step_PerformRoleActivityAdding(role: string, date: number): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_PerformRoleActivityAdding(role,date);
        return new CosmicNovaActivityViewPage();
    }

    public check_And_Validate_GivenActivityUnderParentRecord(activity: string, date: number): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_CheckGivenActivityAvailabilityUnderParentActivity(activity,date);
        return new CosmicNovaActivityViewPage();
    }

    public check_And_Validate_GivenActivityUnderRoleRecord(activity: string, date: number): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_CheckGivenActivityAvailabilityUnderRoleActivity(activity,date);
        return new CosmicNovaActivityViewPage();
    }

    public step_SelectGivenActivityUnderRoleView(activity: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SelectGivenActivityUnderRoleView(activity);
        return new CosmicNovaActivityViewPage();
    }

    public step_PressActivityDeleteButton(activity: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SelectGivenActivityUnderRoleView(activity);
        this.activitySummaryModule.action_PressActivityDeleteButton();
        return new CosmicNovaActivityViewPage();
    }

    public step_PressRecurrenceActivityDeleteButton(): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SelectRandomActivityUnderRoleView();
        this.activitySummaryModule.action_PressRecurrenceActivityDeleteButton();
        return new CosmicNovaActivityViewPage();
    }

    public step_PressRecurrenceActivityThisOnlyDeleteButton(date: number): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SelectSpecificActivityUnderRoleView(date);
        this.activitySummaryModule.action_PressRecurrenceActivityThisOnlyDeleteButton();
        return new CosmicNovaActivityViewPage();
    }

    public step_PressModifiedActivityDeleteButton(): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SelectRandomActivityUnderRoleView();
        this.activitySummaryModule.action_PressActivityDeleteButton();
        return new CosmicNovaActivityViewPage();
    }

    public step_SearchActivityOrPackageInPopup(search: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SearchActivityOrPackageInPopup(search);
        return new CosmicNovaActivityViewPage();
    }

    public step_EnterFreeTextValue(text: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_EnterFreeTextValue(text);
        return new CosmicNovaActivityViewPage();
    }

    public step_SelectGivenPackageFromActivityPopup(pack: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SelectGivenPackageOrActivityFromActivityPopup(pack);
        return new CosmicNovaActivityViewPage();
    }

    public step_SelectGivenPackageOrActivityFromActivityPopup(pack: string): CosmicNovaActivityViewPage {
        this.activitySummaryModule.action_SelectGivenPackageOrActivityFromActivityPopup(pack);
        return new CosmicNovaActivityViewPage();
    }

    public step_SaveActivitySelection(): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SaveActivitySelection();
        return new CosmicNovaActivityViewPage();
    }

    public step_SaveActivitySettings(): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SaveActivitySettings();
        return new CosmicNovaActivityViewPage();
    }

    public step_ChangeActivityStatus(status: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_changeActivityStatusInPopup(status);
        return new CosmicNovaActivityViewPage();
    }

    public check_And_Validate_ActivityStatusIcon(status: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_CheckActivityCurrrentStatusIcon(status);
        return new CosmicNovaActivityViewPage();
    }

    public step_SetTimePeriodForActivity(time: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_changeActivityTimeInPopup(time);
        return new CosmicNovaActivityViewPage();
    }

    public step_EnterActivityAddOn(addon: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_EnterActivityAddOn(addon);
        return new CosmicNovaActivityViewPage();
    }

    public step_EnterActivityComment(comment: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_EnterActivityComment(comment);
        return new CosmicNovaActivityViewPage();
    }

    public check_And_Validate_ActivityCommentIcon(): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_CheckActivityCommentIcon();
        return new CosmicNovaActivityViewPage();
    }

    public step_GetActivityAppliedDatesList(count: number, text: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_GetActivityAppliedDatesList(count, text);
        return new CosmicNovaActivityViewPage();
    }

    public step_SelectActivityRepeatSelection(selection : string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_SelectActivityRepeatSelection(selection);
        return new CosmicNovaActivityViewPage();
    }

    public step_EnterSpecificTimeIntervalForActivities(time: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_EnterSpecificTimeIntervalForActivities(time);
        return new CosmicNovaActivityViewPage();
    }

    public step_ChangeActivityResponsibleRole(role: string): CosmicNovaActivityViewPage{
        this.activitySummaryModule.action_ChangeActivityResponsibleRole(role);
        return new CosmicNovaActivityViewPage();
    }

    public check_And_Validate_ChangedActivityResponsibleRole(role: string): CosmicNovaActivityViewPage{

        return new CosmicNovaActivityViewPage();
    }
}