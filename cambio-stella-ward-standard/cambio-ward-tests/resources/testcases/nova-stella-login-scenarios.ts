/**
 * Created by SLakmal on 4/26/2017.
 */
import {CosmicNovaLoginPage} from "../page-loader";

describe('[NOVA:LOGIN]', () => {

    it('[LOGIN:01]: Test if basic user is able to login successfully', () => {
        new CosmicNovaLoginPage().get().
        step_enterUserNameField('Secretary1').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role');
    });

    it('[LOGIN:02]: Test if advance user is able to login successfully', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Lakare10').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role');
    });

    it('[LOGIN:03]: Test if basic user is able to login successfully and verify the logged user name & date time visibility', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Secretary1').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role').step_selectUserRole("Secretary*").
        step_selectUserUnitForBasicUser('Medicine Ward 2*').check_And_Validate_WardUnitTitle('Medicine Ward 2*').
        check_And_Validate_WardLoggedUser('');
    });

    it('[LOGIN:04]: Test if advance user is able to login successfully and verify the admin portal', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Lakare10').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role').step_selectUserRole("Doctor*").
        step_selectUserUnit("The Medicine department*").step_selectUserWard("Medicine Ward 2*").step_MoveToAdminPortal();
    });

    it('[LOGIN:05]: Test if advance user is able to login successfully and verify the logged user name & date time visibility', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Lakare10').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role').step_selectUserRole("Doctor*").
        step_selectUserUnit("The Medicine department*").step_selectUserWard("Medicine Ward 2*").
        check_And_Validate_WardLoggedUser('Leg läkare Andersson, Asta');
    });

    it('[LOGIN:06]: Test advance user login through basic user initial access', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Secretary1').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role').step_selectUserRole("Secretary*").
        step_selectUserUnitForBasicUser("Medicine Ward 2*").check_And_Validate_WardUnitTitle('Medicine Ward 2*').
        step_ReLoginUserView().step_SetReLoginDetails("Lakare10","cambio123").step_PressSubLoginOK().step_ChooseSubRole().
        step_ChooseSubUnit().check_And_Validate_WardLoggedUser('Leg läkare Andersson, Asta').step_ReLogoutUserView();
    });

    it('[LOGIN:07]: Test another basic user login again through basic user initial access', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Secretary1').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role').step_selectUserRole("Secretary*").
        step_selectUserUnitForBasicUser("Medicine Ward 2*").check_And_Validate_WardUnitTitle('Medicine Ward 2*').
        check_And_Validate_WardLoggedUser('').step_ReLoginUserView().step_SetReLoginDetails("Secretary1","cambio123").
        step_InvalidLoginSubmit().check_And_Validate_LoginErrorMsg('No possible working unit and working user role with nova access found');
    });

    it('[LOGIN:08]: Test if un-registered basic user is not able to login to the site', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('XLakare10').step_enterPasswordField('cambio123').
        step_pressLoginButtonBackToLogin().check_And_Validate_LoginErrorMsg();
    });

    it('[LOGIN:09]: Test if un-registered advance user is not able to login to the site', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('XLakare10').step_enterPasswordField('cambio123').
        step_pressLoginButtonBackToLogin().check_And_Validate_LoginErrorMsg();
    });

    it('[LOGIN:10]: Test with valid username and empty password that login must get failed', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Lakare10').step_enterPasswordField('').
        check_And_Validate_LoginBtnDisability();
    });

    it('[LOGIN:11]: Test with empty username and valid password that login must get failed', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('').step_enterPasswordField('').
        check_And_Validate_LoginBtnDisability();
    });

    it('[LOGIN:12]: Test with username and password using special charecters', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('!@#/$^!%@').step_enterPasswordField('?<>}{!@^$#^').
        step_pressLoginButtonBackToLogin().check_And_Validate_LoginErrorMsg();
    });

    it('[LOGIN:13]: Test ward page top icon list visibility with basic user login', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Secretary1').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role').step_selectUserRole("Secretary*").
        step_selectUserUnitForBasicUser("Medicine Ward 2*").check_And_Validate_BasicUserTopIconsSet();
    });

    it('[LOGIN:14]: Test ward page top icon list visibility with advance user login', () => {
        new CosmicNovaLoginPage().get().step_enterUserNameField('Lakare10').step_enterPasswordField('cambio123').
        step_pressLoginButton().check_And_Validate_selectRoleListTitle('Select Role').step_selectUserRole("Doctor*").
        step_selectUserUnit("The Medicine department*").step_selectUserWard("Medicine Ward 2*").check_And_Validate_AdvanceUserTopIconsSet();
    });

    beforeEach(() => {
        console.log('************************************************************************************************ ');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA:LOGIN] - COMPLETED ! ************************************');
    });
});