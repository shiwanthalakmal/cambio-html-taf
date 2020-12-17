/**
 * Created by SLakmal on 4/25/2017.
 */
import {PageBase, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";

const log = Factory.getLogger("Page.CosmicNovaAdminWardViewPage")

export class CosmicNovaAdminWardViewPage extends PageBase{

    private btnActivitiesTab    : any;
    private btnInfoMarkerTab    : any;
    private ulInfoMarkerList    : any;
    private btnPackageTab       : any;
    private ulPackageList       : any;
    private ddlActivitySelection: any;
    private ulActivityResults   : any;
    private ulContentList       : any;

    private administrationMenuModule : CosmicNovaAdministrationMenuModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAdminWardViewPage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.btnActivitiesTab       = super.findLocators(element.btnActivitiesTab.findBy, element.btnActivitiesTab.value);
        this.btnInfoMarkerTab       = super.findLocators(element.btnInfoMarkerTab.findBy, element.btnInfoMarkerTab.value);
        this.ulInfoMarkerList       = super.findLocators(element.ulInfoMarkerList.findBy, element.ulInfoMarkerList.value);
        this.btnPackageTab          = super.findLocators(element.btnPackageTab.findBy, element.btnPackageTab.value);
        this.ulPackageList          = super.findLocators(element.ulPackageList.findBy, element.ulPackageList.value);
        this.ddlActivitySelection   = super.findLocators(element.ddlActivitySelection.findBy, element.ddlActivitySelection.value);
        this.ulActivityResults      = super.findLocators(element.ulActivityResults.findBy, element.ulActivityResults.value);
        this.ulContentList          = super.findLocators(element.ulContentList.findBy, element.ulContentList.value);
    }

    public step_PressActivityTabView(): CosmicNovaAdminWardViewPage{
        log.info("Step:  [:step_PressActivityTabView:]");
        new Button(this.btnActivitiesTab).click();
        return new CosmicNovaAdminWardViewPage();
    }

    public step_PressInformationMarkerTabView(): CosmicNovaAdminWardViewPage{
        log.info("Step:  [:step_PressInformationMarkerTabView:]");
        new Button(this.btnInfoMarkerTab).click();
        return new CosmicNovaAdminWardViewPage();
    }

    public step_PressPackagesTabView(): CosmicNovaAdminWardViewPage{
        log.info("Step:  [:step_PressPackagesTabView:]");
        new Button(this.btnPackageTab).click();
        return new CosmicNovaAdminWardViewPage();
    }

    public step_SelectRoleSelectionDropDown(): CosmicNovaAdminWardViewPage{
        log.info("Step:  [:step_SelectRoleSelectionDropDown:]");
        //[Pending]
        return new CosmicNovaAdminWardViewPage();
    }

    public step_ChooseActivitiesFiltedResult(option: string): CosmicNovaAdminWardViewPage{
        log.info("Step:  [:step_ChooseActivitiesFiltedResult:]");
        this.Helper_Actions.findTextAndClick(this.ulActivityResults,option);
        return new CosmicNovaAdminWardViewPage();
    }

    public check_And_Validate_ContentRecordAvailability(option): CosmicNovaAdminWardViewPage{
        log.info("Step:  [:check_And_Validate_ContentRecordAvailability:]");
        this.Helper_Actions.checkTextFromList(this.ulContentList,option);
        return new CosmicNovaAdminWardViewPage();
    }

    public step_ChooseInforMarkerList(option: string): CosmicNovaAdminWardViewPage{
        log.info("Step:  [:step_ChooseInforMarkerList:]");
        this.Helper_Actions.findTextAndClick(this.ulInfoMarkerList,option);
        return new CosmicNovaAdminWardViewPage();
    }

    public step_ChoosePackage(option: string): CosmicNovaAdminWardViewPage{
        log.info("Step:  [:step_ChoosePackage:]");
        this.Helper_Actions.findTextAndClick(this.ulPackageList,option);
        return new CosmicNovaAdminWardViewPage();
    }

}
