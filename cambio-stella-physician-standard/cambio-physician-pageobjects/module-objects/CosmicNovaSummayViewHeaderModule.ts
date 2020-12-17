/**
 * Created by SLakmal on 7/4/2017.
 */
import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {CosmicNovaPatientSummaryPage} from "../page-objects/CosmicNovaPatientSummaryPage";
import {CosmicNovaLeftSubMenuModule} from "./CosmicNovaLeftSubMenuModule";
import {Div} from "../../../ui-core/ui-elements/Div";
import {CosmicNovaAttentionSignalCreateModule} from "./CosmicNovaAttentionSignalCreateModule";

import {CosmicNovaAddMicrobiologyModule} from "./CosmicNovaAddMicrobiologyModule";
import {WorkingMemory} from "../../../ui-utils/ui-memory/WorkingMemory";



export class CosmicNovaSummayViewHeaderModule extends PageBase {

    private btnTopMenuButton            : any;
    private lblContactAlertIcon         : any;
    private lblPatientDetails           : any;
    private btnCloseSummaryView         : any;
    private btnRoundStatus              : any;
    private btnBedIcon                  : any;
    private btnTagsView                 : any;
    private btnPatientAddingPanel       : any;
    private btnAttentionSignal          : any;
    private btnInfoShared               : any;
    private lblProtectedID              : any;
    private btnInterpreter              : any;
    private lblInterpreterpopup         : any;
    private lblContactAlertInfection    : any;
    private lblContactAlertDNR          : any;

    private lblMedicalRecord            : any;


    private leftSubMenuPanel : CosmicNovaLeftSubMenuModule;


    constructor() {
        super();
        const element = Elements.CosmicNovaSummayViewHeaderModule;
        this.leftSubMenuPanel = new CosmicNovaLeftSubMenuModule();
        this.btnTopMenuButton       = super.findLocators(element.btnTopMenuButton.findBy, element.btnTopMenuButton.value);
        this.lblContactAlertIcon    = super.findLocators(element.lblContactAlertIcon.findBy, element.lblContactAlertIcon.value);
        this.lblPatientDetails      = super.findLocators(element.lblPatientDetails.findBy, element.lblPatientDetails.value);
        this.lblProtectedID         = super.findLocators(element.lblProtectedID.findBy,element.lblProtectedID.value);
        this.btnCloseSummaryView    = super.findLocators(element.btnCloseSummaryView.findBy, element.btnCloseSummaryView.value);
        this.btnRoundStatus         = super.findLocators(element.btnRoundStatus.findBy, element.btnRoundStatus.value);
        this.btnBedIcon             = super.findLocators(element.btnBedIcon.findBy, element.btnBedIcon.value);
        this.btnTagsView            = super.findLocators(element.btnTagsView.findBy, element.btnTagsView.value);
        this.btnPatientAddingPanel  = super.findLocators(element.btnPatientAddingPanel.findBy, element.btnPatientAddingPanel.value);
        this.btnAttentionSignal     = super.findLocators(element.btnAttentionSignal.findBy, element.btnAttentionSignal.value);
        this.btnInfoShared          = super.findLocators(element.btnInfoShared.findBy,element.btnInfoShared.value);
        this.btnInterpreter         = super.findLocators(element.btnInterpreter.findBy,element.btnInterpreter.value);
        this.lblInterpreterpopup    = super.findLocators(element.lblInterpreterpopup.findBy,element.lblInterpreterpopup.value);
        this.lblContactAlertInfection        = super.findLocators(element.lblContactAlertInfection.findBy, element.lblContactAlertInfection.value);
        this.lblContactAlertDNR              = super.findLocators(element.lblContactAlertDNR.findBy,element.lblContactAlertDNR.value);

        this.lblMedicalRecord= super.findLocators(element.lblMedicalRecord.findBy,element.lblMedicalRecord.value);



    }

    public step_Click_On_The_Top_Menu(): CosmicNovaPatientSummaryPage{
        new Button(this.btnTopMenuButton).click();
        return new CosmicNovaPatientSummaryPage();
    }

    public step_Close_Patient_Summary_View(): void{
        new Button(this.btnCloseSummaryView).click();

    }
    public step_Click_On_The_AttentionSignal(): void{
        new Button(this.btnAttentionSignal).click();
    }

    public step_Create_New_AttentionSignal(): void{
        var divCreateNew : any = this.findLocators("css",".header.newWarning");
        new Div(divCreateNew).click();
    }

