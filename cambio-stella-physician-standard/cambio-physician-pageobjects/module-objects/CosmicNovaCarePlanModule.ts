/**
 * Created by Lathika.Herath on 4/23/2018.
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

const log = Factory.getLogger("Page.CosmicNovaCarePlanModule")

export class CosmicNovaCarePlanModule extends PageBase {

    private btncommitarrow      : any;
    private lblcareplan         : any;
    private lblOpenStand        : any;
    private lblClosedStand      : any;
    private lblOpenIndiv        : any;
    private lblClosedIndiv      : any;

    private lblMedhistory       : any;
    private btnMedHistoryexpand : any;
    private fldMedHistval       : any;

    private lblStatus           : any;
    private fldStatusval        : any;

    private lblDisSummry        : any;
    private fldDisCumval        : any;

    private lblcareneed         : any;

    private fldvalupdate         : any;
    private fldcareneedval      : any;
    private lblcareneednewval   : any;
    private lblcareneedoldval   : any;

    private btncareplanSign     : any;
    private btncareplanSave     : any;
    private btnupdatecareplan   : any;

    private lbltreatment        : any;
    private pputreatmentval     : any;

    private lbltarget           : any;
    private lblevaluation       : any;
    private lblresult           : any;




    constructor() {
        super();
        const element = Elements.CosmicNovaCarePlanModule;


        this.btncommitarrow = super.findLocators(element.btncommitarrow.findBy, element.btncommitarrow.value);
        this.lblcareplan = super.findLocators(element.lblcareplan.findBy, element.lblcareplan.value);
        this.lblOpenStand = super.findLocators(element.lblOpenStand.findBy, element.lblOpenStand.value);
        this.lblClosedStand = super.findLocators(element.lblClosedStand.findBy, element.lblClosedStand.value);
        this.lblOpenIndiv = super.findLocators(element.lblOpenIndiv.findBy, element.lblOpenIndiv.value);
        this.lblClosedIndiv = super.findLocators(element.lblClosedIndiv.findBy, element.lblClosedIndiv.value);

        this.lblMedhistory = super.findLocators(element.lblMedhistory.findBy, element.lblMedhistory.value);
        this.btnMedHistoryexpand = super.findLocators(element.btnMedHistoryexpand.findBy, element.btnMedHistoryexpand.value);
        this.fldMedHistval = super.findLocators(element.fldMedHistval.findBy, element.fldMedHistval.value);

        this.lblStatus = super.findLocators(element.lblStatus.findBy, element.lblStatus.value);
        this.fldStatusval = super.findLocators(element.fldStatusval.findBy, element.fldStatusval.value);

        this.lblDisSummry = super.findLocators(element.lblDisSummry.findBy, element.lblDisSummry.value);
        this.fldDisCumval = super.findLocators(element.fldDisCumval.findBy, element.fldDisCumval.value);

        //--------------Care Need History Values----------
        this.lblcareneed = super.findLocators(element.lblcareneed.findBy, element.lblcareneed.value);

        this.fldvalupdate = super.findLocators(element.fldvalupdate.findBy, element.fldvalupdate.value);
        this.fldcareneedval = super.findLocators(element.fldcareneedval.findBy, element.fldcareneedval.value);
        this.lblcareneednewval = super.findLocators(element.lblcareneednewval.findBy, element.lblcareneednewval.value);
        this.lblcareneedoldval = super.findLocators(element.lblcareneedoldval.findBy, element.lblcareneedoldval.value);

        this.btncareplanSign = super.findLocators(element.btncareplanSign.findBy, element.btncareplanSign.value);
        this.btncareplanSave = super.findLocators(element.btncareplanSave.findBy, element.btncareplanSave.value);
        this.btnupdatecareplan = super.findLocators(element.btnupdatecareplan.findBy, element.btnupdatecareplan.value);

        this.lbltreatment = super.findLocators(element.lbltreatment.findBy, element.lbltreatment.value);
        this.pputreatmentval = super.findLocators(element.pputreatmentval.findBy, element.pputreatmentval.value);

        this.lbltarget = super.findLocators(element.lbltarget.findBy, element.lbltarget.value);
        this.lblevaluation = super.findLocators(element.lblevaluation.findBy, element.lblevaluation.value);
        this.lblresult = super.findLocators(element.lblresult.findBy, element.lblresult.value);



    }

    public step_Press_Commitment_Selection_Arrow(): void{
        this.Helper_Actions.click(this.btncommitarrow);
    }

    public step_Select_Care_Plan_From_List(): void{
        this.Helper_Actions.click(this.lblcareplan);
    }

    public step_Validate_Medical_History_Record_Commitment(): void{
        this.Helper_Actions.isPresent(this.lblMedhistory);
    }

    public step_Press_Medical_History_Expand_Button(): void{
        this.Helper_Actions.click(this.btnMedHistoryexpand);
    }

    public step_Validate_Medical_History_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.fldMedHistval,val);
    }

    public step_Validate_Status_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.fldStatusval,val);
    }

    public step_Validate_Discharge_Summery_Value_Commitment(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.fldDisCumval, val);
    }

    public step_Read_Open_Standard_Care_Plan(): void{
        this.Helper_Actions.isPresent(this.lblOpenStand);
    }

    public step_Read_Open_Individual_Care_Plan(): void{
        this.Helper_Actions.isPresent(this.lblOpenIndiv);
    }

    public step_Read_Closed_Standard_Care_Plan(): void{
        this.Helper_Actions.isPresent(this.lblClosedStand);
    }

    public step_Read_Closed_Individual_Care_Plan(): void{
        this.Helper_Actions.isPresent(this.lblClosedIndiv);
    }

    //------------------Care Need History Values------

    public step_Press_Care_Need_In_Standard_Care_Plan(): void{
        this.Helper_Actions.click(this.lblcareneed);
    }
    public step_Press_Update_Button_Care_Plan_Side_panel(): void{
        this.Helper_Actions.click(this.btnupdatecareplan);
    }
    public step_Press_On_Update_Value_Field(): void{
        this.Helper_Actions.click(this.fldvalupdate);
    }
    public step_Enter_Value_To_Care_Need_Field(val: string): void{
        this.Helper_Actions.enterText(this.fldcareneedval, val);
    }
    public step_Press_Sign_Button_Care_Need_Update_Side_Panel(): void{
        this.Helper_Actions.click(this.btncareplanSign);
    }
    public step_Press_Save_Button_Care_Plan_Update_Side_Panel(): void{
        this.Helper_Actions.click(this.btncareplanSave);
    }
    public step_Validate_Care_Plan_New_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcareneednewval, val);
    }
    public step_Validate_Care_Plan_Old_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcareneedoldval, val);
    }

    //-------------------Treatment History Value------------

    public step_Press_Treatment_In_Standard_Care_Plan(): void{
        this.Helper_Actions.click(this.lbltreatment);
    }
    public step_Select_Treatment_Value_From_Popup(val: string): void{
        this.Helper_Actions.findTextAndClick(this.pputreatmentval, val);
    }

    //--------------------Target History Value---------------

    public step_Press_Target_In_Standard_Care_Plan(): void{
        this.Helper_Actions.click(this.lbltarget);
    }

    //--------------------Evaluation Value------------

    public step_Press_Evaluation_In_Standard_Care_Plan(): void{
        this.Helper_Actions.click(this.lblevaluation);
    }

    //--------------------Result Values--------------

    public step_Press_Result_In_Standard_Care_Plan(): void{
        this.Helper_Actions.click(this.lblresult);
    }
}
