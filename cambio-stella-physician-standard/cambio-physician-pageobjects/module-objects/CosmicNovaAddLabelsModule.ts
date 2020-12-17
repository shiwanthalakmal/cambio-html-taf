/**
 * Created by SLakmal on 7/10/2017.
 */
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";

const log = Factory.getLogger("Page.CosmicNovaAddLabelsModule");

export class CosmicNovaAddLabelsModule extends PageBase{

    private lblWarnTitle    : any;
    private btnWarning      : any;
    private lblLabel        : any;
    private btnAdd          : any;
    private btnDone         : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaAddLabelsModule;

        this.lblWarnTitle = super.findLocators(element.lblWarnTitle.findBy,element.lblWarnTitle.value);
        this.btnWarning = super.findLocators(element.btnWarning.findBy,element.btnWarning.value);
        this.lblLabel = super.findLocators(element.lblLabel.findBy,element.lblLabel.value);
        this.btnAdd = super.findLocators(element.btnAdd.findBy,element.btnAdd.value);
        this.btnDone = super.findLocators(element.btnDone.findBy,element.btnDone.value);
    }
    public action_acceptServerWarning() : void{
        new Button(this.btnWarning).click();
    }
    public step_Select_Label_From_List(val: string): void{
        this.Helper_Actions.findTextAndClick(this.lblLabel, val);
    }
    public step_Press_Add_Button(): void{
        this.Helper_Actions.click(this.btnAdd);
    }
    public step_Press_Done_Button(): void{
        this.Helper_Actions.click(this.btnDone);
    }

}