    public step_SignalRecordSectionByCategory(cate: string, record: string): void{
        var recordsList : any ;
        if(cate === 'treatment & condition'){
            recordsList = this.findLocators("xpath","//div[@ng-click='openTreatmentAndConditionSidePanel(entry, $event)']");
            this.Helper_Actions.findContentAndClick(recordsList,record);
        }else if(cate === 'non-standard procedure'){
            recordsList = this.findLocators("xpath","//div[@ng-click='openNonStandardProcedureSidePanel(entry, $event)']");
            this.Helper_Actions.findContentAndClick(recordsList,record);
        }else if(cate === 'contagious disease'){
            recordsList = this.findLocators("xpath","//div[@ng-click='openInfectionsDiseaseSidePanel(entry, $event)']");
            this.Helper_Actions.findContentAndClick(recordsList,record);
        }else if(cate === 'hypersensitivity'){
            recordsList = this.findLocators("xpath","//div[@ng-click='openHyperSensitivitySidePanel(entry, $event)']");
            this.Helper_Actions.findContentAndClick(recordsList,record);
        }else{}
    }

//-------------------
    public step_Validate_Patient_Name(patientName: string): void{

        var lblfistName : any = this.findLocators("xpath","//div[@class='TopRow']");
        this.Helper_Actions.checkTextAvailability(lblfistName,patientName);

    }
    public step_Validate_Patient_Id(patientId: string): void{

        var lblPatientId : any = this.findLocators("xpath","//div[@class='BottomRow']/span[1]");
        this.Helper_Actions.checkTextAvailability(lblPatientId,patientId);

    }
    public step_Validate_AttentionSignal(): void{
        this.Helper_Actions.isPresent(this.btnAttentionSignal);

    }
    public step_Validate_ContactAlert(): void{
        this.Helper_Actions.isPresent(this.lblContactAlertIcon);
    }
    public step_Validate_ContactAlert_Infection_Popup(): void{
        this.Helper_Actions.isPresent(this.lblContactAlertInfection)
    }
    public step_Validate_ContactAlert_DNR_Popup(): void{
        this.Helper_Actions.isPresent(this.lblContactAlertDNR)
    }
    public step_Press_ContactAlert(): void{
        this.Helper_Actions.click(this.lblContactAlertIcon);
    }
    public step_Validate_StatusICon(): void{
        this.Helper_Actions.isPresent(this.btnRoundStatus);
    }
    public step_Validate_BedClip(): void{
        this.Helper_Actions.isPresent(this.btnBedIcon);
    }
    public step_Validate_Tags(): void{
        this.Helper_Actions.isPresent(this.btnTagsView);
    }
    public  step_Validate_InfoIcon(): void{
        this.Helper_Actions.isPresent(this.btnInfoShared);
    }
    public step_Validate_AddinPanel(): void{
        this.Helper_Actions.isPresent(this.btnPatientAddingPanel);
    }
    public step_Validate_Protected_ID(): void{
        this.Helper_Actions.isPresent(this.lblProtectedID);
    }
    public step_Press_InterpreterIcon(): void{
        this.Helper_Actions.click(this.btnInterpreter);
        this.Helper_Waits.waitFor(2000);
    }
    public step_Validate_Interpreter_Popup(record: string): void{
        if(record == 'Language' ){
           var lblLanguage : any = this.findLocators("xpath","(//div[@class='information-line'])[1]");
           this.Helper_Actions.isPresent(lblLanguage);
           }
        else if(record == 'Commethod'){
            var lblcommethod: any = this.findLocators("xpath","(//div[@class='information-line'])[2]");
            this.Helper_Actions.isPresent(lblcommethod);
            }
        else if(record == 'Comment') {
            var lblcomment: any = this.findLocators("xpath","(//div[@class='information-line'])[3]");
            this.Helper_Actions.isPresent(lblcomment);
        }
        else {}
    }




    public step_Press_PanelLogout(): void{

    }

    public step_Press_PanelChangeUnit(): void{

    }
    public step_Click_On_Main_Menu(): void{
        this.Helper_Actions.click(this.btnTopMenuButton);
    }


    public step_Press_Summary_Option(): void{
        //this.action_Choose_SideMenu('Summary');
    }

    public step_Press_Activity_Option(): void{
        this.leftSubMenuPanel.step_Choose_SubMenu_Navigation('Activities');
    }

    public step_Press_Clinical_Option(): void{
        //this.action_Choose_SideMenu('Clinical parameters');
    }

    public step_Press_MedicalRec_Option(): void{
        this.Helper_Actions.click(this.lblMedicalRecord);
        //this.action_Choose_SideMenu('Medical record');
    }

    public step_Press_Orders_Option(): void{
        //this.action_Choose_SideMenu('Orders');
    }

    public step_Press_Medication_Option(): void{
        //this.action_Choose_SideMenu('Medication');
    }

    public step_MoveTo_Adding_View():void{
        this.Helper_Actions.findElementAndClick(this.btnPatientAddingPanel);
    }

    // ---------------------------------------


}