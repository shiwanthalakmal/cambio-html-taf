import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import {Factory} from "../../ConfigLog4j";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {CosmicNovaSummayViewHeaderModule} from "../module-objects/CosmicNovaSummayViewHeaderModule";
import {CosmicNovaPatientActivityPage} from "./CosmicNovaPatientActivityPage";
import {CosmicNovaAddPackagesModule} from "../module-objects/CosmicNovaAddPackagesModule";
import {CosmicNovaBasePhysicianPage} from "./CosmicNovaBasePhysicianPage";
import {CosmicNovaAddingPage} from "./CosmicNovaAddingPage";
import {CosmicNovaAttentionSignalCreateModule} from "../module-objects/CosmicNovaAttentionSignalCreateModule";
import {WorkingMemory} from "../../../ui-utils/ui-memory/WorkingMemory";
import {type} from "os";
import {CosmicNovaAttentionSignalReadModule} from "../module-objects/CosmicNovaAttentionSignalReadModule";
import {CosmicNovaClinicalParametersPage} from "./CosmicNovaClinicalParametersPage";
import {CosmicNovaLeftSubMenuModule} from "../module-objects/CosmicNovaLeftSubMenuModule";
import {CosmicNovaMedicalRecordPage} from "./CosmicNovaMedicalRecordPage";
import {CosmicNovaSummaryViewPageSidePanelModule} from "../module-objects/CosmicNovaSummaryViewPageSidePanelModule";

/**
 * Created by SLakmal on 7/5/2017.
 */

const log = Factory.getLogger("Page.CosmicNovaPatientSummaryPage")

export class CosmicNovaPatientSummaryPage extends PageBase {

    private lblSummaryTitle         : any;
    private divPackageSummary       : any;
    private iconpackcomment         : any;
    private lblLabelname            : any;

    private summaryHeaderModule     : CosmicNovaSummayViewHeaderModule;
    private addingPackagePanel      : CosmicNovaAddPackagesModule;
    private rightSignalPanel        : CosmicNovaAttentionSignalCreateModule;
    private rightSignalPanelRead    : CosmicNovaAttentionSignalReadModule;
    private leftSubMenuPanel        : CosmicNovaLeftSubMenuModule;
    private summaryviewsidepanel    : CosmicNovaSummaryViewPageSidePanelModule;


    constructor() {
        super();
        const element = Elements.CosmicNovaPatientSummaryPage;
        this.summaryHeaderModule    = new CosmicNovaSummayViewHeaderModule();
        this.rightSignalPanel       = new CosmicNovaAttentionSignalCreateModule();
        this.rightSignalPanelRead   = new CosmicNovaAttentionSignalReadModule();
        this.addingPackagePanel     = new CosmicNovaAddPackagesModule();
        this.leftSubMenuPanel       = new CosmicNovaLeftSubMenuModule();
        this.summaryviewsidepanel   = new CosmicNovaSummaryViewPageSidePanelModule();

        this.lblSummaryTitle        = super.findLocators(element.lblSummaryTitle.findBy, element.lblSummaryTitle.value);
        this.divPackageSummary      = super.findLocators(element.divPackageSummary.findBy, element.divPackageSummary.value);
        this.iconpackcomment      = super.findLocators(element.iconpackcomment.findBy, element.iconpackcomment.value);
        this.lblLabelname      = super.findLocators(element.lblLabelname.findBy, element.lblLabelname.value);

    }

    /**
     * Step: Close the patient summary view
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public step_Close_Patient_Summary_View(): CosmicNovaBasePhysicianPage{
        this.summaryHeaderModule.step_Close_Patient_Summary_View();
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Step: Click on the attention signal
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_Click_On_The_AttentionSignal(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Click_On_The_AttentionSignal();
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Step: Select signal record by name
     * @param cate
     * @param record
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_SignalRecordSectionByCategory(cate: string, record: string): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_SignalRecordSectionByCategory(cate, record);
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Step: Click on the create new signal option
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_Create_New_AttentionSignal(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Create_New_AttentionSignal();
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Validate: Verify the patient summary page title
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public check_And_Validate_SummaryPageTitle(): CosmicNovaPatientSummaryPage{
        this.Helper_Actions.checkTextContentFromList(this.lblSummaryTitle,"Summary");
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Step: Move to adding panel from summary view
     * @returns {CosmicNovaAddingPage}
     */
    public step_MoveTo_Adding_Panel(): CosmicNovaAddingPage{
        this.Helper_Waits.waitFor(2000);
        this.summaryHeaderModule.step_MoveTo_Adding_View();
        return new CosmicNovaAddingPage();
    }

