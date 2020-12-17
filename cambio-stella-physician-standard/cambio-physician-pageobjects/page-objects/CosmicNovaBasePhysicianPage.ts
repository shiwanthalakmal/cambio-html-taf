/**
 * Created by PPabasara on 7/12/2017.
 */
import {PageBase, Button, Factory} from "../class-loader";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {CosmicNovaPatientSummaryPage} from "./CosmicNovaPatientSummaryPage";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {CosmicNovaSideNavigationModule} from "../module-objects/CosmicNovaSlideNavigationModule";
import {CosmicNovaMyListPage} from "./CosmicNovaMyListPage";
import {CosmicNovaLatestPage} from "./CosmicNovaLatestPage";
import {CosmicNovaOutliesPage} from "./CosmicNovaOutliesPage";
import {CosmicNovaFindPatientPage} from "./CosmicNovaFindPatientPage";
import {CosmicNovaSummayViewHeaderModule} from "../module-objects/CosmicNovaSummayViewHeaderModule";


const log = Factory.getLogger("Page.CosmicNovaBasePhysicianPage");

export class CosmicNovaBasePhysicianPage extends PageBase {

    private lblPatientList      : any;
    private divPatientDetails   : any;
    private btnInfoShared       : any;
    private btnTagInfoList      : any;
    private btnBedList          : any;
    private btnPatientSideMenu  : any;
    private btnShowsTabList     : any;
    private btnLogoutIcon       : any;
    private btnChangeUnit       : any;

    private sideNavigation : CosmicNovaSideNavigationModule;
    private myListPage :CosmicNovaMyListPage;

    constructor() {
        super();
        const element = Elements.CosmicNovaBasePhysicianPage;
        this.sideNavigation = new CosmicNovaSideNavigationModule();
        this.myListPage = new CosmicNovaMyListPage();
        this.lblPatientList         = super.findLocators(element.lblPatientList.findBy, element.lblPatientList.value);
        this.divPatientDetails      = super.findLocators(element.divPatientDetails.findBy, element.divPatientDetails.value);
        this.btnInfoShared          = super.findLocators(element.btnInfoShared.findBy, element.btnInfoShared.value);
        this.btnTagInfoList         = super.findLocators(element.btnTagInfoList.findBy, element.btnTagInfoList.value);
        this.btnBedList             = super.findLocators(element.btnBedList.findBy, element.btnBedList.value);
        this.btnPatientSideMenu     = super.findLocators(element.btnPatientSideMenu.findBy, element.btnPatientSideMenu.value);
        this.btnShowsTabList        = super.findLocators(element.btnShowsTabList.findBy, element.btnShowsTabList.value);
        this.btnLogoutIcon          = super.findLocators(element.btnLogoutIcon.findBy, element.btnLogoutIcon.value);
        this.btnChangeUnit          = super.findLocators(element.btnChangeUnit.findBy, element.btnChangeUnit.value);

    }


