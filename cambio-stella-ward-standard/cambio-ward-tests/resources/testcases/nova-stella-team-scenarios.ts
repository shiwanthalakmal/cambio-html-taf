/**
 * Created by SLakmal on 6/5/2017.
 */
import {Navigate} from "../page-loader";
import {Component} from "../page-loader";

describe('[NOVA:TEAM]', () => {

    it('[TEAM:01]: Test team panel title bed number', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').check_And_Validate_TeamBedIcon('1:2');
    });

    it('[TEAM:02]: Test team panel title patient name', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').check_And_Validate_TeamPatientName('Elsa Sundström');
    });

    it('[TEAM:03]: Test team panel title patient age', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').check_And_Validate_TeamPatientAge('43');
    });

    it('[TEAM:04]: Test applied information markers list under team panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddInforMarkerLink().step_SelectInforMarkerFromSearchList('Fasting').
        step_SaveInforMarkerPopupSelection().step_ClosePatientSummaryView().step_MoveToTeamView('Gray Team').check_And_Validate_AppliedInforMarker('Fasting').step_MoveToWardView();

        Component.Restore_AddedInforMarkerRemove('Elsa S','Fasting');
    });

    it('[TEAM:05]: Test applied tag details under team panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').step_ApplyTagUnderTeamView('Oncology').
        check_And_Validate_TagDetails('Oncology');

        Component.Restore_TeamExistingTag('Gray Team');
    });

    it('[TEAM:06]: Test patient enlistment date under team panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').check_And_Validate_EnlistmentDate('days ago');
    });

    it('[TEAM:07]: Test patient out-leaving date under team panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').step_TeamDischargePatient('PM').step_SavePlannedDischargePopup().
        check_And_Validate_DischargeTimeAndAddOn('Today (pm)').step_MoveToWardView();

        Component.Restore_TeamPlannedDischargeRecord('Gray Team');
    });

    it('[TEAM:08]: Test patient out-leaving add-on details under team panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').step_TeamDischargePatient('PM').step_TeamDischargeAddOnDetails('AUTO: AddOn').
        step_SavePlannedDischargePopup().check_And_Validate_DischargeTimeAndAddOn('Today (pm), AUTO: AddOn').step_MoveToWardView();

        Component.Restore_TeamPlannedDischargeRecord('Gray Team');
    });

    it('[TEAM:09]: Test round status change under team panel and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').step_TeamRoundStatusChange('Surgery').check_And_Validate_TeamRoundStatus('Surgery').
        step_TeamRoundStatusChange('New patient');
    });

    it('[TEAM:10]: Test assigned staff members for relavent role under team panel', () => {
        //Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').;
    });

    it('[TEAM:11: Test patient active signal icon availability', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').check_And_Validate_TeamEmptyActiveSignalIcon();
    });

    it('[TEAM:12]: Test package details availability under team panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup("Discharge").
        step_SavePackageAddingUsingSummaryView().step_ClosePatientSummaryView().step_MoveToTeamView('Gray Team').check_And_Validate_TeamPackageAndActivitySummary('Discharge').step_MoveToWardView();

        Component.Restore_AddedPackageRemove('with-bed','Elsa S','Discharge');
    });

    it('[TEAM:13]: Test activity details availability under team panel', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_ClosePatientSummaryView().step_MoveToTeamView('Gray Team').check_And_Validate_TeamPackageAndActivitySummary('Examination').step_MoveToWardView();

        Component.Restore_DelteExistingActivity('with-bed','Elsa S','Examination');
    });

    it('[TEAM:14: Test newly added team panel by changing existing patient bed', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToBedView().step_MovePatientBedAmongTeams(1,'Green Team').step_MoveToTeamView('Green Team').check_And_Validate_TeamPatientName('Bertil Sjögren').
        step_MoveToBedView().step_MovePatientBedAmongTeams(1,'Blue Team').step_MoveToTeamView('Blue Team').check_And_Validate_TeamPatientName('Bertil Sjögren').step_MoveToWardView();

        Component.Restore_TeamBedMove(1,'Shared');
    });


    beforeEach(() => {
        console.log('************************************************************************************************');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA:TEAM] - COMPLETED ! ************************************');
    });
});