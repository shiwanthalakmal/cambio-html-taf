/**
 * Created by PPabasara on 7/28/2017.
 */
import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {CosmicNovaBasePhysicianPage} from "../page-objects/CosmicNovaBasePhysicianPage";

export class CosmicNovaSideNavigationModule extends PageBase {

    private sideNavigation: any;


    constructor() {
        super();
        const element = Elements.CosmicNovaSideNavigationModule;
       this.sideNavigation = super.findLocators(element.sideNavigation.findBy, element.sideNavigation.value);

    }

    public action_ChooseSideNavigation_item(item: string): void{
     this.Helper_Actions.findTextAndClick(this.sideNavigation,item);
    }

    public action_CheckSideNavigation_Items(item: string):CosmicNovaBasePhysicianPage{
        this.Helper_Actions.checkTextFromList(this.sideNavigation,item);
        return new CosmicNovaBasePhysicianPage();

    }
}


