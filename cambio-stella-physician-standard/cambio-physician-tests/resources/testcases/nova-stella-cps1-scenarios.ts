import {Navigate} from "../../../cambio-physician-pageobjects/aspect-objects/Navigate";
/**
 * Created by SLakmal on 7/5/2017.
 */

describe('[NOVA:CPS01]', () => {

    it('[CPS01: NOVA2.1-76696]: Test display responsible unit and logged user details for advance logging', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_And_Validate_BasePhysicianLoggedUnit('The Medicine department*').check_And_Validate_BasePhysicianLoggedUser('Asta Andersson');
    });

    it('[NOVA2.1-76697]: Test display Wards names from cosmic nova physician', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_Verify_Logedin_Ward('Medicine Ward 2*');
    });

    it('[NOVA2.1-76698]: Test display user name according to the cosmic', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_And_Validate_BasePhysicianLoggedUser('Asta Andersson');
    });

    it('[NOVA2.1-76699]: Test display user role according to the cosmic', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_Verify_Logedin_UserRole('Doctor*,');
    });

    it('[NOVA2.1-76705]: Test patient plate related information under my start page', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Elsa Sundström').step_Validate_PatientId_Summery_Header().
        step_Validate_PatientName_Summery_Header ('Elsa Sundström');
    });


    // =================================================== CPS : 1.1 COMPLETED =========================================

    it('[NOVA2.1-76707]: Test View all wards(Performing units) under logged in responsible unit is listed in the top of the left side.', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').check_And_Validate_Wards_InPeforming_Unit('Medicine Ward 1*').check_And_Validate_Wards_InPeforming_Unit('Medicine Ward 2*');
    });

    xit('[NOVA2.1-76701]: Test discharged patient details from nova end', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76702]: Test view my list availability in physician', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Move_To_MyList_Page('My list').verify_Patient_Availability_in_MyList('Bertil Sjögren').verify_Patient_Availability_in_MyList('Grace Manning');
    });

    it('[NOVA2.1-76704]: Test latest patient under latest patients view', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Bertil Sjögren').step_Close_Patient_Summary_View().
        step_Select_Patient_FromList('Grace Manning').step_Close_Patient_Summary_View().step_Select_Patient_FromList('Silvio Maldini').step_Close_Patient_Summary_View().
        step_Move_To_LatestView_Page('Latest').check_And_Validate_PatientList_Order(1,'Silvio Maldini').check_And_Validate_PatientList_Order(2,'Grace Manning').
        check_And_Validate_PatientList_Order(3,'Bertil Sjögren');
    });

    it('[NOVA2.1-76721]: Test view my surgeries view functionality according to the logged user', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    it('[NOVA2.1-76724]: Test view my surgeries view functionality according to date change', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    // =================================================== CPS : 1.2 COMPLETED =========================================

    xit('[NOVA2.1-76709]: Test my visit patient register, visit and procedure', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    xit('[NOVA2.1-76711]: Test my visit patient book, visit and procedure', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    xit('[NOVA2.1-76713]: Test my visit patient group different statuses arrived, did not attend, book', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    // =================================================== CPS : 1.3 COMPLETED =========================================

    it('[NOVA2.1-76723]: Test patient plate related information list', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').check_And_Validate_Patient_Plate_Information('Bertil Sjögren','19 390202-7030','79 years');
    });

    it('[NOVA2.1-76885]: Test displaced patient information and information can be shared icon', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Click_OnThe_InfoShared_Icon('Information cannot be shared');
    });

    xit('[NOVA2.1-76886]: Test nova active signal availability when no records', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Bertil Sjögren');
    });

    it('[NOVA2.1-76706]: Test bed plate information', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').check_And_Validate_BedsAvailability('1:1');
    });

    xit('[NOVA2.1-76725]: Test sort order my activities and other activities', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*');
    });

    xit('[NOVA2.1-76724]: Test auto refresh functionality', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Wait_Moment_TillPage_Refresh();
    });

    // =================================================== CPS : 1.4 COMPLETED =========================================

    xit('[NOVA2.1-76728]: Test select a patient from list and verify patient name under summary view', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('Cathy Parker').step_Validate_PatientName_Summery_Header ('Cathy Parker').step_Close_Patient_Summary_View()
            .step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Bertil Sjögren').step_Validate_PatientName_Summery_Header ('Bertil Sjögren').step_Close_Patient_Summary_View()
            .step_Move_To_MyList_Page('My list').step_Select_Pacient_From_MyList('Bertil Sjögren').step_Validate_PatientName_Summery_Header('Bertil Sjögren').step_Close_Patient_Summary_View()
            .step_Move_To_Latest_Page('Latest').step_Select_Pacient_From_Latest_Patients('Bertil Sjögren').step_Validate_PatientName_Summery_Header('Bertil Sjögren').step_Close_Patient_Summary_View()
            .step_Move_To_Outliers_Page('Outliers').step_Select_Pacient_From_OutlierList('Jane Svensson').step_Validate_PatientName_Summery_Header('Jane Svensson').step_Close_Patient_Summary_View();
    });

    // =================================================== CPS : 1.6 COMPLETED =========================================

    xit('[NOVA2.1-76751]: Test first page and patient banner,  inpatient and out-patient details', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromWard('Bertil Sjögren').step_Validate_Attention_Signal_Icon()
            .step_Validate_ContactAlertIcon_Summery_Header().step_Validate_StatusIcon_Summery_Header().step_Validate_BedClip_Summery_Header().step_Validate_InfoIcon_Summery_Header()
            .step_Validate_AddingPanel_Summery_Header().step_Close_Patient_Summary_View().step_Move_To_MyList_Page('My list').step_Select_Pacient_From_MyList('Bertil Sjögren')
            .step_Validate_Attention_Signal_Icon().step_Validate_ContactAlertIcon_Summery_Header().step_Close_Patient_Summary_View();

    });

    xit('[NOVA2.1-76752]: Test first page and patient banner,  out-patient and deceased details', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Move_To_MyList_Page('My list');
        // Hold until cosmic automation integration
    });

    xit('[NOVA2.1-76753]: Test first page and patient with protected identity details', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('Himas Protected').step_Validate_Protected_ID_Summery_Header()
            .step_Close_Patient_Summary_View();
    });

    xit('[NOVA2.1-76757]: Test first page and interpreter icon details', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Select_Patient_FromList('Bertil Sjögren').step_Press_InterpreterIcon_Summery_Header()
            .step_Validate_Interpreter_Popup('Language').step_Validate_Interpreter_Popup('Commethod').step_Validate_Interpreter_Popup('Comment');
    });

    xit('[NOVA2.1-76758]: Test first page and patient address details', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    xit('[NOVA2.1-76746]: Test contact grapgh card and ongoing patient details', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage');
    });

    // =================================================== CPS : 1.6 COMPLETED =========================================

    beforeEach(() => {
        console.log('************************************************************************************************ ');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA: CPS01] - COMPLETED ! ************************************');
    });



});
