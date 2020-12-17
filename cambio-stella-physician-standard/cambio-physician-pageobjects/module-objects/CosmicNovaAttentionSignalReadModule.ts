/**
 * Created by Lathika.Herath on 3/28/2018.
 */

import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Div} from "../../../ui-core/ui-elements/Div";
import {Link} from "../../../ui-core/ui-elements/Link";
import {by, element} from "protractor";
import {Label} from "../../../ui-core/ui-elements/Label";

const log = Factory.getLogger("Page.CosmicNovaAttentionSignalReadModule");

export class CosmicNovaAttentionSignalReadModule extends PageBase {

    private lblreassessment         : any;
    private lblvisitadminission     : any;
    private lblcareprovider         : any;
    private lblclinicward           : any;
    private lblassessmentdate       : any;
    private lblassessmenttime       : any;
    private btnnewassessment        : any;
    private btninvalidate           : any;
    private lblsignaltype           : any;
    private btnsignalicon           : any;
    private lblcomment              : any;
    private btnreassessmenticon     : any;
    private lblreassessmentdate     : any;
    private lblreassessmenttime     : any;
    private btnreassessmentreason   : any;

    //------------------------Hypersensitivity elements

    private lblcertaintylevel       : any;
    private lblseveritylevel        : any;
    private lblReaction             : any;
    private lblAllergen             : any;
    private lblhypertype            : any;

    //------------------------Contagious Disease elements

    private lblcontagiousdisease    : any;

    //------------------------Non-standard Procedure elements

    private lblNonStdProcedure      : any;

    //------------------------Treatment & Condition - Type

    private lbltctype               : any;
    private lbltreatmenttype        : any;
    private lblconditiontype        : any;
    private lblcondsubtypename      : any;


    constructor() {
        super();
        const element = Elements.CosmicNovaAttentionSignalReadModule;
        this.lblcomment                 = super.findLocators(element.lblcomment.findBy,element.lblcomment.value);
        this.lblreassessment            = super.findLocators(element.lblreassessment.findBy,element.lblreassessment.value);
        this.lblvisitadminission        = super.findLocators(element.lblvisitadminission.findBy,element.lblvisitadminission.value);
        this.lblcareprovider            = super.findLocators(element.lblcareprovider.findBy,element.lblcareprovider.value);
        this.lblclinicward              = super.findLocators(element.lblclinicward.findBy,element.lblclinicward.value);
        this.lblassessmentdate          = super.findLocators(element.lblassessmentdate.findBy,element.lblassessmentdate.value);
        this.lblassessmenttime          = super.findLocators(element.lblassessmenttime.findBy,element.lblassessmenttime.value);
        this.btnnewassessment           = super.findLocators(element.btnnewassessment.findBy,element.btnnewassessment.value);
        this.btninvalidate              = super.findLocators(element.btninvalidate.findBy,element.btninvalidate.value);
        this.lblsignaltype              = super.findLocators(element.lblsignaltype.findBy,element.lblsignaltype.value);
        this.btnsignalicon              = super.findLocators(element.btnsignalicon.findBy, element.btnsignalicon.value);
        this.btnreassessmenticon        = super.findLocators(element.btnreassessmenticon.findBy, element.btnreassessmenticon.value);
        this.lblreassessmentdate        = super.findLocators(element.lblreassessmentdate.findBy, element.lblreassessmentdate.value);
        this.lblreassessmenttime        = super.findLocators(element.lblreassessmenttime.findBy, element.lblreassessmenttime.value);
        this.btnreassessmentreason      = super.findLocators(element.btnreassessmentreason.findBy, element.btnreassessmentreason.value);

        //-------------------Hypersensitivity elements
        this.lblcertaintylevel          = super.findLocators(element.lblcertaintylevel.findBy, element.lblcertaintylevel.value);
        this.lblseveritylevel           = super.findLocators(element.lblseveritylevel.findBy, element.lblseveritylevel.value);
        this.lblReaction                = super.findLocators(element.lblReaction.findBy, element.lblReaction.value);
        this.lblAllergen                = super.findLocators(element.lblAllergen.findBy, element.lblAllergen.value);
        this.lblhypertype               = super.findLocators(element.lblhypertype.findBy, element.lblhypertype.value);

        //-------------------Contagious Disease elements
        this.lblcontagiousdisease       = super.findLocators(element.lblcontagiousdisease.findBy, element.lblcontagiousdisease.value);

        //-------------------Non-standard Procedure elements
        this.lblNonStdProcedure         = super.findLocators(element.lblNonStdProcedure.findBy, element.lblNonStdProcedure.value);

        //-------------------Treatment & Condition elements
        this.lbltctype           = super.findLocators(element.lbltctype.findBy, element.lbltctype.value);
        this.lbltreatmenttype           = super.findLocators(element.lbltreatmenttype.findBy, element.lbltreatmenttype.value);
        this.lblconditiontype           = super.findLocators(element.lblconditiontype.findBy, element.lblconditiontype.value);
        this.lblcondsubtypename         = super.findLocators(element.lblcondsubtypename.findBy, element.lblcondsubtypename.value);




    }

