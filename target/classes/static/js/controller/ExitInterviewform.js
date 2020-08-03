/**
 * Created by prasad on 7/1/2017.
 */

app.controller('ExitInterviewCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.einterviewFormId = "";
        $scope.eEmployeeName = null;
        $scope.eEmployeeCode = "";
        $scope.ePosition = "";
        $scope.eDateStart = "";
        $scope.eVolutary = "";
        $scope.eOtherJob = "";
        $scope.ePersonalReason = "";
        $scope.eRelocation = "";
        $scope.eRetirement = "";
        $scope.eVoluntaryOther = "";
        $scope.eVolutary = "";
        $scope.eNonContract = "";
        $scope.eEndOfP = "";
        $scope.eAttendance = "";
        $scope.eViolation = "";
        $scope.eInVoluntaryOther = "";
        $scope.eSupervisorComment = "";
        $scope.eMudirsComment = "";
        $scope.eEmployeesComment = "";
        $scope.eSupervisorSign = "";
        $scope.eEmployeesSign = "";
        $scope.eMudirsSign = "";
        $scope.eSupervisorDate = "";
        $scope.eEmployeesDate = "";
        $scope.eMudirsDate = "";
        $scope.estatus = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.ButtonStatus = "Active";


        $scope.format = 'dd/MM/yyyy';
        $scope.openn1 = function () {
            $scope.popupp1.opened = true;
        };
        $scope.popupp1 = {
            opened: false
        };

        $scope.format = 'dd/MM/yyyy';
        $scope.openn2 = function () {
            $scope.popupp2.opened = true;
        };
        $scope.popupp2 = {
            opened: false
        };

        $scope.format = 'dd/MM/yyyy';
        $scope.openn3 = function () {
            $scope.popupp3.opened = true;
        };
        $scope.popupp3 = {
            opened: false
        };
        $scope.format = 'dd/MM/yyyy';
        $scope.openn4 = function () {
            $scope.popupp4.opened = true;
        };
        $scope.popupp4 = {
            opened: false
        };


        $scope.removeDesDetails = function () {
            $scope.einterviewFormId = "";
            $scope.eEmployeeName = null;
            $scope.eEmployeeCode = "";
            $scope.ePosition = "";
            $scope.eDateStart = "";
            $scope.eVolutary = "";
            $scope.eOtherJob = "";
            $scope.ePersonalReason = "";
            $scope.eRelocation = "";
            $scope.eRetirement = "";
            $scope.eVoluntaryOther = "";
            $scope.eVolutary = "";
            $scope.eNonContract = "";
            $scope.eEndOfP = "";
            $scope.eAttendance = "";
            $scope.eViolation = "";
            $scope.eInVoluntaryOther = "";
            $scope.eSupervisorComment = "";
            $scope.eMudirsComment = "";
            $scope.eEmployeesComment = "";
            $scope.eSupervisorSign = "";
            $scope.eEmployeesSign = "";
            $scope.eMudirsSign = "";
            $scope.eSupervisorDate = "";
            $scope.eEmployeesDate = "";
            $scope.eMudirsDate = "";
            $scope.estatus = "";
            $scope.isDisabled= false;
            $scope.operation = "";
        };

        $scope.inactive = function () {
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
                var page = "Page";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
                var page = "";
            }
            $scope.clicked = !$scope.clicked;
             $scope.getEInterviewList();

        };
        //TO ADD//

        $scope.addExitInterview = function () {
            $(".loader").css("display", "block");
            $scope.einterviewFormId = "";
            $scope.eEmployeeName = null;
            $scope.eEmployeeCode = "";
            $scope.ePosition = "";
            $scope.eDateStart = new Date();
            $scope.eVolutary = "";
            $scope.eOtherJob = "";
            $scope.ePersonalReason = "";
            $scope.eRelocation = "";
            $scope.eRetirement = "";
            $scope.eVoluntaryOther = "";
            $scope.eVolutary = "";
            $scope.eNonContract = "";
            $scope.eEndOfP = "";
            $scope.eAttendance = "";
            $scope.eViolation = "";
            $scope.eInVoluntaryOther = "";
            $scope.eSupervisorComment = "";
            $scope.eMudirsComment = "";
            $scope.eEmployeesComment = "";
            $scope.eSupervisorSign = "";
            $scope.eEmployeesSign = "";
            $scope.eMudirsSign = "";
            $scope.eSupervisorDate = new Date();
            $scope.eEmployeesDate = new Date();
            $scope.eMudirsDate = new Date();
            $scope.estatus = "Active";
            $('#modelName').text("Add Form");
            $("#submit").text("Save");
            $("#add_new_Exit_modal").modal('show');
        };

        $scope.getDetailsByName=function(type) {
            $http.post($scope.bshimServerURL  + "/getDetailsByName?name=" + type).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.eEmployeeName =data.employeeName ;
                $scope.eEmployeeCode=data.employeeCode;
                $scope.ePosition=data.empDesignation;
                $scope.eDateStart=new Date(data.empDoj);

            });
        };

        //   ToSAVE//
        $scope.saveExitInterview = function () {

            if ($scope.eEmployeeName == '' || $scope.eEmployeeName == null) {
                Notification.warning({message: 'Employee  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }

            else {
                var saveForm;
                saveForm = {
                    einterviewFormId: $scope.einterviewFormId,
                    eEmployeeName: $scope.eEmployeeName,
                    eEmployeeCode: $scope.eEmployeeCode,
                    ePosition: $scope.ePosition,
                    eDateStart: $scope.eDateStart,
                    eVolutary: $scope.eVolutary,
                    eOtherJob: $scope.eOtherJob,
                    ePersonalReason: $scope.ePersonalReason,
                    eRelocation: $scope.eRelocation,
                    eRetirement: $scope.eRetirement,
                    eVoluntaryOther: $scope.eVoluntaryOther,
                    eVolutary: $scope.eVolutary,
                    eNonContract: $scope.eNonContract,
                    eEndOfP: $scope.eEndOfP,
                    eAttendance: $scope.eAttendance,
                    eViolation: $scope.eViolation,
                    eInVoluntaryOther: $scope.eInVoluntaryOther,
                    eSupervisorComment: $scope.eSupervisorComment,
                    eMudirsComment: $scope.eMudirsComment,
                    eEmployeesComment: $scope.eEmployeesComment,
                    eSupervisorSign: $scope.eSupervisorSign,
                    eEmployeesSign: $scope.eEmployeesSign,
                    eMudirsSign: $scope.eMudirsSign,
                    eSupervisorDate: $scope.eSupervisorDate,
                    eEmployeesDate: $scope.eEmployeesDate,
                    eMudirsDate: $scope.eMudirsDate,
                    estatus: $scope.estatus

                };
                $http.post($scope.bshimServerURL + '/saveForm', angular.toJson(saveForm)).then(function (response) {
                    var data = response.data;
                    if (data === "") {
                        Notification.error({
                            message: 'Form  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Exit_modal").modal('hide');
                        Notification.success({
                            message: 'Form  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                        $scope.getEInterviewList();
                    }

                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });

                });

            };
        }
        $scope.getEmployeeList = function () {
            $http.post($scope.bshimServerURL + '/getEmployeeList').then(function (response) {
                var data = response.data;
                $scope.employeeList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getEmployeeList();
        $scope.getEInterviewList = function () {
            $http.post($scope.bshimServerURL + '/getEInterviewList').then(function (response) {
                var data = response.data;
                $scope.exitInterviewList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getEInterviewList();

        $scope.editExit = function (data) {
            $scope.einterviewFormId = data.einterviewFormId;
            $scope.eEmployeeName = data.eEmployeeName;
            $scope.eEmployeeCode = data.eEmployeeCode;
            $scope.ePosition = data.ePosition;
            $scope.eDateStart = new Date(data.eDateStart);
            $scope.eVolutary = data.eVolutary;
            $scope.eOtherJob = data.eOtherJob=="true";
            $scope.ePersonalReason = data.ePersonalReason=="true";
            $scope.eRelocation = data.eRelocation=="true";
            $scope.eRetirement = data.eRetirement=="true";
            $scope.eVoluntaryOther = data.eVoluntaryOther=="true";
            $scope.eVolutary = data.eVolutary;
            $scope.eNonContract = data.eNonContract=="true";
            $scope.eEndOfP = data.eEndOfP=="true";
            $scope.eAttendance = data.eAttendance=="true";
            $scope.eViolation = data.eViolation=="true";
            $scope.eInVoluntaryOther = data.eInVoluntaryOther=="true";
            $scope.eSupervisorComment = data.eSupervisorComment;
            $scope.eMudirsComment = data.eMudirsComment;
            $scope.eEmployeesComment = data.eEmployeesComment;
            $scope.eSupervisorSign = data.eSupervisorSign;
            $scope.eEmployeesSign = data.eEmployeesSign;
            $scope.eMudirsSign = data.eMudirsSign;
            $scope.eSupervisorDate = new Date(data.eSupervisorDate);
            $scope.eEmployeesDate = new Date(data.eEmployeesDate);
            $scope.eMudirsDate = new Date(data.eMudirsDate);
            $scope.estatus=data.estatus;
            $scope.operation = 'Edit';
            $('#ExitForm-title').text("Edit Designation");
            $("#add_new_Exit_modal").modal('show');
            $("#submit").text("Update");
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });

        };


        $scope.deleteExit = function (data) {
            bootbox.confirm({
                title: "Alert",
                message: "Do you want to Continue ?",
                buttons: {
                    confirm: {
                        label: 'OK'
                    },
                    cancel: {
                        label: 'Cancel'
                    }
                },
                callback: function (result) {
                    if (result == true) {
                        $http.post($scope.bshimServerURL + '/deleteExitForm?einterviewFormId='+ data).then(function (response) {
                                var data = response.data;
                            $scope.status = data.exitInterviewList;
                            if ($scope.status == "InActive") {
                                Notification.success({
                                    message: 'It is Already in use So Status Changes to Inactive',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            } else {
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                            $scope.getEInterviewList();
                        }, function (error) {
                            Notification.error({
                                message: 'Something went wrong, please try again',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };

        $scope.getBranchesList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getBranchesList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.branchesList= data;
                $scope.searchText = val;
                $scope.bran=[];
                angular.forEach( $scope.branchesList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.bran.push(val) ;
                    }

                })

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getBranchesList();
    });

