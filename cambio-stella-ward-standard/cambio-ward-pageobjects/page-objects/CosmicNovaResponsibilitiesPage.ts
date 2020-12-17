/**
 * Created by SLakmal on 6/15/2017.
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
import {Div} from "../../../ui-core/ui-elements/Div";

const log = Factory.getLogger("Page.CosmicNovaResponsibilitiesPage")

export class CosmicNovaResponsibilitiesPage extends PageBase {

    private lblSelectionColumnTitle : any;
    private btnLeftRolesList        : any;
    private lblBedAndPatient        : any;

    private topNavigationModule: CosmicNovaTopNavigationModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaResponsibilitiesPage;
        this.topNavigationModule = new CosmicNovaTopNavigationModule();
        this.lblSelectionColumnTitle    = super.findLocators(element.lblSelectionColumnTitle.findBy, element.lblSelectionColumnTitle.value);
        this.btnLeftRolesList           = super.findLocators(element.btnLeftRolesList.findBy, element.btnLeftRolesList.value);
        this.lblBedAndPatient           = super.findLocators(element.lblBedAndPatient.findBy, element.lblBedAndPatient.value);
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

    public check_And_Validate_RoleListInLeftPanel(role: string): CosmicNovaResponsibilitiesPage{
        this.Helper_Actions.checkTextFromList(this.btnLeftRolesList,role);
        return new CosmicNovaResponsibilitiesPage();
    }

    public check_And_Validate_StaffHeadColumnTitle(staff: string): CosmicNovaResponsibilitiesPage{
        this.Helper_Actions.checkTextFromList(this.lblSelectionColumnTitle,staff);
        return new CosmicNovaResponsibilitiesPage();
    }

    public check_And_Validate_BedAndPatientAvailability(bed: string, patient: string): CosmicNovaResponsibilitiesPage{
        this.Helper_Actions.checkTextContentFromList(this.lblBedAndPatient,bed);
        this.Helper_Actions.checkTextContentFromList(this.lblBedAndPatient,patient);
        return new CosmicNovaResponsibilitiesPage();
    }

    public step_SelectRoleFromTabList(role: string): CosmicNovaResponsibilitiesPage{
        this.Helper_Actions.findTextAndClick(this.btnLeftRolesList,role);
        return new CosmicNovaResponsibilitiesPage();
    }

    public step_SelectGridPatientAgainstStaffResponsible(bed: number,staff: number): CosmicNovaResponsibilitiesPage{
        var gridSelection : any = this.findLocators("xpath","//nova-virtual-item-list/div["+(bed+1)+"]/div["+staff+"]");
        new Div(gridSelection).click();
        return new CosmicNovaResponsibilitiesPage();
    }
}