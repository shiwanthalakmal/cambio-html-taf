import {CosmicNovaSideNavigationModule} from "../module-objects/CosmicNovaSlideNavigationModule";
import {CosmicNovaSummayViewHeaderModule} from "../module-objects/CosmicNovaSummayViewHeaderModule";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import {Factory} from "../../ConfigLog4j";
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
/**
 * Created by SLakmal on 7/3/2017.
 */
const log = Factory.getLogger("Page.CosmicNovaFindPatientPage");

export class CosmicNovaFindPatientPage extends PageBase {

    private btnExpander: any;
    private txtFldSocialNumber: any;
    private txtFldGivenName: any;
    private txtFldFamilyName: any;

    private sideNavigation: CosmicNovaSideNavigationModule;
    private summaryHeaderModule: CosmicNovaSummayViewHeaderModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaFindPatientPage;
        this.sideNavigation = new CosmicNovaSideNavigationModule();
        this.summaryHeaderModule = new CosmicNovaSummayViewHeaderModule();
        this.btnExpander        = super.findLocators(element.btnExpander.findBy, element.btnExpander.value);
        this.txtFldSocialNumber = super.findLocators(element.txtFldSocialNumber.findBy, element.txtFldSocialNumber.value);
        this.txtFldGivenName    = super.findLocators(element.txtFldGivenName.findBy, element.txtFldGivenName.value);
        this.txtFldFamilyName   = super.findLocators(element.txtFldFamilyName.findBy, element.txtFldFamilyName.value);
    }

    public step_EnterSocialSecurityNumber(num: string): CosmicNovaFindPatientPage{
        new Button(this.btnExpander).click();
        new TextField(this.txtFldSocialNumber).enterTextAndSubmit(num);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaFindPatientPage();
    }

    public step_EnterGivenName(name: string): CosmicNovaFindPatientPage{
        new Button(this.btnExpander).click();
        new TextField(this.txtFldGivenName).enterTextAndSubmit(name);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaFindPatientPage();
    }

    public step_EnterFamilyName(name: string): CosmicNovaFindPatientPage{
        new Button(this.btnExpander).click();
        new TextField(this.txtFldFamilyName).enterTextAndSubmit(name);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaFindPatientPage();
    }

    public check_And_Validate_SearchedResults(name: string): CosmicNovaFindPatientPage{
        var searchList : any = this.findLocators("css",".Name");
        this.Helper_Actions.checkTextContentFromList(searchList,name);this.Helper_Waits.waitFor(1000);
        return new CosmicNovaFindPatientPage();
    }
}