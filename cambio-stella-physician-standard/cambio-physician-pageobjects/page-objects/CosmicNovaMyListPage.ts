/**
 * Created by SLakmal on 7/3/2017.
 */


import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import {Factory} from "../../ConfigLog4j";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {CosmicNovaSideNavigationModule} from "../module-objects/CosmicNovaSlideNavigationModule";
import {CosmicNovaSummayViewHeaderModule} from "../module-objects/CosmicNovaSummayViewHeaderModule";

import {CosmicNovaPatientActivityPage} from "./CosmicNovaPatientActivityPage";
import {CosmicNovaAddPackagesModule} from "../module-objects/CosmicNovaAddPackagesModule";
import {CosmicNovaBasePhysicianPage} from "./CosmicNovaBasePhysicianPage";
import {CosmicNovaAddingPage} from "./CosmicNovaAddingPage";
import {CosmicNovaPatientSummaryPage} from "./CosmicNovaPatientSummaryPage";


const log = Factory.getLogger("Page.CosmicNovaMyListPage");

export class CosmicNovaMyListPage extends PageBase {

    private lblPatientNameList: any;
    private lblPatientComment: any;

    private sideNavigation : CosmicNovaSideNavigationModule;
    private summaryHeaderModule :CosmicNovaSummayViewHeaderModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaMyListPage;
        this.sideNavigation = new CosmicNovaSideNavigationModule()
        this.summaryHeaderModule = new CosmicNovaSummayViewHeaderModule();
        this.lblPatientNameList = super.findLocators(element.lblPatientNameList.findBy, element.lblPatientNameList.value);
        this.lblPatientComment = super.findLocators(element.lblPatientComment.findBy, element.lblPatientComment.value);

    }

    public verify_Patient_Availability_in_MyList(patientName: string): CosmicNovaMyListPage {
        this.Helper_Actions.checkTextFromList(this.lblPatientNameList,patientName);
        return new CosmicNovaMyListPage();

    }


    public verify_Comment_Availability_in_MyList(comment: string): CosmicNovaMyListPage {
        this.Helper_Actions.checkTextContentFromList(this.lblPatientComment,comment);
        return new CosmicNovaMyListPage();

    }

    public step_Select_Pacient_From_MyList(patientName: string): CosmicNovaPatientSummaryPage {
        this.Helper_Actions.findTextAndClick(this.lblPatientNameList, patientName);
        return new CosmicNovaPatientSummaryPage();
    }

    public step_Validate_PatientName_Summery_Header (patientName: string): CosmicNovaMyListPage {
            this.summaryHeaderModule.step_Validate_Patient_Name(patientName);
            return new CosmicNovaMyListPage();
        }

    public step_Close_Patient_Summary_View(): CosmicNovaBasePhysicianPage{
        this.summaryHeaderModule.step_Close_Patient_Summary_View();
        return new CosmicNovaBasePhysicianPage();
    }

}

