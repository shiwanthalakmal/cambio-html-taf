/**
 * Created by Lathika.Herath on 3/28/2018.
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

const log = Factory.getLogger("Page.CosmicNovaClinicalParametersPage")

export class CosmicNovaClinicalParametersPage extends PageBase {


    // private rightSignalPanel: CosmicNovaClinicalParametersRegisterModule;
    private clinicalParameterRegisterValuePanel : CosmicNovaClinicalParametersRegisterValueModule;
    private clinicalParameterHistorySidePanel   : CosmicNovaClinicalParameterHistorySidePanelModule;
    private leftsubmenu: CosmicNovaLeftSubMenuModule;


    //-------------Clinical Parameter Read Elements
    private btntempname         : any;
    private btnRegister         : any;
   // private btnmewsvaluebox     : any;


    constructor() {
        super();
        const element = Elements.CosmicNovaClinicalParametersPage;
        this.leftsubmenu = new CosmicNovaLeftSubMenuModule();
        this.clinicalParameterRegisterValuePanel = new CosmicNovaClinicalParametersRegisterValueModule();
        this.clinicalParameterHistorySidePanel   = new CosmicNovaClinicalParameterHistorySidePanelModule();
        //this.rightSignalPanel = new CosmicNovaClinicalParametersRegisterModule();


    //--------------Clinical Parameter Read Elements
        this.btnRegister = super.findLocators(element.btnRegister.findBy, element.btnRegister.value);
        this.btntempname = super.findLocators(element.btntempname.findBy, element.btntempname.value);
       //this.btnmewsvaluebox = super.findLocators(element.btnmewsvaluebox.findBy, element.btnmewsvaluebox.value);

    }



    public step_press_Register_value_Button(): CosmicNovaClinicalParametersPage {
        this.Helper_Actions.click(this.btnRegister);
        return new CosmicNovaClinicalParametersPage();

    }

    //--------------Methods For Register Clinical Parameters Archetypes Common Methods
    public step_Press_Sign_Button_ClinicalParameter(): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Press_Sign_Button();
        return new CosmicNovaClinicalParametersPage();
    }

    //-------------Methods For Register MEWS Archetype

    public step_Press_Copy_History_Option(): CosmicNovaClinicalParametersPage {
        this.clinicalParameterRegisterValuePanel.step_SetCopy_History_Value_Option();
        return new CosmicNovaClinicalParametersPage();
    }

    public step_SetSystolic_Value_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage {
        this.clinicalParameterRegisterValuePanel.step_SetSystolic_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }

    public step_SetDiastolic_Value_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage {
        this.clinicalParameterRegisterValuePanel.step_SetDiastolic_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_SetPulseRate_Value_Clinical_Parameter_Register_Side_panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_SetPulse_Rate_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_SetRespiration_Rate_Value_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_SetRespiration_Rate_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_SetTemperature_Value_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_SetTemperature_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_AVPU_Value_MEWS_Clinical_Parameter_Register_Side_Panel(): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_AVPU_Value_MEWS();
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Select_AVPU_Value_MEWS_Clinical_Parameter_Register_Side_panel(val): CosmicNovaClinicalParametersPage {
        this.clinicalParameterRegisterValuePanel.step_Select_AVPU_Value_MEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }

    //--------------Methods For Register AVPU Archetype
    public step_Press_AVPU_Field_Clinical_Parameter_Register_Side_Panel(): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Click_AVPU_Field();
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Select_AVPU_Option_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_AVPU_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }

    //--------------Methods For Register BodyWeight Archetype
    public step_Set_Body_Weight_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Body_Weight_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    //--------------Methods For Register Pulse Archetype

    public step_Set_Pulse_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Pulse_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Pulse_Irregular_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Press_Pulse_Irregular_Field(val);
        return new CosmicNovaClinicalParametersPage();
    }
    //--------------Methods For Register Blood Pressure Archetype

    public step_Set_Blood_Pressure_Systolic_Diastolic_Clinical_Parameter_Register_Side_Panel(val1,val2): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Blood_Pressure_Systolic_Value(val1);
        this.clinicalParameterRegisterValuePanel.step_Set_Blood_Pressure_Diastolic_Value(val2);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Blood_Pressure_Position_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Blood_Pressure_Position_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Blood_Pressure_Local_Meassurement_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Blood_Pressure_Location_Measurement_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Blood_Pressure_Specific_Location_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Blood_Pressure_Specific_Location_Comment(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Blood_Pressure_Comment_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Blood_Pressure_Comment(val);
        return new CosmicNovaClinicalParametersPage();
    }

    //-----------------Methods For Register Body Temperature Archetype

    public step_Set_Body_Temperature_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Body_Temperature_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Body_Temperature_Site_of_Measurment_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Body_Temperature_Site_of_Measurement(val);
        return new CosmicNovaClinicalParametersPage();
    }

    //-----------------Methods For Register SpO2 Archetype

    public step_Set_SpO2_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_SpO2_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Any_Supplemental_Oxygen_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Any_Supplemental_Oxygen_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_FlowRate_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Flow_Rate_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_COPD_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_COPD_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }

    //-------------------Methods For Register Respiration Archetype

    public step_Set_Respiration_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Respiration_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }

    //--------------------Methods For Register Pain Archetype

    public step_Set_Pain_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Pain_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }

    //--------------------Methods For Register NEWS Archetype

    public step_Set_Respiration_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Respiration_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_SpO2_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_SpO2_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Any_Supplemental_Oxygen_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Any_Supplemental_Oxygen_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Flow_Rate_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Flow_Rate_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_COPD_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_COPD_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Temperature_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Temperature_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Blood_Pressure_NEWS_Clinical_Parameter_Register_Side_Panel(val1,val2): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Blood_Pressure_Systolic_NEWS(val1);
        this.clinicalParameterRegisterValuePanel.step_Set_Blood_Pressure_Diastolic_NEWS(val2);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Pulse_Rate_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Pulse_Rate_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Pulse_Irregular_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Pulse_Irregular_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_AVPU_NEWS_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_AVPU_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Weight_BMI_Clinical_Parameter_Register_Side_panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Weight_BMI_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Set_Height_BMI_Clinical_Parameter_Register_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Height_BMI_NEWS(val);
        return new CosmicNovaClinicalParametersPage();
    }

    //-----------------------Clinical Parameter---------
        //----------------------Register MRT Template--------

    public step_Set_Numeric_Keyword_MRT_Template_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Numeric_Value_In_MRT_Template(val);
        return new CosmicNovaClinicalParametersPage();
    }

    public step_Set_Single_Selection_Keyword_MRT_Template_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Single_Selection_Value_In_MRT_Template(val);
        return new CosmicNovaClinicalParametersPage();
    }

    public step_Set_Check_Box_Keyword_MRT_Template_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Check_Box_Config_Value_In_MRT_Template(val);
        return new CosmicNovaClinicalParametersPage();
    }

    public step_Set_Fixed_Value_Keyword_MRT_Template_Side_Panel(val1, val2): CosmicNovaClinicalParametersPage{
        this.clinicalParameterRegisterValuePanel.step_Set_Fixed_Value_In_MRT_Template(val1, val2);
        return new CosmicNovaClinicalParametersPage();
    }

    /*
    public step_Generate_MEWS_Data(): CosmicNovaClinicalParametersPage{
        for (var i=1; i<2001;i++){
            this.step_press_Register_value_Button();
            this.step_SetSystolic_Value_Clinical_Parameter_Register_Side_Panel('102');
            this.step_SetDiastolic_Value_Clinical_Parameter_Register_Side_Panel('110');
            this.step_SetPulseRate_Value_Clinical_Parameter_Register_Side_panel('66');
            this.step_SetRespiration_Rate_Value_Clinical_Parameter_Register_Side_Panel('100');
            this.step_SetTemperature_Value_Clinical_Parameter_Register_Side_Panel('45');
            this.step_Set_AVPU_Value_MEWS_Clinical_Parameter_Register_Side_Panel();
            this.step_Select_AVPU_Value_MEWS_Clinical_Parameter_Register_Side_panel('Alert');
            this.step_Press_Sign_Button_ClinicalParameter();

        }

        }
        */

    //--------------------Clinical Parameter Read------------------------

    public step_Validate_Clinical_Parameter_Template_Name(val: string): CosmicNovaClinicalParametersPage{
        this.Helper_Actions.findTextAndClick(this.btntempname,val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Press_Archetype_Value_Box_Clinical_Parameter_Main_View(val: string): CosmicNovaClinicalParametersPage{
        var btnarchevaluebox: any = this.findLocators("xpath","//div[contains(text(),'"+ val +"')]/../..//nova-vital-sign-value");
        new Button(btnarchevaluebox).click();
        return new CosmicNovaClinicalParametersPage();
    }


        //---------------------Clinical Parameter History Side Panel----------------
            //---------------------Methods For Read Clinical Parameter History Side Panel Common Elements

    public step_Validate_Title_Name_Clinical_Parameter_History_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterHistorySidePanel.step_Read_Clinical_Parameter_Title(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Validate_Expand_Button_Clinical_Parameter_History_Side_Panel(availability: string): CosmicNovaClinicalParametersPage{
        this.clinicalParameterHistorySidePanel.step_Press_Expand_Button(availability);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Validate_Date_Time_Clinical_Parameter_History_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterHistorySidePanel.step_Read_Archetype_Date_Time(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Validate_Main_Value_Clinical_Parameter_History_Side_Panel(val): CosmicNovaClinicalParametersPage{
        this.clinicalParameterHistorySidePanel.step_Read_Archetype_Main_Value(val);
        return new CosmicNovaClinicalParametersPage();
    }
    public step_Validate_Archetype_Optional_Keyword_Clinical_Parameter_History_Side_Panel(archetype, keywordList): CosmicNovaClinicalParametersPage{
        this.clinicalParameterHistorySidePanel.step_Read_Archetype_Optional_Keywords(archetype,keywordList);
        return new CosmicNovaClinicalParametersPage();
    }






}

