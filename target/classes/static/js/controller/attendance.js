/**
 * Created by prasad on 7/1/2017.
 */

app.controller('attendanceCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.aId = "";
        $scope.EName = "";
        $scope.ADate = "";
        $scope.First = "";
        $scope.Last = "";
        $scope.Time = "";
        $scope.status = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.removeAttendanceDetails = function () {
            $scope.aId = "";
            $scope.EName = "";
            $scope.ADate = "";
            $scope.First = "";
            $scope.Last = "";
            $scope.Time = "";
            $scope.status = "";
            $scope.isDisabled= false;
            $scope.operation = "";
        };
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.inactivedept = function () {
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
            $scope.getDeptList();

        };
        //TO ADD//
        $scope.getDepartmentList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getDepartmentList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.departmentList= data;
                $scope.searchText = val;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getDepartmentList();


        $scope.format = 'dd/MM/yyyy';

        $scope.openA = function () {
            $scope.popupA.opened = true;
        };

        $scope.popupA = {
            opened: false
        };

        $scope.format = 'dd/MM/yyyy';

        $scope.openB = function () {
            $scope.popupB.opened = true;
        };

        $scope.popupB = {
            opened: false
        };

        $scope.format = 'dd/MM/yyyy';

        $scope.openC = function () {
            $scope.popupC.opened = true;
        };

        $scope.popupC = {
            opened: false
        };



        $scope.previoustopicDetails=[];
        $scope.addNewAtten = function(){
            if($scope.previoustopicDetails==""){
                $scope.previoustopicDetails = [];
            }
            $scope.previoustopicDetails.push({
                chapterName:'',
                TopicName:'',
                Assignment:'',
                status:"Active"

            });
        };
        $scope.removecross = function(data){
            $scope.index=data;
            $scope.previoustopicDetails.splice($scope.index,1);
        };

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


        $scope.deptEmp = function (name) {
            $http.post($scope.bshimServerURL + "/getdeptEmp?depId="+name).then(function (response) {
                var data = response.data;
                $scope.employeeList=data;
                $scope.allList=[];
                angular.forEach($scope.employeeList,function (val,key) {
                    $scope.allList.push({
                        serialNo:key,
                        employeeName:val.employeeName,
                        present:"present"
                    });
                });
                $scope.employeeList=angular.fromJson($scope.allList);
                if($scope.department==null){
                    $scope.getEmployeeList();
                }
            })
        };

        $scope.format = 'dd/MM/yyyy';

        $scope.openD = function () {
            $scope.popupD.opened = true;
        };

        $scope.popupD = {
            opened: false
        };



        $scope.saveAttendanceImport = function(){
            $scope.isDisabled= true;
            var formElement = document.getElementById("attendanceDetails");
            var attendanceDetails = new FormData(formElement);
            $http.post('bs'+ '/attendanceImportSave',attendanceDetails,
                { headers: {'Content-Type': undefined},
                    transformRequest: angular.identity,
                }).then(function (response) {
                    $("#import_Attendance").modal('hide');
                    $scope.getAttendanceList();
                    $scope.isDisabled= false;
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled= false;
                }
            )
        }

        $scope.addAttendance = function () {

            var today = new Date();
            // var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = time;
            $(".loader").css("display", "block");
            $scope.EName = "";
            $scope.department = null;
            $scope.ADate = new Date();
            $scope.Time = "";
            $scope.status = "Active";
            $scope.allList=[];
            angular.forEach($scope.employeeList,function (val,key) {
                $scope.allList.push({
                    serialNo:key,
                    employeeName:val.employeeName,
                    present:"present"
                });
            });
            $scope.employeeList=angular.fromJson($scope.allList);
            $('#modelName').text("Add Attendance");
            $("#submit").text("Save");
            $("#add_new_Atten_modal").modal('show');
        };


        $scope.getAttendanceList = function () {
            $http.post('/bs' + '/getAttendanceList').then(function (response) {
                var data = response.data;
                $scope.attendanceList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getAttendanceList();


        $scope.editAttendance = function (data) {
            $scope.aId = data.aId;
            $scope.department = data.department;
            $scope.ADate = new Date (data.aDate);
            $scope.status = data.status;
            $scope.employee = angular.fromJson(data.empAttendance);
            $scope.employeeList = [];
            angular.forEach($scope.employee,function (val,key) {
                var create=[];
                create.employeeName=val.empName;
                create.present=val.attendance;
                $scope.employeeList.push(create);
            });
            $('#topic-title').text("Edit Attendance");
            $("#submit").text("Save");
            $("#add_new_Atten_modal").modal('show');

        }


        $scope.isEmpty = function (card) {
            return card == '';
        }

        //   ToSAVE//
        $scope.saveAttendance = function () {


            $scope.allList=[];
            angular.forEach($scope.employeeList,function (val,key) {
                $scope.allList.push({
                    serialNo:key,
                    empName:val.employeeName,
                    attendance:val.present
                });
            });

                $scope.isDisabled = true;
                var saveAttendance;
                saveAttendance = {
                    aId: $scope.aId,
                    eName: $scope.EName,
                    aDate: new Date($scope.ADate),
                    department: $scope.department,
                    status: $scope.status,
                    empAttendance:angular.toJson($scope.allList)

                };
                $http.post('/bs' + '/saveAttendance', angular.toJson(saveAttendance, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data === "") {
                        $scope.isDisabled = false;
                        Notification.error({
                            message: 'Attendance  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Atten_modal").modal('hide');
                        Notification.success({
                            message: 'Attendance  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                        $scope.getAttendanceList();
                        // // $scope.removeLoanDetails();
                    }

                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled = false;

                });
            // };
        }

        $scope.deleteAttendance = function (data) {
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
                        $http.post('/bs' + '/deleteAttendance?aId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.status;
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
                            $scope.getAttendanceList();
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
    });

