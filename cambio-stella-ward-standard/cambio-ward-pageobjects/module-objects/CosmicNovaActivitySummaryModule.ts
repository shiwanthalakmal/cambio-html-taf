/**
 * Created by SLakmal on 5/30/2017.
 */
import {browser, element, by} from "protractor";
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-ward-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {FrameworkException} from "../../../ui-utils/ui-exceptions/FrameworkException";
import {TextField} from "../../../ui-core/ui-elements/TextField";

const log = Factory.getLogger("Module.CosmicNovaActivitySummaryModule");

export class CosmicNovaActivitySummaryModule extends PageBase {

    constructor() {
        super();
        const element = Elements.CosmicNovaActivitySummaryModule;
    }

    public action_PerformParentActivityAdding(day: number): void{
        var parentActivityList : any = element.all(by.cssContainingText(".Header.PatientActivities","Patient's Activities")).$$('a');
        this.Helper_Actions.findSpecificElementAndClick(parentActivityList,day);this.Helper_Waits.waitFor(1000);
    }

    public action_PerformRoleActivityAdding(role: string, day: number): void{
        var roleActivityList : any = element.all(by.cssContainingText(".Header.Role",role)).$$('a');
        this.Helper_Actions.findSpecificElementAndClick(roleActivityList,day);this.Helper_Waits.waitFor(1000);
    }

    public action_CheckGivenActivityAvailabilityUnderParentActivity(activity: string, day: number): void{
        var activityList : any = element.all(by.css(".NovaTaskMarkerListItem.NORMAL"));
        this.Helper_Actions.checkTextFromList(activityList,activity);
    }

    public action_CheckGivenActivityAvailabilityUnderRoleActivity(activity: string, day: number): void{
        var activityList : any = element.all(by.xpath("//div[@nova-open-popup='TaskMarkerDialog']"));
        this.Helper_Actions.checkTextContentFromList(activityList,activity);
    }

    public action_SelectGivenActivityUnderRoleView(activity: string): void{
        var activityList : any = element.all(by.css("div[task-marker='taskMarker']"));
        this.Helper_Actions.findTextAndClick(activityList,activity);
    }

    public action_SelectSpecificActivityUnderRoleView(date: number): void{
        var activityList : any = element.all(by.css("div[task-marker='taskMarker']"));
        this.Helper_Actions.findFirstElementAndClick(activityList);
    }

    public action_SelectRandomActivityUnderRoleView(): void{
        var activityList : any = element.all(by.css("div[task-marker='taskMarker']"));
        this.Helper_Actions.findFirstElementAndClick(activityList);
    }

    public action_CheckActivityCurrrentStatusIcon(state: string): void{
        var activityList : any = element.all(by.css(".NovaTaskMarkerListItem."+state));
        this.Helper_Actions.isDisplayed(activityList);
    }

    public action_PressActivityDeleteButton(): void{
        var removeButton : any = element.all(by.css("div[ng-click='openRemovePopup($event)']"));
        new Button(removeButton).click();
    }

    public action_PressRecurrenceActivityDeleteButton(): void{
        var removeButton : any = element.all(by.css("div[ng-click='openRemovePopup($event)']"));
        new Button(removeButton).click();
        var recurrenceRemoveButton : any = element.all(by.css("button[ng-click='saveSeries()']"));
        new Button(recurrenceRemoveButton).click();
    }

    public action_PressRecurrenceActivityThisOnlyDeleteButton(): void{
        var removeButton : any = element.all(by.css("div[ng-click='openRemovePopup($event)']"));
        new Button(removeButton).click();
        var thisOnlyRemoveButton : any = element.all(by.css("button[ng-click='saveTaskOnly()']"));
        new Button(thisOnlyRemoveButton).click();
    }

    public action_SearchActivityOrPackageInPopup(search: string): void{
        var searchActivity : any = element.all(by.xpath("//form/div/nova-text-box//div[2]/textarea"));
        new TextField(searchActivity).enterText(search);
    }

    public action_EnterFreeTextValue(text: string): void{
        var freeTextActivity : any = element.all(by.xpath("//ul/form/nova-text-box/div/div[2]/textarea"));
        new TextField(freeTextActivity).enterText(text);
    }

    public action_SelectGivenPackageOrActivityFromActivityPopup(pack: string): void{
        var packageListPopup : any = element.all(by.css("li[ng-click='toggleSelected(template)']"));
        this.Helper_Actions.findContentAndClick(packageListPopup,pack);
    }

