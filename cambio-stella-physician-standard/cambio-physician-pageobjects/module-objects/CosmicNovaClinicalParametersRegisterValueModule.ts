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

const log = Factory.getLogger("Page.CosmicNovaClinicalParametersRegisterValueModule");

export class CosmicNovaClinicalParametersRegisterValueModule extends PageBase {

    //---------------Clinical Parameter Register Side Panel Common elements
    private btnsign             : any;

    //---------------MEWS Archetype
    private copyicon            : any;
    private btnsystolic         : any;
    private btnDiastolic        : any;
    private btnpulserate        : any;
    private btnrespiration      : any;
    private btntemperature      : any;
    private btnavpu             : any;
    private btnavputype         : any;

    //----------------AVPU Archetype
    private fldavpu             : any;
    private ppuavpu             : any;

    //----------------Body Weight
    private fldbweight          : any;

    //----------------Pulse
    private fldpulse            : any;
    private fldirregular        : any;
    private ppuirregular        : any;

    //----------------Blood Pressure
    private fldbpsytolic        : any;
    private fldbpdiastolic      : any;
    private fldbpposition       : any;
    private ppubpposition       : any;
    private fldlocfmeasure      : any;
    private ppulocfmeasure      : any;
    private fldspclocation      : any;
    private fldcomment          : any;

    //----------------Body Temperature
    private fldbodytemp         : any;
    private fldsitemeasure      : any;
    private ppusitemeasure      : any;

    //----------------SpO2
    private fldspo2             : any;
    private fldanysupoxygen     : any;
    private ppuanysupoxygen     : any;
    private fldflowrate         : any;
    private fldcopd             : any;
    private ppucopd             : any;

    //-----------------Respiration
    private fldrespiration      : any;

    //-----------------Pain
    private fldpain             : any;
    private ppupain             : any;

    //-----------------NEWS
    private fldrespratenews     : any;
    private fldspo2news         : any;
    private fldanysupoxygennews : any;
    private ppuanysupoxygennews : any;
    private fldflowratenews     : any;
    private fldcopdnews         : any;
    private ppucopdnews         : any;
    private fldtempnews         : any;
    private fldbpsystolicnews   : any;
    private fldbpdiastolicnews  : any;
    private fldpulseratenews    : any;
    private fldirregularnews    : any;
    private ppuirregularnews    : any;
    private fldavpunews         : any;
    private ppuavpunews         : any;
    private fldweightbminews    : any;
    private fldheightbminews    : any;



