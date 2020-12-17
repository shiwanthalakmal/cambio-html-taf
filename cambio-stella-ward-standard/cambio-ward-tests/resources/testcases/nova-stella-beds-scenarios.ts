/**
 * Created by SLakmal on 6/7/2017.
 */
import {Navigate} from "../page-loader";
import {Component} from "../page-loader";

describe('[NOVA:BEDS]', () => {

    it('[BEDS:01]: Test all team availability under bed view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToBedView().check_And_Validate_AllTeamSection('Shared,Blue Team,Gray Team,Green Team');
    });

    it('[BEDS:02]: Test all bed records availability under bed view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToBedView().check_And_Validate_BedAssignedBeds('1:1,1:3,3:2,4:1,4:2');
    });

    it('[BEDS:03]: Test all patients records availability under bed view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToBedView().check_And_Validate_BedAssignedPatients('B.S,F.V,S.M,L.L');
    });

    it('[BEDS:04]: Test patients move among multiple teams via bed view', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToBedView().step_MovePatientBedAmongTeams(1,'Blue Team').step_MoveToTeamView('Blue Team').
        check_And_Validate_TeamPatientName('Bertil Sjögren').step_MoveToWardView();

        Component.Restore_BedTeamAllocation('Shared',1);
    });

    it('[BEDS:05]: Test bed color code will change according to the team change', () => {
        Navigate.visit('CosmicNovaBaseWardPage').step_MoveToBedView().step_MovePatientBedAmongTeams(1,'Blue Team').check_And_Validate_BedIconColorChange('rgb(48, 90, 148)');

        Component.Restore_BedTeamAllocation('Shared',1);
    });

    it('[BEDS:06]: Test assigned and remove bed under team and verify the availability', () => {
        //NOVA2.1-75508
    });
});