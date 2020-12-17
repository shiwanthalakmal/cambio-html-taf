/**
 * Created by SLakmal on 7/10/2017.
 */
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Div} from "../../../ui-core/ui-elements/Div";
import {Link} from "../../../ui-core/ui-elements/Link";
import {by, element} from "protractor";
import {Label} from "../../../ui-core/ui-elements/Label";

const log = Factory.getLogger("Page.CosmicNovaAttentionSignalCreateModule");

export class CosmicNovaAttentionSignalCreateModule extends PageBase{

    private listType        : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaAttentionSignalCreateModule;
        this.listType           = super.findLocators(element.listType.findBy,element.listType.value);
    }

    public step_SignalType_Selection(val: string): void{
        var signalType : any = this.findLocators("xpath","//*[contains(text(),'Type')]/following::div[1]");
        this.Helper_Actions.findFirstElementAndClick(signalType);
        var signalList : any = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(signalList,val);
    }

    public step_PressSign(): void{
        var signBtn : any = this.findLocators("css",".sign");
        new Button(signBtn).click();
    }

    public step_MakeInvalidateSignal(): void{
        var invalidateBtn : any = this.findLocators("xpath","//*[contains(text(),'Invalidate')]");
        new Button(invalidateBtn).click();
        var reasonBtn : any = this.findLocators("xpath","//*[contains(text(),'Reason')]/following::div[1]");
        new Link(reasonBtn).click();
        /*
        var reasonList : any = this.findLocators("xpath","//*[contains(text(),'Wrong patient')]");
        this.Helper_Actions.findTextAndClick(reasonList,'Wrong patient');this.Helper_Waits.waitFor(2000);
        */
        var selectreason : any = this.findLocators("xpath","//*[contains(text(),'1. Fel patient')]");
        this.Helper_Actions.findElementAndClick(selectreason);
        var invalidBtn : any = this.findLocators("xpath","//*[contains(text(),'Invalidate')]");
        this.Helper_Actions.findElementAndClick(invalidBtn);
    }

    public step_MakeNewAssignment(): void{
        var assignBtn : any = this.findLocators("xpath","//*[contains(text(),'New assessment')]");
        new Button(assignBtn).click();
    }

    // Hypersensitivity
    public step_SetSubType(type: string): void{
        var subtypebtn : any = this.findLocators("xpath","(//*[contains(text(),'Type')])[2]");
        new Button(subtypebtn).click();
        var subtypepopup : any = this.findLocators("xpath","//div[@ng-click='setSelected(option)']");
        this.Helper_Actions.findTextAndClick(subtypepopup,type);
    }
    public step_SetAllergen(val: string): void{
        var allergenbtn : any = this.findLocators("xpath","//*[contains(text(),'Allergen')]/following::div[1]");
        new Button(allergenbtn).click();
        var allergenpopup : any = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(allergenpopup,val);
    }
    public step_AddATC_Code(): void{
        var addATCCode : any = this.findLocators("xpath","//*[contains(text(),'Add ATC-code')]");
        new Link(addATCCode).click();
        var mainCode : any = this.findLocators("model","model.search");
        new TextField(mainCode).enterTextAndSubmit('Altargo');
        var mainCodeList : any = this.findLocators("css",".ResultItem>div");
        this.Helper_Actions.findFirstElementAndClick(mainCodeList);this.Helper_Waits.waitFor(1000);
        var subCodeList : any = this.findLocators("css",".ResultItem>div");
        this.Helper_Actions.findFirstElementAndClick(subCodeList);
    }

    public step_SetReaction_Option(val: string): void{
        var reactionBtn : any = this.findLocators("xpath","//*[contains(text(),'Reaction')]/following::div[1]");
        new Button(reactionBtn).click();
        var reactionList : any = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(reactionList,val);
    }

    public step_SetSeverity_Option(val: string): void{
        var severityBtn : any = this.findLocators("xpath","//*[contains(text(),'Severity level')]/following::div[1]");
        new Button(severityBtn).click();
        var severityList : any = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(severityList,val);
    }

    public step_SetCertainty_Option(val: string): void{
        var certaintyBtn : any = this.findLocators("xpath","//*[contains(text(),'Certainty level')]/following::div[1]");
        new Button(certaintyBtn).click();
        var certaintyList : any = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(certaintyList,val);
    }
    public step_SetComment_Option(val: string): void{
        var commentbtn : any = this.findLocators("xpath", "//div[contains(text(),'Comment')]/following::div[1]");
        new Button(commentbtn).click();
        var entercomment : any = this.findLocators("xpath","//*[contains(text(),'Comment')]/following::div[1]/textarea");
        this.Helper_Actions.enterText(entercomment,val);
    }
    public step_SetReassessment_Option(val: string): void{
        var reassessmenrbtn : any = this.findLocators("xpath", "//*[contains(text(),'Reassessment')]/following::div[1]");
        new Button(reassessmenrbtn).click();

        if (val == 'No reassessment required' ){
            var Noreassessment : any = this.findLocators("xpath", "//*[@ng-class='{Selected: isSelected(option)}'][1]");
            new Button(Noreassessment).click();
        }
        else if (val == 'Reassessment required'){
            var reassessmenrreq : any = this.findLocators("xpath","//*[@ng-class='{Selected: isSelected(option)}'][2]");
            new Button(reassessmenrreq).click();

            var reassessmentdatefld : any = this.findLocators("xpath","//*[@ng-model='model.reassessmentDateTime'][1]");
            new TextField(reassessmentdatefld).clickOnText();
            var reassessmentdatebtn : any = this.findLocators("xpath", "//div[@class='Months']/span[@class=' Current']");
            new Button(reassessmentdatebtn).click();
/*
            var reassessmenttimefld : any = this.findLocators("xpath","//*[@data-model='model.reassessmentComment']");
            new Button(reassessmenttimefld).safeClick();
            var reassessmenttime1btn : any = this.findLocators("xpath","//div[@class='labelsContainer']/i[contains(text(),'3')]");
            new Button(reassessmenttime1btn).click();
            var reassessmenttime2btn : any = this.findLocators("xpath", "//div[@class='labelsContainer']/i[contains(text(),'30')]");
            new Button(reassessmenttime2btn).click();
    */
            var reassessmentreasonfld : any = this.findLocators("xpath","//div[contains(text(),'Reason for reassessment')]/following::div[1]");
            new Button(reassessmentreasonfld).click();
            var reassessmentreasonbtn : any = this.findLocators("xpath", "//*[contains(text(),'Reason for reassessment')]/following::div[1]/textarea");
            this.Helper_Actions.enterText(reassessmentreasonbtn,'Test Reason - Automation');

        }else {}
    }
