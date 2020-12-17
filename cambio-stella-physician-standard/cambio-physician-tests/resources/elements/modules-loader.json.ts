export default
{
    "CosmicNovaWarnModule": {
        "btnWarning": {findBy: "className", value: "sign"},
        "lblWarnTitle": {findBy: "className", value: "dialog-header"}
    },
    "CosmicNovaSummayViewHeaderModule": {
        "btnTopMenuButton": {findBy: "className", value: "TopMenuButton"},
        "lblContactAlertIcon": {findBy: "className", value: "NovaContactAlertIcon"},
        "lblPatientDetails": {findBy: "className", value: "PatientDetails"},
        "lblProtectedID": {findBy: "css", value: ".Protected"},
        "btnCloseSummaryView": {findBy: "css", value: ".Close"},
        "btnRoundStatus": {findBy: "className", value: "RoundStatus"},
        "btnBedIcon": {findBy: "xpath", value: "//nova-room-and-bed-label-with-color"},
        "btnTagsView": {findBy: "xpath", value: "//*[@class='MainTag']"},
        "btnPatientAddingPanel": {findBy: "css", value: ".patientAddingPanelToggleButton>div"},
        "btnAttentionSignal": {findBy: "css", value: ".AttentionSignalContainer"},
        "btnInfoShared": {findBy: "className", value: "InformationSecrecy"},
        "btnInterpreter": {findBy: "className", value: "Icon Interpreter"},
        "lblInterpreterpopup": {findBy: "className", value: "dialog-body"},
        "lblContactAlertInfection": {findBy: "xpath", value: "(//div[@ng-repeat])[2]"},
        "lblContactAlertDNR": {findBy: "xpath",value: "(//div[@ng-repeat])[1]"},
        "lblMedicalRecord": {findBy: "xpath", value: "(//button[@ng-click='gotoView()']/span)[4]"},



    },

    "CosmicNovaLeftSubMenuModule": {
        "btnLogout": {findBy: "className", value: "LogoutButton"},
        "btnChangeUnit": {findBy: "className", value: "ChangeWorkingUnitButton"},
        "lblPatientName": {findBy: "xpath", value: "//nav"},
        "btnSubMenuList": {findBy: "xpath", value: "//button[@ng-click='gotoView()']//span"},
        "lblClinicalPara": {findBy: "xpath", value: "(//button[@ng-click='gotoView()']/span)[3]"},

    },


    "CosmicNovaAddActivitiesModule": {
        "txtFldSearch": {findBy: "model", value: "search"},
        "btnSearchIcon": {findBy: "css", value: ".SearchBoxHolder>button"},
        "btnPickActivityIcon": {findBy: "css", value: ".Icons.AddIcon"},
        "divSettingDdlContainers": {findBy: "css", value: ".SlideContainer"},
        "divSettingStatusList": {findBy: "xpath", value: "//div[@ng-click='setSelected(option)']"},
        "divSettingTimeList": {findBy: "xpath", value: "//div[@ng-click='selectPartOfDay(option)']"},
        "divSettingResponsibleList": {findBy: "xpath", value: "//li[@ng-click='toggleSelected(option)']"},
        "txtFldSettingAddOn": {findBy: "xpath", value: "//nova-text-box[@data-model='taskMarker.addOnActivity']//textarea"},
        "txtFldSettingComment": {findBy: "xpath", value: "//nova-text-box[@data-model='taskMarker.comment']//textarea"},
        "divSettingRepeatList": {findBy: "xpath", value: "//ul[@class='SelectionListItems']/li"},
        "btnActivityAdd": {findBy: "className", value: "sign"},
        "btnsaveall": {findBy: "xpath", value: "//button[@ng-click='saveSeries()']"},
        "btnsavethis": {findBy: "xpath", value: "//button[@ng-click='saveTaskOnly()']"},
    },

    "CosmicNovaAddClinicalChmstryModule": {
        "btnWarning": {findBy: "className", value: "sign"},
        "lblWarnTitle": {findBy: "className", value: "dialog-header"}
    },

    "CosmicNovaAddLabelsModule": {
        "btnWarning": {findBy: "className", value: "sign"},
        "lblWarnTitle": {findBy: "className", value: "dialog-header"},
        "lblLabel": {findBy:"xpath", value: "//div[@ng-click='editLabel(item)']"},
        "btnAdd": {findBy: "xpath", value: "//button[@ng-click='save($event)']"},
        "btnDone": {findBy: "xpath", value: "//button[@ng-click='sendOrders()']"},
    },

    "CosmicNovaAddLocalAnalyModule": {
        "btnWarning": {findBy: "className", value: "sign"},
        "lblWarnTitle": {findBy: "className", value: "dialog-header"}
    },

    "CosmicNovaAddMedicationModule": {
        "btnWarning": {findBy: "className", value: "sign"},
        "lblWarnTitle": {findBy: "className", value: "dialog-header"}
    },

    "CosmicNovaAddMicrobiologyModule": {
        "btnWarning": {findBy: "className", value: "sign"},
        "lblWarnTitle": {findBy: "className", value: "dialog-header"}
    },

    "CosmicNovaAddPackagesModule": {
        "txtFldSearch": {findBy: "model", value: "search"},
        "btnSearchIcon": {findBy: "css", value: ".SearchBoxHolder>button"},
        "btnPickActivityIcon": {findBy: "css", value: ".Icons.AddIcon"},
    },

    "CosmicNovaAddPatientGroupModule": {
        "btnWarning": {findBy: "className", value: "sign"},
        "lblWarnTitle": {findBy: "className", value: "dialog-header"}
    },

    "CosmicNovaSideNavigationModule": {
        "sideNavigation": {findBy: "xpath", value: "//button[@ng-click='tabClicked(tab)']"}
    },

    "CosmicNovaAttentionSignalViewModule": {
        "sideNavigation": {findBy: "xpath", value: "//button[@ng-click='tabClicked(tab)']"}
    },

    "CosmicNovaAttentionSignalCreateModule": {
        "listType": {findBy: "xpath", value: "//*[contains(text(),'Type')]/following::div[1]"}
    },
    "CosmicNovaAttentionSignalReadModule": {
        "lblcomment": {findBy: "xpath", "value": "/html/body/nova-side-panel/div[2]/div[2]/div/form/section/nova-text-box/div/div[2]/textarea"},
        "lblreassessment": {findBy: "xpath", value: "(//*[@ng-bind='getSelectedItemDisplayText()'])[contains(text(),'Reassessment')]"},
        "lblreassessmentdate": {findBy: "xpath", value: "//*[@class='novaAttentionSignalReassessmentInputs']/div/nova-date-input/div/div[2]"},
        "lblreassessmenttime": {findBy: "xpath", value: "//*[@class='novaAttentionSignalReassessmentInputs']/div/nova-time-input/div/div[2]"},
        "lblvisitadminission": {findBy: "xpath", value: "//div[contains(text(),'Visit/admission')]/following::div[1]"},
        "lblcareprovider": {findBy: "xpath", value: "//div[contains(text(),'Visit/admission')]/following::div[4]/span"},
        "lblclinicward": {findBy: "xpath", value: "//div[contains(text(),'Clinic/ward')]/following::div[1]"},
        "lblassessmentdate": {findBy: "xpath", value: "//div[contains(text(),'Assessment date')]/following::div[1]"},
        "lblassessmenttime": {findBy: "xpath", value: "//div[contains(text(),'Assessment time')]/following::div[1]"},
        "btnnewassessment": {findBy: "xpath", value: "//div[@class='assessmentIcon']"},
        "btninvalidate": {findBy: "xpath", value: "//div[@ng-click='invalidateAttentionSignal(attentionSignal)']"},
        "lblsignaltype": {findBy: "xpath", value: "(//div[@ng-class='cssClass'])[2]/following::span[1]"},
        "btnsignalicon": {findBy: "xpath", value: "(//div[@ng-class='cssClass'])[2]"},
        "btnreassessmenticon": {findBy: "xpath", value: "//span[@ng-if='isReassessmentDatePassed()']"},
        "btnreassessmentreason": {findBy: "xpath", value: "//*[@class='novaAttentionSignalReassessmentInputs']/div/nova-text-box/div/div[2]"},

        //----------------Hypersensitivity elements
        "lblcertaintylevel": {findBy: "xpath", value: "(//div[@ng-if='isHypersensitivity']/nova-list-box)[5]/div/div/div[1]"},
        "lblseveritylevel" : {findBy: "xpath", value: "(//div[@ng-if='isHypersensitivity']/nova-list-box)[4]/div/div/div[1]"},
        "lblReaction": {findBy: "xpath", value: "(//div[@ng-if='isHypersensitivity']/nova-list-box)[3]/div/div/div[1]"},
        "lblAllergen": {findBy: "xpath", value: "(//div[@ng-if='isHypersensitivity']/nova-list-box)[2]/div/div/div[1]"},
        "lblhypertype": {findBy: "xpath", value: "(//div[@ng-if='isHypersensitivity']/nova-list-box)[1]/div/div/div[1]"},

        //----------------Contagious Disease elements
        "lblcontagiousdisease": {findBy: "xpath", value: "(//div[@ng-if='isContagiousDisease']/nova-list-box)[1]/div/div/div[1]"},

        //----------------Non-standard Procedure
        "lblNonStdProcedure": {findBy: "xpath", value: "//div[contains(text(),'Non-standard Procedure')]/following::div[1]"},

        //----------------Treatment & Condition - Treatment
        "lbltctype": {findBy: "xpath", value: "//div[@ng-if='isTreatmentAndCondition']/nova-list-box[1]/div/div/div[1]"},
        "lbltreatmenttype": {findBy: "xpath", value: "//div[@ng-if='isTreatmentAndCondition']/nova-list-box[2]/div/div/div[1]"},
        "lblconditiontype": {findBy: "xpath", value: "//div[@ng-if='isTreatmentAndCondition']/nova-list-box[2]/div/div/div[1]"},
        "lblcondsubtypename": {findBy: "xpath", value: "//div[@ng-if='isTreatmentAndCondition']/nova-list-box[3]/div/div/div[1]"},

    },
    "CosmicNovaClinicalParametersRegisterValueModule":{
        //----------------Clinical Parameters Common elements
        "btnsign": {findBy: "xpath", value:"//*[@class='footer']/button[2]"},

        //----------------MEWS
        "copyicon": {findBy: "xpath",value: "//*[@class='copyIcon']"},
        "btnsystolic": {findBy: "xpath", value: "(//*[@ng-if='!item.parentItem.isBloodPressureArchetype()']/following::input)[1]"},
        "btnDiastolic": {findBy: "xpath", value: "(//*[@ng-if='!item.parentItem.isBloodPressureArchetype()']/following::input)[2]"},
        "btnpulserate": {findBy: "xpath", value: "(//*[@ng-if='!item.parentItem.isBloodPressureArchetype()']/following::input)[3]"},
        "btnrespiration": {findBy: "xpath", value: "(//*[@ng-if='!item.parentItem.isBloodPressureArchetype()']/following::input)[4]"},
        "btntemperature": {findBy: "xpath", value: "(//*[@ng-if='!item.parentItem.isBloodPressureArchetype()']/following::input)[5]"},
        "btnavpu": {findBy: "xpath",value: "(//*[@ng-if='!item.parentItem.isBloodPressureArchetype()']/following::input)[5]/following::div[5]"},
        "btnavputype": {findBy: "repeater",value: "option in options track by $index"},

        //---------------AVPU
        "fldavpu":{findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'AVPU')]/following::div[1]"},
        "ppuavpu": {findBy: "repeater",value: "option in options track by $index"},

        //---------------Body Weight
        "fldbweight": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Body Weight')]//following::input[1]"},

        //---------------Pulse
        "fldpulse": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Pulse')]//following::input[1]"},
        "fldirregular": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Pulse')]//following::nova-list-box[1]"},
        "ppuirregular": {findBy: "repeater", value: "option in options track by $index"},

        //--------------Blood Pressure
        "fldbpsytolic": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Blood Pressure')]//following::input[1]"},
        "fldbpdiastolic": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Blood Pressure')]//following::input[2]"},
        "fldbpposition": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Blood Pressure')]/following::nova-list-box[1]"},
        "ppubpposition": {findBy: "repeater", value: "option in options track by $index"},
        "fldlocfmeasure": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Blood Pressure')]/following::nova-list-box[2]"},
        "ppulocfmeasure": {findBy: "repeater", value: "option in options track by $index"},
        "fldspclocation": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Blood Pressure')]/following::textarea[1]"},
        "fldcomment": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Blood Pressure')]/following::textarea[2]"},

        //---------------Body Temperature
        "fldbodytemp": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Body Temperature')]//following::input[1]"},
        "fldsitemeasure": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Body Temperature')]//following::div[8]"},
        "ppusitemeasure": {findBy: "repeater", value: "option in options track by $index"},

        //---------------SpO2
        "fldspo2": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'SpO2 (pox)')]//following::input[1]"},
        "fldanysupoxygen": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'SpO2 (pox)')]//following::nova-list-box[1]"},
        "ppuanysupoxygen": {findBy: "repeater", value: "option in options track by $index"},
        "fldflowrate": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'SpO2 (pox)')]//following::input[2]"},
        "fldcopd": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'SpO2 (pox)')]//following::nova-list-box[2]"},
        "ppucopd": {findBy: "repeater", value: "option in options track by $index"},

        //----------------Respiration
        "fldrespiration": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Respiration')]//following::input[1]"},

        //----------------Pain
        "fldpain": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'Pain (NRS)')]/following::div[1]"},
        "ppupain": {findBy: "repeater", value: "option in options track by $index"},

        //----------------NEWS
        "fldrespratenews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::input[1]"},
        "fldspo2news": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::input[2]"},
        "fldanysupoxygennews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::nova-list-box[1]"},
        "ppuanysupoxygennews": {findBy: "repeater", value: "option in options track by $index"},
        "fldflowratenews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::input[3]"},
        "fldcopdnews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::nova-list-box[2]"},
        "ppucopdnews": {findBy: "repeater", value: "option in options track by $index"},
        "fldtempnews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::input[4]"},
        "fldbpsystolicnews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::input[5]"},
        "fldbpdiastolicnews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::input[6]"},
        "fldpulseratenews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::input[7]"},
        "fldirregularnews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::nova-list-box[3]"},
        "ppuirregularnews": {findBy: "repeater", value: "option in options track by $index"},
        "fldavpunews": {findBy: "xpath",value: "//h3[@ng-if='showHeadings'][contains(text(),'NEWS')]/following::nova-list-box[4]"},
        "ppuavpunews": {findBy: "repeater", value: "option in options track by $index"},
        "fldweightbminews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'BMI')]/following::input[1]"},
        "fldheightbminews": {findBy: "xpath", value: "//h3[@ng-if='showHeadings'][contains(text(),'BMI')]/following::input[2]"},
    },

    "CosmicNovaClinicalParameterHistorySidePanelModule":{

        //----------------Clinical Parameters Common elements
        "lbltitle": {findBy: "xpath", value: "//div[@class='hgroup']/h3"},
        "btnexpand": {findBy: "xpath", value: "//span[@class='ToggleIcon']"},
    },

    "CosmicNovaObservationReadModule":{
        "lblevent": {findBy: "xpath", value: "//div[@class='Info']//following::h3"},
        "lblaction": {findBy: "xpath", value: "//div[@ng-if='action.description']/preceding-sibling::div"},
        "lblresult": {findBy: "xpath", value: "//div[@ng-if='result.description']/preceding-sibling::div"},
        "lbleventcomment": {findBy: "xpath", value: "//div[@class='Info']//following::h3//following::p[1]"},
        "lbleventtime": {findBy: "xpath", value: "(//div[@class='Info']//following::div)[1]"},
        "lblactiontime": {findBy: "xpath", value: "(//div[@ng-if='action.description']//following::div)[1]"},
        "lblactioncoment": {findBy: "xpath", value: "//div[@ng-if='action.description']"},
        "lblresultcomment": {findBy: "xpath", value: "//div[@ng-if='result.description']"},
        "lblresulttime": {findBy: "xpath", value: "(//div[@ng-if='result.description']//following::div)[1]"},
        "btnresult": {findBy: "xpath", value: "//div[@ng-click='newResultDialog(observation.noteId, action.noteId, action.keywordId)']"},
        "btnaction": {findBy: "xpath", value: "//div[@ng-click='newActionDialog(observation.noteId, observation.keywordId)']"},
        "iconeventunsigned": {findBy: "xpath", value: "(//div[@class='Header']//following::div)[1]"},
        "iconactionunsigned": {findBy: "xpath", value: "//div[@ng-if='isUnsigned(action.status, action.noteId)']"},
        "iconresultunsigned": {findBy: "xpath", value: "//div[@ng-if='isUnsigned(result.status, result.noteId)']"},
    },

    "CosmicNovaCommonRecordReadModule":{
        "lblcommonrecordtitle": {findBy: "xpath", value: "//*[@class='CommonDocumentHeader']"},
        "iconexpandcollapse": {findBy: "xpath", value: "//*[@ng-if='(commonDocumentItem.keywords | filter: keywordsFilter).length > 0']"},

        //--------------Free Text Keyword
        "lblfreetextname": {findBy: "xpath", value: "//div[contains(text(),'Free text')]"},
        "lblfreetextval": {findBy: "xpath", value: "(//div[contains(text(),'Free text')]//following::div)[1]"},
        "lblfreetextdate": {findBy: "xpath", value: "(//div[contains(text(),'Free text')]//following::div)[2]"},
        "iconunsignedfreetext": {findBy: "xpath", value: "((//div[contains(text(),'Free text')]/parent::div//parent::div)/child::div)[1]"},

        //--------------Check Box Keyword
        "lblcheckboxname": {findBy: "xpath", value: "(//div[contains(text(),'Checkbox')])[1]"},
        "lblcheckboxval": {findBy: "xpath", value: "((//div[contains(text(),'Checkbox')])[1]/following::div)[1]"},
        "lblcheckboxdate": {findBy: "xpath", value: "((//div[contains(text(),'Checkbox')])[1]/following::div)[2]"},
        "iconunsignedcheckbox": {findBy: "xpath", value: "((//div[contains(text(),'Checkbox')]/parent::div//parent::div)/child::div)[1]"},

        //--------------CheckBox(Configurable)
        "lblcheckboxConfname": {findBy: "xpath", value: "//div[contains(text(),'Checkbox (Configurable)')]"},
        "lblcheckboxConfval": {findBy: "xpath", value: "((//div[contains(text(),'Checkbox (Configurable')])[1]/following::div)[1]"},
        "lblcheckboxConfdate": {findBy: "xpath", value: "((//div[contains(text(),'Checkbox (Configurable')])[1]/following::div)[2]"},
        "iconunsignedcheckboxConf": {findBy: "xpath", value: "((//div[contains(text(),'Checkbox (Configurable')]/parent::div//parent::div)/child::div)[1]"},

        //--------------Date & Time
        "lbldatetimename": {findBy: "xpath", value: "//div[contains(text(),'Date & Time')]"},
        "lbldatetimeval": {findBy: "xpath", value: "((//div[contains(text(),'Date & Time')])[1]/following::div)[1]"},
        "lbldatetimedate": {findBy: "xpath", value: "((//div[contains(text(),'Date & Time')])[1]/following::div)[2]"},
        "iconunsigneddatetime": {findBy: "xpath", value: "((//div[contains(text(),'Date & Time')]/parent::div//parent::div)/child::div)[1]"},

        //--------------Fixed Value
        "lblfixedvaluename": {findBy: "xpath", value: "//div[contains(text(),'Fixed value')]"},
        "lblfixedvalueval": {findBy: "xpath", value: "((//div[contains(text(),'Fixed value')])[1]/following::div)[1]"},
        "lblfixedvaluedate": {findBy: "xpath", value: "((//div[contains(text(),'Fixed value')])[1]/following::div)[2]"},
        "iconunsignedfixedvalue": {findBy: "xpath", value: "((//div[contains(text(),'Fixed value')]/parent::div//parent::div)/child::div)[1]"},

        //--------------Numeric
        "lblnumericname": {findBy: "xpath", value: "//div[contains(text(),'Numeric')]"},
        "lblnumericval": {findBy: "xpath", value: "((//div[contains(text(),'Numeric')])[1]/following::div)[1]"},
        "lblnumericdate": {findBy: "xpath", value: "((//div[contains(text(),'Numeric')])[1]/following::div)[2]"},
        "iconunsignednumeric": {findBy: "xpath", value: "((//div[contains(text(),'Numeric')]/parent::div//parent::div)/child::div)[1]"},

        //--------------Numeric Two(Blood Pressure)
        "lblnumeric2name": {findBy: "xpath", value: "(//div[contains(text(),'Blood pressure')])[1]"},
        "lblnumeric2val": {findBy: "xpath", value: "((//div[contains(text(),'Blood pressure')])[1]/following::div)[1]"},
        "lblnumeric2date": {findBy: "xpath", value: "((//div[contains(text(),'Blood pressure')])[1]/following::div)[2]"},
        "iconunsignednumeric2": {findBy: "xpath", value: "((//div[contains(text(),'Blood pressure')]/parent::div//parent::div)/child::div)[1]"},

        //--------------Archetype Blood Pressure(complex)
        "lblBPname": {findBy: "xpath", value:"(//div[contains(text(),'Blood pressure (complex)')])[1]"},
        "lblBPval": {findBy: "xpath", value: "((//div[contains(text(),'Blood pressure (complex)')])[1]/following::div)[1]"},

        //--------------BMI

        //--------------Body temperature(complex)

        //--------------Consciousness
        "lblavpuname": {findBy: "xpath", value: "//div[contains(text(),'Consciousness')]"},
        "lblavpuval": {findBy: "xpath", value: "((//div[contains(text(),'Consciousness')])[1]/following::div)[1]"},
        "lblavpudate": {findBy: "xpath", value: "((//div[contains(text(),'Consciousness')])[1]/following::div)[2]"},
        "iconunsignedavpu": {findBy: "xpath", value: "((//div[contains(text(),'Consciousness')]/parent::div//parent::div)/child::div)[1]"},

        //--------------Height
        "lblheightname": {findBy: "xpath", value: "(//div[contains(text(),'Height')])[2]"},
        "lblheightval" : {findBy: "xpath", value: "((//div[contains(text(),'Height')])[2]/following::div)[1]"},
        "lblheightdate": {findBy: "xpath", value: "((//div[contains(text(),'Height')])[2]/following::div)[2]"},
        "iconunsignedheight": {findBy: "xpath", value: "(((//div[contains(text(),'Height')])[2]/parent::div//parent::div)/child::div)[1]"},

        //---------------Indirect oximetry

        //---------------MEWS

        //---------------NEWS

        //---------------Pain
        "lblpainname": {findBy: "xpath", value: "//div[contains(text(),'Pain')]"},
        "lblpainval": {findBy: "xpath", value: "((//div[contains(text(),'Pain')])[1]/following::div)[1]"},
        "lblpaindate": {findBy: "xpath", value: "((//div[contains(text(),'Pain')])[1]/following::div)[2]"},
        "iconunsignedpain": {findBy: "xpath", value: "((//div[contains(text(),'Pain')]/parent::div//parent::div)/child::div)[1]"},

        //---------------Pulse
        "lblpulsename": {findBy: "xpath", value: "(//div[contains(text(),'Pulse')])[3]"},
        "lblpulseval": {findBy: "xpath", value: "(//div[contains(text(),'Pulse')])[3]/following::div[1]"},
        "lblpulsedate": {findBy: "xpath", value: "(//div[contains(text(),'Pulse')])[3]/following::div[2]"},
        "iconunsignedpulse": {findBy: "xpath", value: "(((//div[contains(text(),'Pulse')])[3]/parent::div/parent::div)/child::div)[1]"},

        //----------------Respiration
        "lblrespname": {findBy: "xpath", value: "(//div[contains(text(),'Respirations')])"},
        "lblrespval": {findBy: "xpath", value: "((//div[contains(text(),'Respirations')])/following::div)[1]"},
        "lblrespdate": {findBy: "xpath", value: "((//div[contains(text(),'Respirations')])/following::div)[2]"},
        "iconunsignedresp": {findBy: "xpath", value: "(((//div[contains(text(),'Respirations')])/parent::div/parent::div)/child::div)[1]"},

        //---------------Weight
        "lblweightname": {findBy: "xpath", value: "(//div[contains(text(),'Weight')])[2]"},
        "lblweightval": {findBy: "xpath", value: "((//div[contains(text(),'Weight')])[2]/following::div)[1]"},
        "lblweightdate": {findBy: "xpath", value: "((//div[contains(text(),'Weight')])[2]/following::div)[2]"},
        "iconunsignedweight": {findBy: "xpath", value: "((((//div[contains(text(),'Weight')])[2])/parent::div/parent::div)/child::div)[1]"},

    },

    "CosmicNovaCarePlanModule": {
        "btncommitarrow": {findBy: "xpath", value: "//h3[@ng-click='openCommitmentSelectionDialog($event)']"},
        "lblcareplan": {findBy: "xpath", value: "//div[@ng-repeat='option in options track by $index'][2]"},
        "lblOpenStand": {findBy: "xpath", value: "(//div[@class='CarePlanItem'])[1]"},
        "lblClosedStand": {findBy: "xpath", value: "(//div[@class='CarePlanItem'])[2]"},
        "lblOpenIndiv": {findBy: "xpath", value: "(//div[@class='CarePlanItem Individual'])[1]"},
        "lblClosedIndiv": {findBy: "xpath", value: "(//div[@class='CarePlanItem Individual'])[2]"},

        "lblMedhistory": {findBy: "xpath", value: "(//nova-care-plan-statuses[@data-statuses='careEpisode.statuses']//child::h3)[contains(text(),'Medical history')]"},
        "btnMedHistoryexpand": {findBy: "xpath",value: "(//nova-care-plan-statuses[@data-statuses='careEpisode.statuses']//child::h3)[contains(text(),'Medical history')]/following::div[1]"},
        "fldMedHistval": {findBy: "xpath",value: "//div[@ng-repeat='record in commonDocumentItem.keywords | filter: keywordsFilter']//*[contains(text(),'Medical history')]/following::div[1]"},

        "lblStatus": {findBy: "xpath",value: "(//nova-care-plan-statuses[@data-statuses='careEpisode.statuses']//child::h3)[contains(text(),'Status')]"},
        "fldStatusval": {findBy: "xpath",value: "(//div[@ng-repeat='record in commonDocumentItem.keywords | filter: keywordsFilter']//*[contains(text(),'Status')]/following::div)[1]"},

        "lblDisSummry": {findBy: "xpath",value: "(//nova-care-plan-statuses[@data-statuses='careEpisode.statuses']//child::h3)[contains(text(),'Discharge summery')]"},
        "fldDisCumval": {findBy: "xpath",value: "(//div[@ng-repeat='record in commonDocumentItem.keywords | filter: keywordsFilter']//*[contains(text(),'Discharge summery')]/following::div)[1]"},

        "lblcareneed": {findBy: "xpath", value: "(//*[@class='CareNeedItem']/child::div[2])/child::div"},

        "fldvalupdate": {findBy: "xpath", value: "//*[@class='SlideContainer']"},
        "fldcareneedval": {findBy: "xpath", value: "//textarea[@ng-model='model']"},
        "lblcareneednewval": {findBy: "xpath", value: "(//div[@class='ValueHeader LongText']/child::div[2])[1]"},
        "lblcareneedoldval": {findBy: "xpath",value: "(//div[@class='ValueHeader LongText']/child::div[2])[2]"},

        "btncareplanSign": {findBy: "xpath", value: "//button[@ng-click='sign()']"},
        "btncareplanSave": {findBy: "xpath", value: "//button[@ng-click='save()']"},
        "btnupdatecareplan": {findBy: "xpath", value: "//*[@ng-if='enableUpdate()']"},

        "lbltreatment": {findBy: "xpath", value:"//div[@ng-click='openHistory(treatment)']"},
        "pputreatmentval": {findBy: "xpath", value: "//*[@ng-repeat='option in options track by $index']"},

        "lbltarget": {findBy: "xpath", value: "//div[@ng-click='openHistory(target)']"},

        "lblevaluation": {findBy: "xpath", value: "//div[@ng-click='openHistory(evaluation)']"},

        "lblresult": {findBy: "xpath", value: "//div[@ng-click='openHistory(result)']"}
    },

    "CosmicNovaSummaryViewPageSidePanelModule":{
        "lblcomment": {findBy: "xpath", value: "(//textarea[@ng-model='model'])[1]"},
        "lbladdon": {findBy: "xpath", value: "(//textarea[@ng-model='model'])[2]"},
        "btndone": {findBy: "xpath", value: "//button[@ng-click='save($event)']"},
        "btnremove": {findBy: "xpath", value: "//div[@ng-click='removeMarker()']"},


    },


}
