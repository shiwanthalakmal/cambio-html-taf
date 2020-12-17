/**
 * Created by SLakmal on 4/19/2017.
 */
import {PageBase, TextField, Button, Factory} from "../class-loader";
import Elements from "../../cambio-ward-tests/resources/elements/element-loader.json";
import {CosmicNovaAdministrationMenuModule} from "../module-objects/CosmicNovaAdministrationMenuModule";
import {TextArea} from "../../../ui-core/ui-elements/TextArea";
import {CosmicNovaBaseWardPage} from "./CosmicNovaBaseWardPage";

const log = Factory.getLogger("Page.CosmicNovaAdminInformationPage")

export class CosmicNovaAdminInformationPage extends PageBase{

    private btnAddInfoMark         : any;
    private ulListOfInfoMark       : any;
    private btnDeleteInfoMark      : any;
    private btnDeleteInfoMarkNo    : any;
    private btnDeleteInfoMarkYes   : any;
    private txtFldUpdateInfoMark   : any;
    private ulListOfOptions        : any;
    private txtAraDescription      : any;


    private administrationMenuModule : CosmicNovaAdministrationMenuModule;

    constructor() {
        super();
        const element = Elements.CosmicNovaAdminInformationPage;
        this.administrationMenuModule = new CosmicNovaAdministrationMenuModule();
        this.btnAddInfoMark         = super.findLocators(element.btnAddInfoMark.findBy, element.btnAddInfoMark.value);
        this.ulListOfInfoMark       = super.findLocators(element.ulListOfInfoMark.findBy, element.ulListOfInfoMark.value);
        this.btnDeleteInfoMark      = super.findLocators(element.btnDeleteInfoMark.findBy, element.btnDeleteInfoMark.value);
        this.btnDeleteInfoMarkNo    = super.findLocators(element.btnDeleteInfoMarkNo.findBy, element.btnDeleteInfoMarkNo.value);
        this.btnDeleteInfoMarkYes   = super.findLocators(element.btnDeleteInfoMarkYes.findBy, element.btnDeleteInfoMarkYes.value);
        this.txtFldUpdateInfoMark   = super.findLocators(element.txtFldUpdateInfoMark.findBy, element.txtFldUpdateInfoMark.value);
        this.ulListOfOptions        = super.findLocators(element.ulListOfOptions.findBy, element.ulListOfOptions.value);
        this.txtAraDescription      = super.findLocators(element.txtAraDescription.findBy, element.txtAraDescription.value);
    }

    /**
     * Step: press add new info marker button
     * @returns {CosmicNovaAdminInformationPage}
     */
    public step_PressAddNewInfoMarkButton(): CosmicNovaAdminInformationPage{
        log.info("Step: Press add new information marker button [:step_PressAddNewInfoMarkButton:]");
        new Button(this.btnAddInfoMark).click();
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Step: choose given info marker record and click on it
     * @param info
     * @returns {CosmicNovaAdminInformationPage}
     */
    public step_ChooseInfoMarkerRecord(info: string): CosmicNovaAdminInformationPage{
        log.info("Step: Select given information marker existing record using list [:step_ChooseInfoMarkerRecord:]");
        this.Helper_Actions.findTextAndClick(this.ulListOfInfoMark,info);
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Step: perform delete for the given info marker record and ignore the deletion
     * @param info
     * @returns {CosmicNovaAdminInformationPage}
     */
    public step_DeleteInfoMarkersIgnore(info: number): CosmicNovaAdminInformationPage{
        log.info("Step: Existing information marker make delete and reject the deletion flow [:step_DeleteInfoMarkersIgnore:]")
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteInfoMark,info);
        this.Helper_Waits.waitFor(1000);
        new Button(this.btnDeleteInfoMarkNo).click();
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Step: perform delete for the given info marker record and accept the deletion
     * @param info
     * @returns {CosmicNovaAdminInformationPage}
     */
    public step_DeleteInfoMarkersAccept(info: number): CosmicNovaAdminInformationPage{
        log.info("Step: Existing information marker make delete and accept the deletion flow [:step_DeleteInfoMarkersAccept:]")
        this.Helper_Actions.findSpecificElementAndClick(this.btnDeleteInfoMark,info);
        this.Helper_Waits.waitFor(1000);
        new Button(this.btnDeleteInfoMarkYes).click();
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Step: enter new info marker record name
     * @param value
     * @returns {CosmicNovaAdminInformationPage}
     */
    public step_EnterNewInfoMarkers(value: string): CosmicNovaAdminInformationPage{
        log.info("Step: Enter new or update existing information marker name [:step_EnterNewInfoMarkers:]")
        new TextField(this.txtFldUpdateInfoMark).enterText(value);
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Step: select the given priority option
     * @param option
     * @returns {CosmicNovaAdminInformationPage}
     */
    public step_ChoosePriorityOption(option: string): CosmicNovaAdminInformationPage{
        log.info("Step: Select priority option using selection list [:step_ChoosePriorityOption:]")
        this.Helper_Actions.findTextAndClick(this.ulListOfOptions,option);
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Step: enter info marker description
     * @param des
     * @returns {CosmicNovaAdminInformationPage}
     */
    public step_EnterInfoMarkDescription(des: string): CosmicNovaAdminInformationPage{
        log.info("Step: Enter information description [:step_EnterInfoMarkDescription:]")
        new TextArea(this.txtAraDescription).enterText(des);
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Validate: verify the infor marker record availability
     * @param record
     * @returns {CosmicNovaAdminInformationPage}
     */
    public check_And_Validate_InfoMarkerRecordAvailability(record: string): CosmicNovaAdminInformationPage{
        log.info("Validate: InforMarker record availability  [:check_And_Validate_IfoMarkerRecordAvailability:]");
        this.Helper_Actions.checkTextFromList(this.ulListOfInfoMark,record);
        return new CosmicNovaAdminInformationPage();
    }

    /**
     * Validate: verify the infor marker record not availability
     * @param record
     * @returns {CosmicNovaAdminInformationPage}
     */
    public check_And_Validate_InfoMarkerRecordNotAvailability(record: string): CosmicNovaAdminInformationPage{
        log.info("Validate: InforMarker record not availability  [:check_And_Validate_InfoMarkerRecordNotAvailability:]");
        this.Helper_Actions.checkTextNotAvailability(this.ulListOfInfoMark,record);
        return new CosmicNovaAdminInformationPage();
    }

    public check_And_Validate_DuplicateInfoMarkerAdded(): CosmicNovaAdminInformationPage{
        //[Pending]
        return new CosmicNovaAdminInformationPage();
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
    public step_PressCancelButtonAndIgnore(): CosmicNovaAdminInformationPage{
        log.info("Step: Press page save button and reject [:step_PressCancelButtonAndIgnore:]");
        this.administrationMenuModule.action_ClickOnCancel();
        this.administrationMenuModule.action_ClickOnCancelIgnore();
        //[Pending]
        this.Helper_Waits.waitFor(1000);
        return new CosmicNovaAdminInformationPage();
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