    /**
     * Validate: verify given applied package under patient summary view , right panel
     * @param pack
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public check_And_Validate_Applied_Packages_UnderSummary_View(pack: string): CosmicNovaPatientSummaryPage{
        this.Helper_Assertion.expectToEqual(this.divPackageSummary,pack);
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Step: Click on the given package name under summary view , right panel
     * @param pack
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_Click_OnThe_Given_Summary_Package(pack: string): CosmicNovaPatientSummaryPage{
        this.Helper_Actions.findTextAndClick(this.divPackageSummary,pack);
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Step: Delete existing given package under summary view
     */
    public step_Delete_Existing_Given_Package_UnderSummary(): void{
        this.addingPackagePanel.step_Delete_Existing_Given_Package();
    }

    /**
     * Step: Click on the main menu button
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_Click_On_The_MainMenu(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Click_On_The_Top_Menu();
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Step: Move to summary view using left side panel
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_MoveTo_Summary_View_Using_SideMenu(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Press_Summary_Option();
        return new CosmicNovaPatientSummaryPage();
    }
    /**
     * Step: Move to clinical parameter view using left side panel
     * @returns {CosmicNovaClinicalParametersPage}
     */

    public step_Move_To_Clinical_Parameters_Page(): CosmicNovaClinicalParametersPage{
        this.leftSubMenuPanel.step_Move_To_Clinical_Parameters();
        return new CosmicNovaClinicalParametersPage();
    }


    /**
     * Step: Move to activity view using left side panel
     * @returns {CosmicNovaPatientActivityPage}
     */
    public step_MoveTo_Activities_View_Using_SideMenu(): CosmicNovaPatientActivityPage{
        this.summaryHeaderModule.step_Press_Activity_Option();
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Move to clinical view using left side panel
     */
    public step_MoveTo_Clinical_View_Using_SideMenu(): void{
        this.summaryHeaderModule.step_Press_Clinical_Option();
    }

    /**
     * Step: Move to medical-record view using left side panel
     */
    public step_MoveTo_MedicalRec_View_Using_SideMenu(): CosmicNovaMedicalRecordPage{
        this.summaryHeaderModule.step_Press_MedicalRec_Option();
        return new CosmicNovaMedicalRecordPage();
    }

    /**
     * Step: Move to order view using left side panel
     */
    public step_MoveTo_Orders_View_Using_SideMenu(): void{
        this.summaryHeaderModule.step_Press_Orders_Option();
    }

    /**
     * Step: Move to mediation view using left side panel
     */
    public step_MoveTo_Medication_View_Using_SideMenu(): void{
        this.summaryHeaderModule.step_Press_Medication_Option();
    }

    /**
     * Validate: Verify patient name under summary view header
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_Validate_PatientName_Summery_Header (name: string): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_Patient_Name(name);
        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Validate: Verify patient id under summary view header
     * @returns {CosmicNovaPatientSummaryPage}
     */
    public step_Validate_PatientId_Summery_Header (): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_Patient_Id('19 430823-9088');

        return new CosmicNovaPatientSummaryPage();
    }

