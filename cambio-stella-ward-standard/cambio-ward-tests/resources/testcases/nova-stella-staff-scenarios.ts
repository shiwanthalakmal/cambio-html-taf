/**
 * Created by SLakmal on 4/26/2017.
 */
import {Navigate} from "../page-loader";
import {Component} from "../page-loader";

describe('[NOVA:STAFFING]', () => {

    xit('[PLAN:01]: Test add phone number for existing team', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffPlanView().step_EnterContactNumberForTeam('011-2588588').check_And_Validate_AppliedPhoneNumber('011-2588588').
        step_MoveToWardView();

        Component.Restore_StaffPhoneNumber('team');
    });

    xit('[PLAN:02]: Test add phone number for existing role members', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffPlanView().step_EnterContactNumberForStaff('071-2588588').check_And_Validate_AppliedPhoneNumber('071-2588588').
        step_MoveToWardView();

        Component.Restore_StaffPhoneNumber('staff');
    });

    xit('[PLAN:03]: Test existing team availability under staff-plan view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffPlanView().check_And_Validate_TeamsAvailability('Blue');
    });

    xit('[PLAN:04]: Test existing role availability under staff-plan view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffPlanView().check_And_Validate_RolesAvailability('Responsible doctor');
    });

    xit('[PLAN:05]: Test staff-member availability under role section in staff-plan view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffPlanView().check_And_Validate_StaffMemberUnderRole('Adnan Adamally');
    });

    xit('[PLAN:06]: Test existing staff member availability under relevant role in staff-plan view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffPlanView().check_And_Validate_RolesAvailability('Responsible doctor');
    });

    it('[PLAN:07]: Test load patient activity view under staff-plan view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffPlanView().step_ClickOnGivenStaffMember('Adnan Adamally').check_And_Validate_PatientUnderStaffMember('Himas Protected 4 F');
    });

    xit('[PLAN:08]: Test load patient summary view under staff-plan view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffPlanView().step_ClickOnGivenStaffMember('Doris Davidsson').step_LoadGivenPatientSummaryView('Elsa S').
        check_And_Validate_PatientNameUnderSummaryView('Elsa Sundström').step_ClosePatientSummaryView();
    });

    xit('[PLAN:09]: Test staff un-performed activities count when assign that relevant role specific activity', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_PerformRoleActivityAdding('Responsible doctor',1).step_SelectGivenPackageOrActivityFromActivityPopup('Discharge interview').
        step_SaveActivitySelection().step_ClosePatientSummaryView().step_MoveToStaffPlanView().check_And_Validate_UnPerformedActivitiesCount('1').step_MoveToWardView();

        Component.Restore_DelteExistingActivity('with-bed','Elsa S','Discharge interview');
    });

    xit('[PLAN:10]: Test staff un-performed activities count when assign that relevant non-role type activity', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_ClosePatientSummaryView().step_MoveToStaffPlanView().check_And_Validate_UnPerformedActivitiesCount('0').step_MoveToWardView();

        Component.Restore_DelteExistingActivity('with-bed','Elsa S','Examination');
    });

    xit('[PLAN:11]: Test patient discharge date set under staff-plan view and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_ClosePatientSummaryView().step_MoveToStaffPlanView().check_And_Validate_UnPerformedActivitiesCount('0').step_MoveToWardView();

        Component.Restore_DelteExistingActivity('with-bed','Elsa S','Examination');
    });

    xit('[PLAN:12]: Test roles availability when change role area-of-responsibility as a team under admin panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_ChooseRolesLevels('Responsible doctor').step_ChooseResponsibilityOption('Team').
        step_PressSaveButton().step_MoveToStaffPlanView().check_And_Verify_GivenRoleUnderTeamSection('Responsible doctor').step_MoveToWardView();

        Component.Restore_AdminRolesAreaOfResponsibility('Responsible doctor','Patient');
    });

    xit('[PLAN:13]: Test roles availability when change role area-of-responsibility as a team-and-bed under admin panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_ChooseRolesLevels('Responsible doctor').step_ChooseResponsibilityOption('Team and Bed').
        step_PressSaveButton().step_MoveToStaffPlanView().check_And_Verify_GivenRoleUnderTeamSection('Responsible doctor').step_MoveToWardView();

        Component.Restore_AdminRolesAreaOfResponsibility('Responsible doctor','Patient');
    });

    xit('[PLAN:14]: Test roles availability when change role area-of-responsibility as a whole-unit under admin panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_ChooseRolesLevels('Responsible doctor').step_ChooseResponsibilityOption('Whole Unit').
        step_PressSaveButton().step_MoveToStaffPlanView().check_And_Verify_GivenStaffUnderRoleSection('Responsible doctor').step_MoveToWardView();

        Component.Restore_AdminRolesAreaOfResponsibility('Responsible doctor','Patient');
    });



    xit('[STAFF:01]: Test roles grid view availability load according to the staffing selection', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffingView().step_SelectStaffFromList('Coordinator').check_And_Validate_AvailableRoleColumnTitle('Not Working').
        step_SelectStaffFromList('Male Nurse').check_And_Validate_AvailableRoleColumnTitle('Nrs: Blue Team');
    });

    xit('[STAFF:02]: Test add staff members to specific role view load by performing add staff button', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffingView().step_SelectStaffFromList('Coordinator').step_PressAddStaffMember().check_And_Validate_AddStaffModalTitle('Coordinator')
    });

    xit('[STAFF:03]: Test responsibility view role availability when change staffing role state', () => {
        // NOVA2.1-75496
    });

    xit('[STAFF:04]: Test add staff members to specific role search and assigned functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffingView().step_SelectStaffFromList('Coordinator').step_PressAddStaffMember().step_EnterStaffMemberSearch('Ann').
        step_SelectMemberSearchList('Anna Hagman (AnnaH)').step_SaveModalSearch().check_And_Validate_GivenStaffMemberAvailability('Anna H').step_MoveToWardView();

        Component.Restore_CreateStaffingMember('Coordinator');
    });

    xit('[STAFF:05]: Test add staff members to specific role cancellation search functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffingView().step_SelectStaffFromList('Doctor').step_PressAddStaffMember().step_EnterStaffMemberSearch('Ann').
        step_SelectMemberSearchList('Anna Hagman (AnnaH)').step_CancelModalSearch().check_And_Validate_GivenStaffMemberNotAvailability('Anna H');
    });

    xit('[STAFF:06]: Test staff plan view behaviour when changing staffing members responsible roles', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffingView().step_SelectStaffFromList('Doctor').step_MovePatientStaffAmongResponsibilities(2, 'Consultant').
        step_MovePatientStaffAmongResponsibilities(3, 'Responsible doctor').step_MoveToStaffPlanView().check_And_Verify_GivenStaffUnderRoleSection('Gavinidoc').step_MoveToWardView();

        Component.Restore_StaffingView();
    });

    xit('[STAFF:07]: Test responsibility view rol availability when change staffing role not-working state', () => {
        // NOVA2.1-75497
    });

    xit('[STAFF:08]: Test when staff not-working behaviour of the staff-plan, responsibility-view, patient-card', () => {
        // NOVA2.1-75500
    });











    beforeEach(() => {
        console.log('************************************************************************************************');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA:STAFFING] - COMPLETED ! ************************************');
    });

});