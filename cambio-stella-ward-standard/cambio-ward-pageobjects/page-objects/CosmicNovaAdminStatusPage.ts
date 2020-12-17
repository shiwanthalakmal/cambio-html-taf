/**
 * Created by SLakmal on 4/20/2017.
 */
import {browser, ElementArrayFinder, element, By, by, $, protractor} from "protractor";
import {PageBase, TextField, Button, Factory, ConfigRoute} from '../class-loader';
import Elements from '../../cambio-ward-tests/resources/elements/element-loader.json';
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";
import {WorkingMemory} from "../../../ui-utils/ui-memory/WorkingMemory";
import {CosmicNovaAdminStaffPage} from "./CosmicNovaAdminStaffPage";

const log = Factory.getLogger("Page.CosmicNovaAdminStatusPage")

export class CosmicNovaAdminStatusPage extends PageBase{

    private btnChangeStatus         : any;
    private btnAddStatus            : any;
    private ulListOfStatus          : any;
    private btnDeleteStatus         : any;
    private btnDeleteStatusNo       : any;
    private btnDeleteStatusYes      : any;
    private txtFldUpdateStatusName  : any;
    private divColorPanel           : any;

    private administrationMenuModule: CosmicNovaAdministrationMenuModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAdminStatusPage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.btnChangeStatus        = super.findLocators(element.btnChangeStatus.findBy, element.btnChangeStatus.value);
        this.btnAddStatus           = super.findLocators(element.btnAddStatus.findBy, element.btnAddStatus.value);
        this.ulListOfStatus         = super.findLocators(element.ulListOfStatus.findBy, element.ulListOfStatus.value);
        this.btnDeleteStatus        = super.findLocators(element.btnDeleteStatus.findBy, element.btnDeleteStatus.value);
        this.btnDeleteStatusNo      = super.findLocators(element.btnDeleteStatusNo.findBy, element.btnDeleteStatusNo.value);
        this.btnDeleteStatusYes     = super.findLocators(element.btnDeleteStatusYes.findBy, element.btnDeleteStatusYes.value);
        this.txtFldUpdateStatusName = super.findLocators(element.txtFldUpdateStatusName.findBy, element.txtFldUpdateStatusName.value);
        this.divColorPanel          = super.findLocators(element.divColorPanel.findBy, element.divColorPanel.value);
    }

    /**
     * Step: change the status activate mode
     * @returns {CosmicNovaAdminStatusPage}
     */
    public step_ChangeActivateStatusMode(): CosmicNovaAdminStatusPage{
        log.info("Step: Change the activate status mode [:step_ChangeActivateStatusMode:]")
        new Button(this.btnChangeStatus).click();
        this.Helper_Waits.waitFor(2000);
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Step: Press add new status button
     * @returns {CosmicNovaAdminStatusPage}
     */
    public step_PressNewStatusAddButton(): CosmicNovaAdminStatusPage{
        log.info("Step: Press new status add button [:step_PressNewStatusAddButton:]")
        new Button(this.btnAddStatus).click();
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Step: choose existing status record and click on it
     * @param record
     * @returns {CosmicNovaAdminStatusPage}
     */
    public step_ChooseStatusRecord(record: string): CosmicNovaAdminStatusPage{
        log.info("Step: Select given status record under status list [:step_ChooseStatusRecord:]")
        this.Helper_Actions.findTextAndClick(this.ulListOfStatus, record);
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Step: perform delete for the given status record and ignore the deletion
     * @param record
     * @returns {CosmicNovaAdminStatusPage}
     */
    public step_DeleteStatusRecordIgnore(record: number): CosmicNovaAdminStatusPage{
        log.info("Step: Exsiting status record delete and reject deletion flow [:step_DeleteStatusRecordIgnore:]")
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteStatus,record);
        new Button(this.btnDeleteStatusNo).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Step: perform delete for the given status record and accept the deletion
     * @param record
     * @returns {CosmicNovaAdminStatusPage}
     */
    public step_DeleteStatusRecordAccept(record: number): CosmicNovaAdminStatusPage{
        log.info("Step: Exsiting status record delete and accept deletion flow [:step_DeleteStatusRecordAccept:]")
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteStatus,record);
        new Button(this.btnDeleteStatusYes).click();
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Step: enter new status name
     * @param status
     * @returns {CosmicNovaAdminStatusPage}
     */
    public step_EnterNewStatusName(status: string): CosmicNovaAdminStatusPage{
        log.info("Step: Enter new or update status name [:step_EnterNewStatusName:]");
        new TextField(this.txtFldUpdateStatusName).enterText(status);
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Validate: verify the given status record availability under list
     * @returns {CosmicNovaAdminStatusPage}
     */
    public check_And_Validate_StatusRecordAvailability(record: string): CosmicNovaAdminStatusPage{
        log.info("Validate: Verify the given status record availability [:check_And_Validate_StatusRecordAvailability:]");
        this.Helper_Actions.checkTextFromList(this.ulListOfStatus,record);
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Validate: verify the given status record is not availability under list
     * @returns {CosmicNovaAdminStatusPage}
     */
    public check_And_Validate_StatusRecordNotAvailability(record: string): CosmicNovaAdminStatusPage{
        log.info("Validate: Verify the given status record is not availability [:check_And_Validate_StatusRecordNotAvailability:]");
        this.Helper_Actions.checkTextNotAvailability(this.ulListOfStatus,record);
        return new CosmicNovaAdminStatusPage();
    }

    /**
     * Step: choose color code using color panel
     * @param code
     * @returns {CosmicNovaAdminStatusPage}
     */
    public step_ChooseColorCode(code: number): CosmicNovaAdminStatusPage{
        log.info("Step: Choose a given color code [:step_ChooseColorCode:]")
        this.Helper_Actions.findSpecificElementAndClick(this.divColorPanel,code);
        //[Pending]
        return new CosmicNovaAdminStatusPage();
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
    public step_PressCancelButtonAndIgnore(): CosmicNovaAdminStatusPage{
        log.info("Step: Press page save button and reject [:step_PressCancelButtonAndIgnore:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelIgnore();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminStatusPage();
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