/**
 * Created by SLakmal on 4/28/2017.
 */
import {CosmicNovaBaseWardPage} from "../page-objects/CosmicNovaBaseWardPage";
import {ElementArrayFinder, by} from "protractor";
import {AssertionError} from "../../../ui-utils/ui-exceptions/AssertionError";
import {Navigate} from "./Navigate";

export class Component {

    public static Restore_AdminUnitName(name: string): void{
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_ChangeUnitName(name).
        step_PressSaveButton();
    }

    public static Restore_AdminUnitTeamList(record: number): void{
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_PressTeamDeleteIconAndAccept().
        step_PressSaveButton()
    }

    public static Restore_AdminUnitTeamName(name: string): void{
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_ChangeTeamSelectionName(name).
        step_PressSaveButton()
    }

    public static Restore_AdminUnitLoadTine(value: string): void{
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_ChangeLoadingPeriod(value).
        step_PressSaveButton()
    }

    public static Restore_AdminUnitShowIn(): void{
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_ChooseShowsInDaysColumnView().
        step_PressSaveButton();
    }

    public static Restore_AdminInforMarkerPriority(info: string ,show: string): void{
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_ChooseInfoMarkerRecord(info).step_ChoosePriorityOption(show).
        step_PressSaveButton();
    }

    public static Restore_AdminInforMarker(info: number): void{
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_MoveToInfoMarkAdminPanel().step_DeleteInfoMarkersAccept(info).step_PressSaveButton();
    }

    public static Restore_AdminRolesAreaOfResponsibility(role: string, responsibility: string): void{
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_MoveToRolesAdminPanel().step_ChooseRolesLevels(role).step_ChooseResponsibilityOption(responsibility).
        step_PressSaveButton();
    }

    public static CheckPatientAgainstBedId(element: ElementArrayFinder, bed: string, patient: string):void{
        let status :boolean = false;
        element.filter(function (elementItem, index) {
            return elementItem.getText().then(function (text) {
                if(text.includes(bed) && text.includes(patient)) {
                    console.log('Yes ! Found bed is:' + bed + ' and patient is: '+patient);
                    status = true;
                    return true;
                }
            });
        }).then(function (bool) {
            if(!status){
                throw new AssertionError("Ooops ! Patient: "+patient+" is not in the bed: "+bed);
            }
        });
    }

    public static Restore_EmptyBedComment(bed: string): void{
        new CosmicNovaBaseWardPage().step_SelectBedIcon(bed).step_AddingBedCommentUsingEmptyBedPopup('').
        step_SaveEmptyBedCommentPopup();
    }

    public static Restore_PatientBedExchange(bed: string, patient: string): void{
        new CosmicNovaBaseWardPage().step_SelectBedIcon(bed).step_MovePatientToBedUsingBedExchageModal(patient);
    }

    public static Restore_PatientRemoveFromBed(bed:string): void{
        new CosmicNovaBaseWardPage().step_SelectBedIcon(bed).step_RemoveFromBedUsingBedChangeModalView();
    }

    public static Restore_PatientAssignToBed(bed:string, patient: string): void{
        new CosmicNovaBaseWardPage().step_SelectBedIcon(bed).step_SearchMovePatientToBedUsingEmptyBedPopup(patient).step_SaveEmptyBedCommentPopup();
    }

    public static Restore_PlannedDischarge(record: number): void{
        new CosmicNovaBaseWardPage().step_ClickOnLeaveDateAndLoadPopup(record).step_MakePlannedDischargeRemoveOption();
    }

    public static Restore_PlannedDischargeInSummaryView(patient: string): void{
        new CosmicNovaBaseWardPage().step_SelectAdmittedPatientWithBed(patient).step_ClickOnPlannedDischargeChangeLink().
        step_MakePlannedDischargeRemoveOption();
    }

    public static Restore_AddedPackageRemove(bedType: string, patient: string, pack: string): void{
        if(bedType === 'with-bed'){
            new CosmicNovaBaseWardPage().step_SelectAdmittedPatientWithBed(patient).step_RemoveGivenAppliedPackage(pack);
        }else if(bedType === 'without-bed'){
            new CosmicNovaBaseWardPage().SelectAdmittedPatientWithOutBed(patient).step_RemoveGivenAppliedPackage(pack);
        }else{}
    }

    public static Restore_AddedInforMarkerRemove(patient: string, info: string): void{
        new CosmicNovaBaseWardPage().step_SelectAdmittedPatientWithBed(patient).step_RemoveExistingGivenInforMarkerRecord(info);
    }

    public static Restore_AssignedBookClipRemove(unassignedBed: number, assignedBed: number): void{
        new CosmicNovaBaseWardPage().step_SelectGivenNonAssignedBedIcon(unassignedBed).selectGivenBookClipChangeModalView(assignedBed).step_AssignBedViaBookClip();
    }

    public static Restore_DelteExistingActivity(bedType: string, patient: string, activity: string): void{
        if(bedType === 'with-bed'){
            new CosmicNovaBaseWardPage().step_SelectAdmittedPatientWithBed(patient).step_PressActivityDeleteButton(activity);
        }else if(bedType === 'without-bed'){
            new CosmicNovaBaseWardPage().SelectAdmittedPatientWithOutBed(patient).step_PressActivityDeleteButton(activity);
        }else{}

    }

    public static Restore_DelteExistingRecurrenceActivity(patient: string): void{
        new CosmicNovaBaseWardPage().SelectAdmittedPatientWithOutBed(patient).step_PressRecurrenceActivityDeleteButton();
    }

    public static Restore_TeamExistingTag(team: string){
        new CosmicNovaBaseWardPage().step_MoveToTeamView(team).step_ApplyTagUnderTeamView('None')
    }

    public static Restore_TeamPlannedDischargeRecord(team: string) {
        new CosmicNovaBaseWardPage().step_MoveToTeamView(team).step_TeamDischargeRemoveOption();
    }

    public static Restore_BedTeamAllocation(team: string, patientBed: number){
        new CosmicNovaBaseWardPage().step_MoveToBedView().step_MovePatientBedAmongTeams(patientBed,team);
    }

    public static Restore_TeamBedMove(bed: number, team: string){
        new CosmicNovaBaseWardPage().step_MoveToBedView().step_MovePatientBedAmongTeams(bed,team);
    }

    public static Restore_StaffPhoneNumber(category: string){
        if(category === 'team') {
            new CosmicNovaBaseWardPage().step_MoveToStaffPlanView().step_EnterContactNumberForTeam('');
        }else if(category === 'staff'){
            new CosmicNovaBaseWardPage().step_MoveToStaffPlanView().step_EnterContactNumberForStaff('');
        }else{}
    }

    public static Restore_CreateStaffingMember(staffLevel: string){
        new CosmicNovaBaseWardPage().step_MoveToAdminPortal().step_MoveToStaffAdminPanel().step_ChooseStaffLevels(staffLevel).
        step_RemoveAppliedUnitStaffCategory().step_PressSaveButton();
    }

    public static Restore_StaffingView(){
        new CosmicNovaBaseWardPage().step_MoveToStaffingView().step_SelectStaffFromList('Doctor').step_MovePatientStaffAmongResponsibilities(2, 'Responsible doctor').
        step_MovePatientStaffAmongResponsibilities(3, 'Not Working').step_MoveToResponsibilitiesView().step_SelectGridPatientAgainstStaffResponsible(2,1);
    }

}