/**
 * Created by Lathika.Herath on 4/18/2018.
 */

import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Div} from "../../../ui-core/ui-elements/Div";
import {Link} from "../../../ui-core/ui-elements/Link";
import {by, element} from "protractor";
import {Label} from "../../../ui-core/ui-elements/Label";

const log = Factory.getLogger("Page.CosmicNovaCommonRecordReadModule")

export class CosmicNovaCommonRecordReadModule extends PageBase {

    private lblcommonrecordtitle    : any;
    private iconexpandcollapse      : any;

    //--------------Free Text Keyword
    private lblfreetextname         : any;
    private lblfreetextval          : any;
    private lblfreetextdate         : any;
    private iconunsignedfreetext    : any;

    //--------------Check Box Keyword
    private lblcheckboxname         : any;
    private lblcheckboxval          : any;
    private lblcheckboxdate         : any;
    private iconunsignedcheckbox    : any;

    //--------------CheckBox Configurable
    private lblcheckboxConfname     : any;
    private lblcheckboxConfval      : any;
    private lblcheckboxConfdate     : any;
    private iconunsignedcheckboxConf: any;

    //--------------Date & Time
    private lbldatetimename         : any;
    private lbldatetimeval          : any;
    private lbldatetimedate         : any;
    private iconunsigneddatetime    : any;

    //--------------Fixed Value
    private lblfixedvaluename       : any;
    private lblfixedvalueval        : any;
    private lblfixedvaluedate       : any;
    private iconunsignedfixedvalue  : any;

    //--------------Numeric
    private lblnumericname          : any;
    private lblnumericval           : any;
    private lblnumericdate          : any;
    private iconunsignednumeric     : any;

    //-------------Numeric Two
    private lblnumeric2name         : any;
    private lblnumeric2val          : any;
    private lblnumeric2date         : any;
    private iconunsignednumeric2    : any;

    //------------Archetype Blood Pressure(complex)
    private lblBPname               : any;
    private lblBPval                : any;

    //-------------AVPU
    private lblavpuname             : any;
    private lblavpuval              : any;
    private lblavpudate             : any;
    private iconunsignedavpu        : any;

    //------------Height
    private lblheightname           : any;
    private lblheightval            : any;
    private lblheightdate           : any;
    private iconunsignedheight      : any;

    //------------Pain
    private lblpainname             : any;
    private lblpainval              : any;
    private lblpaindate             : any;
    private iconunsignedpain        : any;

    //------------Pulse
    private lblpulsename            : any;
    private lblpulseval             : any;
    private lblpulsedate            : any;
    private iconunsignedpulse       : any;

    //------------Respiration
    private lblrespname             : any;
    private lblrespval              : any;
    private lblrespdate             : any;
    private iconunsignedresp        : any;

    //------------Weight
    private lblweightname           : any;
    private lblweightval            : any;
    private lblweightdate           : any;
    private iconunsignedweight      : any;

