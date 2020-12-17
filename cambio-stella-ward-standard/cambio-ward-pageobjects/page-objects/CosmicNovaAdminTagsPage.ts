/**
 * Created by SLakmal on 4/19/2017.
 */
import {PageBase, TextField, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";

const log = Factory.getLogger("Page.CosmicNovaAdminTagsPage")

export class CosmicNovaAdminTagsPage extends PageBase{

    private btnTagView      : any;
    private btnSubtagView   : any;
    private ulListOfItems   : any;
    private btnDeleteItem   : any;
    private btnDeleteItemNo : any;
    private btnDeleteItemYes: any;
    private btnAdd          : any;
    private txtFldUpdateName: any;

    private administrationMenuModule : CosmicNovaAdministrationMenuModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAdminTagsPage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.btnTagView         = super.findLocators(element.btnTagView.findBy, element.btnTagView.value);
        this.btnSubtagView      = super.findLocators(element.btnSubtagView.findBy, element.btnSubtagView.value);
        this.ulListOfItems      = super.findLocators(element.ulListOfItems.findBy, element.ulListOfItems.value);
        this.btnDeleteItem      = super.findLocators(element.btnDeleteItem.findBy, element.btnDeleteItem.value);
        this.btnDeleteItemNo    = super.findLocators(element.btnDeleteItemNo.findBy, element.btnDeleteItemNo.value);
        this.btnDeleteItemYes   = super.findLocators(element.btnDeleteItemYes.findBy, element.btnDeleteItemYes.value);
        this.btnAdd             = super.findLocators(element.btnAdd.findBy, element.btnAdd.value);
        this.txtFldUpdateName   = super.findLocators(element.txtFldUpdateName.findBy, element.txtFldUpdateName.value);
    }

    /**
     * Step: press tag view tab button
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_PressTagsGridTab(): CosmicNovaAdminTagsPage{
        log.info("Step: Press tag grid view tab button [:step_PressTagsGridTab:]");
        new Button(this.btnTagView).click();
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: press sub-tag view tab button
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_PressSubTagsGridTab(): CosmicNovaAdminTagsPage{
        log.info("Step: Press sub-tag grid view sub-tab button [:step_PressSubTagsGridTab:]");
        new Button(this.btnSubtagView).click();
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: choose tag view given record
     * @param tag
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_ChooseTagsInList(tag: string): CosmicNovaAdminTagsPage{
        log.info("Step: Select given tag item under list [:step_ChooseTagsInList:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfItems,tag);
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: press new tag add button
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_PressNewTagsAddButton(): CosmicNovaAdminTagsPage{
        log.info("Step: Press tag add new button [:step_PressNewTagsAddButton:]");
        new Button(this.btnAdd).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: perform delete for the given tag record and ignore the deletion
     * @param record
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_DeleteTagIgnore(record: number): CosmicNovaAdminTagsPage{
        log.info("Step: Existing tag make delete and reject deletion flow [:step_DeleteTagIgnore:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteItem,record);
        new Button(this.btnDeleteItemNo).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: perform delete for the given tag record and accept the deletion
     * @param record
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_DeleteTagAccept(record: number): CosmicNovaAdminTagsPage{
        log.info("Step: Existing tag make delete and accept deletion flow [:step_DeleteTagAccept:]");
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteItem,record);
        new Button(this.btnDeleteItemYes).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: press new sub-tag add button
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_PressNewSubTagsAddButton(): CosmicNovaAdminTagsPage{
        log.info("Step: Press sub-tag add new button [:step_PressNewSubTagsAddButton:]");
        new Button(this.btnAdd).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: enter new tag name
     * @param tag
     * @returns {CosmicNovaAdminTagsPage}
     */
    public step_EnterNewName(tag: string): CosmicNovaAdminTagsPage{
        log.info("Step: Enter new or update existing tag or sub-tag name [:step_EnterNewName:]");
        new TextField(this.txtFldUpdateName).enterText(tag);
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Validate: verify the tag list availability
     * @param tag
     * @returns {CosmicNovaAdminTagsPage}
     */
    public check_And_Validate_TagsAvailability(tag: string): CosmicNovaAdminTagsPage{
        log.info("Validate: Verify the given tag availability under tag list [:check_And_Validate_TagsAvailability:]");
        this.Helper_Actions.checkTextFromList(this.ulListOfItems, tag)
        return new CosmicNovaAdminTagsPage();
    }

    public check_And_Validate_DuplicateTagsAdded(): CosmicNovaAdminTagsPage{
        //[Pending]
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: press admin unit page cancel button and accept
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_PressCancelButtonAndAccept(): CosmicNovaBaseWardPage{
        log.info("Step: Press page cancel button and accept [:step_PressCancelButtonAndAccept:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelAccept();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaBaseWardPage();
    }

    /**
     * Step: press admin unit page cancel button and ignore
     * @returns {CosmicNovaAdminUnitPage}
     */
    public step_PressCancelButtonAndIgnore(): CosmicNovaAdminTagsPage{
        log.info("Step: Press page save button and reject [:step_PressCancelButtonAndIgnore:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelIgnore();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminTagsPage();
    }

    /**
     * Step: press admin unit page save button
     * @returns {CosmicNovaBaseWardPage}
     */
    public step_PressSaveButton(): CosmicNovaBaseWardPage{
        log.info("Step: Press page save button [:step_PressSaveButton:]");
        this.administrationMenuModule.action_ClickOnSave();
        return new CosmicNovaBaseWardPage();
    }

}