    constructor() {
        super();
        const element = Elements.CosmicNovaClinicalParametersRegisterValueModule;
        //------------Clinical Parameter Common Register Value Side Panel Common elements
        this.btnsign        = super.findLocators(element.btnsign.findBy,element.btnsign.value);

        //------------MEWS Archetype
        this.copyicon       = super.findLocators(element.copyicon.findBy,element.copyicon.value);
        this.btnsystolic    = super.findLocators(element.btnsystolic.findBy,element.btnsystolic.value);
        this.btnDiastolic   = super.findLocators(element.btnDiastolic.findBy,element.btnDiastolic.value);
        this.btnpulserate   = super.findLocators(element.btnpulserate.findBy,element.btnpulserate.value);
        this.btnrespiration = super.findLocators(element.btnrespiration.findBy,element.btnrespiration.value);
        this.btntemperature = super.findLocators(element.btntemperature.findBy,element.btntemperature.value);
        this.btnavpu        = super.findLocators(element.btnavpu.findBy,element.btnavpu.value);
        this.btnavputype    = super.findLocators(element.btnavputype.findBy,element.btnavputype.value);

        //------------AVPU
        this.fldavpu        = super.findLocators(element.fldavpu.findBy,element.fldavpu.value);
        this.ppuavpu        = super.findLocators(element.ppuavpu.findBy,element.ppuavpu.value);

        //------------Body Weight
        this.fldbweight     = super.findLocators(element.fldbweight.findBy,element.fldbweight.value);

        //------------Pulse
        this.fldpulse       = super.findLocators(element.fldpulse.findBy,element.fldpulse.value);
        this.fldirregular   = super.findLocators(element.fldirregular.findBy,element.fldirregular.value);
        this.ppuirregular   = super.findLocators(element.ppuirregular.findBy,element.ppuirregular.value);

        //------------Blood Pressure
        this.fldbpsytolic       = super.findLocators(element.fldbpsytolic.findBy,element.fldbpsytolic.value);
        this.fldbpdiastolic     = super.findLocators(element.fldbpdiastolic.findBy,element.fldbpdiastolic.value);
        this.fldbpposition      = super.findLocators(element.fldbpposition.findBy,element.fldbpposition.value);
        this.ppubpposition      = super.findLocators(element.ppubpposition.findBy,element.ppubpposition.value);
        this.fldlocfmeasure     = super.findLocators(element.fldlocfmeasure.findBy,element.fldlocfmeasure.value);
        this.ppulocfmeasure     = super.findLocators(element.ppulocfmeasure.findBy,element.ppulocfmeasure.value);
        this.fldspclocation     = super.findLocators(element.fldspclocation.findBy,element.fldspclocation.value);
        this.fldcomment         = super.findLocators(element.fldcomment.findBy,element.fldcomment.value);

        //-------------Body Temperature
        this.fldbodytemp        = super.findLocators(element.fldbodytemp.findBy,element.fldbodytemp.value);
        this.fldsitemeasure     = super.findLocators(element.fldsitemeasure.findBy,element.fldsitemeasure.value);
        this.ppusitemeasure     = super.findLocators(element.ppusitemeasure.findBy,element.ppusitemeasure.value);

        //-------------SpO2
        this.fldspo2            = super.findLocators(element.fldspo2.findBy,element.fldspo2.value);
        this.fldanysupoxygen    = super.findLocators(element.fldanysupoxygen.findBy,element.fldanysupoxygen.value);
        this.ppuanysupoxygen    = super.findLocators(element.ppuanysupoxygen.findBy,element.ppuanysupoxygen.value);
        this.fldflowrate        = super.findLocators(element.fldflowrate.findBy,element.fldflowrate.value);
        this.fldcopd            = super.findLocators(element.fldcopd.findBy,element.fldcopd.value);
        this.ppucopd            = super.findLocators(element.ppucopd.findBy,element.ppucopd.value);

        //--------------Respiration
        this.fldrespiration       = super.findLocators(element.fldrespiration.findBy,element.fldrespiration.value);

        //--------------Pain
        this.fldpain       = super.findLocators(element.fldpain.findBy,element.fldpain.value);
        this.ppupain       = super.findLocators(element.ppupain.findBy,element.ppupain.value);

        //--------------NEWS
        this.fldrespratenews       = super.findLocators(element.fldrespratenews.findBy,element.fldrespratenews.value);
        this.fldspo2news           = super.findLocators(element.fldspo2news.findBy,element.fldspo2news.value);
        this.fldanysupoxygennews   = super.findLocators(element.fldanysupoxygennews.findBy,element.fldanysupoxygennews.value);
        this.ppuanysupoxygennews   = super.findLocators(element.ppuanysupoxygennews.findBy,element.ppuanysupoxygennews.value);
        this.fldflowratenews       = super.findLocators(element.fldflowratenews.findBy,element.fldflowratenews.value);
        this.fldcopdnews           = super.findLocators(element.fldcopdnews.findBy,element.fldcopdnews.value);
        this.ppucopdnews           = super.findLocators(element.ppucopdnews.findBy,element.ppucopdnews.value);
        this.fldtempnews           = super.findLocators(element.fldtempnews.findBy,element.fldtempnews.value);
        this.fldbpdiastolicnews    = super.findLocators(element.fldbpdiastolicnews.findBy,element.fldbpdiastolicnews.value);
        this.fldbpsystolicnews     = super.findLocators(element.fldbpsystolicnews.findBy,element.fldbpsystolicnews.value);
        this.fldpulseratenews      = super.findLocators(element.fldpulseratenews.findBy,element.fldpulseratenews.value);
        this.fldirregularnews      = super.findLocators(element.fldirregularnews.findBy,element.fldirregularnews.value);
        this.ppuirregularnews      = super.findLocators(element.ppuirregularnews.findBy,element.ppuirregularnews.value);
        this.fldavpunews           = super.findLocators(element.fldavpunews.findBy,element.fldavpunews.value);
        this.ppuavpunews           = super.findLocators(element.ppuavpunews.findBy,element.ppuavpunews.value);
        this.fldweightbminews      = super.findLocators(element.fldweightbminews.findBy,element.fldweightbminews.value);
        this.fldheightbminews      = super.findLocators(element.fldheightbminews.findBy,element.fldheightbminews.value);


    }

    /*----------------Methods for Register Clinical Parameters Archetypes
            -------------Clinical Parameter Register Value Side Panel Common Methods -----*/
    public step_Press_Sign_Button(): void{
        this.Helper_Actions.findElementAndClick(this.btnsign);
    }

    //----------------Methods For Register MEWS Archetype