    /**
     * Step: Click on the given ward tab in left patient lists side menu
     * @param ward
     * @returns {CosmicNovaSideNavigationModule}
     */
    public step_Choose_WardSection(ward: string): CosmicNovaBasePhysicianPage{
        this.Helper_Actions.findTextAndClick(this.btnPatientSideMenu,ward);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Validate: Verify the patient plate record information
     * @param name
     * @param id
     * @param age
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public check_And_Validate_Patient_Plate_Information(name: string, id: string, age: string): CosmicNovaBasePhysicianPage{
        this.Helper_Actions.checkSpecificElementTextContains(this.divPatientDetails,1,name);
        this.Helper_Actions.checkSpecificElementTextContains(this.divPatientDetails,1,id);
        this.Helper_Actions.checkSpecificElementTextContains(this.divPatientDetails,1,age);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Validate: Verify the information-shared icon and tool tip
     * @param tooltip
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public step_Click_OnThe_InfoShared_Icon(tooltip: string): CosmicNovaBasePhysicianPage{
        this.Helper_Actions.findSpecificElementAndClick(this.btnInfoShared,1);
        var lblSharedToolTip : any = this.findLocators("css",".preserveLinebreaks");
        this.Helper_Actions.checkTextAvailability(lblSharedToolTip, tooltip);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Step: Move to my-list page from base page
     * @param page
     * @returns {CosmicNovaMyListPage}
     */
    public step_Move_To_MyList_Page(page: string): CosmicNovaMyListPage{
        this.sideNavigation.action_ChooseSideNavigation_item(page);
        return new CosmicNovaMyListPage();
    }

    /**
     * Step: Move to find patient page from base page
     * @param page
     * @returns {CosmicNovaMyListPage}
     */
    public step_Move_To_FindPatient_Page(page: string): CosmicNovaFindPatientPage{
        this.sideNavigation.action_ChooseSideNavigation_item(page);
        return new CosmicNovaFindPatientPage();
    }

    public step_Move_To_Latest_Page(page: string): CosmicNovaLatestPage{
        this.sideNavigation.action_ChooseSideNavigation_item(page);
        return new CosmicNovaLatestPage();
    }


   public step_Move_To_Outliers_Page(page: string): CosmicNovaOutliesPage{
        this.sideNavigation.action_ChooseSideNavigation_item(page);
         return new CosmicNovaOutliesPage();
   }
    /**
     * Step: Move to latest page from base page
     * @param page
     * @returns {CosmicNovaLatestPage}
     */
    public step_Move_To_LatestView_Page(page: string): CosmicNovaLatestPage{
        this.sideNavigation.action_ChooseSideNavigation_item(page);
        return new CosmicNovaLatestPage();
    }


    /**
     * Validate: Verify available configured ward list under left menu
     * @param ward
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public check_And_Validate_Wards_InPeforming_Unit(ward: string): CosmicNovaBasePhysicianPage{
        this.sideNavigation.action_CheckSideNavigation_Items(ward);
        return new CosmicNovaBasePhysicianPage();
    }


    /**
     * Step: Select given patient from patient list view in base page
     * @param patient
     * @returns {CosmicNovaPatientSummaryPage}
     */
     public step_Select_Patient_FromList(patient: string): CosmicNovaPatientSummaryPage{
        this.Helper_Actions.findContentAndClick(this.lblPatientList,patient);
        return new CosmicNovaPatientSummaryPage();
     }
     public step_Select_Patient_FromWard(patient:string): CosmicNovaPatientSummaryPage{
         this.Helper_Actions.findContentAndClick(this.lblPatientList,patient);
         return new CosmicNovaPatientSummaryPage();

     }

    /**
     * Validate: Verify the beds availability under base page
     * @param beds
     * @returns {CosmicNovaBasePhysicianPage}
     */
     public check_And_Validate_BedsAvailability(beds: string): CosmicNovaBasePhysicianPage{
        var bedList : any = this.findLocators("xpath","//nova-scalable-bitmap-text-label");
        this.Helper_Actions.findSpecificElementAndClick(bedList,1);
        /*var splitted = beds.split(",");
        for (var _i = 0; _i < splitted.length; _i++) {
            var num = splitted[_i];
            console.log(num);
        }*/
        return new CosmicNovaBasePhysicianPage();
     }

    /**
     * Step: Wait till base page refresh
     * @returns {CosmicNovaBasePhysicianPage}
     */
     public step_Wait_Moment_TillPage_Refresh(): CosmicNovaBasePhysicianPage{
        this.Helper_Waits.waitFor(10000);
        return new CosmicNovaBasePhysicianPage();
     }

    /**
     * Validate: Verify given patient availability under patient list view
     * @param patient
     * @returns {CosmicNovaBasePhysicianPage}
     */
     public check_And_Validate_PatientAvailability(patient: string): CosmicNovaBasePhysicianPage{
        this.Helper_Actions.checkTextContentFromList(this.lblPatientList,patient);
        return new CosmicNovaBasePhysicianPage();
     }

    /**
     * Validate: Verify given patient not availability under patient list view
     * @param patient
     * @returns {CosmicNovaBasePhysicianPage}
     */
     public check_And_Validate_PatientNotAvailability(patient: string): CosmicNovaBasePhysicianPage{
        this.Helper_Actions.checkTextNotAvailability(this.lblPatientList,patient);
        return new CosmicNovaBasePhysicianPage();
     }

    /**
     * Validate: Verify physician logged user's name
     * @param user
     * @returns {CosmicNovaBasePhysicianPage}
     */
     public check_And_Validate_BasePhysicianLoggedUser(user: string): CosmicNovaBasePhysicianPage{
        var lblTitleLoggedUser : any = this.findLocators("xpath","//nova-staff-top-bar//h3");
        this.Helper_Actions.checkTextAvailability(lblTitleLoggedUser,user);
        return new CosmicNovaBasePhysicianPage();
     }

    /**
     * Validate: Verify physician logged unit's name
     * @param unit
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public check_And_Validate_BasePhysicianLoggedUnit(unit: string): CosmicNovaBasePhysicianPage{
        var lblTitleLoggedUnit : any = this.findLocators("xpath","//aside");
        this.Helper_Actions.checkTextContentFromList(lblTitleLoggedUnit,unit);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Step: Choose base view showing option
     * @param option
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public step_Choose_Showing_Option(option: string): CosmicNovaBasePhysicianPage{
        if(option === 'Markers'){
            this.Helper_Actions.findContentAndClick(this.btnShowsTabList,'Markers');
        }else if(option === 'Task'){
            this.Helper_Actions.findContentAndClick(this.btnShowsTabList,'Patient');
        }else if(option === 'Activity'){
            this.Helper_Actions.findContentAndClick(this.btnShowsTabList,'My');
        }else if(option === 'Filter'){
            this.Helper_Actions.findContentAndClick(this.btnShowsTabList,'Filter');
        }else{}
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Validate: Verify the applied information marker availability under base patient list view
     * @param infoList
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public check_And_Validate_InforMarker_Availability(infoList: string): CosmicNovaBasePhysicianPage{
        var lblInforTag : any = this.findLocators("css",".InfoMarker");
        this.Helper_Actions.checkTextFromList(lblInforTag, infoList);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Validate: Verify the applied activity availability under base patient list view
     * @param activity
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public check_And_Validate_Activities_Availability(activity: string): CosmicNovaBasePhysicianPage{
        var lblActivities : any = this.findLocators("css",".Content.NORMAL");
        this.Helper_Actions.checkTextContentFromList(lblActivities, activity);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Step: Enter search filter details in base patient list view
     * @param search
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public step_Search_Filter_Details(search: string): CosmicNovaBasePhysicianPage{
        var txtFldSearchBar : any = this.findLocators("model","model.findTaskFilter");
        new TextField(txtFldSearchBar).enterTextAndSubmit(search);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Step: Cancel search bar panel
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public step_Cancel_Applied_Search_Details(): CosmicNovaBasePhysicianPage{
        var btnCloseSearch : any = this.findLocators("css",".reset");
        new Button(btnCloseSearch).click();
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Step: Choose tag or infor-marker option under search bar results
     * @param type
     * @param value
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public step_Choose_Search_Filter_TagOrInforMarker(type: string, value: string): CosmicNovaBasePhysicianPage{
        var resultsLabels : any
        if(type === 'Tag'){
            resultsLabels = this.findLocators("css",".result.tag");
        }else if(type === 'Info'){
            resultsLabels = this.findLocators("css",".result.marker");
        }else if(type === 'Label'){
            resultsLabels = this.findLocators("css",".result.label");
        }else{resultsLabels = this.findLocators("css",".result.marker");}
        this.Helper_Actions.findTextAndClick(resultsLabels,value);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Validate: Verify the logged ward name
     * @param ward
     * @returns {CosmicNovaBasePhysicianPage}
     */

    public check_Verify_Logedin_Ward(ward: string): CosmicNovaBasePhysicianPage{
        var lblLogedinWard : any = this.findLocators("xpath","//div[@class='ButtonContainer ScrollView']/div[2]/button");
        this.Helper_Actions.checkTextAvailability(lblLogedinWard,ward);
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Validate: Verify the logged user role name
     * @param ward
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public check_Verify_Logedin_UserRole(ward: string): CosmicNovaBasePhysicianPage{
        var lblLogedinRole : any = this.findLocators("xpath","//nova-staff-top-bar//aside//span");
        this.Helper_Actions.checkTextAvailability(lblLogedinRole,ward);
        return new CosmicNovaBasePhysicianPage();
    }

}
