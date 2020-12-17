/**
 * Created by SLakmal on 7/10/2017.
 */
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";

const log = Factory.getLogger("Page.CosmicNovaAddClinicalChmstryModule");

export class CosmicNovaAddClinicalChmstryModule extends PageBase{

    private lblWarnTitle    : any;
    private btnWarning      : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaAddClinicalChmstryModule;
        this.lblWarnTitle = super.findLocators(element.lblWarnTitle.findBy,element.lblWarnTitle.value);
        this.btnWarning = super.findLocators(element.btnWarning.findBy,element.btnWarning.value);
    }
    public action_acceptServerWarning() : void{
        new Button(this.btnWarning).click();
    }

}