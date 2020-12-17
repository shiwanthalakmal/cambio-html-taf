import {Navigate} from "../../../cambio-physician-pageobjects/aspect-objects/Navigate";
/**
 * Created by SLakmal on 7/5/2017.
 */

describe('[NOVA:CPS03]', () => {

    xit('[NOVA2.1-76920]: verify attention signal adding from nova - infection', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Contagious Disease').step_SetClinicWard_Option('Medicine Ward 2*').step_SetContagiousDisease_Option('HIV').step_PressSign()
       .step_Press_ContactAlert_Icon_Summery_Header().step_Validate_ContactAlert_Label_Summery_Header('Infection');
    });

    xit('[NOVA2.1-76920]: verify attention signal adding from nova - infection - Delete',() => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal()
            .step_SignalRecordSectionByCategory('contagious disease','HIV').step_MakeInvalidateSignal();
    });

    xit('[NOVA2.1-76919]: verify attention signal adding from nova - dnr', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal()
            .step_Create_New_AttentionSignal().step_SignalType_Selection('Non-standard Procedure').step_SetClinicWard_Option('Medicine Ward 2*').step_SetNonStandardProcedure_Option('DNR - Decision exists to not resuscitate')
            .step_PressSign().step_Press_ContactAlert_Icon_Summery_Header().step_Validate_ContactAlert_Label_Summery_Header('DNR');
    });
    xit('[NOVA2.1-76919]:verify attention signal adding from nova - dnr - Delete',() => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal()
            .step_SignalRecordSectionByCategory('non-standard procedure','DNR - Decision exists to not resuscitate').step_MakeInvalidateSignal();
    });


    xit('[NOVA2.1-76918]: verify attention signal adding from cosmic and its availability - infection', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    xit('[NOVA2.1-76917]: verify attention signal adding from cosmic and its availability - dnr', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    xit('[NOVA2.1-76765]: verify hypersensitivity type attention signal related information', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal()
            .step_SignalRecordSectionByCategory('hypersensitivity','Eggs').step_Validate_AttentionSignal_InvalidateIcon_Read_Panel_Header().step_Validate_AttentionSignal_New_Assessment_Icon_Read_Panel_Header()
            .step_Validate_AttentionSignal_Icon_Read_Panel_Header().step_Validate_AttentionSignal_Type_Read_Panel_Header('Hypersensitivity').step_Validate_AttentionSignal_Reassessment_Icon_Read_Panel_Header()
            .step_Validate_Hypersensitivity_HyperType_Read_Panel('other').step_Validate_Hypersensitivity_Allergen_Read_Panel('Eggs').step_Validate_Hypersensitivity_Reaction_Read_Panel('Asthma')
            .step_Validate_Hypersensitivity_Severitiy_Level_Read_Panel('Harmful').step_Validate_Hypersensitivity_Certainty_Level_Read_Panel('Confirmed').step_Validate_AttentionSignal_Reassessment_Read_Panel_Header('Reassessment required')
            .step_Validate_AttentionSignal_Reassessmentdate_Read_Panel_Header('29-03-2018').step_Validate_AttentionSignal_Reassessmenttime_Read_Panel_Header('6:00 pm').step_Validate_AttentionSignal_Visit_Admission_Read_Panel_Header('Admission*, 27-04-2010')
            .step_Validate_AttentionSignal_Care_Provider_Read_Panel('Leg läkare Andersson, Asta').step_Validate_AttentionSignal_ClinicWard_Read_Panel_Header('Medicine Ward 2*').step_Validate_AttentionSignal_Assessmentdate_Read_Panel_Header('29-03-2018')
            .step_Validate_AttentionSignal_Assessmenttime_Read_Panel_Header('5:25 pm');

    });

    xit('[NOVA2.1-76766]: verify treatment and condition type attention signal related information - Treatment', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Silvio Maldini').step_Click_On_The_AttentionSignal().
        step_SignalRecordSectionByCategory('treatment & condition','Anticoagulant therapy').step_Validate_Treatment_Condition_Type_Read_Panel('Treatment').step_Validate_Treatment_Condition_name_Read_Panel('Anticoagulant therapy');
    });

    xit('[NOVA2.1-76766]: verify treatment and condition type attention signal related information - Condition',() =>{
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Silvio Maldini').step_Click_On_The_AttentionSignal()
            .step_SignalRecordSectionByCategory('treatment & condition','Bone marrow transplant').step_Validate_Treatment_Condition_Type_Read_Panel('Condition').step_Validate_Treatment_Condition_Condition_Type_Read_Panel('Transplant')
            .step_Validate_Treatment_Condition_Condition_SubType_Name_Read_Panel('Bone marrow transplant');

    });

    xit('[NOVA2.1-76767]: verify contagious disease type attention signal related information', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('Kiera Thomas').step_Click_On_The_AttentionSignal()
            .step_SignalRecordSectionByCategory('contagious disease','HIV').step_Validate_Contagious_Disease_Type_Read_Panel('HIV').step_Validate_AttentionSignal_Reassessment_Read_Panel_Header('Reassessment required')
            .step_Validate_AttentionSignal_Reassessmentdate_Read_Panel_Header('30-03-2018').step_Validate_AttentionSignal_Reassessmenttime_Read_Panel_Header('10:00 am').step_Validate_AttentionSignal_Visit_Admission_Read_Panel_Header('Admission*, 22-12-2017')
            .step_Validate_AttentionSignal_Care_Provider_Read_Panel('Leg läkare Andersson, Asta').step_Validate_AttentionSignal_ClinicWard_Read_Panel_Header('Medicine Ward 1*').step_Validate_AttentionSignal_Assessmentdate_Read_Panel_Header('30-03-2018')
            .step_Validate_AttentionSignal_Assessmenttime_Read_Panel_Header('9:09 am');
    });

    xit('[NOVA2.1-76768]: verify non-standard procedure type attention signal related information', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Martin Nilsson').step_Click_On_The_AttentionSignal()
            .step_SignalRecordSectionByCategory('non-standard procedure','DNR - Decision exists to not resuscitate').step_Validate_Non_Standard_Procedure_Read_Panel('DNR - Decision exists to not resuscitate')
            .step_Validate_AttentionSignal_Reassessment_Read_Panel_Header('Reassessment required').step_Validate_AttentionSignal_Reassessmentdate_Read_Panel_Header('30-03-2018')
            .step_Validate_AttentionSignal_Reassessmenttime_Read_Panel_Header('2:00 pm').step_Validate_AttentionSignal_Visit_Admission_Read_Panel_Header('Admission*, 09-05-2008')
            .step_Validate_AttentionSignal_Care_Provider_Read_Panel('Leg läkare Andersson, Asta').step_Validate_AttentionSignal_ClinicWard_Read_Panel_Header('Medicine Ward 2*')
            .step_Validate_AttentionSignal_Assessmentdate_Read_Panel_Header('30-03-2018').step_Validate_AttentionSignal_Assessmenttime_Read_Panel_Header('1:32 pm');
    });

    xit('[NOVA2.1-76769]: verify attention signal editing from nova - hypersensitivity', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Hypersensitivity').step_SetReaction_Option('Asthma').step_SetSeverity_Option('Harmful').step_SetCertainty_Option('Confirmed').
        step_SetClinicWard_Option('Medicine Ward 2*').step_AddATC_Code().step_PressSign().step_Click_On_The_AttentionSignal().step_SignalRecordSectionByCategory('hypersensitivity','Antibiotika för topikal användning').
        step_MakeNewAssignment().step_SetClinicWard_Option('Medicine Ward 1*').step_PressSign().step_Click_On_The_AttentionSignal().step_SignalRecordSectionByCategory('hypersensitivity','Antibiotika för topikal användning').step_MakeInvalidateSignal();
    });

    xit('[NOVA2.1-76770]: verify attention signal editing from nova - contagious disease', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Contagious Disease').step_SetClinicWard_Option('Medicine Ward 2*').step_SetContagiousDisease_Option('HIV').step_PressSign().step_Click_On_The_AttentionSignal().
        step_SignalRecordSectionByCategory('contagious disease','HIV').step_MakeNewAssignment().step_SetClinicWard_Option('Medicine Ward 1*').step_PressSign().step_Click_On_The_AttentionSignal().
        step_SignalRecordSectionByCategory('contagious disease','HIV').step_MakeInvalidateSignal();
    });

    xit('[NOVA2.1-76771]: verify attention signal editing from nova - non-standard procedure', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Non-standard Procedure').step_SetClinicWard_Option('Medicine Ward 2*').step_SetNonStandardProcedure_Option('Connection to specific care unit').step_PressSign().step_Click_On_The_AttentionSignal().
        step_SignalRecordSectionByCategory('non-standard procedure','Connection to specific care unit').step_MakeNewAssignment().step_SetClinicWard_Option('Medicine Ward 1*').step_PressSign().
        step_Click_On_The_AttentionSignal().step_SignalRecordSectionByCategory('non-standard procedure','Connection to specific care unit').step_MakeInvalidateSignal();
    });

    xit('[NOVA2.1-76772]: verify attention signal editing from nova - treatment & condition', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Treatment and Condition').step_SetClinicWard_Option('Medicine Ward 2*').step_SetTreatment_Option('').step_PressSign().step_Click_On_The_AttentionSignal().
        step_SignalRecordSectionByCategory('treatment & condition','Anticoagulant therapy').step_MakeNewAssignment().step_SetClinicWard_Option('Medicine Ward 1*').step_PressSign().
        step_Click_On_The_AttentionSignal().step_SignalRecordSectionByCategory('treatment & condition','Anticoagulant therapy').step_MakeInvalidateSignal();
    });

    xit('[NOVA2.1-76769]: verify attention signal adding from nova - hypersensitivity', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Hypersensitivity').step_SetReaction_Option('Asthma').step_SetSeverity_Option('Harmful').step_SetCertainty_Option('Confirmed')
            .step_SetReassessment_Option('Reassessment required').step_SetClinicWard_Option('Medicine Ward 2*').step_AddATC_Code().step_PressSign().step_Click_On_The_AttentionSignal()
            .step_SignalRecordSectionByCategory('hypersensitivity','Antibiotika för topikal användning').step_MakeInvalidateSignal();
    });

    xit('[NOVA2.1-76770]: verify attention signal adding from nova - contagious disease', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Contagious Disease').step_SetClinicWard_Option('Medicine Ward 2*').step_SetContagiousDisease_Option('HIV').step_PressSign().step_Click_On_The_AttentionSignal().
        step_SignalRecordSectionByCategory('contagious disease','HIV').step_MakeInvalidateSignal();
    });

    xit('[NOVA2.1-76771]: verify attention signal adding from nova - non-standard procedure', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Non-standard Procedure').step_SetClinicWard_Option('Medicine Ward 2*').step_SetNonStandardProcedure_Option('Connection to specific care unit').step_PressSign().step_Click_On_The_AttentionSignal().
        step_SignalRecordSectionByCategory('non-standard procedure','Connection to specific care unit').step_MakeInvalidateSignal();
    });

    xit('[NOVA2.1-76772]: verify attention signal adding from nova - treatment & condition', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Click_On_The_AttentionSignal().
        step_Create_New_AttentionSignal().step_SignalType_Selection('Treatment and Condition').step_SetClinicWard_Option('Medicine Ward 2*').step_SetTreatment_Option('').step_PressSign().step_Click_On_The_AttentionSignal().
        step_SignalRecordSectionByCategory('treatment & condition','Anticoagulant therapy').step_MakeInvalidateSignal();
    });

    // =================================================== CPS : 3.1 COMPLETED =========================================

    xit('[NOVA2.1-76783:Activities - Add comment', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT10 Activity 1').step_MoveTo_Adding_Panel().step_Select_LeftMenu_Activities()
            .step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().step_MoveTo_Activities_View_Using_SideMenu().step_Select_GivenActivity('Admission interview')
            .step_Set_ActivityRepeat_Option('Every day').step_MakeSignActivityChanges().step_Select_GivenActivity('Admission interview').step_Set_Activity_Comment_Activity_Page('Nova AFT Testing - Activity')
            .step_MakeSignActivityChanges().ste_Delete_Existing_Activity_Record('Admission interview').step_Delete_Existing_Future_Activities_Tomorrow_Onwards('Admission interview');

    });

    xit('[NOVA2.1-76784:Activities - Edit comment', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT11 Activity Edit Comt').step_MoveTo_Adding_Panel().step_Select_LeftMenu_Activities()
            .step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().step_MoveTo_Activities_View_Using_SideMenu().step_Select_GivenActivity('Admission interview')
            .step_Set_ActivityRepeat_Option('Every day').step_MakeSignActivityChanges().step_Select_GivenActivity('Admission interview').step_Set_Activity_Comment_Activity_Page('Nova AFT Testing - Activity')
            .step_MakeSignActivityChanges().step_Select_GivenActivity('Admission interview').step_Set_Activity_Comment_Activity_Page('Nova AFT Testing - Activity - Edited').step_MakeSignActivityChanges()
            .ste_Delete_Existing_Activity_Record('Admission interview').step_Delete_Existing_Future_Activities_Tomorrow_Onwards('Admission interview');

    });

    xit('NOVA2.1-76785:Activities - Remove comment', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT12 Activity RemvComt').step_MoveTo_Adding_Panel().step_Select_LeftMenu_Activities()
            .step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().step_MoveTo_Activities_View_Using_SideMenu().step_Select_GivenActivity('Admission interview')
            .step_Set_ActivityRepeat_Option('Every day').step_MakeSignActivityChanges().step_Select_GivenActivity('Admission interview').step_Set_Activity_Comment_Activity_Page('Nova AFT Testing - Activity')
            .step_MakeSignActivityChanges().step_Select_GivenActivity('Admission interview').step_Clear_Activity_Comment_From_Activity_Side_Panel().step_MakeSignActivityChanges();

    });

    xit('NOVA2.1-76786:Activity - Change responsible role "Save for all future"', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT13 Activity Role').step_MoveTo_Adding_Panel().step_Select_LeftMenu_Activities()
            .step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().step_MoveTo_Activities_View_Using_SideMenu().step_Select_GivenActivity('Admission interview')
            .step_Set_ActivityRepeat_Option('Every day').step_MakeSignActivityChanges().step_Validate_Activity_Role_In_Activity_Page('Responsible doctor').step_Select_GivenActivity('Admission interview')
            .step_De_Select_Current_Role_Activity_Page('Responsible doctor').step_Change_Responsible_Role_Activity_Side_Panel('Nurse').step_MakeSignActivityChanges().step_Save_All_Or_This_Only_Activity_Side_Panel('All')
            .step_Validate_Activity_Role_In_Activity_Page('Nurse').ste_Delete_Existing_Activity_Record('Admission interview').step_Delete_Existing_Future_Activities_Tomorrow_Onwards('Admission interview');

    });
    xit('NOVA2.1-76787:Activities - Change responsible role "Save for this one only"', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT13 Activity Role').step_MoveTo_Adding_Panel().step_Select_LeftMenu_Activities()
            .step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().step_MoveTo_Activities_View_Using_SideMenu().step_Select_GivenActivity('Admission interview')
            .step_Set_ActivityRepeat_Option('Every day').step_MakeSignActivityChanges().step_Validate_Activity_Role_In_Activity_Page('Responsible doctor').step_Select_GivenActivity('Admission interview')
            .step_De_Select_Current_Role_Activity_Page('Responsible doctor').step_Change_Responsible_Role_Activity_Side_Panel('Nurse').step_MakeSignActivityChanges().step_Save_All_Or_This_Only_Activity_Side_Panel('This')
            .step_Validate_Activity_Role_In_Activity_Page('Nurse').ste_Delete_Existing_Activity_Record('Admission interview').step_Delete_Existing_Future_Activities_Tomorrow_Onwards('Admission interview');

    });

    fit('[NOVA2.1-76788:Activities - Specific days recurrence', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT14 Activity Specdays').step_MoveTo_Adding_Panel().step_Select_LeftMenu_Activities()
            .step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().step_MoveTo_Activities_View_Using_SideMenu().step_Select_GivenActivity('Admission interview')
            .step_Set_ActivityRepeat_Option('Every day');

    });



    beforeEach(() => {
        console.log('************************************************************************************************ ');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA: CPS03] - COMPLETED ! ************************************');
    });
});