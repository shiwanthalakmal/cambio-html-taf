/**
 * Created by SLakmal on 3/29/2017.
 */
import {browser} from "protractor";
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-ward-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";

const log = Factory.getLogger("Module.CosmicNovaWarnModule");

export class CosmicNovaWarnModule extends PageBase{

    private lblWarnTitle    : any;
    private btnWarning      : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaWarnModule;
        this.lblWarnTitle = super.findLocators(element.lblWarnTitle.findBy,element.lblWarnTitle.value);
        this.btnWarning = super.findLocators(element.btnWarning.findBy,element.btnWarning.value);
    }

    public action_acceptServerWarning() : void{
        new Button(this.btnWarning).click();
    }

}