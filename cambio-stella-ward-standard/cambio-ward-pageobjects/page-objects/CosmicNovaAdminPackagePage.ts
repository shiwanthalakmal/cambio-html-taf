/**
 * Created by SLakmal on 4/19/2017.
 */
import {PageBase, TextField, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";
import {TextArea} from "../../../ui-core/ui-elements/TextArea";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";

const log = Factory.getLogger("Page.CosmicNovaAdminPackagePage")

export class CosmicNovaAdminPackagePage extends PageBase{

    private btnAddPackage           : any;
    private ulListOfPackages        : any;
    private btnDeletePackage        : any;
    private btnDeletePackageNo      : any;
    private btnDeletePackageYes     : any;
    private txtFldUpdatePackageName : any;
    private ulListOfOptions         : any;
    private txtAraDescription       : any;
    private btnActivityList         : any;
    private btnInfoMarkersList      : any;
    private ulListOfActivityRecords : any;
    private ulListOfInfoMarkRecords : any;
    private ulListOfContentPackage  : any;

    private administrationMenuModule : CosmicNovaAdministrationMenuModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAdminPackagePage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.btnAddPackage          = super.findLocators(element.btnAddPackage.findBy, element.btnAddPackage.value);
        this.ulListOfPackages       = super.findLocators(element.ulListOfPackages.findBy, element.ulListOfPackages.value);
        this.btnDeletePackage       = super.findLocators(element.btnDeletePackage.findBy, element.btnDeletePackage.value);
        this.btnDeletePackageNo     = super.findLocators(element.btnDeletePackageNo.findBy, element.btnDeletePackageNo.value);
        this.btnDeletePackageYes    = super.findLocators(element.btnDeletePackageYes.findBy, element.btnDeletePackageYes.value);
        this.txtFldUpdatePackageName = super.findLocators(element.txtFldUpdatePackageName.findBy, element.txtFldUpdatePackageName.value);
        this.ulListOfOptions        = super.findLocators(element.ulListOfOptions.findBy, element.ulListOfOptions.value);
        this.txtAraDescription      = super.findLocators(element.txtAraDescription.findBy, element.txtAraDescription.value);
        this.btnActivityList        = super.findLocators(element.btnActivityList.findBy, element.btnActivityList.value);
        this.btnInfoMarkersList     = super.findLocators(element.btnInfoMarkersList.findBy, element.btnInfoMarkersList.value);
        this.ulListOfActivityRecords= super.findLocators(element.ulListOfActivityRecords.findBy, element.ulListOfActivityRecords.value);
        this.ulListOfInfoMarkRecords= super.findLocators(element.ulListOfInfoMarkRecords.findBy, element.ulListOfInfoMarkRecords.value);
        this.ulListOfContentPackage = super.findLocators(element.ulListOfContentPackage.findBy, element.ulListOfContentPackage.value);
    }

    /**
     * Step: press add new packages button
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_PressAddNewPackagesButton(): CosmicNovaAdminPackagePage{
        log.info("Step: Press add new package button [:step_PressAddNewPackagesButton:]");
        new Button(this.btnAddPackage).click();
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: choose given packages record and click on it
     * @param pack
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_ChoosePackageLevels(pack: string): CosmicNovaAdminPackagePage{
        log.info("Step: Select the given level of role using existing role list [:step_ChooseRolesLevels:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfPackages,pack);
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: perform delete for the given packages record and ignore the deletion
     * @param record
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_DeletePackagesIgnore(record: number): CosmicNovaAdminPackagePage{
        log.info("Step: Existing role make delete and reject deletion flow [:step_DeletePackagesIgnore:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeletePackage,record);
        new Button(this.btnDeletePackageNo).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: perform delete for the given packages record and accept the deletion
     * @param record
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_DeletePackagesAccept(record: number): CosmicNovaAdminPackagePage{
        log.info("Step: Existing role make delete and accept deletion flow [:step_DeletePackagesAccept:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeletePackage,record);
        new Button(this.btnDeletePackageYes).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: enter new packages record name
     * @param pack
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_EnterNewPackageDetails(pack: string): CosmicNovaAdminPackagePage{
        log.info("Step: Enter new or update exsiting package name [:step_EnterNewPackageDetails:]")
        new TextField(this.txtFldUpdatePackageName).enterText(pack);
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: choose shows option and click on it
     * @param option
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_ChooseShowsOptions(option: string): CosmicNovaAdminPackagePage{
        log.info("Step: Select views showing options using selection list [:step_ChooseShowsOptions:]")
        this.Helper_Actions.findTextAndClick(this.ulListOfOptions,option);
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: enter packages description
     * @param des
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_EnterPackagesDescription(des: string): CosmicNovaAdminPackagePage{
        log.info("Step: Enter package description [:step_EnterPackagesDescription:]");
        new TextArea(this.txtAraDescription).enterText(des);
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: Press activity list view tab button
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_PressActivitiesGridTab(): CosmicNovaAdminPackagePage{
        log.info("Step: Press tab to view grid activities list [:step_PressActivitiesGridTab:]");
        new Button(this.btnActivityList).click();
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: Press info marker list view tab button
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_PressInfoMarkersGridTab(): CosmicNovaAdminPackagePage{
        log.info("Step: Press tab to view grid information marker list [:step_PressInfoMarkersGridTab:]");
        new Button(this.btnInfoMarkersList).click();
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: choose any activity record under list view and click on it
     * @param record
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_ChooseActivityGridRecord(record: string): CosmicNovaAdminPackagePage{
        log.info("Step: Select given activity record using list of activities [:step_ChooseActivityGridRecord:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfActivityRecords,record);
        this.Helper_Waits.waitFor(3000);
        return new CosmicNovaAdminPackagePage();
    }

    /**
     * Step: choose any info-marker record under list view and click on it
     * @param record
     * @returns {CosmicNovaAdminPackagePage}
     */
    public step_ChooseInfoMarkerGridRecord(record: string): CosmicNovaAdminPackagePage{
        log.info("Step: Select given information marker record using list of information markers [:step_ChooseInfoMarkerGridRecord:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfInfoMarkRecords,record);
        return new CosmicNovaAdminPackagePage();
    }

    public step_ChooseContentInPackage(record: string): CosmicNovaAdminPackagePage{
        log.info("Step: Select given record under content list [:step_ChooseContentInPackage:]")
        this.Helper_Actions.findTextAndClick(this.ulListOfContentPackage,record);
        return new CosmicNovaAdminPackagePage();
    }

    public check_And_Validate_ContentInPackagesList(record: string): CosmicNovaAdminPackagePage{
        log.info("Validate: Verify package content list under content list [:check_And_Validate_ContentInPackagesList:]")
        this.Helper_Actions.checkTextFromList(this.ulListOfContentPackage,record);
        return new CosmicNovaAdminPackagePage();
    }

    public check_And_Validate_DuplicatePackageAdded(): CosmicNovaAdminPackagePage{
        //[Pending]
        return new CosmicNovaAdminPackagePage();
    }

    public check_And_Validate_PackageListAvailability(record: string): CosmicNovaAdminPackagePage{
        log.info("Validate: Verify packages availability under list [:check_And_Validate_PackageListAvailability:]")
        this.Helper_Actions.checkTextFromList(this.ulListOfPackages,record);
        return new CosmicNovaAdminPackagePage();
    }

    public check_And_Validate_PackageListNotAvailability(record: string): CosmicNovaAdminPackagePage{
        log.info("Validate: Verify packages not availability under list [:check_And_Validate_PackageListNotAvailability:]")
        this.Helper_Actions.checkTextNotAvailability(this.ulListOfPackages,record);
        return new CosmicNovaAdminPackagePage();
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
    public step_PressCancelButtonAndIgnore(): CosmicNovaAdminPackagePage{
        log.info("Step: Press page save button and reject [:step_PressCancelButtonAndIgnore:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelIgnore();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminPackagePage();
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