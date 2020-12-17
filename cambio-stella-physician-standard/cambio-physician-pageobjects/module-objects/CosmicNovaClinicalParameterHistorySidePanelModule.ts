/**
 * Created by Lathika.Herath on 4/4/2018.
 */
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Div} from "../../../ui-core/ui-elements/Div";
import {Link} from "../../../ui-core/ui-elements/Link";
import {by, element} from "protractor";
import {Label} from "../../../ui-core/ui-elements/Label";


const log = Factory.getLogger("Page.CosmicNovaClinicalParameterHistorySidePanelModule");

export class CosmicNovaClinicalParameterHistorySidePanelModule extends PageBase {

    //---------------Clinical Parameter History Side Panel Common elements
    private lbltitle: any;


    constructor() {
        super();
        const element = Elements.CosmicNovaClinicalParameterHistorySidePanelModule;

        //------------Clinical Parameter Common Register Value Side Panel Common elements
        this.lbltitle = super.findLocators(element.lbltitle.findBy, element.lbltitle.value);


    }

    //-----------------Methods For Identify History Side Panel Common Elements

    public step_Read_Clinical_Parameter_Title(val: string): void {
        this.Helper_Actions.checkTextAvailability(this.lbltitle, val);
    }

    public step_Press_Expand_Button(availability: string): void {

        if (availability == 'Yes') {
            var btnexpand: any = this.findLocators("xpath", "(//span[@class='ToggleIcon'])[1]");
            new Button(btnexpand).click();
        }
        else {}
        /*if (this.Helper_Actions.isDisplayed(btnexpand)) {
                new Button(btnexpand).click();
        }
        else {}*/

    }

    public step_Read_Archetype_Date_Time(val: string): void {
        var lbldatetime: any = this.findLocators("xpath", "(//div[@class='ValueHeader']/div[1])[1]");
        this.Helper_Actions.checkTextAvailability(lbldatetime, val);

    }

    public step_Read_Archetype_Main_Value(val: string): void {
        var lblmainvalue: any = this.findLocators("xpath", "//div[@nova-overflow-spy='model.truncated']");
        //this.Helper_Actions.checkTextAvailability(lblmainvalue, val);
        new Label(lblmainvalue).getText();
    }

    public step_Read_Archetype_Optional_Keywords(archetype: string,keywordList: string): void {

        var optkwywordList: string[] = keywordList.split(",");

        switch (archetype) {
            case "MEWS": {
                //var keywordlist: string[] = ['Blood Pressure', 'Pulse Rate', 'Irregular', 'Respiration Rate', 'Temperature', 'Consciousness'];
                var position: number;

                for (position = 1; position < optkwywordList.length; position++) {
                    var optkeyword: any = this.findLocators("xpath", "(//div[@ng-repeat='child in measurement.childValues']/span)[" + position + "]");
                    this.Helper_Actions.checkTextAvailability(optkeyword, optkwywordList[position - 1]);
                }
                break;
            }
            case "AVPU": {

                break;
            }
            case "Respiration": {

                break;
            }
            case "SpO2(pox)": {
                var keywordlist: string[] = ['Any Supplemental Oxygen?', 'Flow Rate', 'Patient has COPD'];

                var position: number;

                for (position = 1; position < keywordlist.length; position++) {
                    var optkeyword: any = this.findLocators("xpath", "(//div[@ng-repeat='child in measurement.childValues']/span)[" + position + "]");
                    this.Helper_Actions.checkTextAvailability(optkeyword, keywordlist[position - 1]);
                }
                break;
            }
            case "Pulse": {
                var keywordlist: string[] = ['Irregular'];

                var position: number;

                for (position = 1; position < keywordlist.length; position++) {
                    var optkeyword: any = this.findLocators("xpath", "(//div[@ng-repeat='child in measurement.childValues']/span)[" + position + "]");
                    this.Helper_Actions.checkTextAvailability(optkeyword, keywordlist[position - 1]);
                }
                break;
            }
            case "Blood Pressure": {
                var keywordlist: string[] = ['Position', 'Location of measurement', 'Specific location', 'Comment'];
                var position: number;

                for (position = 1; position < keywordlist.length; position++) {
                    var optkeyword: any = this.findLocators("xpath", "(//div[@ng-repeat='child in measurement.childValues']/span)[" + position + "]");
                    this.Helper_Actions.checkTextAvailability(optkeyword, keywordlist[position - 1]);
                }
                break;
            }
            case "Body Temperature": {
                var keywordlist: string[] = ['Site of measurement'];
                var position: number;

                for (position = 1; position < keywordlist.length; position++) {
                    var optkeyword: any = this.findLocators("xpath", "(//div[@ng-repeat='child in measurement.childValues']/span)[" + position + "]");
                    this.Helper_Actions.checkTextAvailability(optkeyword, keywordlist[position - 1]);
                }
                break;
            }
            case "Body Weight": {
                var keywordlist: string[] = ['Body Weight'];
                var position: number;

                for (position = 1; position < keywordlist.length; position++) {
                    var optkeyword: any = this.findLocators("xpath", "(//div[@ng-repeat='child in measurement.childValues']/span)[" + position + "]");
                    this.Helper_Actions.checkTextAvailability(optkeyword, keywordlist[position - 1]);
                }
                break;
            }
            case "BMI": {
                var keywordlist: string[] = ['Weight','Height'];
                var position: number;

                for (position = 1 ; position < keywordlist.length ; position++){
                    var optkeyword: any = this.findLocators("xpath", "(//div[@ng-repeat='child in measurement.childValues']/span)[" + position + "]");
                    this.Helper_Actions.checkTextAvailability(optkeyword,keywordlist[position - 1]);
                }
                break;
            }
            case "Pain (NRS)": {

                break;
            }
            case "Height": {

                break;
            }
            case "NEWS": {
                var keywordlist: string[] = ['Respiration Rate','SpO2','Any Supplemental Oxygen?','Flow Rate','Patient has COPD','Temperature','Blood Pressure','Pulse Rate','Irregular','Consciousness'];
                var position: number;

                for (position = 1 ; position < keywordlist.length ; position++){
                    var optkeyword: any = this.findLocators("xpath","(//div[@ng-repeat='child in measurement.childValues']/span)[" + position + "]");
                    this.Helper_Actions.checkTextAvailability(optkeyword,keywordlist[position - 1]);
                }
                break;
            }



        }







    }
}