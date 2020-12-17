export default
{
  "CosmicNovaLoginPage": {
    "lblDashboardTitle": {findBy: "XXX", value: "XXX"},
    "lblHeaderTitle": {findBy: "XXX", value: "XXX"},
    "txtFldUsername": {findBy: "model", value: "model.username"},
    "txtFldPassword": {findBy: "model", value: "model.password"},
    "btnLogin": {findBy: "xpath", value: "//form/div[2]/button[2]"},
    "btnSAML": {findBy: "xpath", value: "//div[@class='LoginButtonBar']/button[1]"},
    "btnSettings": {findBy: "xpath", value: "//div[@class='LoginButtonBar']/button[3]"},
    "lblErrorMsg": {findBy: "xpath", value: "//nova-error-banner[@ng-if='loginErrorMessage']/span"}
  },
  "CosmicNovaSelectRolePage": {
    "btnRoleList": {findBy: "className", value: "ListItem"},
    "lblHeaderTitle": {findBy: "className", value: "StateHeader"},
    "btnCancel": {findBy: "xpath", value: "//div/span/span"}
  },
  "CosmicNovaSelectUnitPage": {
    "btnUnitList": {findBy: "className", value: "ListItem"},
    "lblHeaderTitle": {findBy: "className", value: "StateHeader"},
    "btnCancel": {findBy: "xpath", value: "//div/span/span"}
  },
  "CosmicNovaSelectWardPage": {
    "btnWardList": {findBy: "className", value: "ListItem"},
    "lblHeaderTitle": {findBy: "className", value: "StateHeader"},
    "btnCancel": {findBy: "xpath", value: "//div/span/span"}
  },
  "CosmicNovaBasePhysicianPage": {
    "lblPatientList": {findBy: "className", value: "NovaContactItem"},
    "divPatientDetails": {findBy: "className", value: "PatientDetails"},
    "btnInfoShared": {findBy: "className", value: "InformationSecrecy"},
    "btnTagInfoList": {findBy: "xpath", value: "//div[@ng-click='openTagDetails($event)']"},
    "btnBedList": {findBy: "xpath", value: "//nova-scalable-bitmap-text-label"},
    "btnPatientSideMenu": {findBy: "xpath", value: "//button[@ng-click='tabClicked(tab)']"},
    "btnShowsTabList": {findBy: "xpath", value: "//div[@class='ToggleBullet']"},
    "btnLogoutIcon": {findBy: "xpath", value: "//a[@ng-click='logout()']"},
    "btnChangeUnit": {findBy: "xpath", value: "//a[@ng-click='changeWorkingUnit()']"},
  },

  "CosmicNovaPatientSummaryPage": {
    "lblSummaryTitle": {findBy: "css", value: ".header"},
    "divPackageSummary": {findBy: "css", value: "li[ng-click='editPackage(package)']"},
    "iconpackcomment": {findBy: "xpath", value: "//span[@ng-if='package.comment']"},
    "lblLabelname": {findBy: "xpath", value: "//span[@ng-click='editLabel(marker)']"},

  },

  "CosmicNovaPatientActivityPage": {
    "lblActivityTitle": {findBy: "css", value: ".ButtonContainer.ScrollView>h3"},
    "lnkPendingActivityList": {findBy: "css", value: ".Name"},
    "lblRole": {findBy: "xpath", value: "//h3[@ng-if='role']"},
    "fldResprole": {findBy: "xpath", value: "//*[contains(text(),'Responsible roles')]/following::div[1]"},

  },

  "CosmicNovaAddingPage": {
    "btnLeftMenuList": {findBy: "css", value: ".TabButton>button"},
    "lblAddingOutBox": {findBy: "className", value: "ResultBody"},
    "btnBackToSummary": {findBy: "css", value: ".patientAddingPanelToggleButton.Open>div"},
    "btnOutBoxConfirm": {findBy: "css", value: "button[ng-click='sendOrders()']"},
    "lnkOutBxActivities": {findBy: "xpath", value: "//div[@class='ActivityOutboxItem']//span[@ng-click='runLabelAction($event)']"},
    "lnkOutBxPackages": {findBy: "xpath", value: "//div[@class='ActivityPackage']//span[@ng-click='openPackageDialogInRemoveMode(item)']"},
    "btnRemoveFromOutBx": {findBy: "css", value: ".Icons.RemoveIcon"},
  },
  "CosmicNovaMyListPage":{
    "lblPatientNameList": {findBy: "xpath", value: "//div[@class='Name']"},
    "lblPatientComment": {findBy: "xpath", value: "//div[@class='Comment']"},

  },
  "CosmicNovaLatestPage":{
    "divLatestPatientList": {findBy: "css", value: ".PatientDetails"},
    "lblPatientNameLatestList": {findBy: "xpath", value: "//div[@class='Name']"},
  },
  "CosmicNovaOutliesPage":{
    "lblPatientNameOutlierList": {findBy: "css", value: ".Name"},
  },
  "CosmicNovaFindPatientPage":{
    "btnExpander": {findBy: "css", value: ".ToggleExpandedButton"},
    "txtFldSocialNumber": {findBy: "model", value: "model.search.identificationNumber"},
    "txtFldGivenName": {findBy: "model", value: "model.search.firstName"},
    "txtFldFamilyName": {findBy: "model", value: "model.search.lastName"},
  },
  "CosmicNovaClinicalParametersPage": {
    "btnRegister": {findBy: "xpath", value: "//button[@ng-if='contact && !isEnded']"},
    "btntempname": {findBy: "xpath", value: "//button[@ng-click='tabClicked(tab)']"},
  },
  "CosmicNovaMedicalRecordPage": {
    "lblObservation": {findBy: "xpath", value: "//button[@ng-click='tabClicked(tab)'][contains(text(),'Observation')]"},
    "lblKeywordbased": {findBy: "xpath", value: "//button[@ng-click='tabClicked(tab)'][contains(text(),'Keywordbased view')]"},
    "lblNUCD": {findBy: "xpath", value: "//button[@ng-click='tabClicked(tab)'][contains(text(),'NUCD Views')]"},
    "lblCarePlan": {findBy: "xpath", value: "//button[@ng-click='tabClicked(tab)'][contains(text(),'Careplan view - Nova')]"},


  }

}


