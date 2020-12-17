/**
 * Created by SLakmal on 7/10/2017.
 */
import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import {Factory} from "../../ConfigLog4j";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {CosmicNovaPatientSummaryPage} from "./CosmicNovaPatientSummaryPage";
import {CosmicNovaAddActivitiesModule} from "../module-objects/CosmicNovaAddActivitiesModule";
import {Link} from "../../../ui-core/ui-elements/Link";
import {Button} from "../../../ui-core/ui-elements/Button";
import {CosmicNovaAddPackagesModule} from "../module-objects/CosmicNovaAddPackagesModule";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {CosmicNovaAddLabelsModule} from "../module-objects/CosmicNovaAddLabelsModule";

const log = Factory.getLogger("Page.CosmicNovaAddingPage");

export class CosmicNovaAddingPage extends PageBase {

    private btnLeftMenuList     : any;
    private lblAddingOutBox     : any;
    private btnBackToSummary    : any;
    private btnOutBoxConfirm    : any;

    private lnkOutBxActivities  : any;
    private lnkOutBxPackages    : any;
    private btnRemoveFromOutBx  : any;

    private addingActivityPanel : CosmicNovaAddActivitiesModule;
    private addingPackagesPanel : CosmicNovaAddPackagesModule;
    private addingLabelsPanel   : CosmicNovaAddLabelsModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAddingPage;
        this.addingActivityPanel = new CosmicNovaAddActivitiesModule();
        this.addingPackagesPanel = new CosmicNovaAddPackagesModule();
        this.addingLabelsPanel   = new CosmicNovaAddLabelsModule();