    //----------Methods for identify Attention Signal Header elements

    public step_Read_AttentionSignal_Type(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblsignaltype,val);
    }
    public step_Read_AttentionSignal_NewAssessment_Icon(): void{
        this.Helper_Actions.isPresent(this.btnnewassessment);
    }
    public step_Read_AttentionSignal_Invalidate_Icon(): void{
        this.Helper_Actions.isPresent(this.btninvalidate,);
    }
    public step_Read_Attention_Signal_Icon(): void{
        this.Helper_Actions.isPresent(this.btnsignalicon);
    }
    public step_Read_AttentionSignal_Reassessment_Icon(): void{
        this.Helper_Actions.isPresent(this.btnreassessmenticon);
    }

    //---------Methods for identify common Attention Signal elements

    public step_Read_AttentionSignal_Comment(val: string): void{
         this.Helper_Actions.findTextAndClick(this.lblcomment,val);
    }

    public step_Read_Attention_Signal_Reassessment(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblreassessment, val);
    }
    public step_Read_Attention_Signal_Visit_Admission(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblvisitadminission, val);
    }
    public step_Read_Attention_Signal_CareProvider(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcareprovider, val);
    }
    public step_Read_Attention_Signal_Clinic_Ward(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblclinicward, val);
    }
    public step_Read_Attention_Signal_Assessmentdate(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblassessmentdate, val);
    }
    public step_Read_Attention_Signal_Assessmenttime(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblassessmenttime, val);
    }
    public step_Read_Attention_Signal_Reassessment_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblreassessment,val);
    }
    public step_Read_Attention_Signal_Reassessmentdate(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblreassessmentdate,val);
    }
    public step_Read_Attention_Signal_Reassessmenttime(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblreassessmenttime,val);
    }
    public step_Read_Attention_Signal_Reassessment_Reason(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.btnreassessmentreason,val);
    }


    //-----------------Methods for validate Hypersensitivity elements

    public step_Read_Hypersensitivity_Certainty_Level(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcertaintylevel,val);
    }
    public step_Read_Hypersensitivity_Severity_Level(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblseveritylevel,val);
    }
    public step_Read_Hypersensitivity_Reaction(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblReaction,val);
    }
    public step_Read_Hypersensitivity_Allergen(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblAllergen,val);
    }
    public step_Read_Hypersensitivity_Hyper_Type(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblhypertype,val);
    }

    //-----------------Methods for validate Contagious Disease elements

    public step_Read_Contagious_Disease_Type(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcontagiousdisease,val);
    }

    //-----------------Methods for Non-standard Procedure elements

    public step_Read_Non_standard_Procedure(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblNonStdProcedure,val);
    }

    //-----------------Methods for validate Treatment & Condition elements

    public step_Read_Treatment_Condition_Type(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lbltctype,val);
    }
    public step_Read_Treatment_Type(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lbltreatmenttype,val);
        }

    public step_Read_Treatment_Condition_Condition_Type(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblconditiontype,val);
    }
    public step_Read_Treatment_Condition_Condition_SubType_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcondsubtypename,val);
    }



}