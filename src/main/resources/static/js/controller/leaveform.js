app.controller('leaveformControl',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.removeLeaveForm = function () {
            $scope.leaveId ="";
            $scope.leaveType = "";
            $scope.status = "";
            $scope.leaveFor ="";
            $scope.days = "";
        };

        $scope.format = 'dd/MM/yyyy';

        $scope.open1 = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.openedFrom = true;
        };
        $scope.open2 = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.openedTo = true;
        };

        $scope.open3 = function () {
            $scope.popup3.opened = true;
        };

        $scope.popup3 = {
            opened: false
        };
        $scope.getDetailByName=function(type) {
            $http.post($scope.bshimServerURL  + "/getDetailsByName?name=" + type).then(function (response) {
                var data = response.data;
                $scope.name =data.employeeName ;
                $scope.staffNo=data.employeeCode;
                $scope.position=data.empDesignation;
                $scope.dateApply=new Date(data.empDoj);
                // $scope.telephoneNo=data.mobile;

            });
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

        $scope.getLeaveFormList = function () {

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getLeaveFormList').then(function (response) {
                var data = response.data;
                $scope.LeaveFormList= data;
                $scope.leavedays=data.days;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.getLeaveFormList();



        $scope.editLeaveForm  = function(data) {
            $scope.leaveFormId = data.leaveFormId;
            $scope.name = data.name;
            $scope.staffNo = data.staffNo;
            $scope.position = data.position;
            $scope.dateApply = new Date(data.dateApply);
            $scope.reach = data.reach;
            $scope.telephoneNo = data.telephoneNo;
            $scope.supervisor = data.supervisor;
            $scope.reliefStaff = data.reliefStaff;
            $scope.typeOfLeave = data.typeOfLeave;
            $scope.dateDiff = data.dateDiff;
            $scope.approved = data.approved=="true";
            $scope.notApproved = data.notApproved=="true";
            $scope.adminNote = data.adminNote;
            $scope.note = data.note;
            $scope.date1 = new Date(data.date);
            $scope.signdate = new Date(data.signdate);
            $scope.status = data.status;
            $scope.admin = data.admin;
            $scope.daysreqired = data.daysRequired;
            $scope.murdissign = data.murdissign;
            $scope.NotApprovedStatus = data.NotApprovedStatus;
            $scope.approvedStatus = data.approvedStatus;
            $scope.leaveformdetails=angular.fromJson(data.leaveFormList);
            $scope.formDetails = [];
            angular.forEach($scope.leaveformdetails,function (datas) {
                $scope.formDetails.push({
                    dateApply :new Date(datas.dateApply),
                    date1 :new Date(datas.date1),
                    dateDiff :datas.dateDiff,
                    reason :datas.reason

                })
            })
            $scope.leaveformdetails = $scope.formDetails;

            $scope.leaveList=angular.fromJson(data.leaveList);

            $scope.operation = 'Edit';
            $('#modelName').text("Edit LeaveForm");
            $("#add_new_leaveForm_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };

        $scope.leaveformdetails = [];
        $scope.addNewformDetails = function(){
            if($scope.leaveformdetails==""){
                $scope.leaveformdetails = [];
            }
            $scope.leaveformdetails.push({
                fromDate: new Date(),
                toDate: new Date(),
                totalDays:'',
                reason:'',
            });
        };

         $scope.remove=function(){
        $scope.leaveformdetails.pop();
         };

        $scope.addLeaveForm = function () {
            $(".loader").css("display", "block");
            $scope.name = "";
            $scope.staffNo = "";
            $scope.position = "";
            $scope.dateApply = "";
            $scope.reach = "";
            $scope.telephoneNo = "";
            $scope.supervisor = "";
            $scope.reliefStaff = "";
            $scope.typeOfLeave = "";
            $scope.approved = "";
            $scope.notApproved = "";
            $scope.signdate = "";
            $scope.adminNote = "";
            $scope.note = "";
            $scope.date = "";
            $scope.status = "";
            $scope.admin = "";
            $scope.status = "";
            $scope.murdissign = "";
            $scope.daysreqired = "";
            // $scope.status = "Active";
            $('#modelName').text("Add LeaveForm");
            $("#submit").text("Save");
            $("#add_new_leaveForm_modal").modal('show');


        };



        $scope.removecross = function(data){
            $scope.index=data;
            $scope.leaveformdetails.splice($scope.index,1);
        };



        $scope.saveLeaveForm = function () {
            $scope.resultList=[];
                angular.forEach($scope.leaveList,function (val,key) {
                    if(val.fromDate==true){
                        $scope.resultList.push(val);
                    }
                })
            if (angular.isUndefined($scope.name) || $scope.name == ''|| $scope.name==null) {
                Notification.warning({message: 'Teacher name can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;

            }
            // else if (angular.isUndefined($scope.subjectId) || $scope.subjectId == ''|| $scope.subjectId==null) {
            //     Notification.warning({message: 'Subject Cannot be Empty', positionX: 'center', delay: 2000});
            //     $scope.isDisabled= false;
            // }
            else {
                var saveLeaveFormDetails;
                saveLeaveFormDetails = {

                    leaveFormId: $scope.leaveFormId,
                    name: $scope.name,
                    staffNo: $scope.staffNo,
                    position: $scope.position,
                    dateApply: $scope.dateApply,
                    reach: $scope.reach,
                    telephoneNo: $scope.telephoneNo,
                    supervisor: $scope.supervisor,
                    reliefStaff: $scope.reliefStaff,
                    typeOfLeave: angular.toJson($scope.resultList),
                    approved: $scope.approved,
                    notApproved: $scope.notApproved,
                    approveStatus: $scope.approveStatus,

                    NotApprovedStatus: $scope.NotApprovedStatus,
                    note: $scope.note,
                    adminNote: $scope.adminNote,
                    date: $scope.date1,
                    dateDiff: $scope.dateDiff,
                    signdate: $scope.signdate,
                    admin: $scope.admin,
                    murdissign: $scope.murdissign,
                    daysRequired: $scope.daysreqired,
                    leaveFormList: angular.toJson($scope.leaveformdetails),
                    leaveList: angular.toJson($scope.leaveList),
                    status: $scope.status


                };
                $http.post($scope.bshimServerURL + '/saveLeaveForm', angular.toJson(saveLeaveFormDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeLeaveForm();
                        $scope.getLeaveFormList();
                        $("#add_new_leaveForm_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'State Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
            }
        };

        $scope.getLeaveList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }
            $http.post($scope.bshimServerURL  + '/getLeaveList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.leaveList= data;
                $scope.searchText = val;
                // $scope.leave=[];
                // angular.forEach($scope.leaveList,function (val,key) {
                //     if(val.status=="Active"){
                //         $scope.country.push(val);
                //     }
                //
                // })

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getLeaveList();
        $scope.daysreqired=[];
        $scope.calculatedays=function(data,$index){
            $scope.leaveTaken=0;
            angular.forEach($scope.leaveList, function (value,key) {
                if(key==$index) {
                    value.balance =data.days-data.daysreqired ;
                }
            });
        };
        $scope.calculateAge = function(dateApply, date1,$index) {
            angular.forEach($scope.leaveformdetails, function (value,key) {
                if(key==$index) {
                    var date2 = new Date(value.fromDate);
                    var date1 = new Date(value.toDate);
                    var dates = Math.abs(date2.getTime() - date1.getTime());
                    $scope.totalDays = Math.ceil(dates / (1000 * 3600 * 24));
                    value.totalDays=$scope.totalDays;
                }
            });

        }
        $scope.totalleaveday=0;
        $scope.totalValues = function (val) {
            angular.forEach(val , function (value) {
                $scope.totalleaveday =$scope.totalleaveday + value.days;
            })
        }


        $scope.deleteLeaveform = function (data) {
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
                    if(result == true){
                        var deleteDetails = {
                            leaveFormId: data.leaveFormId,
                            name: data.name,
                            staffNo: data.staffNo,
                            position: data.position,
                            dateApply: data.dateApply,
                            reach: data.reach,
                            telephoneNo: data.telephoneNo,
                            supervisor: data.supervisor,
                            reliefStaff: data.reliefStaff,
                            typeOfLeave: data.typeOfLeave,
                            approved: data.approved,
                            notApproved: data.notApproved,
                            adminNote: data.note,
                            date: data.date
                        };
                        $http.post($scope.bshimServerURL +"/deleteLeaveForm", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getLeaveFormList();
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
                                message: 'Cannot be delete,already it is using',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };

    });