/*
    public step_SetReassessment_Date_Option(): void{
        var reassessmentdatefld : any = this.findLocators("xpath","//*[@ng-model='model.reassessmentDateTime'][1]");
        new TextField(reassessmentdatefld).clickOnText();
        var reassessmentdatebtn : any = this.findLocators("xpath", "//div[@class='Months']/span[@class=' Current']");
        new Button(reassessmentdatebtn).click();
    }*/
    /*

     var reassessmenttime1btn : any = this.findLocators("xpath","//div[@class='labelsContainer']/i[contains(text(),'3')]");
     new Button(reassessmenttime1btn).click();
     var reassessmenttime2btn : any = this.findLocators("xpath", "//div[@class='labelsContainer']/i[contains(text(),'30')]");
     new Button(reassessmenttime2btn).click();
     var reassessmentreasonbtn : any = this.findLocators("xpath", "//*[contains(text(),'Reason for reassessment')]/following::div[1]/textarea");
     this.Helper_Actions.enterText(reassessmentreasonbtn,'Test Reason - Automation');
*/
    public step_SetClinicWard_Option(val: string): void{
        var certaintyBtn : any = this.findLocators("xpath","//*[contains(text(),'Clinic/ward')]/following::div[1]");
        new Button(certaintyBtn).click();
        var certaintyList : any = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findTextAndClick(certaintyList,val);
    }



    // Contagious Disease
    public step_SetContagiousDisease_Option(val: string): void{
        var contagiousDiseaseBtn : any = this.findLocators("xpath","//nova-list-box/div/div[2]/div[1]");
        this.Helper_Actions.findSpecificElementAndClick(contagiousDiseaseBtn,2);
        var contagiousDiseaseList : any = this.findLocators("xpath","//div[contains(text(),'"+val+"')]");
        this.Helper_Actions.findElementAndClick(contagiousDiseaseList);
    }


    // Non-Standard Procedure
    public step_SetNonStandardProcedure_Option(val: string): void{
        var nonStandardBtn : any = this.findLocators("xpath","//*[contains(text(),'Non-standard Procedure')]/following::div[2]");
        this.Helper_Actions.findSpecificElementAndClick(nonStandardBtn,2);
        var nonStandardList : any = this.findLocators("xpath","//div[contains(text(),'"+val+"')]");
        this.Helper_Actions.findElementAndClick(nonStandardList);
    }


    // Non-Standard Procedure
    public step_SetTreatment_Option(val: string): void{
        var treatmentBtn : any = this.findLocators("xpath","//nova-list-box[2]/div/div[2]/div[1]");
        this.Helper_Actions.findFirstElementAndClick(treatmentBtn);
        var treatmentList : any = this.findLocators("repeater","option in options track by $index");
        this.Helper_Actions.findFirstElementAndClick(treatmentList);

    }

}