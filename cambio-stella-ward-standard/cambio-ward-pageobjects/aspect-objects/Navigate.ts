import {CosmicNovaLoginPage} from "../page-objects/CosmicNovaLoginPage";
import {CosmicNovaSelectRolePage} from "../page-objects/CosmicNovaSelectRolePage";
import {CosmicNovaBaseWardPage} from "../page-objects/CosmicNovaBaseWardPage";
/**
 * Created by SLakmal on 4/26/2017.
 */


export class Navigate {

    public static visit(page: string): any{
        switch (page){
            case "CosmicNovaSelectRolePage":
                return <CosmicNovaSelectRolePage> new CosmicNovaLoginPage().get().step_enterUserNameField("Lakare10").step_enterPasswordField("cambio123").step_pressLoginButton();
            case "CosmicNovaBaseWardPage":
                return <CosmicNovaBaseWardPage> new CosmicNovaLoginPage().get().step_enterUserNameField("Lakare10").step_enterPasswordField("cambio123").step_pressLoginButton().step_selectUserRole("Doctor*").
                step_selectUserUnit("The Medicine department*").step_selectUserWard("Medicine Ward 1*");
            default:
        }
    }

}