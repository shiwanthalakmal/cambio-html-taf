import {Navigate} from "../../../cambio-physician-pageobjects/aspect-objects/Navigate";
/**
 * Created by SLakmal on 7/5/2017.
 */

describe('[NOVA:CPS05]', () => {

    xit('NOVA2.1-76826:First page - Add label', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT9 Label1').step_MoveTo_Adding_Panel().step_Select_LeftMenu_Labels()
            .step_Select_Label_From_Label_List_Apping_Panel('Fasting').step_Press_Add_Button_In_Label_Side_Panel_Adding_Panel().step_Press_Done_Button_In_Label_Out_Box().step_Read_Labels_Added_From_Adding_Panel_Summary_View_Page('Fasting');
    });

    xit('NOVA2.1-76827:First page - Label - add comment', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT9 Label1').step_Press_On_Label_Summary_View_Page('Fasting')
            .step_Enter_Comment_For_Label_Summary_View_Page('Test Comment').step_Press_Done_Button_Label_Side_Panel_Summary_View_Page();
    });

    xit('NOVA2.1-76828:First page - Label - Add an AddOn', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT9 Label1').step_Press_On_Label_Summary_View_Page('Fasting')
            .step_Enter_Addon_For_Label_Summary_View_page('Test Add-on').step_Press_Done_Button_Label_Side_Panel_Summary_View_Page();
    });

    xit('NOVA2.1-76829:First page - Label - Remove label', () => {
        Navigate.visit('CosmicNovaBasePhysicianPage').step_Choose_WardSection('Medicine Ward 1*').step_Select_Patient_FromList('NovaAFT9 Label1').step_Press_On_Label_Summary_View_Page('Fasting Test Add-on')
            .step_Press_Label_Remove_Button_Summary_View_Page();

    });




    beforeEach(() => {
        console.log('************************************************************************************************ ');
    });

    afterAll(() => {
        console.log('***********************************************************************************************');
        console.log('******************************** [NOVA: CPS05] - COMPLETED ! ************************************');
    });
});
