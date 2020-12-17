/**
 * Created by SLakmal on 3/30/2017.
 */
import {browser} from "protractor";
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-ward-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {FrameworkException} from "../../../ui-utils/ui-exceptions/FrameworkException";

const log = Factory.getLogger("Module.CosmicNovaAdministrationMenuModule");

export class CosmicNovaAdministrationMenuModule extends PageBase{

    private lblHeaderTitle  : any;
    private btnRightMenu    : any;
    private btnCancel       : any;
    private btnSave         : any;
    private btnCancelAccept : any;
    private btnCancelIgnore : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaAdministrationMenuModule;
        this.lblHeaderTitle = super.findLocators(element.lblHeaderTitle.findBy,element.lblHeaderTitle.value);
        this.btnRightMenu = super.findLocators(element.btnRightMenu.findBy,element.btnRightMenu.value);
        this.btnCancel = super.findLocators(element.btnCancel.findBy,element.btnCancel.value);
        this.btnSave = super.findLocators(element.btnSave.findBy,element.btnSave.value);
        this.btnCancelAccept = super.findLocators(element.btnCancelAccept.findBy,element.btnCancelAccept.value);
        this.btnCancelIgnore = super.findLocators(element.btnCancelIgnore.findBy,element.btnCancelIgnore.value);
    }

    /**
     * action: check admin portal header title
     * @param title
     */
    public action_CheckAdminPortalHeader(title: string): void{
        this.Helper_Assertion.expectToEqual(this.lblHeaderTitle, title);
    }

    /**
     * action: choose admin right menu by given option
     * @param option
     */
    public action_ChooseRightMenu(option: string): void{
        new Button(this.btnRightMenu).click();
        // [Pending]
    }

    /**
     * action: click on the cancel button
     */
    public action_ClickOnCancel(): void{
        new Button(this.btnCancel).click();
    }

    /**
     * action: click on the cancel accept button
     */
    public action_ClickOnCancelAccept(): void{
        new Button(this.btnCancelAccept).click();
        //[Pending]
    }

    /**
     * action: click on the cancel ignore button
     */
    public action_ClickOnCancelIgnore(): void{
        new Button(this.btnCancelIgnore).click();
        //[Pending]
    }

    /**
     * action: click on the save button
     */
    public action_ClickOnSave(): void{
        new Button(this.btnSave).click();
    }

    public action_CheckSaveButtonDisable(): void{
        this.Helper_Actions.isDisabled(this.btnSave);
    }

    public action_ChooseRightPanelOption(tab: string): void{
        switch (tab) {
            case "Unit":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Staff":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Roles":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Information Markers":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Activities":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Packages":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Tags":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Status":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Patient View Summary":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            case "Ward View Summary":
                this.Helper_Actions.findTextAndClick(this.btnRightMenu, tab);
                break;
            default:
                throw new FrameworkException("Sorry, that "+ tab +" option is not in the system yet!");
        }
    }
}