/**
 * Created by Lathika.Herath on 4/17/2018.
 */

import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Div} from "../../../ui-core/ui-elements/Div";
import {Link} from "../../../ui-core/ui-elements/Link";
import {by, element} from "protractor";
import {Label} from "../../../ui-core/ui-elements/Label";

const log = Factory.getLogger("Page.CosmicNovaObservationReadModule")

export class CosmicNovaObservationReadModule extends PageBase {

    private lblevent        : any;
    private lbleventcomment : any;
    private lbleventtime    : any;
    private lblaction       : any;
    private lblactiontime   : any;
    private lblactioncoment : any;
    private lblresult       : any;
    private lblresultcomment: any;
    private lblresulttime   : any;
    private iconeventunsigned   : any;
    private iconactionunsigned  : any;
    private iconresultunsigned  : any;

    private btnresult       : any;
    private btnaction       : any;






    constructor() {
        super();
        const element = Elements.CosmicNovaObservationReadModule;


        this.lblevent           = super.findLocators(element.lblevent.findBy, element.lblevent.value);
        this.lbleventcomment    = super.findLocators(element.lbleventcomment.findBy, element.lbleventcomment.value);
        this.lbleventtime       = super.findLocators(element.lbleventtime.findBy, element.lbleventtime.value);
        this.lblaction          = super.findLocators(element.lblaction.findBy, element.lblaction.value);
        this.lblactiontime      = super.findLocators(element.lblactiontime.findBy, element.lblactiontime.value);
        this.lblactioncoment    = super.findLocators(element.lblactioncoment.findBy, element.lblactioncoment.value);
        this.lblresult          = super.findLocators(element.lblresult.findBy, element.lblresult.value);
        this.lblresultcomment   = super.findLocators(element.lblresultcomment.findBy, element.lblresultcomment.value);
        this.lblresulttime      = super.findLocators(element.lblresulttime.findBy, element.lblresulttime.value);
        this.iconeventunsigned      = super.findLocators(element.iconeventunsigned.findBy, element.iconeventunsigned.value);
        this.iconactionunsigned      = super.findLocators(element.iconactionunsigned.findBy, element.iconactionunsigned.value);
        this.iconresultunsigned      = super.findLocators(element.iconresultunsigned.findBy, element.iconresultunsigned.value);

        this.btnresult          = super.findLocators(element.btnresult.findBy, element.btnresult.value);
        this.btnaction          = super.findLocators(element.btnaction.findBy, element.btnaction.value);
    }

    public step_Validate_Event_Name_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblevent, val);
    }

    public step_Validate_Event_Comment_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lbleventcomment, val);
    }

    public step_Validate_Event_Time_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lbleventtime, val);
    }

    public step_Validate_Action_Name_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblaction, val);
    }

    public step_Validate_Action_Comment_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblactioncoment, val);
    }

    public step_Validate_Action_Time_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblactiontime, val);
    }

    public step_Validate_Result_Name_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblresult, val);
    }

    public step_Validate_Result_Comment_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblresultcomment, val);
    }

    public step_Validate_Result_Time_Observation_Page(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblresulttime, val);
    }

    //-----------------------Result & Action Button

    public step_Validate_Result_Button_Observation_Page(): void{
        this.Helper_Actions.isEnabled(this.btnresult);
    }

    public step_Validate_Action_Button_Observation_Page(): void{
        this.Helper_Actions.isEnabled(this.btnaction);
    }

    //----------------------Unsigned icons

    public step_Validate_Event_Unsigned_Icon_Observation_Page(): void{
        this.Helper_Actions.isPresent(this.iconeventunsigned);
    }

    public step_Validate_Action_Unsigned_Icon_Observation_Page(): void{
        this.Helper_Actions.isPresent(this.iconactionunsigned);
    }

    public step_Validate_Result_Unsigned_Icon_Observation_Page(): void{
        this.Helper_Actions.isPresent(this.iconresultunsigned);
    }

}

