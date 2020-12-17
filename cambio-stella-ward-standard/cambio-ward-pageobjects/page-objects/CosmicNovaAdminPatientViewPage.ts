/**
 * Created by SLakmal on 4/20/2017.
 */
import {PageBase, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";

const log = Factory.getLogger("Page.CosmicNovaAdminPatientViewPage")

export class CosmicNovaAdminPatientViewPage extends PageBase{

    private btnActivitiesTabView       : any;
    private btnPackagesTabView         : any;
    private ddlRoleSelection           : any;
    private ulListOfActivities         : any;
    private ulListOfActivityContents   : any;
    private ulListOfPackages           : any;
    private ulListOfPackagesContents   : any;

    private administrationMenuModule : CosmicNovaAdministrationMenuModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAdminPatientViewPage;
        this.administrationMenuModule   = new CosmicNovaAdministrationMenuModule();
        this.btnActivitiesTabView       = super.findLocators(element.btnActivitiesTabView.findBy, element.btnActivitiesTabView.value);
        this.btnPackagesTabView         = super.findLocators(element.btnPackagesTabView.findBy, element.btnPackagesTabView.value);
        this.ddlRoleSelection           = super.findLocators(element.ddlRoleSelection.findBy, element.ddlRoleSelection.value);
        this.ulListOfActivities         = super.findLocators(element.ulListOfActivities.findBy, element.ulListOfActivities.value);
        this.ulListOfActivityContents   = super.findLocators(element.ulListOfActivityContents.findBy, element.ulListOfActivityContents.value);
        this.ulListOfPackages           = super.findLocators(element.ulListOfPackages.findBy, element.ulListOfPackages.value);
        this.ulListOfPackagesContents   = super.findLocators(element.ulListOfPackagesContents.findBy, element.ulListOfPackagesContents.value);
    }

    /**
     * Step: Press activity list view tab button
     * @returns {CosmicNovaAdminPatientViewPage}
     */
    public step_ChooseActivityTabView(): CosmicNovaAdminPatientViewPage{
        log.info("Step: Press activity list view tab [:step_ChooseActivityTabView:]");
        new Button(this.btnActivitiesTabView).click();
        return new CosmicNovaAdminPatientViewPage();
    }

    /**
     * Step: Press packages list view tab button
     * @returns {CosmicNovaAdminPatientViewPage}
     */
    public step_ChoosePackagesTabView(): CosmicNovaAdminPatientViewPage{
        log.info("Step: Press packages list view tab [:step_ChoosePackagesTabView:]");
        new Button(this.btnPackagesTabView).click();
        return new CosmicNovaAdminPatientViewPage();
    }

    /**
     * Step: select given role using drop-down list
     * @returns {CosmicNovaAdminPatientViewPage}
     */
    public step_SelectRole(): CosmicNovaAdminPatientViewPage{
        log.info("Step: Choose given role category using role drop-down list [:step_SelectRole:]");
        this.Helper_Actions.selectOptionByText(this.ddlRoleSelection,'');
        return new CosmicNovaAdminPatientViewPage();
    }

    /**
     * Step: choose given activities from list view
     * @returns {CosmicNovaAdminPatientViewPage}
     */
    public step_ChooseListOfActivities(acti: string): CosmicNovaAdminPatientViewPage{
        log.info("Step: Select given activity under activity list view [:step_ChooseListOfActivities:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfActivities, acti);
        return new CosmicNovaAdminPatientViewPage();
    }

    /**
     * Validate: verify the record availability under content view
     * @returns {CosmicNovaAdminPatientViewPage}
     */
    public check_And_Validate_ActivitiesContents(content: string): CosmicNovaAdminPatientViewPage{
        log.info("Validate: Verify the given content availability under content list [:check_And_Validate_ActivitiesContents:]");
        this.Helper_Waits.waitFor(2000);
        this.Helper_Actions.checkTextContentFromList(this.ulListOfActivityContents, content);
        return new CosmicNovaAdminPatientViewPage();
    }

    /**
     * Validate: verify the record un-availability under content view
     * @returns {CosmicNovaAdminPatientViewPage}
     */
    public check_And_Validate_NotActivitiesContents(content: string): CosmicNovaAdminPatientViewPage{
        log.info("Validate: Verify the given content availability under content list [:check_And_Validate_ActivitiesContents:]");
        this.Helper_Actions.checkTextNotAvailability(this.ulListOfActivityContents, content);
        return new CosmicNovaAdminPatientViewPage();
    }

    /**
     * Step: choose given packages from list view
     * @returns {CosmicNovaAdminPatientViewPage}
     */
    public step_ChooseListOfPackages(pack: string): CosmicNovaAdminPatientViewPage{
        log.info("Step: Select given package under package list view [:step_ChooseListOfPackages:]");
        new Button(this.btnPackagesTabView).click();this.Helper_Waits.waitFor(1000);
        this.Helper_Actions.findContentAndClick(this.ulListOfPackages, pack);
        return new CosmicNovaAdminPatientViewPage();
    }

}