    constructor() {
        super();
        const element = Elements.CosmicNovaCommonRecordReadModule;

        this.lblcommonrecordtitle = super.findLocators(element.lblcommonrecordtitle.findBy, element.lblcommonrecordtitle.value);
        this.iconexpandcollapse = super.findLocators(element.iconexpandcollapse.findBy, element.iconexpandcollapse.value);

        //---------------Free Text Keyword
        this.lblfreetextname = super.findLocators(element.lblfreetextname.findBy, element.lblfreetextname.value);
        this.lblfreetextval = super.findLocators(element.lblfreetextval.findBy, element.lblfreetextval.value);
        this.lblfreetextdate = super.findLocators(element.lblfreetextdate.findBy, element.lblfreetextdate.value);
        this.iconunsignedfreetext = super.findLocators(element.iconunsignedfreetext.findBy, element.iconunsignedfreetext.value);

        //---------------Check Box Keyword
        this.lblcheckboxname = super.findLocators(element.lblcheckboxname.findBy, element.lblcheckboxname.value);
        this.lblcheckboxval = super.findLocators(element.lblcheckboxval.findBy, element.lblcheckboxval.value);
        this.lblcheckboxdate = super.findLocators(element.lblcheckboxdate.findBy, element.lblcheckboxdate.value);
        this.iconunsignedcheckbox = super.findLocators(element.iconunsignedcheckbox.findBy, element.iconunsignedcheckbox.value);

        //---------------CheckBoxConfigurable Keyword
        this.lblcheckboxConfname = super.findLocators(element.lblcheckboxConfname.findBy, element.lblcheckboxConfname.value);
        this.lblcheckboxConfval = super.findLocators(element.lblcheckboxConfval.findBy, element.lblcheckboxConfval.value);
        this.lblcheckboxConfdate = super.findLocators(element.lblcheckboxConfdate.findBy, element.lblcheckboxConfdate.value);
        this.iconunsignedcheckboxConf = super.findLocators(element.iconunsignedcheckboxConf.findBy, element.iconunsignedcheckboxConf.value);

        //---------------Date & Time Keyword
        this.lbldatetimename = super.findLocators(element.lbldatetimename.findBy, element.lbldatetimename.value);
        this.lbldatetimeval = super.findLocators(element.lbldatetimeval.findBy, element.lbldatetimeval.value);
        this.lbldatetimedate = super.findLocators(element.lbldatetimedate.findBy, element.lbldatetimedate.value);
        this.iconunsigneddatetime = super.findLocators(element.iconunsigneddatetime.findBy, element.iconunsigneddatetime.value);

        //---------------Fixed Value Keyword
        this.lblfixedvaluename = super.findLocators(element.lblfixedvaluename.findBy, element.lblfixedvaluename.value)
        this.lblfixedvalueval = super.findLocators(element.lblfixedvalueval.findBy, element.lblfixedvalueval.value);
        this.lblfixedvaluedate = super.findLocators(element.lblfixedvaluedate.findBy, element.lblfixedvaluedate.value);
        this.iconunsignedfixedvalue = super.findLocators(element.iconunsignedfixedvalue.findBy, element.iconunsignedfixedvalue.value);

        //---------------Numeric Keyword
        this.lblnumericname = super.findLocators(element.lblnumericname.findBy, element.lblnumericname.value);
        this.lblnumericval = super.findLocators(element.lblnumericval.findBy, element.lblnumericval.value);
        this.lblnumericdate = super.findLocators(element.lblnumericdate.findBy, element.lblnumericdate.value);
        this.iconunsignednumeric = super.findLocators(element.iconunsignednumeric.findBy, element.iconunsignednumeric.value);

        //---------------Numeric Two Keyword
        this.lblnumeric2name = super.findLocators(element.lblnumeric2name.findBy, element.lblnumeric2name.value);
        this.lblnumeric2val = super.findLocators(element.lblnumeric2val.findBy, element.lblnumeric2val.value);
        this.lblnumeric2date = super.findLocators(element.lblnumeric2date.findBy, element.lblnumeric2date.value);
        this.iconunsignednumeric2 = super.findLocators(element.iconunsignednumeric2.findBy, element.iconunsignednumeric2.value);

        //--------------Archetype Blood Pressure(Complex)
        this.lblBPname = super.findLocators(element.lblBPname.findBy, element.lblBPname.value);
        this.lblBPval = super.findLocators(element.lblBPval.findBy, element.lblBPval.value);

        //--------------AVPU Keyword
        this.lblavpuname = super.findLocators(element.lblavpuname.findBy, element.lblavpuname.value);
        this.lblavpuval = super.findLocators(element.lblavpuval.findBy, element.lblavpuval.value);
        this.lblavpudate = super.findLocators(element.lblavpudate.findBy, element.lblavpudate.value);
        this.iconunsignedavpu = super.findLocators(element.iconunsignedavpu.findBy, element.iconunsignedavpu.value);

        //--------------Archetype Height
        this.lblheightname = super.findLocators(element.lblheightname.findBy, element.lblheightname.value);
        this.lblheightval = super.findLocators(element.lblheightval.findBy, element.lblheightval.value);
        this.lblheightdate = super.findLocators(element.lblheightdate.findBy, element.lblheightdate.value);
        this.iconunsignedheight = super.findLocators(element.iconunsignedheight.findBy, element.iconunsignedheight.value);

        //-------------Archetype Pain
        this.lblpainname = super.findLocators(element.lblpainname.findBy, element.lblpainname.value);
        this.lblpainval = super.findLocators(element.lblpainval.findBy, element.lblpainval.value);
        this.lblpaindate = super.findLocators(element.lblpaindate.findBy, element.lblpaindate.value);
        this.iconunsignedpain = super.findLocators(element.iconunsignedpain.findBy, element.iconunsignedpain.value);

        //-------------Archetype Pulse
        this.lblpulsename = super.findLocators(element.lblpulsename.findBy, element.lblpulsename.value);
        this.lblpulseval = super.findLocators(element.lblpulseval.findBy, element.lblpulseval.value);
        this.lblpulsedate = super.findLocators(element.lblpulsedate.findBy, element.lblpulsedate.value);
        this.iconunsignedpulse = super.findLocators(element.iconunsignedpulse.findBy, element.iconunsignedpulse.value);

        //-------------Archetype Respiration
        this.lblrespname = super.findLocators(element.lblrespname.findBy, element.lblrespname.value);
        this.lblrespval = super.findLocators(element.lblrespval.findBy, element.lblrespval.value);
        this.lblrespdate = super.findLocators(element.lblrespdate.findBy, element.lblrespdate.value);
        this.iconunsignedresp = super.findLocators(element.iconunsignedresp.findBy, element.iconunsignedresp.value);

        //------------Archetype Weight
        this.lblweightname = super.findLocators(element.lblweightname.findBy, element.lblweightname.value);
        this.lblweightval = super.findLocators(element.lblweightval.findBy, element.lblweightval.value);
        this.lblweightdate = super.findLocators(element.lblweightdate.findBy, element.lblweightdate.value);
        this.iconunsignedweight = super.findLocators(element.iconunsignedweight.findBy, element.iconunsignedweight.value);




    }