    public step_SetCopy_History_Value_Option(): void{
        this.Helper_Actions.findSpecificElementAndClick(this.copyicon,1);
    }
    public step_SetSystolic_Value(val: string): void{
        this.Helper_Actions.findFirstElementAndClick(this.btnsystolic);
        this.Helper_Actions.enterText(this.btnsystolic,val);
        }
    public step_SetDiastolic_Value(val: string): void{
        this.Helper_Actions.findFirstElementAndClick(this.btnDiastolic);
        this.Helper_Actions.enterText(this.btnDiastolic,val);
    }
    public step_SetPulse_Rate_Value(val: string): void{
        this.Helper_Actions.findFirstElementAndClick(this.btnpulserate);
        this.Helper_Actions.enterText(this.btnpulserate,val);
    }
    public step_SetRespiration_Rate_Value(val: string): void{
        this.Helper_Actions.findFirstElementAndClick(this.btnrespiration);
        this.Helper_Actions.enterText(this.btnrespiration,val);
    }
    public step_SetTemperature_Value(val: string): void{
        this.Helper_Actions.findFirstElementAndClick(this.btntemperature);
        this.Helper_Actions.enterText(this.btntemperature, val);
    }
    public step_Set_AVPU_Value_MEWS(): void{
        this.Helper_Actions.findFirstElementAndClick(this.btnavpu);
    }
    public step_Select_AVPU_Value_MEWS(val: string): void{
        this.Helper_Actions.findTextAndClick(this.btnavputype,val);
    }

    //----------------Methods For Register AVPU Archetype

    public step_Click_AVPU_Field(): void{
        this.Helper_Actions.findElementAndClick(this.fldavpu);
    }
    public step_Set_AVPU_Value(val: string): void{
        this.Helper_Actions.findTextAndClick(this.ppuavpu,val);
    }

    //---------------Methods For Register Body Weigth Archetype

    public step_Set_Body_Weight_Value(val: string): void{
        this.Helper_Actions.click(this.fldbweight);
        this.Helper_Actions.enterText(this.fldbweight,val);
    }

    //---------------Methods For Register Pulse Archetype

    public step_Set_Pulse_Value(val: string): void{
        this.Helper_Actions.click(this.fldpulse);
        this.Helper_Actions.enterText(this.fldpulse,val);
    }
    public step_Press_Pulse_Irregular_Field(val: string): void{
        this.Helper_Actions.click(this.fldirregular);
        this.Helper_Actions.findTextAndClick(this.ppuirregular,val);
    }

    //----------------Methods For Register Blood Pressure Archetype

    public step_Set_Blood_Pressure_Systolic_Value(val1: string): void{
        this.Helper_Actions.click(this.fldbpsytolic);
        this.Helper_Actions.enterText(this.fldbpsytolic,val1);
    }
    public step_Set_Blood_Pressure_Diastolic_Value(val2: string): void{
        this.Helper_Actions.click(this.fldbpdiastolic);
        this.Helper_Actions.enterText(this.fldbpdiastolic,val2);
    }
    public step_Set_Blood_Pressure_Position_Value(val: string): void{
        this.Helper_Actions.click(this.fldbpposition);
        this.Helper_Actions.findTextAndClick(this.ppubpposition,val);
    }
    public step_Set_Blood_Pressure_Location_Measurement_Value(val: string): void{
        this.Helper_Actions.click(this.fldlocfmeasure);
        this.Helper_Actions.findTextAndClick(this.ppulocfmeasure,val);
    }
    public step_Set_Blood_Pressure_Specific_Location_Comment(val: string): void{
        this.Helper_Actions.click(this.fldspclocation);
        this.Helper_Actions.enterText(this.fldspclocation,val);
    }
    public step_Set_Blood_Pressure_Comment(val: string): void{
        this.Helper_Actions.click(this.fldcomment);
        this.Helper_Actions.enterText(this.fldcomment,val);
    }

    //------------------Methods For Body Temperature Archetype

    public step_Set_Body_Temperature_Value(val: string): void{
        this.Helper_Actions.click(this.fldbodytemp);
        this.Helper_Actions.enterText(this.fldbodytemp,val);
    }
    public step_Set_Body_Temperature_Site_of_Measurement(val: string): void{
        this.Helper_Actions.click(this.fldsitemeasure);
        this.Helper_Actions.findTextAndClick(this.ppusitemeasure,val);
    }

    //-------------------Methods For SpO2 Archetype

    public step_Set_SpO2_Value(val: string): void{
        this.Helper_Actions.click(this.fldspo2);
        this.Helper_Actions.enterText(this.fldspo2,val);
    }
    public step_Set_Any_Supplemental_Oxygen_Value(val: string): void{
        this.Helper_Actions.click(this.fldanysupoxygen);
        this.Helper_Actions.findTextAndClick(this.ppuanysupoxygen,val);
    }
    public step_Set_Flow_Rate_Value(val: string): void{
        this.Helper_Actions.click(this.fldflowrate);
        this.Helper_Actions.enterText(this.fldflowrate,val);
    }
    public step_Set_COPD_Value(val: string): void{
        this.Helper_Actions.click(this.fldcopd);
        this.Helper_Actions.findTextAndClick(this.ppucopd,val);
    }

