import {Navigate} from "../../../cambio-ward-pageobjects/aspect-objects/Navigate";
import {Component} from "../../../cambio-ward-pageobjects/aspect-objects/Component";
/**
 * Created by SLakmal on 6/15/2017.
 */

describe('[NOVA:RESPONSIBILITY]', () => {

    it('[RESPONS:01]: Test availability of the responsible roles under left sub-menu', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToResponsibilitiesView().check_And_Validate_RoleListInLeftPanel('Responsible doctor').
        check_And_Validate_RoleListInLeftPanel('Nrs: Gray Team');
    });

    it('[RESPONS:02]: Test responsible staff members names are shows as grid column titles', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToResponsibilitiesView().step_SelectRoleFromTabList('Responsible doctor').
        check_And_Validate_StaffHeadColumnTitle('')
    });

    it('[RESPONS:03]: Test beds and patients record availability under grid view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToResponsibilitiesView().step_SelectRoleFromTabList('Responsible doctor').
        check_And_Validate_BedAndPatientAvailability('1:1','B.S');
    });

    it('[RESPONS:04]: Test staff members columns increase according to the staffing arrangement', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffingView().step_SelectStaffFromList('Doctor').step_MovePatientStaffAmongResponsibilities(2,'Consultant').
        step_MovePatientStaffAmongResponsibilities(3,'Consultant').step_MoveToResponsibilitiesView().step_SelectRoleFromTabList('Consultant').
        check_And_Validate_StaffHeadColumnTitle('Gavinidoc* G').step_MoveToWardView();

        Component.Restore_StaffingView();
    });

    it('[RESPONS:05]: Test patient responsibility assignment for existing staff-member and verify it under staff plan view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToStaffingView().step_SelectStaffFromList('Doctor').step_MovePatientStaffAmongResponsibilities(2,'Consultant').
        step_MovePatientStaffAmongResponsibilities(3,'Responsible doctor').step_MoveToResponsibilitiesView().step_SelectGridPatientAgainstStaffResponsible(2,1).
        step_MoveToStaffPlanView().check_And_Validate_StaffMemberUnderRole('Gavinidoc').step_MoveToWardView();


        Component.Restore_StaffingView();
    });

});