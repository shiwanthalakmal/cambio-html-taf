/**
 * Created by SLakmal on 4/26/2017.
 */
import {Navigate} from "../page-loader";
import {Component} from "../page-loader";

describe('[NOVA:ADMIN]', () => {

    it('[UNIT:01]: Test and verify administrator unit page component', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChangeUnitName('AUTO: Unit Update').
        step_ChangeLoadingPeriod('50').step_ChooseShowsInDateColumnView().step_ChooseShowsInDaysColumnView().
        step_PressTeamAddButton().step_ChangeTeamSelectionName('AUTO: Team Update').step_PressTeamDeleteIconAndReject();
    });

    it('[UNIT:02]: Test update unit display name and verify under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChangeUnitName('AUTO: Unit Update').
        step_PressSaveButton().check_And_Validate_WardUnitTitle('AUTO: Unit Update');

        Component.Restore_AdminUnitName('Medicine Ward 2*');
    });

    it('[UNIT:03]: Test new team adding functionality and verify under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_PressTeamAddButton().
        step_ChangeTeamSelectionName('AUTO: Team').step_PressSaveButton().check_And_Validate_MainMenusAvailability('AUTO: Team');
        //[Pending]
        Component.Restore_AdminUnitTeamList(1);
    });

    it('[UNIT:04]: Test update existing team and verify the changes under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChangeTeamSelectionName('AUTO: Team Update').
        step_PressSaveButton().check_And_Validate_MainMenusAvailability('AUTO: Team Update');
        //[Pending]
        Component.Restore_AdminUnitTeamName('Blue Team');
    });

    it('[UNIT:05]: Test team deletion functionality and verify under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_PressTeamAddButton().step_ChangeTeamSelectionName('AUTO: Team').step_PressSaveButton().step_MoveToAdminPortal().
        step_PressTeamDeleteIconAndAccept().check_And_Validate_TeamNotAvailability('AUTO: Team').step_PressSaveButton().check_And_Validate_MainMenusNotAvailability('AUTO: Team');
    });

    it('[UNIT:06]: Test team deletion ignore functionality and verify under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_PressTeamAddButton().
        step_ChangeTeamSelectionName('AUTO: Team').step_PressTeamDeleteIconAndReject().check_And_Validate_TeamAvailability('AUTO: Team');
    });

    it('[UNIT:07]: Test set valid loading time and save it', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChangeLoadingPeriod('50').step_PressSaveButton();

        Component.Restore_AdminUnitLoadTine('25');
    });

    it('[UNIT:08]: Test set in-valid loading time and verify the validation error message', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChangeLoadingPeriod('169.54');
    });

    it('[UNIT:9]: Test show in ward view option by changing under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChooseShowsInDateColumnView();
        //[Pending]
    });

    it('[UNIT:10]: Test ward view color change according to the team color code admin unit', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_ChooseGivenColorCode(2);
    });

    it('[UNIT:11]: Test unit menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(1, 'The Unit and it');
    });

    it('[UNIT:12]: Test staff menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(2, 'Add persons to the');
    });

    it('[UNIT:13]: Test Roles menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(3, 'Add Staff to the Role');
    });

    it('[UNIT:14]: Test Information-marker menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(4, 'Information markers about');
    });

    it('[UNIT:15]: Test activity menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(5, 'The activities can');
    });

    it('[UNIT:16]: Test Tag menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(7, 'Tags: Main health');
    });

    it('[UNIT:17]: Test status menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(8, 'The status may be');
    });

    it('[UNIT:18]: Test view-summary menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(9, 'Patient view summary');
    });

    it('[UNIT:19]: Test ward-summary menu information tool-tips', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().check_And_Validate_AdminMenuToolTips(10, 'Ward view summary');
    });



    it('[STAFF:01]: Test and verify administrator staff page component', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_PressAddNewStaffButton().
        step_EnterNewStaffLevel('AUTO: Update Staff').step_PressPackageSearchTab().step_EnterStaffSearchRecord('Sara').
        step_ChooseStaffLevels('AUTO: Update Staff').step_DeleteStaffLevelsIgnore(1);
    });

    it('[STAFF:02]: Test staff new adding functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_PressAddNewStaffButton().
        step_EnterNewStaffLevel('AUTO: Staff').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToStaffAdminPanel().
        check_And_Validate_StaffRoleListAvailability('AUTO: Staff').step_DeleteStaffLevelsAccept(1).step_PressSaveButton();
    });

    it('[STAFF:03]: Test staff searching functionality and verify the result availability', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_PressAddNewStaffButton().
        step_EnterNewStaffLevel('AUTO: Staff').step_PressStaffSearchTab().step_EnterStaffSearchRecord('Sara').
        step_ChooseStaffFromSearchResults('Danels, Sara (SaraD)').check_And_Validate_UnitStaffCategoryAvailability('Danels, Sara ()');
    });

    it('[STAFF:04]: Test existing staff record delete functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_PressAddNewStaffButton().
        step_EnterNewStaffLevel('AUTO: Staff').step_DeleteStaffLevelsAccept(1);
    });

    it('[STAFF:05]: Test existing staff record delete and ignore functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_PressAddNewStaffButton().
        step_EnterNewStaffLevel('AUTO: Staff').step_DeleteStaffLevelsIgnore(1);
    });

    it('[STAFF:06]: Test existing staff-in-category record delete functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_PressAddNewStaffButton().
        step_EnterNewStaffLevel('AUTO: Staff').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_DeleteStaffLevelsAccept(1).
        check_And_Validate_StaffRoleListNotAvailability('AUTO: Staff').step_PressSaveButton();
    });

    it('[STAFF:07]: Test update existing staff record and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_PressAddNewStaffButton().
        step_EnterNewStaffLevel('AUTO: Staff').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_ChooseStaffLevels('AUTO: Staff').
        step_EnterNewStaffLevel('AUTO: Update Staff').check_And_Validate_StaffRoleListAvailability('AUTO: Update Staff').step_DeleteStaffLevelsAccept(1).step_PressSaveButton();
    });




    it('[ROLE:01]: Test and verify administrator role page component', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_ChooseRolesLevels('Consultant').step_PressAddNewRolesButton().
        step_EnterNewRoleDetails('AUTO: Role').step_ChooseRolesStaffedWithOptions('Doctor').step_EnterNewAbbreviationValue('AUTO').step_ChooseShowOnOptions('Show on team view').
        step_ChooseResponsibilityOption('Team');
    });

    it('[ROLE:02]: Test new role adding functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_PressAddNewRolesButton().step_EnterNewRoleDetails('AUTO: Role').
        step_ChooseRolesStaffedWithOptions('Doctor').step_EnterNewAbbreviationValue('AUTO').step_ChooseShowOnOptions('Disable use of Activities').
        step_PressSaveButton().step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_DeleteRolesLevelsAccept(4).step_PressSaveButton();
    });

    it('[ROLE:03]: Test update existing role functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_PressAddNewRolesButton().step_EnterNewRoleDetails('AUTO: Role').
        step_PressSaveButton().step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_EnterNewRoleDetails('AUTO: Update Role').step_PressSaveButton().step_MoveToAdminPortal().
        step_MoveToRolesAdminPanel().step_ChooseRolesLevels('AUTO: Update Role').step_DeleteRolesLevelsAccept(4).step_PressSaveButton();
    });

    it('[ROLE:04]: Test delete existing role functionality and verify', () => {

    });

    it('[ROLE:05]: Test delete existing role and ignore functionality and verify', () => {

    });

    it('[ROLE:06]: Test delete existing role and ignore functionality and verify', () => {

    });

    it('[ROLE:07]: Test behaviours without both show-on option', () => {

    });

    it('[ROLE:08]: Test behaviours without both show-on option apply', () => {

    });

    it('[ROLE:09]: Test behaviours with both show-on option apply', () => {

    });

    it('[ROLE:10]: Test behaviours with whole-unit area of responsibility', () => {

    });

    it('[ROLE:11]: Test behaviours with team area of responsibility', () => {

    });

    it('[ROLE:12]: Test behaviours with team-and-bed area of responsibility', () => {

    });

    it('[ROLE:13]: Test behaviours with patient area of responsibility', () => {

    });



    it('[TAGS:01]: Test and verify administrator tag page component', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressSubTagsGridTab().
        step_PressTagsGridTab().step_PressNewTagsAddButton().step_EnterNewName('AUTO: Tags').step_ChooseTagsInList('AUTO: Tags').step_DeleteTagIgnore(1);
    });

    it('[TAGS:02]: Test new tag adding functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressTagsGridTab().step_PressNewTagsAddButton().
        step_EnterNewName('AUTO: Tags').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToTagsAdminPanel().check_And_Validate_TagsAvailability('AUTO: Tags').
        step_DeleteTagAccept(1).step_PressSaveButton();
    });

    it('[TAGS:03]: Test new sub-tag adding functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressSubTagsGridTab().step_PressNewSubTagsAddButton().
        step_EnterNewName('AUTO: Sub-Tags').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressSubTagsGridTab().
        check_And_Validate_TagsAvailability('AUTO: Sub-Tags').step_DeleteTagAccept(1).step_PressSaveButton();
    });

    it('[TAGS:04]: Test update existing tag functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressTagsGridTab().step_PressNewTagsAddButton().
        step_EnterNewName('AUTO: Tags').step_ChooseTagsInList('AUTO: Tags').step_EnterNewName('AUTO: Update Tags').
        check_And_Validate_TagsAvailability('AUTO: Update Tags').step_DeleteTagAccept(1);
    });

    it('[TAGS:05]: Test update existing sub-tag functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressSubTagsGridTab().step_PressNewSubTagsAddButton().
        step_EnterNewName('AUTO: Sub-Tags').step_ChooseTagsInList('AUTO: Sub-Tags').step_EnterNewName('AUTO: Update Sub-Tags').
        check_And_Validate_TagsAvailability('AUTO: Update Sub-Tags').step_DeleteTagAccept(1);
    });

    it('[TAGS:06]: Test delete tag functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressTagsGridTab().step_PressNewTagsAddButton().
        step_EnterNewName('AUTO: Tags').step_ChooseTagsInList('AUTO: Tags').step_DeleteTagAccept(1);
    });

    it('[TAGS:07]: Test delete tag and ignore functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressTagsGridTab().step_PressNewTagsAddButton().
        step_EnterNewName('AUTO: Tags').step_ChooseTagsInList('AUTO: Tags').step_DeleteTagIgnore(1);
    });

    it('[TAGS:08]: Test delete sub-tag functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressSubTagsGridTab().step_PressNewSubTagsAddButton().
        step_EnterNewName('AUTO: Sub-Tags').step_ChooseTagsInList('AUTO: Sub-Tags').step_DeleteTagAccept(1);
    });

    it('[TAGS:09]: Test delete sub-tag and ignore functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToTagsAdminPanel().step_PressSubTagsGridTab().step_PressNewSubTagsAddButton().
        step_EnterNewName('AUTO: Sub-Tags').step_ChooseTagsInList('AUTO: Sub-Tags').step_DeleteTagIgnore(1).step_ChooseTagsInList('AUTO: Sub-Tags');
    });




    it('[STATUS:01]: Test and verify administrator status page component', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStatusAdminPanel().step_ChangeActivateStatusMode().
        step_PressNewStatusAddButton().step_EnterNewStatusName('AUTO: Status').step_DeleteStatusRecordIgnore(1);
    });

    it('[STATUS:02]: Test activate and de-activate functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStatusAdminPanel().
        step_ChangeActivateStatusMode().step_ChangeActivateStatusMode();
    });

    it('[STATUS:03]: Test new status adding functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStatusAdminPanel().step_PressNewStatusAddButton().step_EnterNewStatusName('AUTO: Status').
        step_PressSaveButton().step_MoveToAdminPortal().step_MoveToStatusAdminPanel().check_And_Validate_StatusRecordAvailability('AUTO: Status').
        step_DeleteStatusRecordAccept(1).step_PressSaveButton();
    });

    it('[STATUS:04]: Test update existing status functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStatusAdminPanel().step_PressNewStatusAddButton().step_EnterNewStatusName('AUTO: Status').
        step_PressSaveButton().step_MoveToAdminPortal().step_MoveToStatusAdminPanel().step_ChooseStatusRecord('AUTO: Status').step_EnterNewStatusName('AUTO: Update Status').
        check_And_Validate_StatusRecordAvailability('AUTO: Update Status').step_DeleteStatusRecordAccept(1).check_And_Validate_StatusRecordNotAvailability('AUTO: Update Status').step_PressSaveButton();
    });

    it('[STATUS:05]: Test exsiting status delete functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStatusAdminPanel().step_PressNewStatusAddButton().step_EnterNewStatusName('AUTO: Status').
        step_PressSaveButton().step_MoveToAdminPortal().step_MoveToStatusAdminPanel().check_And_Validate_StatusRecordAvailability('AUTO: Status').
        step_DeleteStatusRecordAccept(1).step_PressSaveButton().step_MoveToAdminPortal().step_MoveToStatusAdminPanel().check_And_Validate_StatusRecordNotAvailability('AUTO: Status');
    });

    it('[STATUS:06]: Test exsiting status delete and ignore functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToStatusAdminPanel().step_PressNewStatusAddButton().step_EnterNewStatusName('AUTO: Status').
        step_PressSaveButton().step_MoveToAdminPortal().step_MoveToStatusAdminPanel().step_DeleteStatusRecordIgnore(1).check_And_Validate_StatusRecordAvailability('AUTO: Status').
        step_DeleteStatusRecordAccept(1).step_PressSaveButton();
    });



    it('[INFOMARK:01]: Test and verify administrator information marker page component', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_PressAddNewInfoMarkButton().
        step_EnterNewInfoMarkers('AUTO: Infor Marker').step_EnterInfoMarkDescription('AUTO: Description').step_ChooseInfoMarkerRecord('AUTO: Infor Marker').step_DeleteInfoMarkersIgnore(1);
    });

    it('[INFOMARK:02]: Test new information marker adding functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_PressAddNewInfoMarkButton().step_EnterNewInfoMarkers('AUTO: Infor Marker').
        step_ChoosePriorityOption('Higher Priority').step_EnterInfoMarkDescription('AUTO: Description').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().
        step_DeleteInfoMarkersAccept(1).check_And_Validate_InfoMarkerRecordNotAvailability('AUTO: Infor Marker').step_PressSaveButton();
    });

    it('[INFOMARK:03]: Test existing information marker update functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_PressAddNewInfoMarkButton().step_EnterNewInfoMarkers('AUTO: Infor Marker').
        step_ChoosePriorityOption('Higher Priority').step_EnterInfoMarkDescription('AUTO: Description').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().
        step_EnterNewInfoMarkers('AUTO: Update Infor Marker').check_And_Validate_InfoMarkerRecordAvailability('AUTO: Update Infor Marker').step_ChoosePriorityOption('Show in Ward view summary').
        step_PressSaveButton();

        Component.Restore_AdminInforMarker(1);
    });

    it('[INFOMARK:04]: Test existing information marker delete functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_PressAddNewInfoMarkButton().step_EnterNewInfoMarkers('AUTO: Infor Marker').
        step_ChoosePriorityOption('Higher Priority').step_EnterInfoMarkDescription('AUTO: Description').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().
        step_DeleteInfoMarkersAccept(1).step_PressSaveButton().step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().check_And_Validate_InfoMarkerRecordNotAvailability('AUTO: Infor Marker');
    });

    it('[INFOMARK:05]: Test existing information marker delete and ignore functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_PressAddNewInfoMarkButton().step_EnterNewInfoMarkers('AUTO: Infor Marker').
        step_ChoosePriorityOption('Higher Priority').step_DeleteInfoMarkersIgnore(1).check_And_Validate_InfoMarkerRecordAvailability('AUTO: Infor Marker');
    });

    it('[INFOMARK:06]: Test information marker high priority option applicability under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_PressAddNewInfoMarkButton().step_EnterNewInfoMarkers('AUTO: Infor Marker').
        step_ChoosePriorityOption('Higher Priority').step_EnterInfoMarkDescription('AUTO: Description').step_PressSaveButton();

        Component.Restore_AdminInforMarker(1);
        //[Pending]
    });

    it('[INFOMARK:07]: Test information marker show ward view summary option applicability under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_PressAddNewInfoMarkButton().step_EnterNewInfoMarkers('AUTO: Infor Marker').
        step_ChoosePriorityOption('Show in Ward view summary').step_EnterInfoMarkDescription('AUTO: Description');
        //[Pending]
    });




    it('[ACTIVITY:01]: Test and verify administrator activities page component', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_ChooseActivityFromList('Dialysis').step_DeleteActivityAndIgnore(1).
        step_PressAddNewActivityButton().step_EnterNewActivityName('AUTO: Activity').step_EnterActivityDescription('AUTO: DESC').step_ChooseShowsWardSummaryOptions('Show in Ward view summary').
        step_ChooseResponsibleRecord('Consultant');
    });

    it('[ACTIVITY:02]: Test new activities adding functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_ChooseActivityFromList('Dialysis').step_DeleteActivityAndIgnore(1).
        step_PressAddNewActivityButton().step_EnterNewActivityName('AUTO: Activity').step_EnterActivityDescription('AUTO: DESC').step_ChooseShowsWardSummaryOptions('Show in Ward view summary').
        step_ChooseResponsibleRecord('Consultant').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().check_And_Validate_ActivityAvailability('AUTO: Activity').
        step_DeleteActivityAndAccept(1).step_PressSaveButton();
    });

    it('[ACTIVITY:03]: Test existing activity update functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_PressAddNewActivityButton().step_EnterNewActivityName('AUTO: Activity').
        step_PressSaveButton().step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_EnterNewActivityName('AUTO: Update Activity').
        check_And_Validate_ActivityAvailability('AUTO: Update Activity').step_DeleteActivityAndAccept(1).step_PressSaveButton();
    });

    it('[ACTIVITY:04]: Test existing activity delete functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_PressAddNewActivityButton().step_EnterNewActivityName('AUTO: Activity').
        step_PressSaveButton().step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_DeleteActivityAndAccept(1).step_PressSaveButton();
    });

    it('[ACTIVITY:05]: Test existing activity delete and ignore functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_PressAddNewActivityButton().step_EnterNewActivityName('AUTO: Activity').
        step_DeleteActivityAndIgnore(1).check_And_Validate_ActivityAvailability('AUTO: Activity');
    });

    it('[ACTIVITY:06]: Test activities in ward summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_DeleteActivityAndIgnore(1).
        step_PressAddNewActivityButton().step_EnterNewActivityName('AUTO: Activity').step_EnterActivityDescription('AUTO: DESC').step_ChooseShowsWardSummaryOptions('Show in Ward view summary').
        step_ChooseResponsibleRecord('Consultant');
        //[Pending]
    });

    it('[ACTIVITY:07]: Test activities in patient summary view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToActivitiesAdminPanel().step_DeleteActivityAndIgnore(1).
        step_PressAddNewActivityButton().step_EnterNewActivityName('AUTO: Activity').step_SelectGivenRoleUsingDropdown('3');

        /*step_EnterActivityDescription('AUTO: DESC').step_ChooseShowsWardSummaryOptions('Show in Patient view summary').
        step_ChooseResponsibleRecord('Läkare');*/
        //[Pending]
    });




    it('[PACKAGE:01]: Test and verify administrator packages page component', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_ChoosePackageLevels('Lab Related').step_DeletePackagesIgnore(1).
        step_PressAddNewPackagesButton().step_EnterNewPackageDetails('AUTO:Package').step_EnterPackagesDescription('AUTO: DESC').step_PressInfoMarkersGridTab().
        step_PressActivitiesGridTab().step_ChooseActivityGridRecord('Dialysis');
    });

    it('[PACKAGE:02]: Test add a new package functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_PressAddNewPackagesButton().step_EnterNewPackageDetails('AUTO: Package').
        step_EnterPackagesDescription('AUTO: DESC').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().check_And_Validate_PackageListAvailability('AUTO: Package').
        step_DeletePackagesAccept(1).step_PressSaveButton();
    });

    it('[PACKAGE:03]: Test exsiting package delete and ignore functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_PressAddNewPackagesButton().step_EnterNewPackageDetails('AUTO: Package').
        step_EnterPackagesDescription('AUTO: DESC').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_DeletePackagesIgnore(1).
        check_And_Validate_PackageListAvailability('AUTO: Package').step_DeletePackagesAccept(1).step_PressSaveButton();
    });

    it('[PACKAGE:04]: Test exsiting package delete functionality', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_PressAddNewPackagesButton().step_EnterNewPackageDetails('AUTO: Package').
        step_EnterPackagesDescription('AUTO: DESC').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_DeletePackagesAccept(1).
        check_And_Validate_PackageListNotAvailability('AUTO: Package').step_PressSaveButton();
    });

    it('[PACKAGE:05]: Test existing package update functionality and verify', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_PressAddNewPackagesButton().step_EnterNewPackageDetails('AUTO: Package').
        step_EnterPackagesDescription('AUTO: DESC').step_PressSaveButton().step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_EnterNewPackageDetails('AUTO: Update Package').
        check_And_Validate_PackageListAvailability('AUTO: Update Package').step_DeletePackagesAccept(1).step_PressSaveButton();
    });

    it('[PACKAGE:06]: Test showing under ward view summary option apply', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_ChoosePackageLevels('Lab Related').
        step_ChooseShowsOptions('Show in Ward view summary').step_PressSaveButton().step_SelectAdmittedPatientWithBed('Bertil S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup('Lab Related').
        step_SavePackageAddingUsingSummaryView().step_ClosePatientSummaryView().check_And_Validate_InfoMarkerAndPackageAvailabilityUnderTags('Lab Related').

        step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_ChoosePackageLevels('Lab Related').step_ChooseShowsOptions('Show in Ward view summary').step_PressSaveButton().
        step_SelectAdmittedPatientWithBed('Bertil S').step_RemoveGivenAppliedPackage('Lab Related');
    });

    it('[PACKAGE:07]: Test showing under patient view summary option disable apply', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_SelectAdmittedPatientWithBed('Bertil S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup('Lab Related').
        step_SavePackageAddingUsingSummaryView().step_ClosePatientSummaryView().check_And_Validate_InfoMarkerAndPackageNotAvailableUnderTags('Lab Related').

        step_SelectAdmittedPatientWithBed('Bertil S').step_RemoveGivenAppliedPackage('Lab Related');
    });

    it('[PACKAGE:08]: Test included activities and information markers into package and verify under ward view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_ChoosePackageLevels('Lab Related').
        step_ChooseShowsOptions('Show in Ward view summary').step_PressSaveButton().step_SelectAdmittedPatientWithBed('Bertil S').step_ClickOnAddPackageLink().step_SelectGivenPackageInPopup('Lab Related').
        step_SavePackageAddingUsingSummaryView().step_ClosePatientSummaryView().check_And_Validate_InfoMarkerAndPackageAvailabilityUnderTags('Examination').check_And_Validate_InfoMarkerAndPackageAvailabilityUnderTags('Fasting').

        step_MoveToAdminPortal().step_MoveToPackagesAdminPanel().step_ChoosePackageLevels('Lab Related').step_ChooseShowsOptions('Show in Ward view summary').step_PressSaveButton().
        step_SelectAdmittedPatientWithBed('Bertil S').step_RemoveGivenAppliedPackage('Lab Related');
    });




    it('[PATIENTVIEW:01]: Test patient view summary content change according to the activity change', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPatientViewAdminPanel().step_ChooseListOfActivities('Blood glucose').
        check_And_Validate_ActivitiesContents('Blood glucose').step_ChooseListOfActivities('Blood glucose').check_And_Validate_NotActivitiesContents('Blood glucose');
    });

    it('[PATIENTVIEW:02]: Test patient view summary content change according to the package change', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToAdminPortal().step_MoveToPatientViewAdminPanel().step_ChooseListOfPackages('Transport Related').
        check_And_Validate_ActivitiesContents('Transport Related').step_ChooseListOfPackages('Transport Related').check_And_Validate_NotActivitiesContents('Transport Related');
    });




    beforeEach(() => {
        console.log('************************************************************************************************');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA:ADMIN] - COMPLETED ! ************************************');
    });
});