/**
 * Created by Lathika.Herath on 4/17/2018.
 */

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
import {CosmicNovaLeftSubMenuModule} from "../module-objects/CosmicNovaLeftSubMenuModule";
import {CosmicNovaClinicalParametersRegisterValueModule} from "../module-objects/CosmicNovaClinicalParametersRegisterValueModule";
import {CosmicNovaClinicalParameterHistorySidePanelModule} from "../module-objects/CosmicNovaClinicalParameterHistorySidePanelModule"
import {Button} from "../../../ui-core/ui-elements/Button";
import {CosmicNovaObservationReadModule} from "../module-objects/CosmicNovaObservationReadModule";
import {CosmicNovaCommonRecordReadModule} from "../module-objects/CosmicNovaCommonRecordReadModule";
import {CosmicNovaCarePlanModule} from "../module-objects/CosmicNovaCarePlanModule";
import {CosmicNovaAddMicrobiologyModule} from "../module-objects/CosmicNovaAddMicrobiologyModule";

const log = Factory.getLogger("Page.CosmicNovaMedicalRecordPage")

export class CosmicNovaMedicalRecordPage extends PageBase {

    private medicalrecordpanel : CosmicNovaObservationReadModule;
    private medicalrecordcommonrecordpanel : CosmicNovaCommonRecordReadModule;
    private medicalrecordcareplan   : CosmicNovaCarePlanModule;


    private lblObservation      : any;
    private lblKeywordbased     : any;
    private lblNUCD             : any;
    private lblCarePlan         : any;


    constructor() {
        super();
        const element = Elements.CosmicNovaMedicalRecordPage;
        this.medicalrecordpanel = new CosmicNovaObservationReadModule();
        this.medicalrecordcommonrecordpanel = new CosmicNovaCommonRecordReadModule();
        this.medicalrecordcareplan  = new CosmicNovaCarePlanModule();


        this.lblObservation      = super.findLocators(element.lblObservation.findBy, element.lblObservation.value);
        this.lblKeywordbased      = super.findLocators(element.lblKeywordbased.findBy, element.lblKeywordbased.value);
        this.lblNUCD      = super.findLocators(element.lblNUCD.findBy, element.lblNUCD.value);
        this.lblCarePlan      = super.findLocators(element.lblCarePlan.findBy, element.lblCarePlan.value);

    }

    public step_Move_To_Observation_Module(): CosmicNovaMedicalRecordPage{
        this.Helper_Actions.click(this.lblObservation);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Move_To_Common_Record_Module(): CosmicNovaMedicalRecordPage{
        this.Helper_Actions.click(this.lblKeywordbased);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Move_To_NUCD_View(): CosmicNovaMedicalRecordPage{
        this.Helper_Actions.click(this.lblNUCD);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Move_To_Care_Plan_View(): CosmicNovaMedicalRecordPage{
        this.Helper_Actions.click(this.lblCarePlan);
        return new CosmicNovaMedicalRecordPage();
    }

    //------------------Observation
    public step_Validate_Event_Name_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Event_Name_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Event_Comment_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Event_Comment_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Event_Time_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Event_Time_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Action_Name_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Action_Name_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Action_Comment_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Action_Comment_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Action_Time_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Action_Time_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Result_Name_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Result_Name_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Result_Comment_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Result_Comment_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Result_Time_Observation_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Result_Time_Observation_Page(val);
        return new CosmicNovaMedicalRecordPage();
    }

    //-----------------------Result & Action Button

    public step_Validate_Result_Button_Observation_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Result_Button_Observation_Page();
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Action_Button_Observation_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Action_Button_Observation_Page();
        return new CosmicNovaMedicalRecordPage();
    }

    //-----------------------Unsigned Icon Methods

    public step_Validate_Event_Unsigned_Icon_Observation_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Event_Unsigned_Icon_Observation_Page();
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Action_Unsigned_Icon_Observation_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Action_Unsigned_Icon_Observation_Page();
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Result_Unsigned_Icon_Observation_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordpanel.step_Validate_Result_Unsigned_Icon_Observation_Page();
        return new CosmicNovaMedicalRecordPage();
    }

    //-------------------Common Record Read Panel Methods

