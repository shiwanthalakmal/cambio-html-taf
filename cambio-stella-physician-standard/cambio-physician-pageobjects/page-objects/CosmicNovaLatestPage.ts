/**
 * Created by SLakmal on 7/3/2017.
 */
import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import {Factory} from "../../ConfigLog4j";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {CosmicNovaSideNavigationModule} from "../module-objects/CosmicNovaSlideNavigationModule";
import {CosmicNovaSummayViewHeaderModule} from "../module-objects/CosmicNovaSummayViewHeaderModule";
import {CosmicNovaPatientSummaryPage} from "./CosmicNovaPatientSummaryPage";
import {CosmicNovaBasePhysicianPage} from "./CosmicNovaBasePhysicianPage";
import {CosmicNovaMyListPage} from "./CosmicNovaMyListPage";

const log = Factory.getLogger("Page.CosmicNovaLatestPage");



export class CosmicNovaLatestPage extends PageBase {


    private divLatestPatientList     : any;
    private lblPatientNameLatestList  : any;

    private summaryHeaderModule :CosmicNovaSummayViewHeaderModule;
    private sideNavigation : CosmicNovaSideNavigationModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaLatestPage;
        this.sideNavigation = new CosmicNovaSideNavigationModule();
        this.summaryHeaderModule = new CosmicNovaSummayViewHeaderModule();
        this.divLatestPatientList = super.findLocators(element.divLatestPatientList.findBy, element.divLatestPatientList.value);
        this.lblPatientNameLatestList  = super.findLocators(element.lblPatientNameLatestList.findBy, element.lblPatientNameLatestList.value);
    }

    public check_And_Validate_PatientList_Order(location: number, patient: string): CosmicNovaLatestPage{
        this.Helper_Actions.findSpecificElementAndClick(this.divLatestPatientList,location);
        new CosmicNovaPatientSummaryPage().step_Validate_PatientName_Summery_Header(patient).step_Close_Patient_Summary_View();
        return new CosmicNovaLatestPage();
    }


    public step_Select_Pacient_From_Latest_Patients(patientName: string): CosmicNovaLatestPage {
        this.Helper_Actions.findTextAndClick(this.lblPatientNameLatestList,patientName);
        return new CosmicNovaLatestPage();
    }


    public step_Validate_PatientName_Summery_Header (patientName: string): CosmicNovaLatestPage {
        this.summaryHeaderModule.step_Validate_Patient_Name(patientName);
        return new CosmicNovaLatestPage();
    }

    public step_Close_Patient_Summary_View(): CosmicNovaBasePhysicianPage{
        this.summaryHeaderModule.step_Close_Patient_Summary_View();
        return new CosmicNovaBasePhysicianPage();
    }
}