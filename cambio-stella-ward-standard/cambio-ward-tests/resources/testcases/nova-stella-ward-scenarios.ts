/**
 * Created by SLakmal on 4/26/2017.
 */
import {Navigate} from "../page-loader";
import {Component} from "../page-loader";
import {CosmicNovaBaseWardPage} from "../page-loader";

describe('[NOVA:WARD]', () => {

    it('[HEADER:01]: Test ward view full screen settings', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_FullScreenWardView();
    });

    it('[HEADER:02]: Test ward view snooze settings', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SnoozeWardView();
    });

    it('[HEADER:03]: Test ward view refresh settings', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_RefreshBaseWardView();
    });

    it('[HEADER:04]: Test ward view admin settings', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal();
    });

    it('[HEADER:05]: Test ward view change and verify ward title', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_Select_Ward_View_Option('Medicine Ward 1*').
        check_And_Validate_WardUnitTitle('Medicine Ward 1*');
    });

    it('[HEADER:06]: Test ward summary view navigation', () => {
        Navigate.visit('CosmicNovaBaseWardPage');
    });

    it('[HEADER:07]: Test team summary view navigation', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Gray Team').check_And_Validate_TeamPatientName('Elsa Sundström');
    });

    it('[HEADER:08]: Test staff-plan view navigation', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Staff Plan');
    });

    it('[HEADER:09]: Test staffing summary view navigation', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Staffing');
    });

    it('[HEADER:10]: Test bed summary view navigation', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Bed');
    });

    it('[HEADER:11]: Test responsibility summary view navigation', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToTeamView('Responsibilities');
    });



    it('[BOARD:06]: Test round status color change flow', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectRoundStateIcon(1).step_ChooseRoundStateColorCode('Discharged').
        check_And_Validate_RoundStatusIconColorCode('rgb(85, 238, 102)',1).step_SelectRoundStateIcon(1).step_ChooseRoundStateColorCode('New patient');
    });

    it('[BOARD:07]: Test patient in and out time duration (Days) format according to the settings', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChooseShowsInDaysColumnView().step_PressSaveButton().
        check_And_Validate_AdmissionDate('ago');
    });

    it('[BOARD:08]: Test patient in and out time duration (Date) format according to the settings', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChooseShowsInDateColumnView().step_PressSaveButton().
        check_And_Validate_AdmissionDate('/');

        Component.Restore_AdminUnitShowIn();
    });

    it('[BOARD:09]: Test alert icon color combination', () => {
        Navigate.visit('CosmicNovaBaseWardPage').check_And_Validate_AlertIcon('data:image/png;base64');
    });

    it('[BOARD:10]: Test patient navigation into summary view', () => {

    });

    it('[BOARD:11]: Test bed change modal dialog panel when click on the admitted bed', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectBedIcon('2:1');
    });

    it('[BOARD:12]: Test patient availability under admitted patient with bed area', () => {
        Navigate.visit('CosmicNovaBaseWardPage').check_And_Validate_AdmittedPatientUnderWithBedArea('Grace M');
    });

    it('[BOARD:13]: Test patient availability under admitted patient with-out bed area', () => {
        Navigate.visit('CosmicNovaBaseWardPage').check_And_Validate_AdmittedPatientUnderWithOutBedArea('Stefan B');
    });

    xit('[BOARD:14]: Test patient availability under patient with technical bed area', () => {
        Navigate.visit('CosmicNovaBaseWardPage').check_And_Validate_AdmittedPatientUnderTechnicalBedArea('Mahesha R');
    });

    it('[BOARD:15]: Test empty bed commenting feature', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectBedIcon('2:1').step_AddingBedCommentUsingEmptyBedPopup('AUTO: Comment').
        step_SaveEmptyBedCommentPopup().check_And_Validate_EmptyBedCommentMsg('AUTO: Comment');

        Component.Restore_EmptyBedComment('2:1');
    });

    it('[BOARD:16]: Test move to patient using empty bed pop-up', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectBedIcon('2:1').step_AddingBedCommentUsingEmptyBedPopup('AUTO: Comment').
        step_SearchMovePatientToBedUsingEmptyBedPopup('Catarina-Lena V').step_SaveEmptyBedCommentPopup().check_And_Validate_AdmittedPatientUnderWithBedArea('Catarina-Lena V');

        Component.Restore_PatientRemoveFromBed('2:1');
    });

    it('[BOARD:17]: Test existing patient remove from admitted bed using bed change modal view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectBedIcon('2:1').step_SearchMovePatientToBedUsingEmptyBedPopup('Catarina-Lena V').step_SaveEmptyBedCommentPopup().
        step_SelectBedIcon('2:1').step_RemoveFromBedUsingBedChangeModalView().check_And_Validate_NotInAdmittedPatientUnderWithBedArea('Catarina-Lena V');
    });

    it('[BOARD:18]: Test existing two patients bed exchange using bed change modal view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectBedIcon('1:3').step_MovePatientToBedUsingBedExchageModal('Fyran V').
        check_And_Validate_AdmittedPatientUnderWithBedArea('Fyran V');

        Component.Restore_PatientBedExchange('1:3','Grace M');
    });

    it('[BOARD:19]: Test book clip feature using bed change modal view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectGivenNonAssignedBedIcon(13).selectGivenBookClipChangeModalView(3).
        check_And_Validate_BookClipAvailablityOnPatient("Catarina-Lena V").step_RemoveExistingBookClip();
    });

    it('[BOARD:20]: Test remove existing book clip feature using clip side pop-up', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectGivenNonAssignedBedIcon(13).selectGivenBookClipChangeModalView(3).check_And_Validate_BookClipAvailablityOnPatient("Catarina-Lena V").
        step_RemoveExistingBookClip().check_And_Validate_AdmittedPatientUnderWithOutBedArea("Catarina-Lena V");
    });

    it('[BOARD:21]: Test assigned a patient bed using existing book clip feature', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectGivenNonAssignedBedIcon(13).selectGivenBookClipChangeModalView(3).check_And_Validate_BookClipAvailablityOnPatient("Catarina-Lena V").
        step_AssignBedViaBookClip().check_And_Validate_AdmittedPatientUnderWithBedArea("Catarina-Lena V");

        Component.Restore_AssignedBookClipRemove(13,3);
    });


    using("Test planned discharged with different time range",[["PM","Today (pm)"],["Morning","Today (morning)"]],function (time, label) {
        it('[BOARD:22]: Test planned discharged with different time range using pop-up', () => {
            Navigate.visit('CosmicNovaBaseWardPage').step_ClickOnLeaveDateAndLoadPopup(3).step_SetTimeRangeForPlannedDischarge(time).step_SavePlannedDischargePopup().
            check_And_Validate_PlannedDischargeTime(label);

            Component.Restore_PlannedDischarge(3)
        });
    });

    it('[BOARD:23]: Test planned discharged with add-on message using pop-up', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_ClickOnLeaveDateAndLoadPopup(3).step_SetAddOnForPlannedDischarge('AUTO: Comment').step_SavePlannedDischargePopup().
        check_And_Validate_PlannedDischargeTime('AUTO: Comment');

        Component.Restore_PlannedDischarge(3)
    });

    it('[BOARD:24]: Test remove exsiting discharge record using pop-up', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_ClickOnLeaveDateAndLoadPopup(3).step_SetTimeRangeForPlannedDischarge('PM').step_SetAddOnForPlannedDischarge('AUTO: Comment').
        step_SavePlannedDischargePopup().step_ClickOnLeaveDateAndLoadPopup(3).step_MakePlannedDischargeRemoveOption();
    });

    it('[BOARD:25]: Test patient ward view summary infor-marker priority order', () => {
        //NOVA2.1-75857
        Navigate.visit('CosmicNovaBaseWardPage');
    });

    it('[BOARD:26]: Test patient ward view summary activity details with comment', () => {
        //NOVA2.1-75858
        Navigate.visit('CosmicNovaBaseWardPage');
    });

    it('[BOARD:27]: Test patient ward view summary package details with image icon', () => {
        //NOVA2.1-75859
        Navigate.visit('CosmicNovaBaseWardPage');
    });

    it('[BOARD:28]: Test patient ward view summary package details with image icon', () => {
        //NOVA2.1-75858
        Navigate.visit('CosmicNovaBaseWardPage');
    });

    it('[BOARD:29]: Test patient ward view record components', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').check_And_Validate_PatientNameUnderSummaryView('Elsa Sundström').
        step_ClosePatientSummaryView();
    });

    it('[BOARD:30]: Test empty bed comment update feature', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectBedIcon('2:1').step_AddingBedCommentUsingEmptyBedPopup('AUTO: Comment').step_SaveEmptyBedCommentPopup().
        step_SelectBedIcon('2:1').step_AddingBedCommentUsingEmptyBedPopup('AUTO: Update Comment').step_SaveEmptyBedCommentPopup().check_And_Validate_EmptyBedCommentMsg('AUTO: Update Comment');

        Component.Restore_EmptyBedComment('2:1');
    });

    it('[BOARD:31]: Test empty bed comment remove feature', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectBedIcon('2:1').step_AddingBedCommentUsingEmptyBedPopup('AUTO: Comment').step_SaveEmptyBedCommentPopup();

        Component.Restore_EmptyBedComment('2:1');
    });




    it('[SUMMARY:01]: Test summary view patient name load', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').check_And_Validate_PatientNameUnderSummaryView('Elsa Sundström').
        step_ClosePatientSummaryView();
    });

    it('[SUMMARY:02]: Test summary view patient id number load', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').check_And_Validate_PatientNumberUnderSummaryView('19 430823-9088 74').
        step_ClosePatientSummaryView();
    });

    it('[SUMMARY:03]: Test summary view patient gender load', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').check_And_Validate_PatientGenderIcon('FEMALE').step_ClosePatientSummaryView();
    });

    it('[SUMMARY:04]: Test summary view round status details', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').check_And_Validate_PatientRoundStatusCode('New patient').
        step_ClosePatientSummaryView();
    });

    it('[SUMMARY:05]: Test summary view tag and sub-tag create and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_SetPatientTagUsingSummaryView('Oncology').
        check_And_Validate_PatientTagUnderSummaryView('Oncology').step_SetPatientTagUsingSummaryView('None').step_ClosePatientSummaryView();
    });

    it('[SUMMARY:06]: Test summary view bed details section', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').check_And_Validate_PatientBedIdDetails('1:2').
        step_ClosePatientSummaryView();
    });

    it('[SUMMARY:07]: Test summary view patient present status', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_MakePatientUnPresentStateUnderSummaryView().
        check_And_Validate_BedIconPresentStateChange('color: rgb(128, 128, 128)').step_MakePatientPresentStateUnderSummaryView().step_ClosePatientSummaryView();
    });

    it('[SUMMARY:08]: Test enlistment (Days) format visibility under summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChooseShowsInDaysColumnView().step_PressSaveButton().
        check_And_Validate_AdmissionDate('ago').step_SelectAdmittedPatientWithBed('Elsa S').check_And_Validate_EnlistmentDateUnderSummaryView('ago').step_ClosePatientSummaryView();
    });

    it('[SUMMARY:09]: Test enlistment (Date) format visibility under summary view ', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChooseShowsInDateColumnView().step_PressSaveButton().
        check_And_Validate_AdmissionDate('/').step_SelectAdmittedPatientWithBed('Elsa S').check_And_Validate_EnlistmentDateUnderSummaryView('/').step_ClosePatientSummaryView();

        Component.Restore_AdminUnitShowIn();
    });

    using("Test planned discharged with different time range using summary view",[["PM","Today (pm)"],["Morning","Today (morning)"]],function (time, label) {
        it('[SUMMARY:10]: Test planned discharged with different time range using summary view', () => {
            Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnPlannedDischargeChangeLink().step_SetTimeRangeForPlannedDischarge(time).
            step_SavePlannedDischargePopup().step_ClosePatientSummaryView().check_And_Validate_PlannedDischargeTime(label);

            Component.Restore_PlannedDischargeInSummaryView('c')
        });
    });

    it('[SUMMARY:11]: Test modify existing discharge date information', () => {

    });

    it('[SUMMARY:11]: Test planned discharged with add-on message using summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnPlannedDischargeChangeLink().step_SetAddOnForPlannedDischarge('AUTO: Comment').
        step_SavePlannedDischargePopup().check_And_Validate_PlannedDischargeAddOn('AUTO: Comment').step_ClosePatientSummaryView();

        Component.Restore_PlannedDischargeInSummaryView('Elsa S')
    });

    it('[SUMMARY:12]: Test remove exsiting discharge record using summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnPlannedDischargeChangeLink().step_SetTimeRangeForPlannedDischarge('PM').
        step_SetAddOnForPlannedDischarge('AUTO: Comment').step_SavePlannedDischargePopup().step_ClickOnPlannedDischargeChangeLink().
        step_MakePlannedDischargeRemoveOption().check_And_Validate_PlannedDischargeTime('').step_ClosePatientSummaryView();
    });

    it('[SUMMARY:13]: Test add packages apply using add-package link and its visibility', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup("Discharge").
        step_SavePackageAddingUsingSummaryView().check_And_Validate_PackageAvailabilityUnderSummaryView("Discharge").step_ClosePatientSummaryView();

        Component.Restore_AddedPackageRemove('with-bed','Elsa S','Discharge');
    });

    it('[SUMMARY:14]: Test search add packages and apply using add-package link', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddPackageLink().step_SearchAddPackagePopup('Dis').
        step_SelectGivenPackageInPopup("Discharge").step_SavePackageAddingUsingSummaryView().check_And_Validate_PackageAvailabilityUnderSummaryView("Discharge").
        step_ClosePatientSummaryView();

        Component.Restore_AddedPackageRemove('with-bed','Elsa S','Discharge');
    });

    it('[SUMMARY:15]: Test removing existing packages from summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup("Discharge").
        step_SavePackageAddingUsingSummaryView().check_And_Validate_PackageAvailabilityUnderSummaryView("Discharge").step_RemoveGivenAppliedPackage("Discharge").
        step_ClosePatientSummaryView();
    });

    it('[SUMMARY:16]: Test add comment and add-on for existing package', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup("Discharge").
        step_SavePackageAddingUsingSummaryView().check_And_Validate_PackageAvailabilityUnderSummaryView("Discharge").step_SetCommentOnAppliedPackage("Discharge","AUTO: Comment").
        step_SetAddOnOnAppliedPackage("Discharge","AUTO: AddOn").check_And_Validate_PackageCommentAndAddon("AUTO: AddOn").step_ClosePatientSummaryView();

        Component.Restore_AddedPackageRemove('with-bed','Elsa S','Discharge');
    });

    it('[SUMMARY:17]: Test added package details under patient view summary, under roles view and base ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup("Discharge").
        step_SavePackageAddingUsingSummaryView().check_And_Validate_PackageAvailabilityUnderSummaryView("Discharge").step_ClosePatientSummaryView().
        check_And_Validate_InfoMarkerAndPackageAvailabilityUnderTags("Discharge");

        Component.Restore_AddedPackageRemove('with-bed','Elsa S','Discharge');
    });

    it('[SUMMARY:18]: Test added package details not showing under patient view summary and base ward view when disable showing selection from admin', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup("Lab Related").
        step_SavePackageAddingUsingSummaryView().check_And_Validate_PackageAvailabilityUnderSummaryView("Lab Related").step_ClosePatientSummaryView().
        check_And_Validate_InfoMarkerAndPackageNotAvailableUnderTags("Lab Related");

        Component.Restore_AddedPackageRemove('with-bed','Elsa S','Lab Related');
    });

    it('[SUMMARY:19]: Test add infor-marker in summary view and its visibility', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddInforMarkerLink().step_SelectInforMarkerFromSearchList('Fasting').
        step_SaveInforMarkerPopupSelection().check_And_Validation_InforMarkerAvailabilityUnderSummaryView('Fasting').step_ClosePatientSummaryView();

        Component.Restore_AddedInforMarkerRemove('Elsa S','Fasting');
    });

    it('[SUMMARY:20]: Test search and applied information-marker in summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddInforMarkerLink().step_SearchAddInfomarkerPopup('Fas').
        step_SelectInforMarkerFromSearchList('Fasting').step_SaveInforMarkerPopupSelection().check_And_Validation_InforMarkerAvailabilityUnderSummaryView('Fasting').step_ClosePatientSummaryView();

        Component.Restore_AddedInforMarkerRemove('Elsa S','Fasting');
    });

    it('[SUMMARY:21]: Test apply free-text type information marker in summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddInforMarkerLink().step_EnterFreeTextMarkerForInforMarker('AUTO: Free').
        step_SaveInforMarkerPopupSelection().check_And_Validation_InforMarkerAvailabilityUnderSummaryView('AUTO: Free').step_ClosePatientSummaryView();

        Component.Restore_AddedInforMarkerRemove('Elsa S','AUTO: Free');
    });

    it('[SUMMARY:22]: Test remove existing infor-marker in summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddInforMarkerLink().step_SelectInforMarkerFromSearchList('Fasting').
        step_SaveInforMarkerPopupSelection().check_And_Validation_InforMarkerAvailabilityUnderSummaryView('Fasting').step_RemoveExistingGivenInforMarkerRecord('Fasting').
        step_ClosePatientSummaryView();
    });

    it('[SUMMARY:23]: Test add comment and add-on for existing infor-marker in summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddInforMarkerLink().step_SelectInforMarkerFromSearchList('Fasting').
        step_SaveInforMarkerPopupSelection().step_SetCommetForExistingInforMarker('Fasting','AUTO: Comment').step_SetAddOnForExistingInfoMarker('Fasting','AUTO: Addon').
        check_And_Validation_InforMarkerCommetAndAddonDetails('AUTO: Addon').step_ClosePatientSummaryView();

        Component.Restore_AddedInforMarkerRemove('Elsa S','Fasting');
    });

    it('[SUMMARY:24]: Test added information marker details under summary view and base ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddInforMarkerLink().step_SelectInforMarkerFromSearchList('Diabetic').
        step_SaveInforMarkerPopupSelection().step_ClosePatientSummaryView().check_And_Validate_InfoMarkerAndPackageAvailabilityUnderTags('Diabetic');

        Component.Restore_AddedInforMarkerRemove('Elsa S','Diabetic');
    });

    it('[SUMMARY:25]: Test added information marker details not showing under base ward view when disable showing selection from admin', () => {
        Navigate.visit('CosmicNovaBaseWardPage');Component.Restore_AdminInforMarkerPriority('Diabetic','Show in Ward view summary');

        new CosmicNovaBaseWardPage().step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnAddInforMarkerLink().step_SelectInforMarkerFromSearchList('Diabetic').
        step_SaveInforMarkerPopupSelection().step_ClosePatientSummaryView().check_And_Validate_InfoMarkerAndPackageNotAvailableUnderTags('Diabetic');

        Component.Restore_AdminInforMarkerPriority('Diabetic','Show in Ward view summary');
        Component.Restore_AddedInforMarkerRemove('Elsa S','Diabetic');
    });

    it('[SUMMARY:26]: Test bed exchange view panel load under patient summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnThePatientBedTab().
        check_And_Validate_BedChangeModalView();
    });

    it('[SUMMARY:27]: Test existing patient remove from admitted bed under patient summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Grace M').step_ClickOnThePatientBedTab().step_RemoveFromBedUsingBedChangeModalView().
        step_ClosePatientSummaryView().check_And_Validate_NotInAdmittedPatientUnderWithBedArea('Fyran V');

        Component.Restore_PatientAssignToBed('1:3','Grace M');
    });

    it('[SUMMARY:28]: Test existing two patients bed exchange using bed exchange modal under patient summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Grace M').step_ClickOnThePatientBedTab().
        step_MovePatientToBedUsingBedExchageModal('Fyran V').step_ClosePatientSummaryView().check_And_Validate_AdmittedPatientUnderWithBedArea('Fyran V');

        Component.Restore_PatientBedExchange('1:3','Grace M');
    });

    it('[SUMMARY:29]: Test filled attention signal load functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Bertil S').step_ClickOnTheAttentionSignalIcon().check_And_Validate_AttentionSignalList('Medel vid intestinala inflammationer').
        check_And_Validate_AttentionSignalList('Dialysis care').check_And_Validate_AttentionSignalList('Hepatitis B').check_And_Validate_AttentionSignalList('DNR - Decision exists to not resuscitate');
    });

    it('[SUMMARY:30]: Test empty attention signal load functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_ClickOnTheAttentionSignalIcon().check_And_Validate_EmptyAttentionSignal();
    });






    it('[ACTIVITY:01]: Test activity view roles should arrange according to the admin roles list', () => {
        //Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Rolando S').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Lab Related').step_SaveActivitySelection();
        //step_SearchActivityOrPackageInPopup('Exa').step_EnterFreeTextValue('Text').step_SelectGivenPackageFromActivityPopup('Lab Related');
    });

    it('[ACTIVITY:02]: Test activity view roles should change according to the admin role changes', () => {

    });

    it('[ACTIVITY:03]: Test activity view when enable disable use of activities option in admin panel', () => {

    });

    it('[ACTIVITY:04]: Test activity availability in view when change its responsible roles using admin panel', () => {

    });

    it('[ACTIVITY:05]: Test activity visibility when enable show in patient view summary', () => {

    });

    it('[ACTIVITY:06]: Test add patient type activity using patient summary & right summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().check_And_Validate_ActivityAvailabilityUnderPatientSummary('Examination').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Examination');
    });

    it('[ACTIVITY:07]: Test add non-patient type activity using patient summary & right summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformRoleActivityAdding('Responsible doctor',1).step_SelectGivenPackageOrActivityFromActivityPopup('Discharge interview').
        step_SaveActivitySelection().check_And_Validate_ActivityAvailabilityUnderPatientSummary('Discharge interview').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Discharge interview');
    });

    it('[ACTIVITY:08]: Test move activity record from patient type role into non-patient type responsible role', () => {

    });

    it('[ACTIVITY:09]: Test add free text activity using existing role', () => {

    });

    it('[ACTIVITY:10]: Test remove single existing activity', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().check_And_Validate_ActivityAvailabilityUnderPatientSummary('Examination').step_ClosePatientSummaryView().SelectAdmittedPatientWithOutBed('Stefan B').
        step_PressActivityDeleteButton('Examination').step_ClosePatientSummaryView();
    });

    it('[ACTIVITY:30]: Test recurrence activity remove with all future activities same time', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_SelectActivityRepeatSelection('Every day').step_SaveActivitySettings().
        step_GetActivityAppliedDatesList(3,'Examination').step_PressRecurrenceActivityDeleteButton().check_And_Validate_ActivityNotAvailabilityUnderPatientSummary('Examination').step_ClosePatientSummaryView();
    });

    it('[ACTIVITY:11]: Test remove recurrence activity using remove this only option ', () => {

    });

    it('[ACTIVITY:12]: Test remove recurrence activity using remove all feature activities ', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_SelectActivityRepeatSelection('Every day').step_SaveActivitySettings().
        step_PressRecurrenceActivityDeleteButton().check_And_Validate_ActivityNotAvailabilityUnderPatientSummary('Examination');
    });

    it('[ACTIVITY:13]: Test cancel remove recurrence existing activity', () => {

    });

    it('[ACTIVITY:14]: Test set existing activity status as not-performed', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformRoleActivityAdding('Responsible doctor',1).step_SelectGivenPackageOrActivityFromActivityPopup('Discharge interview').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Discharge interview').step_ChangeActivityStatus('Performed').step_ChangeActivityStatus('Not performed').
        step_SaveActivitySettings().check_And_Validate_ActivityStatusIcon('NORMAL').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Discharge interview');
    });

    it('[ACTIVITY:15]: Test set existing activity status as performed', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformRoleActivityAdding('Responsible doctor',1).step_SelectGivenPackageOrActivityFromActivityPopup('Discharge interview').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Discharge interview').step_ChangeActivityStatus('Performed').step_SaveActivitySettings().
        check_And_Validate_ActivityStatusIcon('DONE').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Discharge interview');
    });

    it('[ACTIVITY:16]: Test set existing activity status as dismissed', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformRoleActivityAdding('Responsible doctor',1).step_SelectGivenPackageOrActivityFromActivityPopup('Discharge interview').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Discharge interview').step_ChangeActivityStatus('Dismissed').step_SaveActivitySettings().
        check_And_Validate_ActivityStatusIcon('DISMISSED').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Discharge interview');
    });

    using(" Test change activity perform time range and verify",[["AM","(am)"],["Morning","(morning)"]],function (time, label) {
        it('[ACTIVITY:17]: Test change activity perform time range and verify', () => {
            Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformRoleActivityAdding('Responsible doctor',1).step_SelectGivenPackageOrActivityFromActivityPopup('Discharge interview').
            step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Discharge interview').step_SetTimePeriodForActivity(time).step_SaveActivitySettings().
            check_And_Validate_GivenActivityUnderRoleRecord(label,1).step_PressModifiedActivityDeleteButton().step_ClosePatientSummaryView();
        });
    });

    it('[ACTIVITY:18]: Test set add-on for exsiting activity and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformRoleActivityAdding('Responsible doctor',1).step_SelectGivenPackageOrActivityFromActivityPopup('Discharge interview').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Discharge interview').step_EnterActivityAddOn("AUTO: AddOn").step_SaveActivitySettings().
        check_And_Validate_GivenActivityUnderRoleRecord('Discharge interview AUTO: AddOn').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Discharge interview AUTO: AddOn');
    });

    it('[ACTIVITY:19]: Test set comment for exsiting activity and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformRoleActivityAdding('Responsible doctor',1).step_SelectGivenPackageOrActivityFromActivityPopup('Discharge interview').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Discharge interview').step_EnterActivityComment("AUTO: Comment").step_SaveActivitySettings().check_And_Validate_ActivityCommentIcon().
        step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Discharge interview');
    });

    it('[ACTIVITY:20]: Test set repeat option as never for exsiting activity and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_GetActivityAppliedDatesList(1,'Examination').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Examination');
    });

    it('[ACTIVITY:21]: Test set repeat option as never for exsiting activity and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_GetActivityAppliedDatesList(1,'Examination').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Examination');
    });

    it('[ACTIVITY:22]: Test set repeat option as every-day for exsiting activity and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_SelectActivityRepeatSelection('Every day').step_SaveActivitySettings().
        step_GetActivityAppliedDatesList(3,'Examination').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingRecurrenceActivity('Stefan B');
    });

    it('[ACTIVITY:23]: Test parent activity responsible roles change and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_ChangeActivityResponsibleRole('Responsible doctor').check_And_Validate_GivenActivityUnderRoleRecord('Examination').
        step_SaveActivitySettings().check_And_Validate_ChangedActivityResponsibleRole('Responsible doctor').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingActivity('without-bed','Stefan B','Examination');
    });

    it('[ACTIVITY:25]: Test recurrence activity remove only selected activity at that time', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_SelectActivityRepeatSelection('Every day').step_SaveActivitySettings().
        step_GetActivityAppliedDatesList(3,'Examination').step_PressRecurrenceActivityThisOnlyDeleteButton(2).step_GetActivityAppliedDatesList(2,'Examination').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingRecurrenceActivity('Stefan B');
    });

    it('[ACTIVITY:26]: Test set recurrences activity by setting every-day, end date, never ', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_SelectActivityRepeatSelection('Every day').step_SaveActivitySettings().
        step_GetActivityAppliedDatesList(3,'Examination').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingRecurrenceActivity('Stefan B');
    });

    it('[ACTIVITY:27]: Test set recurrences activity by setting every-day, end date, future date ', () => {

    });

    it('[ACTIVITY:28]: Test load package type activity set under patient type activity list', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Lab Related').
        step_SaveActivitySelection().check_And_Validate_GivenActivityUnderRoleRecord('Radiology').check_And_Validate_GivenActivityUnderRoleRecord('Lab Test').
        check_And_Validate_ActivityAvailabilityUnderPatientSummary('Lab Related').step_ClosePatientSummaryView();

        Component.Restore_AddedPackageRemove('without-bed','Stefan B','Lab Related');
    });

    it('[ACTIVITY:29]: Test visibility of the activity in ward page when apply activity in summary page', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Elsa S').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_ClosePatientSummaryView().check_And_Validate_InfoMarkerAndPackageAvailabilityUnderTags('Examination');

        Component.Restore_DelteExistingActivity('with-bed','Elsa S','Examination');
    });



    it('[ACTIVITY:31]: Test set repeat option as specific-day for exsiting activity and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_SelectActivityRepeatSelection('Specific days').step_SaveActivitySettings().
        step_GetActivityAppliedDatesList(1,'Examination').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingRecurrenceActivity('Stefan B');
    });

    it('[ACTIVITY:32]: Test save this only role change for reccurance activity', () => {

    });

    it('[ACTIVITY:33]: Test save all role change for reccurance activity', () => {

    });

    it('[ACTIVITY:34]: Test set repeat option as with-time-interval for exsiting activity and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_SelectActivityRepeatSelection('With time interval').step_EnterSpecificTimeIntervalForActivities(12).
        step_SaveActivitySettings().step_GetActivityAppliedDatesList(6,'Examination').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingRecurrenceActivity('Stefan B');
    });

    it('[ACTIVITY:35]: Test set repeat option as several-times-daily for exsiting activity and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').SelectAdmittedPatientWithOutBed('Stefan B').step_PerformParentActivityAdding(1).step_SelectGivenPackageOrActivityFromActivityPopup('Examination').
        step_SaveActivitySelection().step_SelectGivenActivityUnderRoleView('Examination').step_SelectActivityRepeatSelection('Several times daily').step_SaveActivitySettings().
        step_GetActivityAppliedDatesList(3,'(pm)').step_GetActivityAppliedDatesList(3,'(am)').step_ClosePatientSummaryView();

        Component.Restore_DelteExistingRecurrenceActivity('Stefan B');
    });




    beforeEach(() => {
        console.log('************************************************************************************************');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA:WARDS] - COMPLETED ! ************************************');
    });

    function using(name, values, func){
        for (var i = 0, count = values.length; i < count; i++) {
            if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
                values[i] = [values[i]];
            }
            func.apply(this, values[i]);
        }
    }
});