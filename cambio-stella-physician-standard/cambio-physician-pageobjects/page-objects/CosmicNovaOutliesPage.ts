/**
 * Created by PPabasara on 8/2/2017.
 */
import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import {Factory} from "../../ConfigLog4j";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {CosmicNovaSideNavigationModule} from "../module-objects/CosmicNovaSlideNavigationModule";
import {CosmicNovaSummayViewHeaderModule} from "../module-objects/CosmicNovaSummayViewHeaderModule";
import {CosmicNovaBasePhysicianPage} from "./CosmicNovaBasePhysicianPage";



const log = Factory.getLogger("Page.CosmicNovaOutliesPage");

export class CosmicNovaOutliesPage extends PageBase {

    private lblPatientNameOutlierList: any;


    private sideNavigation : CosmicNovaSideNavigationModule;
    private summaryHeaderModule :CosmicNovaSummayViewHeaderModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaOutliesPage;
        this.sideNavigation = new CosmicNovaSideNavigationModule();
        this.summaryHeaderModule = new CosmicNovaSummayViewHeaderModule();

        this.lblPatientNameOutlierList = super.findLocators(element.lblPatientNameOutlierList.findBy, element.lblPatientNameOutlierList.value);

    }

    public step_Select_Pacient_From_OutlierList(patientName: string): CosmicNovaOutliesPage {
        this.Helper_Actions.findContentAndClick(this.lblPatientNameOutlierList,patientName);
        return new CosmicNovaOutliesPage();
    }

    public step_Validate_PatientName_Summery_Header (patientName: string): CosmicNovaOutliesPage {
        this.summaryHeaderModule.step_Validate_Patient_Name(patientName);
        return new CosmicNovaOutliesPage();
    }

    public step_Close_Patient_Summary_View(): CosmicNovaBasePhysicianPage{
        this.summaryHeaderModule.step_Close_Patient_Summary_View();
        return new CosmicNovaBasePhysicianPage();
    }

}