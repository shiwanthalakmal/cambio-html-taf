/**
 * Created by SLakmal on 5/17/2017.
 */
import {PageBase, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaTopNavigationModule} from "../module-objects/CosmicNovaTopNavigationModule";
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {CosmicNovaStaffPlanViewPage} from "./CosmicNovaStaffPlanViewPage";
import {CosmicNovaResponsibilitiesPage} from "./CosmicNovaResponsibilitiesPage";

const log = Factory.getLogger("Page.CosmicNovaStaffingViewPage")

export class CosmicNovaStaffingViewPage extends PageBase {

    private ulStaffingTabList:  any;
    private btnAddStaff:        any;
    private tblStaffing:        any;
    private lblStaffGrisColumnTitles:     any;
    private txtFldModalSearch:  any;
    private btnModalSearchIcon: any;
    private btnModalSave:       any;
    private btnModalCancel:     any;
    private ulModalStaffResult: any;

    private topNavigationModule: CosmicNovaTopNavigationModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaStaffingViewPage;
        this.topNavigationModule = new CosmicNovaTopNavigationModule();
        this.ulStaffingTabList      = super.findLocators(element.ulStaffingTabList.findBy, element.ulStaffingTabList.value);
        this.btnAddStaff            = super.findLocators(element.btnAddStaff.findBy, element.btnAddStaff.value);
        this.tblStaffing            = super.findLocators(element.tblStaffing.findBy, element.tblStaffing.value);
        this.lblStaffGrisColumnTitles= super.findLocators(element.lblStaffGrisColumnTitles.findBy, element.lblStaffGrisColumnTitles.value);
        this.txtFldModalSearch      = super.findLocators(element.txtFldModalSearch.findBy, element.txtFldModalSearch.value);
        this.btnModalSearchIcon     = super.findLocators(element.btnModalSearchIcon.findBy, element.btnModalSearchIcon.value);
        this.btnModalSave           = super.findLocators(element.btnModalSave.findBy, element.btnModalSave.value);
        this.btnModalCancel         = super.findLocators(element.btnModalCancel.findBy, element.btnModalCancel.value);
        this.ulModalStaffResult     = super.findLocators(element.ulModalStaffResult.findBy, element.ulModalStaffResult.value);

    }


    /**
     * Step: move to view using main menu
     */
    public step_MoveToWardView(){
        log.info("Step: Move to ward view page [:step_MoveToWardView:]");
        this.topNavigationModule.action_ClickMainMenu('Ward');
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
     * Step: move to responsibility view using main menu
     */
    public step_MoveToResponsibilitiesView(): CosmicNovaResponsibilitiesPage{
        log.info("Step: Move to responsibilities view page [:step_MoveToResponsibilitiesView:]");
        this.topNavigationModule.action_ClickMainMenu('Responsibilities');
        return new CosmicNovaResponsibilitiesPage();
    }


    public step_SelectStaffFromList(staff: string): CosmicNovaStaffingViewPage{
        log.info("Step: Select staff using left menu [:step_SelectStaffFromList:]");
        this.Helper_Actions.findTextAndClick(this.ulStaffingTabList,staff);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaStaffingViewPage();
    }

    public step_PressAddStaffMember(): CosmicNovaStaffingViewPage{
        log.info("Step: Press Add Staff member [:step_PressAddStaff:]");
        new Button(this.btnAddStaff).click();
        return new CosmicNovaStaffingViewPage();
    }

    public step_EnterStaffMemberSearch(staff: string): CosmicNovaStaffingViewPage{
        log.info("Step: Enter modal search staff member and search [:step_EnterStaffMemberSearch:]");
        new TextField(this.txtFldModalSearch).enterText(staff);
        new Button(this.btnModalSearchIcon).click();this.Helper_Waits.waitFor(1000);
        return new CosmicNovaStaffingViewPage();
    }

    public step_SaveModalSearch(): CosmicNovaStaffingViewPage{
        log.info("Step: Save modal dialog view [:step_SaveModalSearch:]");
        new Button(this.btnModalSave).click();
        return new CosmicNovaStaffingViewPage();
    }

    public step_CancelModalSearch(): CosmicNovaStaffingViewPage{
        log.info("Step: Cancel modal dialog view [:step_CancelModalSearch:]");
        new Button(this.btnModalCancel).click();
        return new CosmicNovaStaffingViewPage();
    }

    public step_SelectMemberSearchList(member: string): CosmicNovaStaffingViewPage{
        log.info("Step: Select staff member from search results [:step_SelectStaffMembersList:]");
        this.Helper_Actions.findTextAndClick(this.ulModalStaffResult,member);
        return new CosmicNovaStaffingViewPage();
    }

    public step_ClickOnGivenGridCell(myRow:number, myColumn:number): CosmicNovaStaffingViewPage{
        log.info("Step: Click on the staff grid cell [:step_ClickOnGivenGridCell:]");
        //[Pending]
        return new CosmicNovaStaffingViewPage();
    }

    public check_And_Validate_AddStaffModalTitle(staff: string): CosmicNovaStaffingViewPage{
        log.info("Validate: Verify add staff members to staff modal view title [:check_And_Validate_AddStaffModalTitle:]");
        var addStaffModalTitle : any = this.findLocators("css",".dialog-header");
        this.Helper_Assertion.expectToEqual(addStaffModalTitle, 'Add staff member to '+staff);
        return new CosmicNovaStaffingViewPage();
    }

    public check_And_Validate_GivenStaffCategoryAvailability(staff: string): CosmicNovaStaffingViewPage{
        log.info("Validate: Verify the availability of given staff category under left panel [:check_And_Validate_GivenStaffCategoryAvailability:]");
        this.Helper_Actions.checkTextFromList(this.ulStaffingTabList,staff);
        return new CosmicNovaStaffingViewPage();
    }

    public check_And_Validate_GivenStaffMemberAvailability(member: string): CosmicNovaStaffingViewPage{
        log.info("Validate: Verify the availability of given staff member under grid view [:check_And_Validate_GivenStaffMemberAvailability:]");
        var staffMemUnderGrid : any = this.findLocators("css",".Name");
        this.Helper_Actions.checkTextAvailability(staffMemUnderGrid, member);
        return new CosmicNovaStaffingViewPage();
    }

    public check_And_Validate_GivenStaffMemberNotAvailability(member: string): CosmicNovaStaffingViewPage{
        log.info("Validate: Verify the not availability of given staff member under grid view [:check_And_Validate_GivenStaffMemberNotAvailability:]");
        var staffMemUnderGrid : any = this.findLocators("css",".Name");
        this.Helper_Actions.checkTextNotAvailability(staffMemUnderGrid, member);
        return new CosmicNovaStaffingViewPage();
    }

    public check_And_Validate_AvailableRoleColumnTitle(title: string): CosmicNovaStaffingViewPage{
        log.info("Step: Verify grid roles column availability [:check_And_Validate_AvailableRoleColumTitle:]");
        this.Helper_Actions.checkTextFromList(this.lblStaffGrisColumnTitles,title);
        return new CosmicNovaStaffingViewPage();
    }

    public step_MovePatientStaffAmongResponsibilities(staff: number, responsi: string): CosmicNovaStaffingViewPage{
        var cell: number;
        if(responsi === 'Not Working'){
            cell = 1;
        }else if(responsi === 'Responsible doctor'){
            cell = 2;
        }else if(responsi === 'Consultant'){
            cell = 3;
        }else if(responsi === 'Doctor on call'){
            cell = 4;
        }else{}
        var cellTeam : any = this.findLocators("xpath","//nova-legacy-ward-board-vertical-selection-grid-row["+staff+"]/div[1]/div["+cell+"]");
        this.Helper_Actions.findFirstElementAndClick(cellTeam);
        return new CosmicNovaStaffingViewPage();
    }
}