    public step_Validate_CommonRecord_Title_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Common_Record_Title(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_CommonRecord_Press_Collapse_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Common_Record_Collapse_Expand_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_CommonRecord_Press_Expand_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Common_Record_Collapse_Expand_Icon();
        return new CosmicNovaMedicalRecordPage();
    }
                    //------------Free Text Keyword----------//
    public step_Validate_FreeText_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Free_Text_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_FreeText_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Free_Text_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_FreeText_Keyword_Registered_date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Free_Text_Register_date(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_FreeText_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Free_Text_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }
                    //-------------CheckBox Keyword--------//

    public step_Validate_CheckBox_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_CheckBox_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_CheckBox_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_CheckBox_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_CheckBox_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_CheckBox_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_CheckBox_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_CheckBox_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //--------------CheckBox Configurable---------//

    public step_Validate_CheckBox_Configurable_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_CheckBox_Configurable_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_CheckBox_Configurable_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_CheckBox_Configurable_Value(val);
        return new  CosmicNovaMedicalRecordPage();
    }

    public step_Validate_CheckBox_Configurable_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_CheckBox_Configurable_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_CheckBox_Configurable_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_CheckBox_Configurable_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //-------------Date & Time--------------//

    public step_Validate_Date_Time_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Date_Time_name(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_date_Time_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Date_Time_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Date_Time_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_date_Time_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Date_Time_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Date_time_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //-------------Fixed Value---------------//

    public step_Validate_Fixed_Value_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Fixed_Value_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Fixed_Value_Keyword_Value_Common_Record_page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Fixed_Value_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Fixed_Value_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Fixed_Value_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }

    public step_Validate_Fixed_Value_Keyword_Unsigned_Icon_Coomon_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Fixed_value_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //--------------Numeric----------------//

    public step_Validate_Numeric_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Numeric_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Numeric_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Numeric_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Numeric_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Numeric_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Numeric_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Numeric_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //-------------Numeric Two-----------//

    public step_Validate_Numeric_two_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Numeric_Two_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Numeric_Two_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Numeric_Two_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Numeric_Two_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Numeric_Two_date(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Numeric_Two_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Numeric_Two_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //---------------Archetype Blood Pressure (Complex)------//

    public step_Validate_Arche_Blood_Pressure_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Blood_Pressure_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Arche_Blood_Pressure_Keyword_Value_Commom_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Blood_Pressure_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

                    //---------------ArcheType AVPU-----------//
    public step_Validate_Arche_AVPU_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_AVPU_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Arche_AVPU_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_AVPU_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Arche_AVPU_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_AVPU_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Arche_AVPU_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_AVPU_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //------------------Archetype Height------------//
    public step_Validate_Height_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Height_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Height_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Height_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Height_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Height_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Height_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Height_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //------------------Archetype Indirect oximetry-----------//

                    //------------------Archetype MEWS-----------//

                    //------------------Archetype NEWS-----------//

                    //------------------Archetype Pain-----------//
    public step_Validate_Pain_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Pain_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Pain_Keyword_Value__Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Pain_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Pain_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Pain_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Pain_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Pain_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //-------------------Archetype Pulse-----------//
    public step_Validate_Pulse_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Pulse_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Pulse_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Pulse_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Pulse_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Pulse_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Pulse_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Pulse_Unsigned_Icon_Common_Record_Page();
        return new CosmicNovaMedicalRecordPage();
    }

                    //--------------------Archetype Respiration--------------//

    public step_Validate_Respiration_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Respiration_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Respiration_Keyword_Value_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Respiration_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Respiration_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Respiration_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Respiration_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Respiration_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

                    //---------------------Archetype Weight------------//

    public step_Validate_Weight_Keyword_Name_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Weight_Name(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Weight_Keyword_Value_Common_Record_Page(val):CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Weight_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Weight_Keyword_Date_Common_Record_Page(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Weight_Date(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Weight_Keyword_Unsigned_Icon_Common_Record_Page(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcommonrecordpanel.step_Validate_Arche_Weight_Unsigned_Icon();
        return new CosmicNovaMedicalRecordPage();
    }

    //-------------------Care Plan View----------------------//

    public step_Press_Commitment_Selection_Arrow_CarePlan_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Commitment_Selection_Arrow();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Select_Care_Plan_From_Care_Plan_List(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Select_Care_Plan_From_List();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Medical_History_Record_In_Commitment(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Medical_History_Record_Commitment();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Medical_History_Expand_Button_Commitment_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Medical_History_Expand_Button();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Medical_History_Value_Commitment_View(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Medical_History_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Status_Value_Commitment_View(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Status_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Discharge_Summery_Value_Commitment_View(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Discharge_Summery_Value_Commitment(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Read_Open_Standard_Care_Plan_Commitment_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Read_Open_Standard_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Read_Open_Individual_Care_Plan__Commitment_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Read_Open_Individual_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Read_Closed_Standard_Care_Plan_Commitment_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Read_Closed_Standard_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Read_Closed_Individual_Care_Plan_Commitment_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Read_Closed_Individual_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }

    //----------------Care Need History Value----
    public step_Press_Care_Need_In_Care_Paln_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Care_Need_In_Standard_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Update_Button_Care_Need_Side_Panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Update_Button_Care_Plan_Side_panel();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_On_Care_Need_Value_Field_Care_Need_Update_Side_Panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_On_Update_Value_Field();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Enter_Values_To_Care_Need_Field_Update_Care_Need_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Enter_Value_To_Care_Need_Field(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Sign_Button_Care_Plan_Update_Side_panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Sign_Button_Care_Need_Update_Side_Panel();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Save_Button_Care_Plan_Update_Side_Panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Save_Button_Care_Plan_Update_Side_Panel();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Care_Need_New_Value_Care_Need_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_New_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Care_Need_Old_Value_Care_Need_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_Old_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

    //----------------Treatments Values-----
    public step_Press_Treatment_In_Standard_Care_Plan_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Treatment_In_Standard_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Treatment_Update_Button_Treatment_Side_panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Update_Button_Care_Plan_Side_panel();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Treatment_Keyword_Value_Field_Treatmnent_Side_Panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_On_Update_Value_Field();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Select_Treatment_Value_From_Popup_Treatment_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Select_Treatment_Value_From_Popup(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Treatment_New_Value_Treatment_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_New_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Treatment_Old_Value_Treatment_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_Old_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

    //-------------------Target Values------
    public step_Validate_Press_Target_In_Standard_Care_Plan_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Target_In_Standard_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Target_Update_Button_Target_Side_panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Update_Button_Care_Plan_Side_panel();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Target_Keyword_Value_Field_Target_Side_Panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_On_Update_Value_Field();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Enter_Value_To_Target_Field_Target_Update_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Enter_Value_To_Care_Need_Field(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Target_New_Value_Target_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_New_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Target_Old_Value_Target_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_Old_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

    //--------------------Evaluation -----------
    public step_Press_Evaluation_In_Standard_Care_Plan_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Evaluation_In_Standard_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Evaluation_Update_Button_Evaluation_Side_Panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Update_Button_Care_Plan_Side_panel();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Evaluation_Keyword_Value_Field_Evaluation_Side_panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_On_Update_Value_Field();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Enter_Value_To_Evaluation_Field_Evaluation_Update_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Enter_Value_To_Care_Need_Field(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Evaluation_New_Value_Evaluation_History_Side_panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_New_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Evaluation_Old_Value_Evaluation_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_Old_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }

    //----------------------Result--------------
    public step_Press_Result_In_Standard_Care_Plan_View(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Result_In_Standard_Care_Plan();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Result_Update_Button_Result_Side_Panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_Update_Button_Care_Plan_Side_panel();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Press_Result_Keyword_Value_Field_Result_Side_Panel(): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Press_On_Update_Value_Field();
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Enter_Value_To_Result_Field_Result_Update_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Enter_Value_To_Care_Need_Field(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Result_New_Value_Result_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_New_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }
    public step_Validate_Result_Old_Value_Result_History_Side_Panel(val): CosmicNovaMedicalRecordPage{
        this.medicalrecordcareplan.step_Validate_Care_Plan_Old_Value(val);
        return new CosmicNovaMedicalRecordPage();
    }




}