    public action_SaveActivitySelection(): void{
        var saveButton : any = element.all(by.css("button[ng-click='ok($event)']"));
        new Button(saveButton).click();
    }

    public action_SaveActivitySettings(): void{
        var saveButton : any = element.all(by.css("button[ng-click='save($event)']"));
        new Button(saveButton).click();
    }

    public action_changeActivityStatusInPopup(status: string): void{
        var divStatus : any = element.all(by.xpath("//nova-list-box[1]//div[2]/div[1]"));
        new Button(divStatus).click();
        var statusList : any = element.all(by.css("div[ng-click='setSelected(option)']"));
        this.Helper_Actions.findTextAndClick(statusList, status);
    }

    public action_changeActivityDateInPopup(date: string): void{
        var divDate : any = element.all(by.xpath("//nova-popup-box[1]//div[2]/textarea"));
        new Button(divDate).click();
        //[Pending]
    }

    public action_changeActivityTimeInPopup(time: string): void{
        var divTime : any = element.all(by.xpath("//nova-popup-box[1]//div[2]/textarea"));
        this.Helper_Actions.findFirstElementAndClick(divTime);
        var ulTimeRange : any = element.all(by.css("div[ng-click='selectPartOfDay(option)']"));
        this.Helper_Actions.findTextAndClick(ulTimeRange, time);
    }

    public action_EnterActivityAddOn(addon: string): void{
        var divAddOn : any = element.all(by.xpath("//nova-text-box[1]//div[2]/textarea"));
        new TextField(divAddOn).enterText(addon);
    }

    public action_EnterActivityComment(comment: string): void{
        var divAddOn : any = element.all(by.xpath("//nova-text-box[2]//div[2]/textarea"));
        new TextField(divAddOn).enterText(comment);
    }

    public action_CheckActivityCommentIcon(): void{
        var divComment : any = element.all(by.css(".Comment.item"));
        this.Helper_Actions.isDisplayed(divComment);
    }

    public action_GetActivityAppliedDatesList(count: number, text: string): void{
        var activityList : any = element.all(by.css("div[task-marker='taskMarker']"));
        this.Helper_Actions.findNoOfElementTextMatch(activityList,text, count);
    }

    public action_SelectActivityRepeatSelection(selection: string): void{
        var divRelate : any = element.all(by.xpath("//nova-popup-box[2]//div[2]/textarea"));
        this.Helper_Actions.findFirstElementAndClick(divRelate);
        var ulRepeatList : any = element.all(by.xpath("//ul[@class='SelectionListItems']/li"));
        this.Helper_Actions.findContentAndClick(ulRepeatList,selection);
        if(selection === 'Specific days'){
            var daysList: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var day = new Date();
            var ulDaysOfWeeks : any = element.all(by.css("li[ng-click='toggleSelected(option)']"));
            this.Helper_Actions.findContentAndClick(ulDaysOfWeeks,day.toString().slice(0,3));
            var doneButton : any = element.all(by.css("button[ng-click='close()']"));
            new Button(doneButton).click();
        }else if(selection === 'Several times daily'){
            var txtOccasionOne : any = element.all(by.xpath("//div[1]/nova-popup-box[1]//textarea"));
            var txtOccasionTwo : any = element.all(by.xpath("//div[1]/nova-popup-box[2]//textarea"));
            new Button(txtOccasionOne).click();
            var ulTimeRange : any = element.all(by.css("div[ng-click='selectPartOfDay(option)']"));
            this.Helper_Actions.findTextAndClick(ulTimeRange, 'PM');
            new Button(txtOccasionTwo).click();
            var ulTimeRange : any = element.all(by.css("div[ng-click='selectPartOfDay(option)']"));
            this.Helper_Actions.findTextAndClick(ulTimeRange, 'AM');
        }else{}
    }

    public action_ChangeActivityResponsibleRole(role: string): void{
        var divResponsible : any = element.all(by.xpath("//nova-list-box[2]//div[2]"));
        this.Helper_Actions.findFirstElementAndClick(divResponsible);
        var ulRoleList : any = element.all(by.css("li[ng-click='toggleSelected(option)']"));
        this.Helper_Actions.findContentAndClick(ulRoleList,role);
        var doneButton : any = element.all(by.css("button[ng-click='close()']"));
        new Button(doneButton).click(); this.Helper_Waits.waitFor(1000);
    }

    public action_EnterSpecificTimeIntervalForActivities(time: string): void{
        var divTimeInterval : any = element.all(by.xpath("//nova-numeric-input//input"));
        new TextField(divTimeInterval).enterText(time);
    }
}