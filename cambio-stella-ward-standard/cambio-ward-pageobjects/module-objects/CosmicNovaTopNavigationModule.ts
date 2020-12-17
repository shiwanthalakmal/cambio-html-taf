/**
 * Created by SLakmal on 3/29/2017.
 */
import {browser} from "protractor";
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-ward-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {CosmicNovaBaseWardPage} from "../page-objects/CosmicNovaBaseWardPage";

const log = Factory.getLogger("Module.CosmicNovaTopNavigationModule");

export class CosmicNovaTopNavigationModule extends PageBase{

    private lblWardDateTime     : any;
    private lblWardLogedUser    : any;
    private lblWardName         : any;
    private btnSettingIcon      : any;
    private btnRefreshIcon      : any;
    private btnSnoozeIcon       : any;
    private btnFullScreenIcon   : any;
    private btnWardListArrow    : any;
    private btnLoginUser        : any;
    private btnLogoutUser       : any;

    private btnTopMenuIcons     : any;

    private btnWardAutomation   : any;
    private btnWardOtherOption  : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaTopNavigationModule;
        this.lblWardDateTime = super.findLocators(element.lblWardDateTime.findBy,element.lblWardDateTime.value);
        this.lblWardLogedUser = super.findLocators(element.lblWardLogedUser.findBy,element.lblWardLogedUser.value);
        this.lblWardName = super.findLocators(element.lblWardName.findBy,element.lblWardName.value);
        this.btnSettingIcon = super.findLocators(element.btnSettingIcon.findBy,element.btnSettingIcon.value);
        this.btnRefreshIcon = super.findLocators(element.btnRefreshIcon.findBy,element.btnRefreshIcon.value);
        this.btnSnoozeIcon = super.findLocators(element.btnSnoozeIcon.findBy,element.btnSnoozeIcon.value);
        this.btnFullScreenIcon = super.findLocators(element.btnFullScreenIcon.findBy,element.btnFullScreenIcon.value);
        this.btnWardListArrow = super.findLocators(element.btnWardListArrow.findBy,element.btnWardListArrow.value);
        this.btnLoginUser = super.findLocators(element.btnLoginUser.findBy,element.btnLoginUser.value);
        this.btnLogoutUser = super.findLocators(element.btnLogoutUser.findBy,element.btnLogoutUser.value);
        this.btnTopMenuIcons = super.findLocators(element.btnTopMenuIcons.findBy,element.btnTopMenuIcons.value);
        this.btnWardAutomation = super.findLocators(element.btnWardAutomation.findBy,element.btnWardAutomation.value);
        this.btnWardOtherOption = super.findLocators(element.btnWardOtherOption.findBy,element.btnWardOtherOption.value);
    }

    /**
     * action: check ward unit header
     * @param unit
     */
    public action_CheckWardUnitTitle(unit: string): void{
        this.Helper_Assertion.expectToEqual(this.lblWardName, unit);
    }

    /**
     * action: click on the select ward arrow icon
     */
    public action_ClickSelectWardArrowIcon(): void{
        new Button(this.btnWardListArrow).click();
        this.Helper_Waits.waitFor(1000);
    }

    /**
     * action: select given ward selection
     * @param ward
     */
    public action_ChooseAnotherWard(ward: string): void{
        this.Helper_Actions.findTextAndClick(this.btnWardOtherOption,ward);
    }

    /**
     * action: check ward logged user
     * @param user
     */
    public action_CheckWardLoggedUser(user: string): void{
        this.Helper_Assertion.expectToEqual(this.lblWardLogedUser, user);
    }

    /**
     * action: click on the admin portal button
     */
    public action_ClickOnAdminButton(): void{
        new Button(this.btnSettingIcon).click();
    }

    /**
     * action: click on the refresh button
     */
    public action_ClickOnRefreshButton(): void{
        new Button(this.btnRefreshIcon).click();
        this.Helper_Waits.waitFor(3000);
    }

    /**
     * action: click on the snooze button
     */
    public action_ClickOnSnoozeButton(): void{
        new Button(this.btnSnoozeIcon).click();
    }

    /**
     * action: click on the full-screen button
     */
    public action_ClickOnFullScreenButton(): void{
        new Button(this.btnFullScreenIcon).click();
        this.Helper_Waits.waitFor(1000);
    }

    public action_ClickOnReLoginButton(): void{
        new Button(this.btnLoginUser).click();
        this.Helper_Waits.waitFor(1000);
    }

    public action_ClickOnReLogoutButton(): void{
        new Button(this.btnLogoutUser).click();
        this.Helper_Waits.waitFor(1000);
    }

    public action_CheckMenuOptionAvailability(tab: string): void{
        this.Helper_Actions.checkTextFromList(this.btnTopMenuIcons,tab);
    }

    public action_CheckMenuOptionNotAvailability(tab: string): void{
        this.Helper_Actions.checkTextNotAvailability(this.btnTopMenuIcons,tab);
    }

    public action_ClickMainMenu(tab: string): void{
        this.Helper_Actions.findTextAndClick(this.btnTopMenuIcons, tab);
        this.Helper_Waits.waitFor(1000);
    }

    public action_CheckTopIconSetWithBasicUser(): void{
        this.Helper_Actions.isDisplayed(this.btnRefreshIcon);
        this.Helper_Actions.isDisplayed(this.btnSnoozeIcon);
        this.Helper_Actions.isDisplayed(this.btnFullScreenIcon);
        this.Helper_Actions.isDisplayed(this.btnLoginUser);
        this.Helper_Actions.isNotDisplayed(this.btnSettingIcon);
    }

    public action_CheckTopIconSetWithAdvanceUser(): void{
        this.Helper_Actions.isDisplayed(this.btnSettingIcon);
        this.Helper_Actions.isDisplayed(this.btnRefreshIcon);
        this.Helper_Actions.isDisplayed(this.btnSnoozeIcon);
        this.Helper_Actions.isDisplayed(this.btnFullScreenIcon);
        this.Helper_Actions.isNotDisplayed(this.btnLoginUser);
    }

}