    public step_Validate_Common_Record_Title(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcommonrecordtitle, val);
    }

    public step_Validate_Common_Record_Collapse_Expand_Icon(): void{
        this.Helper_Actions.click(this.iconexpandcollapse);
    }

    //------------------Free Text Keyword

    public step_Validate_Free_Text_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblfreetextname, val);
    }

    public step_Validate_Free_Text_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblfreetextval, val);
    }

    public step_Validate_Free_Text_Register_date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblfreetextdate, val);
    }

    public step_Validate_Free_Text_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedfreetext);
    }

    //-----------------Check Box Keyword

    public step_Validate_CheckBox_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcheckboxname, val);
    }

    public step_Validate_CheckBox_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcheckboxval, val);
    }

    public step_Validate_CheckBox_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcheckboxdate,val);
    }

    public step_Validate_CheckBox_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedcheckbox);
    }

    //------------------CheckBox Configurable Keyword

    public step_Validate_CheckBox_Configurable_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcheckboxConfname, val);
    }

    public step_Validate_CheckBox_Configurable_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcheckboxConfval, val);
    }

    public step_Validate_CheckBox_Configurable_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblcheckboxConfdate, val);
    }

    public step_Validate_CheckBox_Configurable_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedcheckboxConf);
    }

    //------------------Date & Time Keyword

    public step_Validate_Date_Time_name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lbldatetimename, val);
    }

    public step_Validate_Date_Time_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lbldatetimeval, val);
    }

    public step_Validate_date_Time_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lbldatetimedate, val);
    }

    public step_Validate_Date_time_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsigneddatetime);
    }

    //-------------------Fixed Value

    public step_Validate_Fixed_Value_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblfixedvaluename, val);
    }

    public step_Validate_Fixed_Value_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblfixedvalueval, val);
    }

    public step_Validate_Fixed_Value_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblfixedvaluedate, val);
    }

    public step_Validate_Fixed_value_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedfixedvalue);
    }

    //------------------Numeric

    public step_Validate_Numeric_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblnumericname, val);
    }
    public step_Validate_Numeric_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblnumericval, val);
    }
    public step_Validate_Numeric_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblnumericdate, val);
    }
    public step_Validate_Numeric_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignednumeric);
    }

    //-----------------Numeric Two

    public step_Validate_Numeric_Two_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblnumeric2name, val);
    }
    public step_Validate_Numeric_Two_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblnumeric2val, val);
    }
    public step_Validate_Numeric_Two_date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblnumeric2date, val);
    }
    public step_Validate_Numeric_Two_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignednumeric2);
    }

    //---------------Archetype Blood Pressure (Complex)

    public step_Validate_Arche_Blood_Pressure_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblBPname, val);
    }
    public step_Validate_Arche_Blood_Pressure_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblBPval, val);
    }

    //Archetype Blood pressure value can not read from the current script. Need to implement it again.

    //---------------AVPU
    public step_Validate_Arche_AVPU_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblavpuname, val);
    }
    public step_Validate_Arche_AVPU_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblavpuval, val);
    }
    public step_Validate_Arche_AVPU_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblavpudate, val);
    }
    public step_Validate_Arche_AVPU_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedavpu);
    }

    //--------------Height
    public step_Validate_Arche_Height_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblheightname, val);
    }
    public step_Validate_Arche_Height_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblheightval,val);
    }
    public step_Validate_Arche_Height_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblheightdate, val);
    }
    public step_Validate_Arche_Height_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedheight);
    }

    //---------------Pain
    public step_Validate_Arche_Pain_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblpainname, val);
    }
    public step_Validate_Arche_Pain_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblpainval, val);
    }
    public step_Validate_Arche_Pain_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblpaindate, val);
    }
    public step_Validate_Arche_Pain_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedpain);
    }

    //---------------Pulse
    public step_Validate_Arche_Pulse_Name(val: string): void {
        this.Helper_Actions.checkTextAvailability(this.lblpulsename, val);
    }
    public step_Validate_Arche_Pulse_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblpulseval, val);
    }
    public step_Validate_Arche_Pulse_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblpulsedate,val);
    }
    public step_Validate_Arche_Pulse_Unsigned_Icon_Common_Record_Page(): void{
        this.Helper_Actions.isPresent(this.iconunsignedpulse);
    }

    //---------------Respiration
    public step_Validate_Arche_Respiration_Name(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblrespname, val);
    }
    public step_Validate_Arche_Respiration_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblrespval,val);
    }
    public step_Validate_Arche_Respiration_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblrespdate, val);
    }
    public step_Validate_Arche_Respiration_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedresp);
    }

    //---------------Weight
    public step_Validate_Arche_Weight_Name(val: string): void {
        this.Helper_Actions.checkTextAvailability(this.lblweightname, val);
    }
    public step_Validate_Arche_Weight_Value(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblweightval, val);
    }
    public step_Validate_Arche_Weight_Date(val: string): void{
        this.Helper_Actions.checkTextAvailability(this.lblweightdate, val);
    }
    public step_Validate_Arche_Weight_Unsigned_Icon(): void{
        this.Helper_Actions.isPresent(this.iconunsignedweight);
    }


}