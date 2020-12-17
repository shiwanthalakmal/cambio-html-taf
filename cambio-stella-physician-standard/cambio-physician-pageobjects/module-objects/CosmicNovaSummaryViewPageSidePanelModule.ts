/**
 * Created by Lathika.Herath on 4/25/2018.
 */

import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Div} from "../../../ui-core/ui-elements/Div";
import {Link} from "../../../ui-core/ui-elements/Link";
import {by, element} from "protractor";
import {Label} from "../../../ui-core/ui-elements/Label";
import {help} from "typescript-logging";

const log = Factory.getLogger("Page.CosmicNovaSummaryViewPageSidePanelModule")

export class CosmicNovaSummaryViewPageSidePanelModule extends PageBase {

    private lblcomment  : any;
    private btndone     : any;
    private lbladdon    : any;
    private btnremove   : any;



    constructor() {
        super();
        const element = Elements.CosmicNovaSummaryViewPageSidePanelModule;



        this.lblcomment = super.findLocators(element.lblcomment.findBy, element.lblcomment.value);
        this.btndone = super.findLocators(element.btndone.findBy, element.btndone.value);
        this.lbladdon = super.findLocators(element.lbladdon.findBy, element.lbladdon.value);
        this.btnremove = super.findLocators(element.btnremove.findBy, element.btnremove.value);


    }


    public step_Enter_Comment_Text(val: string): void{
        this.Helper_Actions.click(this.lblcomment);
        this.Helper_Actions.enterText(this.lblcomment, val);
    }
    public step_Press_Done_Button(): void{
        this.Helper_Actions.click(this.btndone);
    }
    public step_Enter_Addon_Text(val: string): void{
        this.Helper_Actions.click(this.lbladdon);
        this.Helper_Actions.enterText(this.lbladdon, val);
    }
    public step_Edit_Comment_Text(val: string): void{
        this.Helper_Actions.clearText(this.lblcomment);
        this.Helper_Actions.enterText(this.lblcomment, val);
    }
    public step_Edit_Add_On_Text(val: string): void{
        this.Helper_Actions.clearText(this.lbladdon);
        this.Helper_Actions.enterText(this.lbladdon, val);
    }
    public step_Validate_Comment_Text(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcomment, val);
    }
    public step_Validate_Add_On_Text(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lbladdon, val);
    }
    public step_Press_Remove_Button(): void{
        this.Helper_Actions.click(this.btnremove);
    }
}