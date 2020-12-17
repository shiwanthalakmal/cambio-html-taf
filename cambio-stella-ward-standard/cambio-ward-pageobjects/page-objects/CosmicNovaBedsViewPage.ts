/**
 * Created by SLakmal on 6/7/2017.
 */
import {PageBase, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaTopNavigationModule} from "../module-objects/CosmicNovaTopNavigationModule";
import {CosmicNovaAdminUnitPage} from "./CosmicNovaAdminUnitPage";
import {CosmicNovaSubLoginPage} from "./CosmicNovaSubLoginPage";
import {Navigate} from "../aspect-objects/Navigate";
import {Component} from "../aspect-objects/Component";
import {CosmicNovaStaffingViewPage} from "./CosmicNovaStaffingViewPage";
import {element, by} from "protractor";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Button} from "../../../ui-core/ui-elements/Button";
import {CosmicNovaActivityViewPage} from "./CosmicNovaActivityViewPage";
import {CosmicNovaActivitySummaryModule} from "../module-objects/CosmicNovaActivitySummaryModule";
import {Div} from "../../../ui-core/ui-elements/Div";
import {CosmicNovaTeamViewPage} from "./CosmicNovaTeamViewPage";

const log = Factory.getLogger("Page.CosmicNovaBedsViewPage")

export class CosmicNovaBedsViewPage extends PageBase{

    private divPatientRecords       : any;
    private divPatientBedIcons      : any;
    private divTeamSections         : any;

    private topNavigationModule : CosmicNovaTopNavigationModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaBedsViewPage;
        this.topNavigationModule = new CosmicNovaTopNavigationModule();
        this.divPatientRecords = super.findLocators(element.divPatientRecords.findBy, element.divPatientRecords.value);
        this.divPatientBedIcons = super.findLocators(element.divPatientBedIcons.findBy, element.divPatientBedIcons.value);
        this.divTeamSections = super.findLocators(element.divTeamSections.findBy, element.divTeamSections.value);
    }

    /**
     * Step: move to view using main menu
     */
    public step_MoveToWardView(){
        log.info("Step: Move to ward view page [:step_MoveToWardView:]");
        this.topNavigationModule.action_ClickMainMenu('Ward');
    }

    /**
     * Step: move to team-view using main menu
     * @param team
     */
    public step_MoveToTeamView(team: string): CosmicNovaTeamViewPage{
        log.info("Step: Move to "+team+" team view page [:step_MoveToTeamView:]");
        this.topNavigationModule.action_ClickMainMenu(team);
        return new CosmicNovaTeamViewPage();
    }

    public check_And_Validate_BedAssignedPatients(list: string): CosmicNovaBedsViewPage{
        var patients:string[] = list.split(',');
        for(var i = 0; i<patients.length; i++) {
            this.Helper_Actions.checkTextContentFromList(this.divPatientRecords, patients[i]);
        }
        return new CosmicNovaBedsViewPage();
    }

    public check_And_Validate_BedAssignedBeds(list: string): CosmicNovaBedsViewPage{
        var beds:string[] = list.split(',');
        for(var i = 0; i<beds.length; i++) {
            this.Helper_Actions.checkTextContentFromList(this.divPatientBedIcons, beds[i]);
        }
        return new CosmicNovaBedsViewPage();
    }

    public check_And_Validate_AllTeamSection(list: string):CosmicNovaBedsViewPage {
        var team:string[] = list.split(',');
        for(var i = 0; i<team.length; i++) {
            this.Helper_Actions.checkTextContentFromList(this.divTeamSections, team[i]);
        }
        return new CosmicNovaBedsViewPage();
    }

    public step_MovePatientBedAmongTeams(bed: number, team: string): CosmicNovaBedsViewPage{
        var cell: number;
        if(team === 'Shared'){
            cell = 1;
        }else if(team === 'Blue Team'){
            cell = 2;
        }else if(team === 'Gray Team'){
            cell = 3;
        }else if(team === 'Green Team'){
            cell = 4;
        }else{}
        var cellTeam : any = this.findLocators("xpath","//nova-legacy-ward-board-vertical-selection-grid-row["+bed+"]/div[1]/div["+cell+"]");
        this.Helper_Actions.findFirstElementAndClick(cellTeam);
        return new CosmicNovaBedsViewPage();
    }

    public check_And_Validate_BedIconColorChange(color: string): CosmicNovaBedsViewPage{
        this.Helper_Actions.checkElementAttributeValue(this.divPatientBedIcons,'style',color);
        return new CosmicNovaBedsViewPage();
    }
}