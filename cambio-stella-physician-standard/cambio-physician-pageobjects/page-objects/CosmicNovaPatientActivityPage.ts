/**
 * Created by SLakmal on 7/11/2017.
 */
import {PageBase} from "../../../ui-core/ui-base-page/PageBase";
import {Factory} from "../../ConfigLog4j";
import Elements from "../../cambio-physician-tests/resources/elements/element-loader.json";
import {CosmicNovaSummayViewHeaderModule} from "../module-objects/CosmicNovaSummayViewHeaderModule";
import {CosmicNovaAddActivitiesModule} from "../module-objects/CosmicNovaAddActivitiesModule";
import {CosmicNovaBasePhysicianPage} from "./CosmicNovaBasePhysicianPage";
import {browser} from "protractor";
import {Div} from "../../../ui-core/ui-elements/Div";
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
/**
 * Created by SLakmal on 7/5/2017.
 */

const log = Factory.getLogger("Page.CosmicNovaPatientActivityPage")

export class CosmicNovaPatientActivityPage extends PageBase {

    private lblActivityTitle: any;
    private lnkPendingActivityList: any;
    private lblRole         : any;
    private fldResprole     : any;

    private summaryHeaderModule: CosmicNovaSummayViewHeaderModule;
    private addingActivityPanel : CosmicNovaAddActivitiesModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaPatientActivityPage;
        this.addingActivityPanel = new CosmicNovaAddActivitiesModule();
        this.summaryHeaderModule = new CosmicNovaSummayViewHeaderModule();
        this.lblActivityTitle = super.findLocators(element.lblActivityTitle.findBy, element.lblActivityTitle.value);
        this.lnkPendingActivityList = super.findLocators(element.lnkPendingActivityList.findBy, element.lnkPendingActivityList.value);
        this.lblRole = super.findLocators(element.lblRole.findBy, element.lblRole.value);
        this.fldResprole = super.findLocators(element.fldResprole.findBy, element.fldResprole.value);

    }

    /**
     * Step: Close the patient summary view
     * @returns {CosmicNovaBasePhysicianPage}
     */
    public step_Close_Patient_Summary_View(): CosmicNovaBasePhysicianPage{
        this.summaryHeaderModule.step_Close_Patient_Summary_View();
        return new CosmicNovaBasePhysicianPage();
    }

    /**
     * Validate: Verify the patient summary view title
     * @returns {CosmicNovaPatientActivityPage}
     */
    public check_And_Validate_SummaryPageTitle(): CosmicNovaPatientActivityPage {
        this.Helper_Actions.checkTextContentFromList(this.lblActivityTitle, "Planning");
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Select given activity record
     * @param acti
     * @returns {CosmicNovaPatientActivityPage}
     */
    public step_Select_GivenActivity(acti: string): CosmicNovaPatientActivityPage{
        this.Helper_Actions.findTextAndClick(this.lnkPendingActivityList, acti);
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Delete existing single activity record
     * @param acti
     * @returns {CosmicNovaPatientActivityPage}
     */
    public ste_Delete_Existing_Activity_Record(acti: string): CosmicNovaPatientActivityPage{
        this.Helper_Actions.findTextAndClick(this.lnkPendingActivityList, acti);
        this.addingActivityPanel.step_Delete_Activity('this');
        log.info("Step: Deleted Today Activity")
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Delete existing activity with future records
     * @param acti
     * @returns {CosmicNovaPatientActivityPage}
     */
    public ste_Delete_Existing_Future_Activity_Record(acti: string): CosmicNovaPatientActivityPage{
        this.Helper_Actions.findContentAndClick(this.lnkPendingActivityList, acti);
        this.addingActivityPanel.step_Delete_Activity('future');
        return new CosmicNovaPatientActivityPage();
    }
    public step_Delete_Existing_Future_Activities_Tomorrow_Onwards(val: string): CosmicNovaPatientActivityPage{
        var btnnextday : any = this.findLocators("xpath", "//a[@class='NavButton Next']");
        new Button(btnnextday).click();
        this.Helper_Actions.findContentAndClick(this.lnkPendingActivityList, val);
        this.addingActivityPanel.step_Delete_Activity('future');
        log.info("Step: Deleted Future Activities as well")
        return new CosmicNovaPatientActivityPage();

    }

    /**
     * Step: Perform existing activity by press and hold on it
     * @param activity
     * @returns {CosmicNovaPatientActivityPage}
     */
    public step_Perform_Existing_GivenActivity(activity: string): CosmicNovaPatientActivityPage{
        var performBtn : any = this.findLocator("css",".NovaTaskBullet");
        browser.actions().mouseDown(performBtn).perform();
        browser.sleep(3000);
        browser.actions().mouseUp(performBtn).perform();
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Validate: Verify the given activity availability under summary view
     * @param acti
     * @returns {CosmicNovaPatientActivityPage}
     */
    public check_And_Validate_Activity_Availability(acti: string): CosmicNovaPatientActivityPage{
        this.Helper_Actions.checkTextContentFromList(this.lnkPendingActivityList, acti);
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Validate: Verify the given activity npt availability under summary view
     * @param acti
     * @returns {CosmicNovaPatientActivityPage}
     */
    public check_And_Validate_Activity_Not_Availability(acti: string): CosmicNovaPatientActivityPage{
        this.Helper_Actions.checkTextNotAvailability(this.lnkPendingActivityList, acti);
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Make sign activity changes
     * @returns {CosmicNovaPatientActivityPage}
     */
    public step_MakeSignActivityChanges(): CosmicNovaPatientActivityPage{
        var signBtn : any = this.findLocators("css",".sign");
        new Button(signBtn).click();
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Make sign activity changes for recurrance activity
     * @returns {CosmicNovaPatientActivityPage}
     */
    public step_MakeSignActivityChangesForRecurrence(option : string): CosmicNovaPatientActivityPage{
        var signBtn : any = this.findLocators("css",".sign");
        new Button(signBtn).click();
        if(option === 'this'){
            var signForThisBtn : any = this.findLocators("xpath","//*[contains(text(),'Save for this one only')]");
            new Button(signForThisBtn).click();
        }else if(option === 'all'){
            var signForAllBtn : any = this.findLocators("xpath","//*[contains(text(),'Save for all future')]");
            new Button(signForAllBtn).click();
        }else{}
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Set activity date and time details
     * @param date
     * @param time
     * @returns {CosmicNovaPatientActivityPage}
     */
    public step_Change_ExistingActivity_Date_Time(date: string, time: string): CosmicNovaPatientActivityPage{
        if(date === 'empty' && time === 'empty'){
            var dateDiv : any = this.findLocators("xpath","//*[contains(text(),'Date')]/following::div[1]");
            this.Helper_Actions.findElementAndClick(dateDiv);
            var clearBtn : any = this.findLocators("css",".Clear");
            this.Helper_Actions.findElementAndClick(clearBtn);this.Helper_Waits.waitFor(2000);
        }
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Set activity repeat option
     * @param repeat
     * @returns {CosmicNovaPatientActivityPage}
     */
    public step_Set_ActivityRepeat_Option(repeat: string): CosmicNovaPatientActivityPage{
        var repeatDiv : any = this.findLocators("xpath","//*[contains(text(),'Repeat')]/following::div[1]");
        this.Helper_Actions.findElementAndClick(repeatDiv);
        var repeatList : any = this.findLocators("css",".SelectionListItems>li");
        this.Helper_Actions.findTextAndClick(repeatList,repeat);
        log.info("Step: Activity Converted to Recurrence");
        return new CosmicNovaPatientActivityPage();
    }
    public step_Activity_Repeat_Option_Specific_Days(): CosmicNovaPatientActivityPage{
        this.addingActivityPanel.step_Specific_Days_Selection();
        return new CosmicNovaPatientActivityPage();
    }

    /**
     * Step: Set add-on information
     * @param add
     * @returns {CosmicNovaPatientActivityPage}
     */
    public step_Set_ActivityAddOn(add: string): CosmicNovaPatientActivityPage{
        var addOnTxt : any = this.findLocators("xpath","//*[contains(text(),'Add-on')]/following::div[1]/textarea");
        new TextField(addOnTxt).enterText(add);
        return new CosmicNovaPatientActivityPage();
    }
    public step_Set_Activity_Comment_Activity_Page(val: string): CosmicNovaPatientActivityPage{
        var commentTxt : any = this.findLocators("xpath", "//*[contains(text(),'Comment')]/following::div[1]/textarea");
        new TextField(commentTxt).enterText(val);
        log.info("Step: Comment Entered to Today instance")
        return new CosmicNovaPatientActivityPage();
    }
    public step_Clear_Activity_Comment_From_Activity_Side_Panel(): CosmicNovaPatientActivityPage{
        this.addingActivityPanel.step_Delete_Activity_Comment();
        return new CosmicNovaPatientActivityPage();
    }
    public step_Validate_Activity_Role_In_Activity_Page(val: string): CosmicNovaPatientActivityPage{
        this.Helper_Actions.checkTextAvailability(this.lblRole, val);
        return new CosmicNovaPatientActivityPage();
    }
    public step_De_Select_Current_Role_Activity_Page(val): CosmicNovaPatientActivityPage{
        this.addingActivityPanel.step_Activity_Responsible_Option(val);
        return new CosmicNovaPatientActivityPage();
    }
    public step_Change_Responsible_Role_Activity_Side_Panel(val): CosmicNovaPatientActivityPage{
        this.addingActivityPanel.step_Activity_Responsible_Option(val);
        return new CosmicNovaPatientActivityPage();
    }
    public step_Save_All_Or_This_Only_Activity_Side_Panel(val: string): CosmicNovaPatientActivityPage{
        if (val == 'All'){
            this.addingActivityPanel.step_Press_Save_All_Button();
        }else if (val == 'This'){
            this.addingActivityPanel.step_Press_Save_This_Only_Button();
        }else {}
        return new CosmicNovaPatientActivityPage();

    }
}