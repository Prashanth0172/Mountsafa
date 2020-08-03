app.controller('leaveControl',
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

        $scope.removeLeaves = function () {
            $scope.leaveId ="";
            $scope.leaveType = "";
            $scope.leaveFor ="";
            $scope.days = "";
            $scope.description = "";
            $scope.dayCount = "";
            $scope.paidLeave = "";
            $scope.allowNegativeBal = "";
            $scope.reasonRequired = "";
            // $scope.days = "";
            // $scope.days1 = "";
            $scope.calender = "";
        };


        $scope.inactiveLeave = function () {
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
            $scope.getPaginatedLeaveList();

        };


        $scope.getPaginatedLeaveList = function (page) {
            switch (page) {
                case 'firstPage':
                    $scope.firstPage = true;
                    $scope.lastPage = false;
                    $scope.isNext = false;
                    $scope.isPrev = false;
                    $scope.pageNo = 0;
                    break;
                case 'lastPage':
                    $scope.lastPage = true;
                    $scope.firstPage = false;
                    $scope.isNext = false;
                    $scope.isPrev = false;
                    $scope.pageNo = 0;
                    break;
                case 'nextPage':
                    $scope.isNext = true;
                    $scope.isPrev = false;
                    $scope.lastPage = false;
                    $scope.firstPage = false;
                    $scope.pageNo = $scope.pageNo + 1;
                    break;
                case 'prevPage':
                    $scope.isPrev = true;
                    $scope.lastPage = false;
                    $scope.firstPage = false;
                    $scope.isNext = false;
                    $scope.pageNo = $scope.pageNo - 1;
                    break;
                default:
                    $scope.firstPage = true;
            }
            var paginationDetails;
            paginationDetails = {
                firstPage: $scope.firstPage,
                lastPage: $scope.lastPage,
                pageNo: $scope.pageNo,
                prevPage: $scope.prevPage,
                prevPage: $scope.isPrev,
                nextPage: $scope.isNext
            }
            if (angular.isUndefined($scope.searchText)) {
                $scope.searchText = "";
            }
            $http.post($scope.bshimServerURL + "/getPaginatedLeaveList?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.leaveList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                // $scope.removeState();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginatedLeaveList();


        $scope.editLeave  = function(data) {
            $scope.leaveId = data.leaveId;
            $scope.leaveType = data.leaveType;
            $scope.status = data.status;
            $scope.leaveFor = data.leaveFor;
            $scope.description = data.days;
            $scope.dayCount = data.dayCount;
            $scope.paidLeave = data.paidLeave=="true";
            $scope.allowNegativeBal = data.allowNegativeBal=="true";
            $scope.reasonRequired = data.reasonRequired=="true";
            $scope.days = data.day;
            $scope.day1 = data.days1;
            $scope.calender = data.calender;
            $scope.operation = 'Edit';
            $('#modelName').text("Edit City");
            $("#add_new_leave_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };


        $scope.addLeave = function () {
            $(".loader").css("display", "block");
            // $scope.leaveType = "";
            // $scope.days = "";
            // $scope.leaveFor = "";
            // $scope.days = "";
            // $scope.dayCount = "";
            // $scope.status = "Active";
            $scope.removeLeaves();
            $('#modelName').text("Add LeaveType");
            $("#submit").text("Save");
            $("#add_new_leave_modal").modal('show');
        };


        $scope.saveLeave = function () {
            if ($scope.leaveType == '' || $scope.leaveType == null || angular.isUndefined($scope.leaveType)) {
                Notification.error({message: 'Please Enter Leave Type', positionX: 'center', delay: 2000})
            }
            else if ($scope.leaveFor == '' || $scope.leaveFor == null || angular.isUndefined($scope.leaveFor)) {
                Notification.error({message: 'Please Enter Leave For', positionX: 'center', delay: 2000})
            }
            else if ($scope.dayCount == '' || $scope.dayCount == null || angular.isUndefined($scope.dayCount)) {
                Notification.error({message: 'Please Enter Day Count', positionX: 'center', delay: 2000})
            }

            else {
                var saveLeaveDetails;
                saveLeaveDetails = {
                    leaveId: $scope.leaveId,
                    leaveType: $scope.leaveType,
                    status: $scope.status,
                    days: $scope.description,
                    dayCount: $scope.dayCount,
                    paidLeave: $scope.paidLeave,
                    allowNegativeBal: $scope.allowNegativeBal,
                    reasonRequired: $scope.reasonRequired,
                    day: $scope.days,
                    day1: $scope.days1,
                    leaveFor: $scope.leaveFor,
                    calender: $scope.calender,


                };
                $http.post($scope.bshimServerURL + '/saveLeave', angular.toJson(saveLeaveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeLeaves();
                        $scope.getPaginatedLeaveList();
                        $("#add_new_leave_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'leave Created  successfully',
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
            ;
            $scope.deleteLeave = function (data) {
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
                                leaveId: data.leaveId,
                                leaveType: data.leaveType,
                                status: data.status,
                                leaveFor: data.leaveFor,
                                days: data.days

                            };
                            $http.post($scope.bshimServerURL + "/deleteLeave", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                                var data = response.data;
                                $scope.getPaginatedLeaveList();
                                if (data == true) {
                                    Notification.success({
                                        message: 'Successfully Deleted',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                } else {
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
        }

    });