/**
 * Created by SLakmal on 7/10/2017.
 */
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {Div} from "../../../ui-core/ui-elements/Div";

const log = Factory.getLogger("Page.CosmicNovaAddActivitiesModule");

export class CosmicNovaAddActivitiesModule extends PageBase{

    private txtFldSearch        : any;
    private btnSearchIcon       : any;
    private btnPickActivityIcon : any;


    private divSettingDdlContainers: any;
    private divSettingStatusList: any;
    private divSettingTimeList  : any;
    private divSettingResponsibleList: any;
    private txtFldSettingAddOn  : any;
    private txtFldSettingComment: any;
    private divSettingRepeatList: any;
    private btnActivityAdd      : any;

    private btnsaveall          : any;
    private btnsavethis         : any;


    constructor(){
        super();
        const element = Elements.CosmicNovaAddActivitiesModule;
        this.txtFldSearch           = super.findLocators(element.txtFldSearch.findBy,element.txtFldSearch.value);
        this.btnSearchIcon          = super.findLocators(element.btnSearchIcon.findBy,element.btnSearchIcon.value);
        this.btnPickActivityIcon    = super.findLocators(element.btnPickActivityIcon.findBy,element.btnPickActivityIcon.value);
        this.divSettingDdlContainers= super.findLocators(element.divSettingDdlContainers.findBy,element.divSettingDdlContainers.value);
        this.divSettingStatusList   = super.findLocators(element.divSettingStatusList.findBy,element.divSettingStatusList.value);
        this.divSettingTimeList     = super.findLocators(element.divSettingTimeList.findBy,element.divSettingTimeList.value);
        this.divSettingResponsibleList = super.findLocators(element.divSettingResponsibleList.findBy,element.divSettingResponsibleList.value);
        this.txtFldSettingAddOn     = super.findLocators(element.txtFldSettingAddOn.findBy,element.txtFldSettingAddOn.value);
        this.txtFldSettingComment   = super.findLocators(element.txtFldSettingComment.findBy,element.txtFldSettingComment.value);
        this.divSettingRepeatList   = super.findLocators(element.divSettingRepeatList.findBy,element.divSettingRepeatList.value);
        this.btnActivityAdd         = super.findLocators(element.btnActivityAdd.findBy,element.btnActivityAdd.value);

        this.btnsaveall         = super.findLocators(element.btnsaveall.findBy,element.btnsaveall.value);
        this.btnsavethis         = super.findLocators(element.btnsavethis.findBy,element.btnsavethis.value);


    }

    public step_Search_Specific_Activity(val: string): void{
        new TextField(this.txtFldSearch).enterText(val);
        new Button(this.btnSearchIcon).click();
    }

    public step_Pick_Given_Activity_Record(rec: number): void{
        this.Helper_Actions.findSpecificElementAndClick(this.btnPickActivityIcon, rec);
    }

    public step_Activity_Status_Option(option: string): void{
        this.Helper_Actions.findSpecificElementAndClick(this.divSettingDdlContainers,1);
        this.Helper_Actions.findTextAndClick(this.divSettingStatusList,option);
    }

    public step_Activity_Time_Option(time: string): void{
        this.Helper_Actions.findSpecificElementAndClick(this.divSettingDdlContainers,2);
        this.Helper_Actions.findTextAndClick(this.divSettingTimeList,time);
    }

    public step_Set_TimeOccasion_Fields(one: string, two: string): void{
        this.Helper_Actions.findSpecificElementAndClick(this.divSettingDdlContainers,7);
        var timeList : any = this.findLocators("css","div[ng-click='selectPartOfDay(option)']");
        this.Helper_Actions.findTextAndClick(timeList,one);this.Helper_Waits.waitFor(1000);
        this.Helper_Actions.findSpecificElementAndClick(this.divSettingDdlContainers,8);
        var timeList : any = this.findLocators("css","div[ng-click='selectPartOfDay(option)']");
        this.Helper_Actions.findTextAndClick(timeList,two);
    }

    public step_Activity_Responsible_Option(respo: string): void{
        this.Helper_Actions.findSpecificElementAndClick(this.divSettingDdlContainers,3);
        this.Helper_Actions.findTextAndClick(this.divSettingResponsibleList,respo);
        var btnDone : any = this.findLocators("css","button[ng-click='close()']");
        new Button(btnDone).click();
    }


    public step_Activity_Repeat_Option(time: string): void{
        this.Helper_Actions.findSpecificElementAndClick(this.divSettingDdlContainers,6);
        this.Helper_Actions.findTextAndClick(this.divSettingRepeatList,time);
    }

    public step_Specific_Days_Selection(): void{
        this.Helper_Waits.waitFor(1000);
        var daysList: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var day = new Date();
        var dayAfterTomorrow = daysList[day.getDay()];
        var ulDaysOfWeeks : any = this.findLocators("css","li[ng-click='toggleSelected(option)']");
        this.Helper_Actions.findTextAndClick(ulDaysOfWeeks,dayAfterTomorrow);
        var doneButton : any = this.findLocators("css","button[ng-click='close()']");
        new Button(doneButton).click();
    }

    public step_Activity_Set_AddOn(msg: string): void{
        new TextField(this.txtFldSettingAddOn).enterText(msg);
    }

    public step_Activity_Set_Comment(msg: string): void{
        new TextField(this.txtFldSettingComment).enterText(msg);
    }

    public step_Add_NewActivity_Record(): void{
        new Button(this.btnActivityAdd).click();
    }

    public step_Delete_Activity(type: string): void{
        var btnDelete : any = this.findLocators("css","div[ng-click='openRemovePopup($event)']");
        new Button(btnDelete).click();
        if(type === 'future'){
            var btnFuture : any = this.findLocators("css","button[ng-if='showSaveSeries']");
            new Button(btnFuture).click();
        }
    }
    public step_Delete_Activity_Comment(): void{
        new TextField(this.txtFldSettingComment).clearText();
    }
    public step_Press_Save_All_Button(): void{
        this.Helper_Actions.click(this.btnsaveall);
    }
    public step_Press_Save_This_Only_Button(): void{
        this.Helper_Actions.click(this.btnsavethis);
    }



}