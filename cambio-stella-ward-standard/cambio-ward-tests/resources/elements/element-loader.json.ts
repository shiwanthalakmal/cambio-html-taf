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
      "lblErrorMsg": {findBy: "css", value: ".BasePage.LoginPage>nova-error-banner"}
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
    "CosmicNovaBaseWardPage": {
      "divAdmittedWithBeds": {findBy: "xpath", value: "//body/div[1]/div/div[1]//div[@class='ContactDesc']"},
      "divAdmittedWithOutBeds": {findBy: "xpath", value: "//body/div[1]/div/div[3]//div[@class='ContactDesc']"},
      "divAdmittedTechnicalBeds": {findBy: "xpath", value: "//body/div[1]/div/div[5]//div[@class='ContactDesc']"},
      "divAdmittedAllBeds": {findBy: "className", value: "NovaPatientCardOverview"},
      "btnBedIcons": {findBy: "xpath", value: "//nova-legacy-ward-board-room-and-bed-label"},
      "btnRoundStatus": {findBy: "xpath", value: "//body/div[1]/div/div[1]//div[@class='RoundStatus']//div"},
      "btnAlertIcon": {findBy: "xpath", value: "//body/div[1]/div/div[1]//div[@class='AlertIcon']//div"},
      "lblAdmissionDate": {findBy: "xpath", value: "//body/div[1]/div/div[1]//div[@class='AdmissionDate']"},
      "lblLeaveDate": {findBy: "xpath", value: "//body/div[1]/div/div[1]//div[@class='LeaveDate']"},
      "lblMarkers": {findBy: "xpath", value: "//body/div[1]/div/div[1]//div[@class='Markers']"},
      "lblMarkerModalList": {findBy: "repeater", value: "marker in markers track by $index"}
    },
    "CosmicNovaAdminUnitPage": {
      "txtFldUnitName": {findBy: "model", value: "adminDTO.unitSettings.unitName"},
      "txtFldLoadingPeriod": {findBy: "xpath", value: "//input[@type='number']"},
      "txtFldTeamName": {findBy: "model", value: "selectedTeam.name"},
      "btnColorSelection": {findBy: "xpath", value: "//section[4]/div/span"},
      "btnShowInDayView": {findBy: "css", value: "li[ng-click='adminDTO.unitSettings.formatAdmissionDate = false; addUpdated(adminDTO.unitSettings)']"},
      "btnShowInDateView": {findBy: "css", value: "li[ng-click='adminDTO.unitSettings.formatAdmissionDate = true; addUpdated(adminDTO.unitSettings)']"},
      "btnTeamAdd": {findBy: "className", value: "AddButton"},
      "ulTeamSelectionList": {findBy: "repeater", value: "team in adminDTO.teams | orderBy:orderBy()"},
      "btnTeamDelete": {findBy: "css", value: "span.Right.DeleteIcon"},
      "btnTeamDeleteAccept": {findBy: "css", value: "button[ng-click='ok()']"},
      "btnTeamDeleteReject": {findBy: "css", value: "button[ng-click='cancel()']"}
    },
    "CosmicNovaAdminStaffPage": {
      "btnAddStaff": {findBy: "css", value: "button.AddButton"},
      "ulListOfStaff": {findBy: "xpath", value: "//div[2]/div[2]/div/ul/li/span[1]"},
      "btnDeleteStaff": {findBy: "xpath", value: "//div[2]/div[2]/div/ul/li/span[2]"},
      "btnDeleteStaffNo": {findBy: "css", value: "button[ng-click='cancel()']"},
      "btnDeleteStaffYes": {findBy: "css", value: "button[ng-click='ok()']"},
      "txtFldUpdateStaffName": {findBy: "model", value: "selectedStaffCategory.name"},
      "btnSearchStaff": {findBy: "css", value: "button[e2e-tag='staff']"},
      "btnSearchPackage": {findBy: "css", value: "button[e2e-tag='selectionPackage']"},
      "txtFldSearchValue": {findBy: "xpath", value: "(//input[@type='text'])[2]"},
      "btnSearchIcon": {findBy: "className", value: "StaffPackageSearch"},
      "ulListOfSearch": {findBy: "xpath", value: "//nova-tab-element/div/ul/li"},
      "ulListOfCategory": {findBy: "xpath", value: "//div[2]/div[2]/section[3]/ul/li"},
      "btnDeleteUnitStaffCategory": {findBy: "css", value: "span[ng-click='removeStaffFromRole(selectedStaffCategory, staff)']"}
    },
    "CosmicNovaAdminRolesPage": {
      "btnAddRoles": {findBy: "css", value: "button.AddButton"},
      "ulListOfRoles": {findBy: "xpath", value: "//*[@id='sortable-container']/li/div/span[2]"},
      "btnDeleteRoles": {findBy: "css", value: ".Right.DeleteIcon"},
      "btnDeleteRolesNo": {findBy: "css", value: "button[ng-click='cancel()']"},
      "btnDeleteRolesYes": {findBy: "css", value: "button[ng-click='ok()']"},
      "txtFldUpdateRolesName": {findBy: "model", value: "selectedRole.name"},
      "txtFldUpdateAbbreviation": {findBy: "model", value: "selectedRole.shortName"},
      "ulListOfStaffWith": {findBy: "xpath", value: "//section[3]/ul/li"},
      "ulListOfShowOn": {findBy: "xpath", value: "//section[4]/ul/li"},
      "ulListOfResponsibility": {findBy: "xpath", value: "//section[4]/ul/li"}
    },
    "CosmicNovaAdminInformationPage": {
      "btnAddInfoMark": {findBy: "css", value: "button.AddButton"},
      "ulListOfInfoMark": {findBy: "xpath", value: "//div[2]/div[2]/div/ul/li"},
      "btnDeleteInfoMark": {findBy: "xpath", value: "//div[2]/div[2]/div/ul/li/span[2]"},
      "btnDeleteInfoMarkNo": {findBy: "css", value: "button[ng-click='cancel()']"},
      "btnDeleteInfoMarkYes": {findBy: "css", value: "button[ng-click='ok()']"},
      "txtFldUpdateInfoMark": {findBy: "model", value: "selectedInfoMarker.name"},
      "ulListOfOptions": {findBy: "xpath", value: "//section/div/ul/li"},
      "txtAraDescription": {findBy: "model", value: "selectedInfoMarker.description"}
    },
    "CosmicNovaAdminPackagePage": {
      "btnAddPackage": {findBy: "css", value: "button.AddButton"},
      "ulListOfPackages": {findBy: "xpath", value: "//div[2]/div[2]/div/ul/li"},
      "btnDeletePackage": {findBy: "xpath", value: "//div[2]/div[2]/div/ul/li/span[2]"},
      "btnDeletePackageNo": {findBy: "css", value: "button[ng-click='cancel()']"},
      "btnDeletePackageYes": {findBy: "css", value: "button[ng-click='ok()']"},
      "txtFldUpdatePackageName": {findBy: "model", value: "selectedPackage.name"},
      "ulListOfOptions": {findBy: "xpath", value: "//section/ul/li"},
      "txtAraDescription": {findBy: "model", value: "selectedPackage.description"},
      "btnActivityList": {findBy: "css", value: "button[e2e-tag='Tasks']"},
      "btnInfoMarkersList": {findBy: "css", value: "button[e2e-tag='Infos']"},
      "ulListOfActivityRecords": {findBy: "xpath", value: "//nova-tab-element/div/ul/li"},
      "ulListOfInfoMarkRecords": {findBy: "xpath", value: "//nova-tab-element[2]/div/ul/li"},
      "ulListOfContentPackage": {findBy: "xpath", value: "//section/ul/li"}
    },
    "CosmicNovaAdminTagsPage": {
      "btnTagView": {findBy: "css", value: "button[e2e-tag='Tags']"},
      "btnSubtagView": {findBy: "css", value: "button[e2e-tag='SubTags']"},
      "ulListOfItems": {findBy: "xpath", value: "//nova-tab-element/div/ul/li"},
      "btnDeleteItem": {findBy: "xpath", value: "//nova-tab-element/div/ul/li/div[2]"},
      "btnDeleteItemNo": {findBy: "css", value: "button[ng-click='cancel()']"},
      "btnDeleteItemYes": {findBy: "css", value: "button[ng-click='ok()']"},
      "btnAdd": {findBy: "css", value: "div.TabElement > button"},
      "txtFldUpdateName": {findBy: "model", value: "selectedTag.name"}
    },
    "CosmicNovaAdminStatusPage": {
      "btnChangeStatus": {findBy: "model", value: "adminDTO.unitSettings.useRoundStatus"},
      "btnAddStatus": {findBy: "css", value: "button.AddButton"},
      "ulListOfStatus": {findBy: "xpath", value: "//section[2]/ul/li"},
      "btnDeleteStatus": {findBy: "xpath", value: "//section[2]/ul/li/span[2]"},
      "btnDeleteStatusNo": {findBy: "css", value: "button[ng-click='cancel()']"},
      "btnDeleteStatusYes": {findBy: "css", value: "button[ng-click='ok()']"},
      "txtFldUpdateStatusName": {findBy: "model", value: "selectedRoundStatus.name"},
      "divColorPanel": {findBy: "xpath", value: "//section[@class='SplitSection']//span/div"}
    },
    "CosmicNovaAdminPatientViewPage": {
       "btnActivitiesTabView": {findBy: "css", value: "button[e2e-tag='Activities']"},
       "btnPackagesTabView": {findBy: "css", value: "button[e2e-tag='Packages']"},
       "ddlRoleSelection": {findBy: "", value: "//section[2]/ul/li"},
       "ulListOfActivities": {findBy: "repeater", value: "item in adminDTO.tasks | orderBy: 'name'"},
       "ulListOfActivityContents": {findBy: "xpath", value: "//ng-include/div[2]/div[2]//section[2]/ul/li"},
       "ulListOfPackages": {findBy: "repeater", value: "item in adminDTO.packages | orderBy: 'name'"},
       "ulListOfPackagesContents": {findBy: "", value: "selectedRoundStatus.name"}
      },
    "CosmicNovaAdminActivityPage": {
      "ddlActivitySelection": {findBy: "model", value: "sort.roleSort"},
      "btnAddActivity": {findBy: "css", value: "button.AddButton"},
      "ulListOfActivities": {findBy: "xpath", value: "//div[2]/div[2]/div/ul/li"},
      "btnDeleteActivity": {findBy: "xpath", value: "//div[2]/div[2]/div/ul/li/span[2]"},
      "btnDeleteActivityNo": {findBy: "css", value: "button[ng-click='cancel()']"},
      "btnDeleteActivityYes": {findBy: "css", value: "button[ng-click='ok()']"},
      "txtFldUpdateActivityName": {findBy: "model", value: "selectedActivity.name"},
      "txtAraDescription": {findBy: "model", value: "selectedActivity.description"},
      "ulListOfOptions": {findBy: "xpath", value: "//section/div/ul/li"},
      "ulListOfResponsibilities": {findBy: "xpath", value: "//section/div/ul/li"}
    },
    "CosmicNovaAdminWardViewPage": {
      "btnActivitiesTab": {findBy: "css", value: "button[e2e-tag='Activities']"},
      "btnInfoMarkerTab": {findBy: "css", value: "button[e2e-tag='Markers']"},
      "ulInfoMarkerList": {findBy: "xpath", value: "//nova-tab-element[2]/div/ul/li"},
      "btnPackageTab": {findBy: "css", value: "button[e2e-tag='Packages']"},
      "ulPackageList": {findBy: "xpath", value: "//nova-tab-element[3]/div/ul/li"},
      "ddlActivitySelection": {findBy: "model", value: "sort.roleSort"},
      "ulActivityResults": {findBy: "xpath", value: "//nova-tab-element/div/ul/li"},
      "ulContentList": {findBy: "xpath", value: "//section[2]/ul/li"}
    },
    "CosmicNovaSubLoginPage": {
      "txtFldSubUsername": {findBy: "model", value: "model.username"},
      "txtFldSubPassword": {findBy: "model", value: "model.password"},
      "btnLoginCancel": {findBy: "css", value: "button[ng-click='hasPreviousState(currentState) ? goBack() : cancel()']"},
      "btnLoginOk": {findBy: "css", value: "button[ng-click='onStatePasswordSubmit()']"},
      "btnSaml": {findBy: "css", value: "button[ng-click='gotoState(STATE_SAML)']"},
      "lblErrorMsg": {findBy: "css", value: ".dialog-body>nova-error-banner>span"},
    },
    "CosmicNovaSubSelectRolePage": {
       "ulSubRoleList": {findBy: "css", value: "div.ListItem.LastSelected > span"},
       "btnRoleCancel": {findBy: "css", value: ""}
    },
    "CosmicNovaSubSelectUnitPage": {
       "ulSubUnitsList": {findBy: "css", value: "div.ListItem.LastSelected > span"},
       "btnUnitsCancel": {findBy: "css", value: ""}
    },
    "CosmicNovaStaffingViewPage": {
      "ulStaffingTabList": {findBy: "xpath", value: "//div[@id='StaffingManagementPage']//button"},
      "btnAddStaff": {findBy: "xpath", value: "//div[@id='StaffingManagementPage']//span/span"},
      "tblStaffing": {findBy: "css", value: ""},
      "lblStaffGrisColumnTitles": {findBy: "xpath", value: "//div[@class='Header']/div"},
      "txtFldModalSearch": {findBy: "model", value: "model.searchUsersInputValue"},
      "btnModalSearchIcon": {findBy: "className", value: "StaffSearch"},
      "btnModalSave": {findBy: "css", value: "button[ng-click='save()']"},
      "btnModalCancel": {findBy: "css", value: "button[ng-click='cancel()']"},
      "ulModalStaffResult": {findBy: "xpath", value: "//div[@class='StaffList']//li"}
    },
    "CosmicNovaActivityViewPage": {
      "btnAttentionSignalIcon": {findBy: "className", value: "NovaContactAttentionSignal "},
      "lblPatientName": {findBy: "className", value: "PatientNameAndDetails"},
      "lblPatientNumber": {findBy: "className", value: "IdentificationNumberGenderArea"},
      "lblGenderIcon": {findBy: "className", value: "icon-FEMALE"},
      "btnCloseView": {findBy: "className", value: "CloseButton"},
      "lblRoundStatusInfo": {findBy: "xpath", value: "//nova-legacy-ward-board-round-status/span"},
      "lblBedInfo": {findBy: "css", value: ".HeaderBottomContainer>nova-legacy-ward-board-room-and-bed-label"},
      "lblTagInfo": {findBy: "className", value: "Tag"},
      "btnPresent": {findBy: "css", value: ".ng-pristine.ng-untouched.ng-valid.animate>div"},
      "lnkAddPackage": {findBy: "xpath", value: "//div[@nova-open-popup='AddPackageMarkerContextDialog']"},
      "ulAddPackageList": {findBy: "repeater", value: "package in novaModel.getPackageMarkersByContactId(contact.id) | orderBy:'name'"},
      "lnkAddInfoMarker": {findBy: "xpath", value: ".//div[@nova-open-popup='AddInformationMarkerContextDialog']"},
      "ulAddInforMarkerList": {findBy: "className", value: "InfoMarker"},
      "lblEnlistmentDateValue": {findBy: "css", value: ".Block.Summary>table>tbody>tr>td"},
      "lblDischargeValue": {findBy: "css", value: ".Block.Summary>table>tbody>tr>td"},
      "lnkChangePlannedDischarge": {findBy: "css", value: ".Block.Summary>button"},
      "lnkChangeActivitySummary": {findBy: "css", value: ".SummaryAreaActivity>button"}
    },
    "CosmicNovaTeamViewPage": {
      "divTitleBedIcon": {findBy: "xpath", value: "//nova-legacy-ward-board-room-and-bed-label"},
      "divTitleActiveSignal": {findBy: "className", value: "NovaContactAlertIcon"},
      "divTitlePatientName": {findBy: "className", value: "Name"},
      "divTitlePatientAge": {findBy: "className", value: "Age"},
      "divInforMarkerArea": {findBy: "className", value: "InfoMarkers"},
      "divStatusBar": {findBy: "xpath", value: "//nova-legacy-ward-board-round-status/span"},
      "divTagBar": {findBy: "className", value: "Tag"},
      "divStaffAssignArea": {findBy: "className", value: "RoleArea"},
      "divInTimeBar": {findBy: "className", value: "In"},
      "divOutTimeBar": {findBy: "className", value: "Out"},
      "divActivityPackagesList": {findBy: "className", value: "scrollbarIE"}
    },
    "CosmicNovaBedsViewPage": {
      "divPatientRecords": {findBy: "className", value: "BedCardArea"},
      "divPatientBedIcons": {findBy: "xpath", value: "//nova-legacy-ward-board-room-and-bed-label"},
      "divTeamSections": {findBy: "repeater", value: "selection in selections"}
    },
    "CosmicNovaStaffPlanViewPage": {
      "lblTeamList": {findBy: "className", value: "Tag"},
      "lblRolesList": {findBy: "className", value: "RoleName"},
      "ulStaffMembersUnderRole": {findBy: "css", value: "button[ng-click='setStaffRoleSelected(staff, role)']"},
      "btnTeamPhone": {findBy: "xpath", value: "(//*[@class='TelephoneNumberIcon'])[1]"},
      "btnStaffPhone": {findBy: "xpath", value: "(//*[@class='TelephoneNumberIcon'])[4]"},
      "btnBedIcon": {findBy: "xpath", value: "//nova-legacy-ward-board-room-and-bed-label"},
      "lblPatientName": {findBy: "className", value: "FirstName"},
      "lblInTime": {findBy: "className", value: "AdmissionDate"},
      "lblOutTime": {findBy: "className", value: "LeaveDate"},
      "lblMembersOfTeam": {findBy: "", value: ""},
      //"lblPatientOfRole": {findBy: "css", value: "li[ng-click='setStaffRoleSelected(staff, role)']"},
      "lblPatientOfRole": {findBy: "css", value: "li[ng-click='setStaffSelected(staff)']"},
    },
    "CosmicNovaResponsibilitiesPage": {
      "lblSelectionColumnTitle": {findBy: "xpath", value: "//div[@class='Header']/div"},
      "btnLeftRolesList": {findBy: "css", value: ".TabButton"},
      "lblBedAndPatient": {findBy: "css", value: ".BedCardArea"}
    }
  }
