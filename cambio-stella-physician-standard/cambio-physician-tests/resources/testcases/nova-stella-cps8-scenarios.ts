import {Navigate} from "../../../cambio-physician-pageobjects/aspect-objects/Navigate";
/**
 * Created by SLakmal on 7/5/2017.
 */

describe('[NOVA:CPS08]', () => {

    function valueArray(){
        return [
            {
              "optKeyWord": "100"
            },
            {
                "optKeyWord": "100"
            },
        ]
    }


        xit('[NOVA2.1-76870]: Overview - Register new value to Overview template ', () => {
            Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Grace Manning').step_Click_On_The_MainMenu().step_Move_To_Clinical_Parameters_Page()
                .step_press_Register_value_Button().step_SetSystolic_Value_Clinical_Parameter_Register_Side_Panel('102').step_SetDiastolic_Value_Clinical_Parameter_Register_Side_Panel('90')
                .step_SetPulseRate_Value_Clinical_Parameter_Register_Side_panel('70').step_SetRespiration_Rate_Value_Clinical_Parameter_Register_Side_Panel('120').step_SetTemperature_Value_Clinical_Parameter_Register_Side_Panel('45')
                .step_Set_AVPU_Value_MEWS_Clinical_Parameter_Register_Side_Panel().step_Select_AVPU_Value_MEWS_Clinical_Parameter_Register_Side_panel('Alert').step_Press_AVPU_Field_Clinical_Parameter_Register_Side_Panel()
                .step_Select_AVPU_Option_Clinical_Parameter_Register_Side_Panel('Voice').step_Set_Body_Weight_Clinical_Parameter_Register_Side_Panel('122').step_Set_Pulse_Clinical_Parameter_Register_Side_Panel('69')
                .step_Set_Pulse_Irregular_Clinical_Parameter_Register_Side_Panel('true').step_Set_Blood_Pressure_Systolic_Diastolic_Clinical_Parameter_Register_Side_Panel('110', '120')
                .step_Set_Blood_Pressure_Position_Clinical_Parameter_Register_Side_Panel('Sitting').step_Set_Blood_Pressure_Local_Meassurement_Clinical_Parameter_Register_Side_Panel('Finger')
                .step_Set_Blood_Pressure_Specific_Location_Clinical_Parameter_Register_Side_Panel('Test Comment-Specific location').step_Set_Blood_Pressure_Comment_Clinical_Parameter_Register_Side_Panel('Test Comment - Clinical Parameter')
                .step_Set_Body_Temperature_Clinical_Parameter_Register_Side_Panel('25').step_Set_Body_Temperature_Site_of_Measurment_Clinical_Parameter_Register_Side_Panel('Mouth')
                .step_Set_SpO2_Clinical_Parameter_Register_Side_Panel('55').step_Set_Any_Supplemental_Oxygen_Clinical_Parameter_Register_Side_Panel('Yes').step_Set_FlowRate_Clinical_Parameter_Register_Side_Panel('12.5')
                .step_Set_COPD_Clinical_Parameter_Register_Side_Panel('false').step_Set_Respiration_Clinical_Parameter_Register_Side_Panel('111').step_Set_Pain_Clinical_Parameter_Register_Side_Panel('NRS 3')
                .step_Set_Respiration_NEWS_Clinical_Parameter_Register_Side_Panel('155').step_Set_SpO2_NEWS_Clinical_Parameter_Register_Side_Panel('46').step_Set_Any_Supplemental_Oxygen_NEWS_Clinical_Parameter_Register_Side_Panel('Yes')
                .step_Set_Flow_Rate_NEWS_Clinical_Parameter_Register_Side_Panel(44).step_Set_COPD_NEWS_Clinical_Parameter_Register_Side_Panel('True').step_Set_Temperature_NEWS_Clinical_Parameter_Register_Side_Panel('34')
                .step_Set_Blood_Pressure_NEWS_Clinical_Parameter_Register_Side_Panel('115', '125').step_Set_Pulse_Rate_NEWS_Clinical_Parameter_Register_Side_Panel('212').step_Set_Pulse_Irregular_NEWS_Clinical_Parameter_Register_Side_Panel('True')
                .step_Set_AVPU_NEWS_Clinical_Parameter_Register_Side_Panel('Voice').step_Set_Weight_BMI_Clinical_Parameter_Register_Side_panel('152').step_Set_Height_BMI_Clinical_Parameter_Register_Side_Panel('120')
                .step_Press_Sign_Button_ClinicalParameter();

        });

        xit('[NOVA2.1-76867] - Display Clinical Parameter Template', () => {
            Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Lena Lennartsson').step_Click_On_The_MainMenu().step_Move_To_Clinical_Parameters_Page()
                .step_Validate_Clinical_Parameter_Template_Name('Nova2.1 Overview temp');
        });


   /* using('parameters',[['SpO2', 'Yes, 5 l/min, Yes', 'Yes', 'SpO2', '09-04-2018 03:13 PM', '56%'],
                            ['AVPU', '', 'No', 'AVPU', '09-04-2018 03:13 PM', 'Pain'],
                                ['Respiration', '', 'No', 'Respiration', '09-04-2018 03:13 PM', '178 /min'],
                                    ['Pulse', 'Yes', 'Yes', 'Pulse','09-04-2018 03:13 PM', '65 /min'],
                                        ['Body Temperature', 'Rectum', 'Yes', 'Body Temperature', '16-04-2018 12:18 PM', '33 °C'],
                                            ['Body Weight', '', 'No', 'Body Weight', '09-04-2018 01:52 PM', '80 kg'],
                                                ['BMI', 'Weight,Height', 'Yes', 'BMI', '09-04-2018 01:52 PM', '24.7 kg/m2'],
                                                    ['Pain', '', 'No', 'Pain', '09-04-2018 03:10 PM', 'NRS 8'],
                                                        ['Height', '', 'No', 'Height', '09-04-2018 01:52 PM', '180 cm']],function(one, two, three, four, five, six){
        xit('[NOVA2.1-76871] - Overview - History value',() =>{
            Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Lena Lennartsson').step_Click_On_The_MainMenu().step_Move_To_Clinical_Parameters_Page()
                .step_Validate_Clinical_Parameter_Template_Name('Admission').step_Press_Archetype_Value_Box_Clinical_Parameter_Main_View(four).step_Validate_Date_Time_Clinical_Parameter_History_Side_Panel(five)
                .step_Validate_Main_Value_Clinical_Parameter_History_Side_Panel(six).step_Validate_Expand_Button_Clinical_Parameter_History_Side_Panel(three).step_Validate_Archetype_Optional_Keyword_Clinical_Parameter_History_Side_Panel(one,two);

        });  */

        xit('NOVA2.1-76869:Overview - Register MRT new values', () =>{
            Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Lena Lennartsson').step_Click_On_The_MainMenu().step_Move_To_Clinical_Parameters_Page()
                .step_Validate_Clinical_Parameter_Template_Name('Nova_MRT2').step_press_Register_value_Button().step_Set_Numeric_Keyword_MRT_Template_Side_Panel('26').step_Set_Single_Selection_Keyword_MRT_Template_Side_Panel('3')
                .step_Set_Check_Box_Keyword_MRT_Template_Side_Panel('X').step_Set_Fixed_Value_Keyword_MRT_Template_Side_Panel('2','5');

        });

    xit('NOVA2.1-76884:Medical record - Display Observation - Read signed Observation ', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT1 SignedObservation').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_Observation_Module().step_Validate_Event_Name_Observation_Page('Nutrition').step_Validate_Event_Comment_Observation_Page('Text Field - Nutrition')
            .step_Validate_Event_Time_Observation_Page('Today 13:51 AA').step_Validate_Action_Name_Observation_Page('Information').step_Validate_Action_Comment_Observation_Page('Text Field - Information')
            .step_Validate_Action_Time_Observation_Page('Today 13:51 AA').step_Validate_Result_Name_Observation_Page('Results / evaluation').step_Validate_Result_Comment_Observation_Page('Text Field - Result & Evaluation')
            .step_Validate_Result_Time_Observation_Page('Today 13:51 AA').step_Validate_Result_Button_Observation_Page().step_Validate_Action_Button_Observation_Page();
    });

    xit('NOVA2.1-76883:Medical record - Display Observation - Read saved Observation ', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT2 SavedObservation').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_Observation_Module().step_Validate_Event_Name_Observation_Page('Nutrition').step_Validate_Event_Comment_Observation_Page('Text Field - Nutrition')
            .step_Validate_Event_Time_Observation_Page('Today 17:58 AA').step_Validate_Action_Name_Observation_Page('Information').step_Validate_Action_Comment_Observation_Page('Text Field - Information')
            .step_Validate_Action_Time_Observation_Page('Today 17:58 AA').step_Validate_Result_Name_Observation_Page('Results / evaluation').step_Validate_Result_Comment_Observation_Page('Text Field - Result & Evaluation')
            .step_Validate_Result_Time_Observation_Page('Today 17:58 AA').step_Validate_Result_Button_Observation_Page().step_Validate_Action_Button_Observation_Page().step_Validate_Event_Unsigned_Icon_Observation_Page()
            .step_Validate_Action_Unsigned_Icon_Observation_Page().step_Validate_Result_Unsigned_Icon_Observation_Page();
    });

    xit('NOVA2.1-76882:Medical record - Common record note - Read Unsigned Note', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT3 SavedCommonR').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_Common_Record_Module().step_Validate_CommonRecord_Title_Common_Record_Page('Nova Keyword Base View Template')
            .step_Validate_CommonRecord_Press_Collapse_Icon_Common_Record_Page().step_Validate_CommonRecord_Press_Expand_Icon_Common_Record_Page().step_Validate_FreeText_Keyword_Name_Common_Record_Page('Free text')
            .step_Validate_FreeText_Keyword_Value_Common_Record_Page('Testing Free Text Field').step_Validate_FreeText_Keyword_Registered_date_Common_Record_Page('Yesterday').step_Validate_FreeText_Keyword_Unsigned_Icon_Common_Record_Page()
            .step_Validate_CheckBox_Keyword_Name_Common_Record_Page('Checkbox').step_Validate_CheckBox_Keyword_Value_Common_Record_Page('Planned').step_Validate_CheckBox_Keyword_Date_Common_Record_Page('Yesterday')
            .step_Validate_CheckBox_Keyword_Unsigned_Icon_Common_Record_Page().step_Validate_CheckBox_Configurable_Keyword_Name_Common_Record_Page('Checkbox (Configurable)').step_Validate_CheckBox_Configurable_Keyword_Value_Common_Record_Page('X')
            .step_Validate_CheckBox_Configurable_Keyword_Date_Common_Record_Page('Yesterday').step_Validate_CheckBox_Configurable_Keyword_Unsigned_Icon_Common_Record_Page().step_Validate_Date_Time_Keyword_Name_Common_Record_Page('Date & Time')
            .step_Validate_date_Time_Keyword_Value_Common_Record_Page('19-04-2018 10:40 AM').step_Validate_Date_Time_Keyword_Date_Common_Record_Page('Yesterday').step_Validate_Date_Time_Keyword_Unsigned_Icon_Common_Record_Page()
            .step_Validate_Fixed_Value_Keyword_Name_Common_Record_Page('Fixed value').step_Validate_Fixed_Value_Keyword_Value_Common_Record_page('0').step_Validate_Fixed_Value_Keyword_Date_Common_Record_Page('Yesterday')
            .step_Validate_Fixed_Value_Keyword_Unsigned_Icon_Coomon_Record_Page().step_Validate_Numeric_Keyword_Name_Common_Record_Page('Numeric').step_Validate_Numeric_Keyword_Value_Common_Record_Page('99 number')
            .step_Validate_Numeric_Keyword_Date_Common_Record_Page('Yesterday').step_Validate_Numeric_Keyword_Unsigned_Icon_Common_Record_Page().step_Validate_Numeric_two_Keyword_Name_Common_Record_Page('Blood pressure')
            .step_Validate_Numeric_Two_Keyword_Value_Common_Record_Page('120/80 mmHg').step_Validate_Numeric_Two_Keyword_Date_Common_Record_Page('Yesterday').step_Validate_Numeric_Two_Keyword_Unsigned_Icon_Common_Record_Page()
            .step_Validate_Arche_Blood_Pressure_Keyword_Name_Common_Record_Page('Blood pressure (complex)')
            .step_Validate_Arche_AVPU_Keyword_Name_Common_Record_Page('Consciousness').step_Validate_Arche_AVPU_Keyword_Value_Common_Record_Page('Voice: The patient responds in any way to a voice stimulus')
            .step_Validate_Arche_AVPU_Keyword_Date_Common_Record_Page('Yesterday').step_Validate_Arche_AVPU_Keyword_Unsigned_Icon_Common_Record_Page().step_Validate_Height_Keyword_Name_Common_Record_Page('Height')
            .step_Validate_Height_Keyword_Value_Common_Record_Page('177 cm').step_Validate_Height_Keyword_Date_Common_Record_Page('Yesterday').step_Validate_Height_Keyword_Unsigned_Icon_Common_Record_Page()
            .step_Validate_Pain_Keyword_Name_Common_Record_Page('Pain').step_Validate_Pain_Keyword_Value__Common_Record_Page('NRS 2').step_Validate_Pain_Keyword_Value_Common_Record_Page('Yesterday')
            .step_Validate_Pain_Keyword_Unsigned_Icon_Common_Record_Page().step_Validate_Pulse_Keyword_Name_Common_Record_Page('Pulse').step_Validate_Pulse_Keyword_Value_Common_Record_Page('66 /min')
            .step_Validate_Pulse_Keyword_Date_Common_Record_Page('Yesterday').step_Validate_Pulse_Keyword_Unsigned_Icon_Common_Record_Page()
            .step_Validate_Respiration_Keyword_Name_Common_Record_Page('Respirations').step_Validate_Respiration_Keyword_Value_Common_Record_Page('144 /min').step_Validate_Respiration_Keyword_Date_Common_Record_Page('Yesterday')
            .step_Validate_Respiration_Keyword_Unsigned_Icon_Common_Record_Page().step_Validate_Weight_Keyword_Name_Common_Record_Page('Weight').step_Validate_Weight_Keyword_Value_Common_Record_Page('75 kg')
            .step_Validate_Weight_Keyword_Date_Common_Record_Page('Yesterday').step_Validate_Weight_Keyword_Unsigned_Icon_Common_Record_Page();
    });

    xit('NOVA2.1-76881:Medical record - Common record note - Read Signed Note', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT4 SignedCommonR').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_Common_Record_Module().step_Validate_CommonRecord_Title_Common_Record_Page('Nova Keyword Base View Template')
            .step_Validate_CommonRecord_Press_Collapse_Icon_Common_Record_Page().step_Validate_CommonRecord_Press_Expand_Icon_Common_Record_Page().step_Validate_FreeText_Keyword_Name_Common_Record_Page('Free text')
            .step_Validate_FreeText_Keyword_Value_Common_Record_Page('Testing Free Text Field').step_Validate_FreeText_Keyword_Registered_date_Common_Record_Page('Today')
            .step_Validate_CheckBox_Keyword_Name_Common_Record_Page('Checkbox').step_Validate_CheckBox_Keyword_Value_Common_Record_Page('Planned').step_Validate_CheckBox_Keyword_Date_Common_Record_Page('Today')
            .step_Validate_CheckBox_Configurable_Keyword_Name_Common_Record_Page('Checkbox (Configurable)').step_Validate_CheckBox_Configurable_Keyword_Value_Common_Record_Page('X')
            .step_Validate_CheckBox_Configurable_Keyword_Date_Common_Record_Page('Today').step_Validate_Date_Time_Keyword_Name_Common_Record_Page('Date & Time')
            .step_Validate_date_Time_Keyword_Value_Common_Record_Page('19-04-2018 10:40 AM').step_Validate_Date_Time_Keyword_Date_Common_Record_Page('Today')
            .step_Validate_Fixed_Value_Keyword_Name_Common_Record_Page('Fixed value').step_Validate_Fixed_Value_Keyword_Value_Common_Record_page('0').step_Validate_Fixed_Value_Keyword_Date_Common_Record_Page('Today')
            .step_Validate_Numeric_Keyword_Name_Common_Record_Page('Numeric').step_Validate_Numeric_Keyword_Value_Common_Record_Page('99 number')
            .step_Validate_Numeric_Keyword_Date_Common_Record_Page('Today').step_Validate_Numeric_two_Keyword_Name_Common_Record_Page('Blood pressure')
            .step_Validate_Numeric_Two_Keyword_Value_Common_Record_Page('120/80 mmHg').step_Validate_Numeric_Two_Keyword_Date_Common_Record_Page('Today')
            .step_Validate_Arche_Blood_Pressure_Keyword_Name_Common_Record_Page('Blood pressure (complex)')
            .step_Validate_Arche_AVPU_Keyword_Name_Common_Record_Page('Consciousness').step_Validate_Arche_AVPU_Keyword_Value_Common_Record_Page('Voice: The patient responds in any way to a voice stimulus')
            .step_Validate_Arche_AVPU_Keyword_Date_Common_Record_Page('Today').step_Validate_Height_Keyword_Name_Common_Record_Page('Height')
            .step_Validate_Height_Keyword_Value_Common_Record_Page('177 cm').step_Validate_Height_Keyword_Date_Common_Record_Page('Today')
            .step_Validate_Pain_Keyword_Name_Common_Record_Page('Pain').step_Validate_Pain_Keyword_Value__Common_Record_Page('NRS 2').step_Validate_Pain_Keyword_Value_Common_Record_Page('Today')
            .step_Validate_Pulse_Keyword_Name_Common_Record_Page('Pulse').step_Validate_Pulse_Keyword_Value_Common_Record_Page('66 /min')
            .step_Validate_Pulse_Keyword_Date_Common_Record_Page('Today')
            .step_Validate_Respiration_Keyword_Name_Common_Record_Page('Respirations').step_Validate_Respiration_Keyword_Value_Common_Record_Page('144 /min').step_Validate_Respiration_Keyword_Date_Common_Record_Page('Today')
            .step_Validate_Weight_Keyword_Name_Common_Record_Page('Weight').step_Validate_Weight_Keyword_Value_Common_Record_Page('75 kg')
            .step_Validate_Weight_Keyword_Date_Common_Record_Page('Today');
    });

    xit('NOVA2.1-76874:Medical record - Select Commitment', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT5 CarePlan').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Commitment_Selection_Arrow_CarePlan_View();
    });

    xit('NOVA2.1-76875:Medical record - Read care plan', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT5 CarePlan').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Commitment_Selection_Arrow_CarePlan_View().step_Select_Care_Plan_From_Care_Plan_List()
            .step_Validate_Medical_History_Record_In_Commitment().step_Press_Medical_History_Expand_Button_Commitment_View().step_Validate_Medical_History_Value_Commitment_View('Testing AFT - Medical History')
            .step_Validate_Status_Value_Commitment_View('Nova AFT Test - Status').step_Validate_Discharge_Summery_Value_Commitment_View('Nova AFT Test - Discharge Summery').step_Read_Open_Standard_Care_Plan_Commitment_View()
            .step_Read_Open_Individual_Care_Plan__Commitment_View().step_Read_Closed_Standard_Care_Plan_Commitment_View().step_Read_Closed_Individual_Care_Plan_Commitment_View();
    });

    xit('NOVA2.1-76876:Medical record - Care plan - History value', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT6 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Care_Need_In_Care_Paln_View().step_Press_Update_Button_Care_Need_Side_Panel()
            .step_Press_On_Care_Need_Value_Field_Care_Need_Update_Side_Panel().step_Enter_Values_To_Care_Need_Field_Update_Care_Need_Side_Panel('Nova AFT Testing - Care Need 2').step_Press_Sign_Button_Care_Plan_Update_Side_panel();

    });

    xit('NOVA2.1-76876:Medical record - Care plan - History value - Data Verification', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT7 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Care_Need_In_Care_Paln_View().step_Validate_Care_Need_New_Value_Care_Need_History_Side_Panel('Nova AFT Testing - Care Need 2')
            .step_Validate_Care_Need_Old_Value_Care_Need_History_Side_Panel('Nova AFT Testing  - Care Need 1');

    });

    xit('NOVA2.1-76878:Medical record - Treatment side panel - History value', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT6 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Treatment_In_Standard_Care_Plan_View().step_Press_Treatment_Update_Button_Treatment_Side_panel()
            .step_Press_Treatment_Keyword_Value_Field_Treatmnent_Side_Panel().step_Enter_Values_To_Care_Need_Field_Update_Care_Need_Side_Panel('Nova AFT Testing - Treatment 2').step_Press_Sign_Button_Care_Plan_Update_Side_panel();

    });

    xit('NOVA2.1-76878:Medical record - Treatment side panel - History value - Data Verification', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT7 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Treatment_In_Standard_Care_Plan_View().step_Validate_Treatment_New_Value_Treatment_History_Side_Panel('Nova AFT Testing - Treatment 2')
            .step_Validate_Treatment_Old_Value_Treatment_History_Side_Panel('Nova AFT Testing - Treatment 1');


    });

    xit('NOVA2.1-76877:Medical record -Target side panel - History value.', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT7 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Validate_Press_Target_In_Standard_Care_Plan_View().step_Press_Target_Update_Button_Target_Side_panel()
            .step_Press_Target_Keyword_Value_Field_Target_Side_Panel().step_Enter_Value_To_Target_Field_Target_Update_Side_Panel('Nova AFT Testing - Target 2').step_Press_Sign_Button_Care_Plan_Update_Side_panel();

    });

    xit('NOVA2.1-76877:Medical record -Target side panel - History value.- Data Validation', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT7 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Validate_Press_Target_In_Standard_Care_Plan_View().step_Validate_Target_New_Value_Target_History_Side_Panel('Nova AFT Testing - Target 2')
            .step_Validate_Target_Old_Value_Target_History_Side_Panel('Nova AFT Testing - Target 1');

    });

    xit('NOVA2.1-76879:Medical record - Evaluation side panel - History value', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT7 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Evaluation_In_Standard_Care_Plan_View().step_Press_Evaluation_Update_Button_Evaluation_Side_Panel()
            .step_Press_Evaluation_Keyword_Value_Field_Evaluation_Side_panel().step_Enter_Value_To_Evaluation_Field_Evaluation_Update_Side_Panel('Nova AFT Testing - Evaluation 2').step_Press_Sign_Button_Care_Plan_Update_Side_panel();

    });

    xit('NOVA2.1-76879:Medical record - Evaluation side panel - History value', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT7 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Evaluation_In_Standard_Care_Plan_View().step_Validate_Evaluation_New_Value_Evaluation_History_Side_panel('Nova AFT Testing - Evaluation 2')
            .step_Validate_Evaluation_Old_Value_Evaluation_History_Side_Panel('Nova AFT Testing - Evaluation 1');

    });

    xit('NOVA2.1-76880:Medical record - Result side panel - History values', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT7 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Result_In_Standard_Care_Plan_View().step_Press_Result_Update_Button_Result_Side_Panel()
            .step_Press_Result_Keyword_Value_Field_Result_Side_Panel().step_Enter_Value_To_Result_Field_Result_Update_Side_Panel('Nova AFT Testing - Result 2').step_Press_Save_Button_Care_Plan_Update_Side_Panel();

    });

    xit('NOVA2.1-76880:Medical record - Result side panel - History values', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT7 CarePlan2').step_Click_On_The_MainMenu()
            .step_MoveTo_MedicalRec_View_Using_SideMenu().step_Move_To_NUCD_View().step_Move_To_Care_Plan_View().step_Press_Result_In_Standard_Care_Plan_View().step_Validate_Result_New_Value_Result_History_Side_Panel('Nova AFT Testing - Result 2')
            .step_Validate_Result_Old_Value_Result_History_Side_Panel('Nova AFT Testing - Result 1');

    });

    xit('NOVA2.1-76964:Packages - Add comment', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT8 Packages1').step_Click_OnThe_Given_Summary_Package('Admission')
            .step_Press_On_Comment_Field_In_Package_Side_Panel_Summary_View().step_Enter_Comment_Text_Package_Side_Panel_Summary_View_Page('Nova AFT Testing - Enter Comment for Package').step_Press_Done_Button_Package_Comment_Side_Panel_Summary_View_Page()
            .step_Validate_Package_Comment_Icon_Summary_View_Page();

    });

    xit('NOVA2.1-76965:Packages - Add Addon', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT8 Packages1').step_Click_OnThe_Given_Summary_Package('Admission')
            .step_Press_And_Enter_Addon_Text_Package_Side_Panel_Summary_View_Page('NovaAFT Testing').step_Press_Done_Button_Package_Comment_Side_Panel_Summary_View_Page();

    });

    xit('NOVA2.1-76965:Packages - Add Addon - Validate Added Add-on', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT8 Packages1').step_Validate_Package_Name_With_Add0n('Admission NovaAFT Testing');


    });

    xit('NOVA2.1-76966:Package - Edit Addon', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT8 Packages1').step_Click_OnThe_Given_Summary_Package('Admission Edited Addon')
            .step_Edit_Comment_Field_On_Package_Side_panel_Summary_View_Page('Nova AFT Testing - Edited Comment').step_Edit_Add_On_Field_On_Package_Side_Panel_Summary_View_Page('Edited Addon')
            .step_Press_Done_Button_Package_Comment_Side_Panel_Summary_View_Page().step_Click_OnThe_Given_Summary_Package('Admission Edited Addon').step_Validate_Comment_Text_On_Package_Side_Panel_Summary_View_Page('Nova AFT Testing - Edited Comment')
            .step_Validate_Add_On_Text_On_Package_Side_Panel_Summary_View_Page('Edited Addon');

    });












    beforeEach(() => {
            console.log('************************************************************************************************ ');
        });

        afterAll(() => {
            console.log('***********************************************************************************************');
            console.log('******************************** [NOVA: CPS08] - COMPLETED ! ************************************');
        });
/*
        function using(name, values, func){
            for (var i = 0, count = values.length; i < count; i++) {
                if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
                    values[i] = [values[i]];
                }
                func.apply(this, values[i]);
            }
        }
*/


});
