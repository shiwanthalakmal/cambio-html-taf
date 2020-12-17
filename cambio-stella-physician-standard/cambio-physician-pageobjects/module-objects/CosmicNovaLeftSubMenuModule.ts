/**
 * Created by SLakmal on 7/4/2017.
 */
import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';

export class CosmicNovaLeftSubMenuModule extends PageBase{

    private btnLogout       : any;
    private btnChangeUnit   : any;
    private lblPatientName  : any;
    private btnSubMenuList  : any;
    private lblClinicalPara : any;


    constructor(){
        super();
        const element = Elements.CosmicNovaLeftSubMenuModule;
        this.btnLogout      = super.findLocators(element.btnLogout.findBy,element.btnLogout.value);
        this.btnChangeUnit  = super.findLocators(element.btnChangeUnit.findBy,element.btnChangeUnit.value);
        this.lblPatientName = super.findLocators(element.lblPatientName.findBy,element.lblPatientName.value);
        this.btnSubMenuList = super.findLocators(element.btnSubMenuList.findBy,element.btnSubMenuList.value);
        this.lblClinicalPara= super.findLocators(element.lblClinicalPara.findBy,element.lblClinicalPara.value);

    }

    public step_Choose_SubMenu_Navigation(menu: string): void{
        this.Helper_Actions.findTextAndClick(this.btnSubMenuList,menu);
    }
    public step_Move_To_Clinical_Parameters(): void{
        this.Helper_Actions.click(this.lblClinicalPara);
    }

}