/**
 * Created by SLakmal on 7/10/2017.
 */
import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../cambio-physician-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";

const log = Factory.getLogger("Page.CosmicNovaAddPackagesModule");

export class CosmicNovaAddPackagesModule extends PageBase{

    private txtFldSearch        : any;
    private btnSearchIcon       : any;
    private btnPickActivityIcon : any;

    constructor(){
        super();
        const element = Elements.CosmicNovaAddPackagesModule;
        this.txtFldSearch           = super.findLocators(element.txtFldSearch.findBy,element.txtFldSearch.value);
        this.btnSearchIcon          = super.findLocators(element.btnSearchIcon.findBy,element.btnSearchIcon.value);
        this.btnPickActivityIcon    = super.findLocators(element.btnPickActivityIcon.findBy,element.btnPickActivityIcon.value);
    }

    public step_Search_Existing_Packages(pack: string): void{
        new TextField(this.txtFldSearch).enterText(pack);
        new Button(this.btnSearchIcon).click();
    }

    public step_Pick_Given_Package_Record(rec: number): void{
        this.Helper_Actions.findSpecificElementAndClick(this.btnPickActivityIcon, rec);
    }

    public step_Delete_Existing_Given_Package(): void{
        var btnDelete : any = this.findLocators("css","div[ng-click='removeMarker($event)']");
        new Button(btnDelete).click();
        var btnConfirm : any = this.findLocators("css","button[ng-click='ok()']");
        new Button(btnConfirm).click();
    }
}