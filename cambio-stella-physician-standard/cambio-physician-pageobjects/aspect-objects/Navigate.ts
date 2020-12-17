import {CosmicNovaLoginPage} from "../page-objects/CosmicNovaLoginPage";
import {CosmicNovaSelectRolePage} from "../page-objects/CosmicNovaSelectRolePage";
import {CosmicNovaBasePhysicianPage} from "../page-objects/CosmicNovaBasePhysicianPage";
//import {CosmicNovaBasePhysicianPage} from "../page-objects/CosmicNovaBasePhysicianPage";
/**
 * Created by SLakmal on 4/26/2017.
 */


export class Navigate {

    public static visit(page: string): any{
        switch (page){
            case "CosmicNovaSelectRolePage":
                return <CosmicNovaSelectRolePage> new CosmicNovaLoginPage().get().step_enterUserNameField('Lakare10').step_enterPasswordField('cambio123').step_pressLoginButton();
            case "CosmicNovaBasePhysicianPage":
                return <CosmicNovaBasePhysicianPage> new CosmicNovaLoginPage().get().step_enterUserNameField('Lakare10').step_enterPasswordField('cambio123').step_pressLoginButton().step_selectUserRole('Doctor*').step_selectUserUnit('The Medicine department*');


            default:
        }
    }

}