    /**
     * Written by Lathika MBH
     */
    public step_Validate_Attention_Signal_Icon(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_AttentionSignal();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_ContactAlertIcon_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_ContactAlert();
        return new CosmicNovaPatientSummaryPage();
    }
     public step_Press_ContactAlert_Icon_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Press_ContactAlert();
        return new CosmicNovaPatientSummaryPage();
     }
     public step_Validate_ContactAlert_Label_Summery_Header(icon: string): CosmicNovaPatientSummaryPage {
         if (icon == 'Infection') {
             this.summaryHeaderModule.step_Validate_ContactAlert_Infection_Popup();
             return new CosmicNovaPatientSummaryPage();
         }
         else if (icon == 'DNR'){
             this.summaryHeaderModule.step_Validate_ContactAlert_DNR_Popup();
             return new CosmicNovaPatientSummaryPage();
         }
         else{}

     }

     public step_Validate_StatusIcon_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_StatusICon();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_BedClip_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_BedClip();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Tags_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_Tags();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_InfoIcon_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_InfoIcon();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AddingPanel_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_AddinPanel();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Protected_ID_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_Protected_ID();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Press_InterpreterIcon_Summery_Header(): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Press_InterpreterIcon();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Interpreter_Popup(record): CosmicNovaPatientSummaryPage{
        this.summaryHeaderModule.step_Validate_Interpreter_Popup(record);
        return new CosmicNovaPatientSummaryPage();
    }





    public step_PressSign(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_PressSign();
        return new CosmicNovaPatientSummaryPage();
    }

    public step_SignalType_Selection(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SignalType_Selection(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Hyper_SubType_Selection(type: string): CosmicNovaPatientSummaryPage{
         if(type == 'Drug'){
             this.rightSignalPanel.step_SetSubType(type);
             this.rightSignalPanel.step_AddATC_Code();
             return new CosmicNovaPatientSummaryPage();
         }
         else if(type == 'other') {
             this.rightSignalPanel.step_SetSubType(type);
             this.rightSignalPanel.step_SetAllergen('Eggs');
             return new CosmicNovaPatientSummaryPage();
         }
    }
    public step_SetAllergen_Option(val: string): CosmicNovaPatientSummaryPage{
         this.rightSignalPanel.step_SetAllergen(val);
         return new CosmicNovaPatientSummaryPage();
    }

    public step_AddATC_Code(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_AddATC_Code();
        return new CosmicNovaPatientSummaryPage();
    }

    public step_SetReaction_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetReaction_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }

    public step_SetSeverity_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetSeverity_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }

    public step_SetCertainty_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetCertainty_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_SetComment_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetComment_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_SetReassessment_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetReassessment_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }/*
    public step_SetReassessment_Date_Option(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetReassessment_Date_Option;
        return new CosmicNovaPatientSummaryPage();
    } */

    public step_SetClinicWard_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetClinicWard_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }

    public step_SetContagiousDisease_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetContagiousDisease_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }

    public step_SetTreatment_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetTreatment_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }

    public step_SetNonStandardProcedure_Option(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_SetNonStandardProcedure_Option(val);
        return new CosmicNovaPatientSummaryPage();
    }


    public step_MakeInvalidateSignal(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_MakeInvalidateSignal();
        return new CosmicNovaPatientSummaryPage();
    }

    public step_MakeNewAssignment(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanel.step_MakeNewAssignment();
        return new CosmicNovaPatientSummaryPage();
    }

    //-----------Attention Signal Read Methods

    public step_Validate_AttentionSignal_Type_Read_Panel_Header(val: string): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_AttentionSignal_Type(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Icon_Read_Panel_Header(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Icon();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_InvalidateIcon_Read_Panel_Header(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_AttentionSignal_Invalidate_Icon();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_New_Assessment_Icon_Read_Panel_Header(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_AttentionSignal_NewAssessment_Icon();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Reassessment_Icon_Read_Panel_Header(): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_AttentionSignal_Reassessment_Icon();
        return new CosmicNovaPatientSummaryPage();
    }

    //----------Read Attention Signal Common Methods

    public step_Validate_AttentionSignal_Comment_Read_Panel_Header(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_AttentionSignal_Comment(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Visit_Admission_Read_Panel_Header(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Visit_Admission(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Care_Provider_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_CareProvider(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_ClinicWard_Read_Panel_Header(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Clinic_Ward(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Assessmentdate_Read_Panel_Header(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Assessmentdate(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Assessmenttime_Read_Panel_Header(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Assessmenttime(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Reassessment_Read_Panel_Header(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Reassessment_Value(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Reassessmentdate_Read_Panel_Header(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Reassessmentdate(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_Reassessmenttime_Read_Panel_Header(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Reassessmenttime(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_AttentionSignal_ReassessmentReason_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Attention_Signal_Reassessment_Reason(val);
        return new CosmicNovaPatientSummaryPage();
    }

    //----------------Read Hypersensitivity elements

    public step_Validate_Hypersensitivity_Certainty_Level_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Hypersensitivity_Certainty_Level(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Hypersensitivity_Severitiy_Level_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Hypersensitivity_Severity_Level(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Hypersensitivity_Reaction_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Hypersensitivity_Reaction(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Hypersensitivity_Allergen_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Hypersensitivity_Allergen(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Hypersensitivity_HyperType_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Hypersensitivity_Hyper_Type(val);
        return new CosmicNovaPatientSummaryPage();
    }

    //-----------------Read Contagious Disease elements

    public step_Validate_Contagious_Disease_Type_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Contagious_Disease_Type(val);
        return new CosmicNovaPatientSummaryPage();
    }

    //-----------------Read Non-standard Procedure elements

    public step_Validate_Non_Standard_Procedure_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Non_standard_Procedure(val);
        return new CosmicNovaPatientSummaryPage();
    }

    //-----------------Read Treatment & Condition elements

    public step_Validate_Treatment_Condition_Type_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Treatment_Condition_Type(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Treatment_Condition_name_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Treatment_Type(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Treatment_Condition_Condition_Type_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Treatment_Condition_Condition_Type(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Treatment_Condition_Condition_SubType_Name_Read_Panel(val): CosmicNovaPatientSummaryPage{
        this.rightSignalPanelRead.step_Read_Treatment_Condition_Condition_SubType_Name(val);
        return new CosmicNovaPatientSummaryPage();
    }

    //-----------------Admission Selection-----------
            //---------------Package Side Panel-----------


    public step_Enter_Comment_Text_Package_Side_Panel_Summary_View_Page(val): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Enter_Comment_Text(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Press_Done_Button_Package_Comment_Side_Panel_Summary_View_Page(): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Press_Done_Button();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Package_Comment_Icon_Summary_View_Page(): CosmicNovaPatientSummaryPage{
        this.Helper_Actions.isPresent(this.iconpackcomment);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Press_And_Enter_Addon_Text_Package_Side_Panel_Summary_View_Page(val): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Enter_Addon_Text(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Package_Name_With_Add0n(val : string): CosmicNovaPatientSummaryPage{
        this.Helper_Actions.checkTextAvailability(this.divPackageSummary, val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Edit_Comment_Field_On_Package_Side_panel_Summary_View_Page(val): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Edit_Comment_Text(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Edit_Add_On_Field_On_Package_Side_Panel_Summary_View_Page(val): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Edit_Add_On_Text(val);
        return new CosmicNovaPatientSummaryPage();
    }

                //----------------Reading Labels Which are added from adding Panel------

    public step_Read_Labels_Added_From_Adding_Panel_Summary_View_Page(val: string): CosmicNovaPatientSummaryPage{
        this.Helper_Actions.checkTextAvailability(this.lblLabelname, val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Press_On_Label_Summary_View_Page(val: string): CosmicNovaPatientSummaryPage{
        this.Helper_Actions.click(this.lblLabelname);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Enter_Comment_For_Label_Summary_View_Page(val): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Enter_Comment_Text(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Enter_Addon_For_Label_Summary_View_page(val): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Enter_Addon_Text(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Press_Done_Button_Label_Side_Panel_Summary_View_Page(): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Press_Done_Button();
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Press_Label_Remove_Button_Summary_View_Page(): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Press_Remove_Button();
        return new CosmicNovaPatientSummaryPage();
    }

    //Error Occurred :- Below text are not available in the Code. Start :

    public step_Validate_Comment_Text_On_Package_Side_Panel_Summary_View_Page(val): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Validate_Comment_Text(val);
        return new CosmicNovaPatientSummaryPage();
    }
    public step_Validate_Add_On_Text_On_Package_Side_Panel_Summary_View_Page(val): CosmicNovaPatientSummaryPage{
        this.summaryviewsidepanel.step_Validate_Add_On_Text(val);
        return new CosmicNovaPatientSummaryPage();
    }

    // End
}