import {Navigate} from "../../../cambio-physician-pageobjects/aspect-objects/Navigate";
/**
 * Created by SLakmal on 7/5/2017.
 */

describe('[NOVA:CPS02]', () => {

    it('[NOVA2.1-76915]: verify functionality of the show my activities', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_And_Validate_BasePhysicianLoggedUser('Nadeeka Ekanayake').step_Choose_Showing_Option('Activity').
        check_And_Validate_Activities_Availability('Discharge interview');
    });

    it('[NOVA2.1-76914]: verify functionality of the show patient tasks', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_And_Validate_BasePhysicianLoggedUser('Nadeeka Ekanayake').step_Choose_Showing_Option('Task').
        check_And_Validate_Activities_Availability('Examination');
    });

    it('[NOVA2.1-76913]: verify functionality of the show markers', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_And_Validate_BasePhysicianLoggedUser('Nadeeka Ekanayake').step_Choose_Showing_Option('Markers').
        check_And_Validate_InforMarker_Availability('Diabetic');
    });

    it('[NOVA2.1-76916]: verify functionality of the filtering patient activities', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_And_Validate_BasePhysicianLoggedUser('Nadeeka Ekanayake').step_Choose_Showing_Option('Filter').step_Search_Filter_Details('Exa').
        step_Choose_Search_Filter_TagOrInforMarker('Acti','Examination').check_And_Validate_PatientAvailability('Christine Brandt').check_And_Validate_PatientNotAvailability('Carola Svensson');
    });

    // =================================================== CPS : 2.1 COMPLETED =========================================

    it('[NOVA2.1-76708]: verify medication min - max view availability based on state', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76717]: verify medication min - max side panel configurations', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76718]: verify medication edit treatment panel configurations', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76719]: verify medication min - max view filter warnings availability', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    // =================================================== CPS : 2.2 COMPLETED =========================================

    it('[NOVA2.1-76720]: verify activity quick performed functionality', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().
        step_MoveTo_Activities_View_Using_SideMenu().step_Perform_Existing_GivenActivity().ste_Delete_Existing_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76722]: verify activity schedule with empty date and time', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().step_MoveTo_Activities_View_Using_SideMenu().
        step_Perform_Existing_GivenActivity().step_Select_GivenActivity('Blood glucose').step_Change_ExistingActivity_Date_Time('empty','empty').step_MakeSignActivityChanges().ste_Delete_Existing_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76727]: verify the activity recurrence adding for every day', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().
        step_MoveTo_Activities_View_Using_SideMenu().step_Perform_Existing_GivenActivity().step_Select_GivenActivity('Blood glucose').step_Set_ActivityRepeat_Option('Every day').
        step_MakeSignActivityChanges().ste_Delete_Existing_Future_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76729]: verify the activity add-on apply with save-for-this-only option', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().
        step_MoveTo_Activities_View_Using_SideMenu().step_Perform_Existing_GivenActivity().step_Select_GivenActivity('Blood glucose').step_Set_ActivityRepeat_Option('Every day').
        step_MakeSignActivityChanges().step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('AUTO:ADD-ON').step_MakeSignActivityChangesForRecurrence('this').
        ste_Delete_Existing_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76761]: verify the activity add-on apply with save-for-all-future option', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().
        step_MoveTo_Activities_View_Using_SideMenu().step_Perform_Existing_GivenActivity().step_Select_GivenActivity('Blood glucose').step_Set_ActivityRepeat_Option('Every day').
        step_MakeSignActivityChanges().step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('AUTO:ADD-ON').step_MakeSignActivityChangesForRecurrence('all').
        ste_Delete_Existing_Future_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76760]: verify the activity add-on edit flow with save-for-this-only option', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().
        step_MoveTo_Activities_View_Using_SideMenu().step_Perform_Existing_GivenActivity().step_Select_GivenActivity('Blood glucose').step_Set_ActivityRepeat_Option('Every day').
        step_MakeSignActivityChanges().step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('AUTO:ADD-ON').step_MakeSignActivityChangesForRecurrence('this').
        step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('Edit ADD-ON').step_MakeSignActivityChanges().ste_Delete_Existing_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76762]: verify the activity add-on edit flow with save-for-all-future option', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().
        step_MoveTo_Activities_View_Using_SideMenu().step_Perform_Existing_GivenActivity().step_Select_GivenActivity('Blood glucose').step_Set_ActivityRepeat_Option('Every day').
        step_MakeSignActivityChanges().step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('AUTO:ADD-ON').step_MakeSignActivityChangesForRecurrence('all').
        step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('Edit ADD-ON').step_MakeSignActivityChangesForRecurrence('all').ste_Delete_Existing_Future_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76763]: verify the activity add-on delete flow with save-for-this-only option', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().
        step_MoveTo_Activities_View_Using_SideMenu().step_Perform_Existing_GivenActivity().step_Select_GivenActivity('Blood glucose').step_Set_ActivityRepeat_Option('Every day').
        step_MakeSignActivityChanges().step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('AUTO:ADD-ON').step_MakeSignActivityChangesForRecurrence('this').
        step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('').step_MakeSignActivityChanges().ste_Delete_Existing_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76764]: verify the activity add-on delete flow with save-for-all-future option', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_MoveTo_Adding_Panel().
        step_Select_LeftMenu_Activities().step_Pick_Given_Activity_Record(1).step_Conform_OutBox_Container().step_Click_On_The_MainMenu().
        step_MoveTo_Activities_View_Using_SideMenu().step_Perform_Existing_GivenActivity().step_Select_GivenActivity('Blood glucose').step_Set_ActivityRepeat_Option('Every day').
        step_MakeSignActivityChanges().step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('AUTO:ADD-ON').step_MakeSignActivityChangesForRecurrence('all').
        step_Select_GivenActivity('Blood glucose').step_Set_ActivityAddOn('').step_MakeSignActivityChangesForRecurrence('all').ste_Delete_Existing_Future_Activity_Record('Blood glucose');
    });

    it('[NOVA2.1-76754]: close patient summary view functionality', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Close_Patient_Summary_View();
    });


    // =================================================== CPS : 2.3/ 2.5 COMPLETED ====================================


    it('[NOVA2.1-76730]: verify adding new local-analysis record flow', () => {

    });

    it('[NOVA2.1-76731]: verify adding new results for existing local-analysis record', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76732]: verify adding new results for existing local-analysis adding panel', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76733]: verify the patient plate related information', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76734]: verify add new package for existing patient', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76750]: remove activity from existing package and verify', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76910]: verify add new package with information markers', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76911]: verify add new package with recurrence activity', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    // =================================================== CPS : 2.4 COMPLETED =========================================

    beforeEach(() => {
        console.log('************************************************************************************************ ');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA: CPS02] - COMPLETED ! ************************************');
    });
});