        this.btnLeftMenuList    = super.findLocators(element.btnLeftMenuList.findBy, element.btnLeftMenuList.value);
        this.lblAddingOutBox    = super.findLocators(element.lblAddingOutBox.findBy, element.lblAddingOutBox.value);
        this.btnBackToSummary   = super.findLocators(element.btnBackToSummary.findBy, element.btnBackToSummary.value);
        this.btnOutBoxConfirm   = super.findLocators(element.btnOutBoxConfirm.findBy, element.btnOutBoxConfirm.value);
        this.lnkOutBxActivities = super.findLocators(element.lnkOutBxActivities.findBy, element.lnkOutBxActivities.value);
        this.lnkOutBxPackages   = super.findLocators(element.lnkOutBxPackages.findBy, element.lnkOutBxPackages.value);
        this.btnRemoveFromOutBx = super.findLocators(element.btnRemoveFromOutBx.findBy, element.btnRemoveFromOutBx.value);
    }

    /**
     * Step: Back to summary view from adding panel
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_Move_BackTo_Summary_View(): CosmicNovaPatientSummaryPage{
        log.info("Step: move back to the summary view [:step_Move_BackTo_Summary_View:]");
        this.Helper_Actions.findElementAndClick(this.btnBackToSummary);
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Step: Select left menu package tab
     * @returns {CosmicNovaAddingPage}
     */
    public step_Select_LeftMenu_Package():CosmicNovaAddingPage{
        log.info("Step: select package tab under adding left menu [:step_Select_LeftMenu_Package:]");
        this.Helper_Actions.findTextAndClick(this.btnLeftMenuList,'Packages');
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Select left menu label tab
     * @returns {CosmicNovaAddingPage}
     */
    public step_Select_LeftMenu_Labels():CosmicNovaAddingPage{
        log.info("Step: select label tab under adding left menu [:step_Select_LeftMenu_Labels:]");
        this.Helper_Actions.findTextAndClick(this.btnLeftMenuList,'Labels');
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Select left menu activity tab
     * @returns {CosmicNovaAddingPage}
     */
    public step_Select_LeftMenu_Activities():CosmicNovaAddingPage{
        log.info("Step: select activities tab under adding left menu [:step_Select_LeftMenu_Activities:]");
        this.Helper_Actions.findTextAndClick(this.btnLeftMenuList,'Activities');
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Select left menu medication tab
     * @returns {CosmicNovaAddingPage}
     */
    public step_Select_LeftMenu_Medication():CosmicNovaAddingPage{
        log.info("Step: select medication tab under adding left menu [:step_Select_LeftMenu_Medication:]");
        this.Helper_Actions.findTextAndClick(this.btnLeftMenuList,'Medication');
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Select left menu patient-group tab
     * @returns {CosmicNovaAddingPage}
     */
    public step_Select_LeftMenu_PatientGroup():CosmicNovaAddingPage{
        log.info("Step: select patient-group tab under adding left menu [:step_Select_LeftMenu_PatientGroup:]");
        this.Helper_Actions.findContentAndClick(this.btnLeftMenuList,'Patient');
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Select left menu local-analysis tab
     * @returns {CosmicNovaAddingPage}
     */
    public step_Select_LeftMenu_LocalAnalysis():CosmicNovaAddingPage{
        log.info("Step: select local-analysis tab under adding left menu [:step_Select_LeftMenu_LocalAnalysis:]");
        this.Helper_Actions.findContentAndClick(this.btnLeftMenuList,'Local');
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Select left menu clinical-chemistry tab
     * @returns {CosmicNovaAddingPage}
     */
    public step_Select_LeftMenu_ClinicalChemistry():CosmicNovaAddingPage{
        log.info("Step: select clinical-chemistry tab under adding left menu [:step_Select_LeftMenu_ClinicalChemistry:]");
        this.Helper_Actions.findContentAndClick(this.btnLeftMenuList,'Clinical');
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Select left menu microbiology tab
     * @returns {CosmicNovaAddingPage}
     */
    public step_Select_LeftMenu_Microbiology():CosmicNovaAddingPage{
        log.info("Step: select microbiology tab under adding left menu [:step_Select_LeftMenu_Microbiology:]");
        this.Helper_Actions.findContentAndClick(this.btnLeftMenuList,'Microbiology');
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Click on the activity link under outbox-result box
     * @param link
     * @returns {CosmicNovaAddingPage}
     */
    public step_Click_On_OutBoxResult_ActivityLinks(link: string): CosmicNovaAddingPage{
        log.info("Step: click on the given activity link icon [:step_Click_On_OutBoxResult_ActivityLinks:]");
        new Link(this.lnkOutBxActivities).click();
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Click on the package link under outbox-result box
     * @param link
     * @returns {CosmicNovaAddingPage}
     */
    public step_Click_On_OutBoxResult_PackageLinks(link: string): CosmicNovaAddingPage{
        log.info("Step: click on the given package link icon [:step_Click_On_OutBoxResult_PackageLinks:]");
        new Link(this.lnkOutBxPackages).click();
        return new CosmicNovaAddingPage();
    }

    /**
     * Step: Confirm outbox-result container
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_Conform_OutBox_Container(): CosmicNovaPatientSummaryPage{
        log.info("Step: make confirm out-box container [:step_Conform_OutBox_Container:]");
        new Button(this.btnOutBoxConfirm).click();
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Step: Remove items from outbox container
     * @param item
     * @returns {CosmicNovaAddingPage}
     */
    public step_Remove_OutBox_Items(item: number): CosmicNovaAddingPage{
        log.info("Step: remove out-box contains items [:step_Remove_OutBox_Items:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnRemoveFromOutBx,item);
        return new CosmicNovaAddingPage();
    }


    //---------------------------------- Activities Related -------------------------------

    /**
     * Step: Search existing activity from activity view
     * @param val
     * @returns {CosmicNovaAddingPage}
     */
    public step_Do_Search_Existing_Given_Activity(val: string): CosmicNovaAddingPage{
        log.info("Step: make search given activity under adding panel [:step_Do_Search_Existing_Given_Activity:]");
        this.addingActivityPanel.step_Search_Specific_Activity(val);
        return new CosmicNovaAddingPage();
    }

    public step_Pick_Given_Activity_Record(rec: number): CosmicNovaAddingPage{
        log.info("Step: pick a filtered given activity [:step_Pick_Given_Activity_Record:]");
        this.addingActivityPanel.step_Pick_Given_Activity_Record(rec);
        return new CosmicNovaAddingPage();
    }

    public step_Activity_Status_Option(option: string): CosmicNovaAddingPage{
        log.info("Step: set activity settings status option [:step_Activity_Status_Option:]");
        this.addingActivityPanel.step_Activity_Status_Option(option);
        return new CosmicNovaAddingPage();
    }

    public step_Activity_Time_Option(time: string): CosmicNovaAddingPage{
        log.info("Step: set activity settings time option [:step_Activity_Time_Option:]");
        this.addingActivityPanel.step_Activity_Time_Option(time);
        return new CosmicNovaAddingPage();
    }


    public step_Set_TimeOccasion_Fields(one: string, two: string): CosmicNovaAddingPage{
        log.info("Step: set activity settings time occasion [:step_Set_TimeOccasion_Fields:]");
        this.addingActivityPanel.step_Set_TimeOccasion_Fields(one, two);
        return new CosmicNovaAddingPage();
    }

    public step_Activity_Responsible_Option(respo: string): CosmicNovaAddingPage{
        log.info("Step: set activity settings responsible option [:step_Activity_Responsible_Option:]");
        this.addingActivityPanel.step_Activity_Responsible_Option(respo);
        return new CosmicNovaAddingPage();
    }

    public step_Activity_Set_AddOn(msg: string): CosmicNovaAddingPage{
        log.info("Step: set activity settings add-on option [:step_Activity_Set_AddOn:]");
        this.addingActivityPanel.step_Activity_Set_AddOn(msg);
        return new CosmicNovaAddingPage();
    }

    public step_Activity_Set_Comment(msg: string): CosmicNovaAddingPage{
        log.info("Step: set activity settings comment option [:step_Activity_Set_Comment:]");
        this.addingActivityPanel.step_Activity_Set_Comment(msg);
        return new CosmicNovaAddingPage();
    }

    public step_Activity_Repeat_Option(time: string): CosmicNovaAddingPage{
        log.info("Step: set activity repeat option [:step_Activity_Repeat_Option:]");
        this.addingActivityPanel.step_Activity_Repeat_Option(time);
        return new CosmicNovaAddingPage();
    }

    public step_Specific_Days_Selection(): CosmicNovaAddingPage{
        log.info("Step: [:step_Specific_Days_Selection:]");
        this.addingActivityPanel.step_Specific_Days_Selection();
        return new CosmicNovaAddingPage();
    }

    public step_Add_NewActivity_Record(): CosmicNovaAddingPage{
        log.info("Step: perform new activity adding flow [:step_Add_NewActivity_Record:]");
        this.addingActivityPanel.step_Add_NewActivity_Record();this.Helper_Waits.waitFor(2000);
        return new CosmicNovaAddingPage();
    }

    public check_And_Validate_OutBox_Activity_Availability(activity: string): CosmicNovaAddingPage{
        log.info("Validate: verify availability of the activity under out-box [:check_And_Validate_OutBox_Activity_Availability:]");
        this.Helper_Actions.checkTextContentFromList(this.lblAddingOutBox, activity);
        return new CosmicNovaAddingPage();
    }

    public check_And_Validate_OutBox_Activity_Availability_With_Comment(activity: string): CosmicNovaAddingPage{
        log.info("Validate: verify availability of the activity with comment under out-box [:check_And_Validate_OutBox_Activity_Availability_With_Comment:]");
        this.Helper_Actions.checkTextContentFromList(this.lblAddingOutBox, activity);
        var lblComment : any = this.findLocators("css",".comment");
        this.Helper_Actions.isDisplayed(lblComment);
        return new CosmicNovaAddingPage();
    }

    public check_And_Validate_OutBox_Activity_Availability_With_Recurrence(activity: string): CosmicNovaAddingPage{
        log.info("Validate: verify availability of the activity with recurrence under out-box  [:check_And_Validate_OutBox_Activity_Availability_With_Recurrence:]");
        this.Helper_Actions.checkTextContentFromList(this.lblAddingOutBox, activity);
        var lblRepeat : any = this.findLocators("css",".repeat");
        this.Helper_Actions.isDisplayed(lblRepeat);
        return new CosmicNovaAddingPage();
    }

    //---------------------------------- Packages Related -------------------------------

    public step_Search_Existing_Packages(pack: string): CosmicNovaAddingPage{
        log.info("Step: search packages under adding panel [:step_Search_Existing_Packages:]");
        this.addingPackagesPanel.step_Search_Existing_Packages(pack);
        return new CosmicNovaAddingPage();
    }

    public step_Pick_Given_Package_Record(rec: number): CosmicNovaAddingPage{
        log.info("Step: pick a filtered package record into out-box [:step_Pick_Given_Package_Record:]");
        this.addingPackagesPanel.step_Pick_Given_Package_Record(rec);
        return new CosmicNovaAddingPage();
    }

    //----------------------------------Label Related-------------------------------------

    public step_Select_Label_From_Label_List_Apping_Panel(val): CosmicNovaAddingPage{
        this.addingLabelsPanel.step_Select_Label_From_List(val);
        return new CosmicNovaAddingPage();
    }
    public step_Press_Add_Button_In_Label_Side_Panel_Adding_Panel(): CosmicNovaAddingPage{
        this.addingLabelsPanel.step_Press_Add_Button();
        return new CosmicNovaAddingPage();
    }
    public step_Press_Done_Button_In_Label_Out_Box(): CosmicNovaPatientSummaryPage{
        this.addingLabelsPanel.step_Press_Done_Button();
        return new CosmicNovaPatientSummaryPage();
    }
}