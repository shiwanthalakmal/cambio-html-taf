/**
 * Created by SLakmal on 4/18/2017.
 */
import {PageBase, TextField, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";

const log = Factory.getLogger("Page.CosmicNovaAdminStaffPage")

export class CosmicNovaAdminStaffPage extends PageBase{

    private btnAddStaff         : any;
    private ulListOfStaff       : any;
    private btnDeleteStaff      : any;
    private btnDeleteStaffNo    : any;
    private btnDeleteStaffYes   : any;
    private txtFldUpdateStaffName   : any;
    private btnSearchStaff      : any;
    private btnSearchPackage    : any;
    private txtFldSearchValue   : any;
    private btnSearchIcon       : any;
    private ulListOfSearch      : any;
    private ulListOfCategory    : any;
    private btnDeleteUnitStaffCategory  : any;

    private administrationMenuModule : CosmicNovaAdministrationMenuModule;

    constructor(){
        super();
        const element = Elements.CosmicNovaAdminStaffPage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.btnAddStaff            = super.findLocators(element.btnAddStaff.findBy,element.btnAddStaff.value);
        this.ulListOfStaff          = super.findLocators(element.ulListOfStaff.findBy,element.ulListOfStaff.value);
        this.btnDeleteStaff         = super.findLocators(element.btnDeleteStaff.findBy,element.btnDeleteStaff.value);
        this.btnDeleteStaffNo       = super.findLocators(element.btnDeleteStaffNo.findBy,element.btnDeleteStaffNo.value);
        this.btnDeleteStaffYes      = super.findLocators(element.btnDeleteStaffYes.findBy,element.btnDeleteStaffYes.value);
        this.txtFldUpdateStaffName  = super.findLocators(element.txtFldUpdateStaffName.findBy,element.txtFldUpdateStaffName.value);
        this.btnSearchStaff         = super.findLocators(element.btnSearchStaff.findBy,element.btnSearchStaff.value);
        this.btnSearchPackage       = super.findLocators(element.btnSearchPackage.findBy,element.btnSearchPackage.value);
        this.txtFldSearchValue      = super.findLocators(element.txtFldSearchValue.findBy,element.txtFldSearchValue.value);
        this.btnSearchIcon          = super.findLocators(element.btnSearchIcon.findBy,element.btnSearchIcon.value);
        this.ulListOfSearch         = super.findLocators(element.ulListOfSearch.findBy,element.ulListOfSearch.value);
        this.ulListOfCategory       = super.findLocators(element.ulListOfCategory.findBy,element.ulListOfCategory.value);
        this.btnDeleteUnitStaffCategory       = super.findLocators(element.btnDeleteUnitStaffCategory.findBy,element.btnDeleteUnitStaffCategory.value);
    }

    /**
     * Step: press add new staff button
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_PressAddNewStaffButton(): CosmicNovaAdminStaffPage{
        log.info("Step: Press add new staff button [:step_PressAddNewStaffButton:]");
        new Button(this.btnAddStaff).click();
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: choose given staff level from list
     * @param level
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_ChooseStaffLevels(level: string): CosmicNovaAdminStaffPage{
        log.info("Step: Select given staff level record under existing list [:step_ChooseStaffLevels:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfStaff,level);
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: remove applied unit staff in category records
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_RemoveAppliedUnitStaffCategory(): CosmicNovaAdminStaffPage{
        log.info("Step: Remove applied unit staff in category records [:step_RemoveAppliedUnitStaffCategory:]");
        new Button(this.btnDeleteUnitStaffCategory).click();
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: perform delete for the given staff record and ignore the deletion
     * @param level
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_DeleteStaffLevelsIgnore(level: number): CosmicNovaAdminStaffPage{
        log.info("Step: Existing staff make delete and reject deletion flow [:step_DeleteStaffLevelsIgnore:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteStaff,level);
        this.Helper_Waits.waitFor(1000);
        new Button(this.btnDeleteStaffNo).click();
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: perform delete for the given staff record and accept the deletion
     * @param level
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_DeleteStaffLevelsAccept(level: number): CosmicNovaAdminStaffPage{
        log.info("Step: Existing staff make delete and accept deletion flow [:step_DeleteStaffLevelsAccept:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteStaff,level);
        this.Helper_Waits.waitFor(1000);
        new Button(this.btnDeleteStaffYes).click();
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: enter new staff name
     * @param staff
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_EnterNewStaffLevel(staff: string): CosmicNovaAdminStaffPage{
        log.info("Step: Enter new or update staff name [:step_EnterNewStaffLevel:]");
        new TextField(this.txtFldUpdateStaffName).enterText(staff);
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: press staff search tab window
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_PressStaffSearchTab(): CosmicNovaAdminStaffPage{
        log.info("Step: Press staff search view tab button [:step_PressStaffSearchTab:]");
        new Button(this.btnSearchStaff).click();
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: press package search tab window
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_PressPackageSearchTab(): CosmicNovaAdminStaffPage{
        log.info("Step: Press package search view tab button [:step_PressPackageSearchTab:]");
        new Button(this.btnSearchPackage).click();
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: enter staff search input value and click on the search icon
     * @param value
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_EnterStaffSearchRecord(value: string): CosmicNovaAdminStaffPage{
        log.info("Step: Enter staff search text and submit [:step_EnterStaffSearchRecord:]");
        new TextField(this.txtFldSearchValue).enterText(value);
        new Button(this.btnSearchIcon).click()
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: enter packages search input value and click on the search icon
     * @param value
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_EnterPackageSearchRecord(value: string): CosmicNovaAdminStaffPage{
        log.info("Step: Enter package search text and submit [:step_EnterPackageSearchRecord:]");
        new TextField(this.txtFldSearchValue).enterText(value);
        new Button(this.btnSearchIcon).click()
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Validate: verify the staff search result availability
     * @param values
     * @returns {CosmicNovaAdminStaffPage}
     */
    public check_And_Validate_StaffSearchListAvailability(values: string): CosmicNovaAdminStaffPage{
        log.info("Validate: Verify the unit staff record availability under result list [:check_And_Validate_StaffSearchListAvailability:]");
        this.Helper_Actions.checkTextFromList(this.ulListOfSearch,values);
        return new CosmicNovaAdminStaffPage();
    }

    public check_And_Validate_StaffRoleListAvailability(role: string): CosmicNovaAdminStaffPage{
        log.info("Validate: Verify the staff role record availability under staff role list [:check_And_Validate_StaffRoleListAvailability:]");
        this.Helper_Actions.checkTextFromList(this.ulListOfStaff,role);
        return new CosmicNovaAdminStaffPage();
    }

    public check_And_Validate_StaffRoleListNotAvailability(role: string): CosmicNovaAdminStaffPage{
        log.info("Validate: Verify the staff role record not-availability under staff role list [:check_And_Validate_StaffRoleListNotAvailability:]");
        this.Helper_Actions.checkTextNotAvailability(this.ulListOfStaff,role);
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Step: choose staff from search result view and click on it
     * @param values
     * @returns {CosmicNovaAdminStaffPage}
     */
    public step_ChooseStaffFromSearchResults(values: string): CosmicNovaAdminStaffPage{
        log.info("Step: Select staff given option under search result [:step_ChooseStaffFromSearchResults:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfSearch,values);
        return new CosmicNovaAdminStaffPage();
    }

    /**
     * Validate: verify the unit staff category list record availability
     * @param values
     * @returns {CosmicNovaAdminStaffPage}
     */
    public check_And_Validate_UnitStaffCategoryAvailability(values: string): CosmicNovaAdminStaffPage{
        log.info("Validate: Verify unit staff category given record availabbility [:check_And_Validate_UnitStaffCategoryAvailability:]");
        this.Helper_Actions.checkTextFromList(this.ulListOfCategory,values);
        return new CosmicNovaAdminStaffPage();
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
    public step_PressCancelButtonAndIgnore(): CosmicNovaAdminStaffPage{
        log.info("Step: Press page save button and reject [:step_PressCancelButtonAndIgnore:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelIgnore();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminStaffPage();
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