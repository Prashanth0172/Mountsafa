app.controller('teachingClearanceFormController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';

        $scope.inactiveStatus = "Active";

        // $scope.companyLogoPath = "";

        // $scope.importPopup = function(){
        //     $("#import_Country").modal('show');
        // }


        $scope.format = 'dd/MM/yyyy';
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.popup1 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        $scope.popup2 = {
            opened: false
        };

        $scope.open3 = function () {
            $scope.popup3.opened = true;
        };
        $scope.popup3 = {
            opened: false
        };

        $scope.open4 = function () {
            $scope.popup4.opened = true;
        };
        $scope.popup4 = {
            opened: false
        };


        $scope.open5 = function () {
            $scope.popup5.opened = true;
        };
        $scope.popup5 = {
            opened: false
        };


        // $scope.getDiscountTypeList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getDiscountTypeList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.discountTypeList= data;
        //         $scope.searchText = val;
        //
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     })
        //
        // };
        //
        // $scope.getDiscountTypeList();


        $scope.addTeacherClearanceForm = function () {
            // $scope.statusText = "Active";
            $scope.type=null;
            $('#student-title').text("Add Teaching Clearance Form");
            $("#add_new_Teacher_Clearance_Form_modal").modal('show');

        };


        $scope.getEmployeeList = function () {
            $http.post($scope.bshimServerURL + '/getEmployeeList').then(function (response) {
                var data = response.data;
                $scope.employeeList = data;
                $scope.empcode=[];
                angular.forEach($scope.employeeList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.empcode.push(val);
                    }

                })
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getEmployeeList();



        $scope.getTeachingClearanceList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getTeacherClearanceList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.teacherClearanceList= data;
                $scope.searchText = val;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getTeachingClearanceList();

        //
        // $scope.EmployeeCode = function(empcode){
        //     var url = "/bs/getEmployeeCode?employeeName=" + empcode;
        //     $http.post(url).then(function (response) {
        //         var data = response.data;
        //         $scope.employeeList = angular.copy(data);
        //         $scope.employeeCode=[];
        //         angular.forEach($scope.employeeList,function (val,key) {
        //             if(val.status=="Active"){
        //                 $scope.employeeCode.push(val);
        //             }
        //
        //         })
        //
        //     })
        // }


        $scope.getDetailsByName=function(type) {
            $http.post($scope.bshimServerURL  + "/getDetailsByName?name=" + type).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.teacherName =data.employeeName ;
                $scope.employeeNo=data.employeeCode;


            });
        };

        $scope.removeTeacherClearance = function () {
            $scope.teachingId="";
            $scope.teacherName = "";
            $scope.subjectId = "";
            $scope.Sdate = "";
            $scope.Edate = "";
            $scope.Mdate = "";
            $scope.Ldate = "";
            $scope.Udate = "";
            $scope.employeeNo = "";
            $scope.Books = "";
            $scope.teachingMaterials = "";
            $scope.stationaries = "";
            $scope.attendanceBook = "";
            $scope.adminExecutive = "";
            $scope.feeSubmission = "";
            $scope.checkpointPapers = "";
            $scope.lessonPlan = "";
            $scope.project = "";
            $scope.vicePrinciple = "";
            $scope.AccessCard = "";
            $scope.Keys = "";
            $scope.tools = "";
            $scope.sportsEquipments = "";
            $scope.administrator = "";
            $scope.SchoolFee = "";
            $scope.relevantFees = "";
            $scope.courseFee = "";
            $scope.advanceSalary = "";
            $scope.moneyHeld = "";
            $scope.financeManager = "";
            $scope.mudirApproval = "";


        };


        $scope.EditTeacherClearance = function (data) {
            $scope.teachingId = data.teachingId;
            $scope.teacherName = data.teacherNm;
            // $scope.subjectId = data.subjectId;
            $scope.Sdate = new Date(data.sDate);
            $scope.Edate = new Date(data.eDate);
            $scope.Mdate = new Date(data.mDate);
            $scope.Ldate = new Date(data.lDate);
            $scope.Udate = new Date(data.uDate);
            // $scope.Ldate = new Date(data.ldate);
            $scope.employeeNo = data.employeeNo;

            $scope.Books = data.books=="true";
            $scope.teachingMaterials = data.teachingMaterials=="true";
            $scope.stationaries = data.stationaries=="true";
            $scope.attendanceBook = data.attendanceBook=="true";
            $scope.adminExecutive = data.adminExecutive;
            $scope.feeSubmission = data.feeSubmission=="true";
            $scope.checkpointPapers = data.checkpointPapers=="true";
            $scope.lessonPlan = data.lessonPlan=="true";
            $scope.project = data.project=="true";
            $scope.vicePrinciple = data.vicePrinciple;
            $scope.AccessCard = data.accessCard=="true";
            $scope.Keys = data.classKeys=="true";
            $scope.tools = data.tools=="true";
            $scope.sportsEquipments = data.sportsEquipments=="true";
            $scope.administrator = data.administrator;
            $scope.SchoolFee = data.schoolFee=="true";
            $scope.relevantFees = data.relevantFees=="true";
            $scope.courseFee = data.courseFee=="true";
            $scope.advanceSalary = data.advanceSalary=="true";
            $scope.moneyHeld = data.moneyHeld=="true";
            $scope.financeManager = data.financeManager;
            $scope.mudirApproval = data.mudirApproval;

            // $scope.branchName = parseInt(data.branchId);
            $scope.operation = 'Edit';
            $('#student-title').text("Edit TeacherClearance");
            $("#add_new_Teacher_Clearance_Form_modal").modal('show');

        }, function (error) {
            Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };



        $scope.DeleteTeacherClearance = function (data) {
            // if (data.gradeStatus == "InActive" && data.gradeStatus != "Active") {
            //     Notification.warning({
            //         message: 'Cannot Delete Aleady in use',
            //         positionX: 'center',
            //         delay: 2000
            //     });
            // }
            // else {
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
                        var deleteDetails = {

                            teachingObservationId: data.teachingObservationId,
                        };
                        $http.post($scope.bshimServerURL + "/DeleteTeacherClearance", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getTeachingClearanceList();
                            if(data==true){
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }else {
                                Notification.warning({
                                    message: 'Cannot delete Already in Use',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                        }, function (error) {
                            Notification.warning({
                                message: 'Cannot delete Already in Use',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };


        $scope.DeleteTeacherClearance = function (data) {
            // if (data.gradeStatus == "InActive" && data.gradeStatus != "Active") {
            //     Notification.warning({
            //         message: 'Cannot Delete Aleady in use',
            //         positionX: 'center',
            //         delay: 2000
            //     });
            // }
            // else {
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
                        var deleteDetails = {

                            teachingId: data.teachingId
                        };
                        $http.post($scope.bshimServerURL + "/deleteTeacherClearance", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getTeachingClearanceList();
                            if(data==true){
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }else {
                                Notification.warning({
                                    message: 'Cannot delete Already in Use',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                        }, function (error) {
                            Notification.warning({
                                message: 'Cannot delete Already in Use',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };



        $scope.saveTeacherClearance = function () {
            $scope.isDisabled= true;
            if (angular.isUndefined($scope.teacherName) || $scope.teacherName == ''|| $scope.teacherName==null) {
                Notification.warning({message: 'Teacher name can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;

            }
            // else if (angular.isUndefined($scope.subjectId) || $scope.subjectId == ''|| $scope.subjectId==null) {
            //     Notification.warning({message: 'Subject Cannot be Empty', positionX: 'center', delay: 2000});
            //     $scope.isDisabled= false;
            // }
            else {
                var saveTeacherDetails;
                saveTeacherDetails = {
                    teachingId: $scope.teachingId,
                    teacherNm: $scope.teacherName,
                    mDate: $scope.Mdate,
                    sDate: $scope.Sdate,
                    eDate: $scope.Edate,
                    lDate: $scope.Ldate,
                    uDate: $scope.Udate,
                    employeeNo: $scope.employeeNo,
                    books: $scope.Books,
                    teachingMaterials: $scope.teachingMaterials,
                    stationaries: $scope.stationaries,
                    attendanceBook: $scope.attendanceBook,
                    adminExecutive: $scope.adminExecutive,
                    feeSubmission: $scope.feeSubmission,
                    checkpointPapers: $scope.checkpointPapers,
                    lessonPlan: $scope.lessonPlan,
                    project: $scope.project,
                    vicePrinciple: $scope.vicePrinciple,
                    accessCard: $scope.AccessCard,
                    classKeys: $scope.Keys,
                    tools: $scope.tools,
                    sportsEquipments: $scope.sportsEquipments,
                    administrator: $scope.administrator,
                    schoolFee: $scope.SchoolFee,
                    relevantFees: $scope.relevantFees,
                    courseFee: $scope.courseFee,
                    advanceSalary: $scope.advanceSalary,
                    moneyHeld: $scope.moneyHeld,
                    financeManager: $scope.financeManager,
                    mudirApproval: $scope.mudirApproval

                };
                $http.post($scope.bshimServerURL + "/saveTeacherClearance", angular.toJson(saveTeacherDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: ' Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_new_Teacher_Clearance_Form_modal").modal('hide');
                        if($scope.operation=='Edit'){
                            Notification.success({
                                message: 'Techer Clearance Form is Updated  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }else {
                            Notification.success({
                                message: 'Techer Clearance Form is Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.removeTeacherClearance();
                        $scope.isDisabled= false;
                        $scope.getTeachingClearanceList();
                        $scope.reloadPage();



                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled= false;
                });
            }
        };







    }
);