    //--------------------Methods For Respiration Archetype

    public step_Set_Respiration_Value(val: string): void{
        this.Helper_Actions.click(this.fldrespiration);
        this.Helper_Actions.enterText(this.fldrespiration,val);
    }

    //--------------------Methods For Pain Archetype

    public step_Set_Pain_Value(val: string): void{
        this.Helper_Actions.click(this.fldpain);
        this.Helper_Actions.findTextAndClick(this.ppupain,val);
    }

    //--------------------Methods For NEWS Archetype

    public step_Set_Respiration_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldrespratenews);
        this.Helper_Actions.enterText(this.fldrespratenews,val);
    }
    public step_Set_SpO2_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldspo2news);
        this.Helper_Actions.enterText(this.fldspo2news,val);
    }
    public step_Set_Any_Supplemental_Oxygen_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldanysupoxygennews);
        this.Helper_Actions.findTextAndClick(this.ppuanysupoxygennews,val);
    }
    public step_Set_Flow_Rate_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldflowratenews);
        this.Helper_Actions.enterText(this.fldflowratenews,val);
    }
    public step_Set_COPD_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldcopdnews);
        this.Helper_Actions.findTextAndClick(this.ppucopdnews,val);
    }
    public step_Set_Temperature_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldtempnews);
        this.Helper_Actions.enterText(this.fldtempnews,val);
    }
    public step_Set_Blood_Pressure_Systolic_NEWS(val1: string): void{
        this.Helper_Actions.click(this.fldbpsystolicnews);
        this.Helper_Actions.enterText(this.fldbpsystolicnews,val1);
    }
    public step_Set_Blood_Pressure_Diastolic_NEWS(val2: string): void{
        this.Helper_Actions.click(this.fldbpdiastolicnews);
        this.Helper_Actions.enterText(this.fldbpdiastolicnews,val2);

    }
    public step_Set_Pulse_Rate_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldpulseratenews);
        this.Helper_Actions.enterText(this.fldpulseratenews,val);
    }
    public step_Set_Pulse_Irregular_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldirregularnews);
        this.Helper_Actions.findTextAndClick(this.ppuirregularnews,val);
    }
    public step_Set_AVPU_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldavpunews);
        this.Helper_Actions.findTextAndClick(this.ppuavpunews,val);
    }
    public step_Set_Weight_BMI_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldweightbminews);
        this.Helper_Actions.enterText(this.fldweightbminews,val);
    }
    public step_Set_Height_BMI_NEWS(val: string): void{
        this.Helper_Actions.click(this.fldheightbminews);
        this.Helper_Actions.enterText(this.fldheightbminews,val);
    }

    //Register MRT Values

    public step_Set_Numeric_Value_In_MRT_Template(val: string): void{

        var fldnumeric: any = this.findLocators("xpath", "//nova-numeric-input[@ng-if='value.dataType === vitalSignsType.NUMERIC']//following::input");
        this.Helper_Actions.click(fldnumeric);
        //var txtfldnumeric: any = this.findLocators("xpath", "//div[@ng-class='{Invalid: inputModelCtrl.$invalid, HasFocus: inputHasFocus, HasInput: hasInput(), Disabled: disabled}']");
        this.Helper_Actions.enterText(fldnumeric,val);
        //this.Helper_Actions.enterText(fldnumeric, val);
    }

    public step_Set_Single_Selection_Value_In_MRT_Template(val: string): void{

        var fldsinglesele: any  = this.findLocators("xpath", "(//*[@ng-if='value.dataType === vitalSignsType.SINGLE_SELECTION'])/div");
        this.Helper_Actions.click(fldsinglesele);
        var ppusinglesele: any  = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(ppusinglesele,val);
    }

    public step_Set_Check_Box_Config_Value_In_MRT_Template(val: string): void{

        var fldcheckbox: any    = this.findLocators("xpath", "//*[@ng-if='value.dataType === vitalSignsType.BOOLEAN || value.dataType === vitalSignsType.OPTIONAL_BOOLEAN']");
        this.Helper_Actions.click(fldcheckbox);
        var ppucheckbox: any    = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(ppucheckbox,val);
    }

    public step_Set_Fixed_Value_In_MRT_Template(val1: string, val2: string): void{

        var fldfixedval: any    = this.findLocators("xpath","//*[@ng-if='value.dataType === vitalSignsType.MULTIPLE_SELECTION']");
        this.Helper_Actions.findFirstElementAndClick(fldfixedval);
        var ppufixedvalue: any  = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(ppufixedvalue,val1);
        this.Helper_Actions.findTextAndClick(ppufixedvalue,val2);
    }





}

