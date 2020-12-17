import {Navigate} from "../../../cambio-physician-pageobjects/aspect-objects/Navigate";
/**
 * Created by SLakmal on 7/5/2017.
 */

describe('[NOVA:CPS06]', () => {

    it('[NOVA2.1-76859]: verify search patient from social security number', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Move_To_FindPatient_Page('Find patient').
        step_EnterSocialSecurityNumber('19 390202-7030').check_And_Validate_SearchedResults('Bertil');
    });

    it('[NOVA2.1-76861]: verify search patient by given name', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Move_To_FindPatient_Page('Find patient').
        step_EnterGivenName('Bertil').check_And_Validate_SearchedResults('Bertil');
    });

    it('[NOVA2.1-76866]: verify search patient by family name', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 2*').step_Move_To_FindPatient_Page('Find patient').
        step_EnterFamilyName('Sjögren').check_And_Validate_SearchedResults('Bertil');
    });

    beforeEach(() => {
        console.log('************************************************************************************************ ');
    });

    afterAll(() => {
        console.log('************************************************************************************************');
        console.log('******************************** [NOVA: CPS06] - COMPLETED ! ************************************');
    });
});
