app.controller('notificationController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "Active";

        $scope.removeGradeMaster = function () {
            $scope.notificationId="";
            $scope.notificationSubject = "";
            $scope.notificationDate = "";
            $scope.notificationSend = "";
            $scope.notificatonContent = "";
            $scope.operation = "";

        };
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



        $scope.EditNotification = function (data) {
            $scope.notificationId = data.notificationId;
            $scope.notificationSubject = data.notificationSubject;
            $scope.notificationDate = new Date(data.notificationDate);
            $scope.notificationSend = data.notificationSend;
            $scope.notificatonContent = data.notificationContent;
            $scope.notificationStatus = data.notificationStatus;
            $scope.branchName = parseInt(data.branchId);
            $scope.operation = 'Edit';
            $('#student-title').text("Edit Notification");
            $("#add_Notification_master").modal('show');

        }, function (error) {
            Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };

        $scope.addgrademaster = function () {
            $scope.statusText = "Active";
            $scope.operation='create';
            $scope.removeGradeMaster();
            $('#student-title').text("Add Notification");
            $("#add_Notification_master").modal('show');

        };

        $scope.inactiveNotification = function () {
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
            $scope.getNotificatuiPaginatedList();

        };
        // $scope.getNotificatuiList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getNotificationList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.NotificationList= data;
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
        // $scope.getNotificatuiList();
        $scope.getNotificatuiPaginatedList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getNotificatuiPaginatedList?&type=" + $scope.ButtonStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.NotificationList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeGradeMaster();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getNotificatuiPaginatedList();


        $scope.getBranchesList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getBranchesList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.branchesList= data;
                $scope.searchText = val;$scope.bran=[];
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



        $scope.saveNotification = function () {
            $scope.isDisabled= true;
            if (angular.isUndefined($scope.notificationSubject) || $scope.notificationSubject == ''||$scope.notificationSubject==null) {
                Notification.warning({message: 'Notification Subject can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;

            } else {
                var saveNotificationDetails;
                saveNotificationDetails = {
                    notificationId: $scope.notificationId,
                    notificationSubject: $scope.notificationSubject,
                    notificationDate: $scope.notificationDate,
                    notificationSend: $scope.notificationSend,
                    branchId: $scope.branchName,
                    notificationStatus: $scope.notificationStatus,
                    notificationContent: $scope.notificatonContent
                };
                $http.post($scope.bshimServerURL + "/saveNewNotification", angular.toJson(saveNotificationDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: ' Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_Notification_master").modal('hide');
                        if($scope.operation=='Edit'){
                            Notification.success({
                                message: 'Notification is Updated successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }else {
                            Notification.success({
                                message: 'Notification is Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.removeGradeMaster();
                        $scope.getNotificatuiPaginatedList();
                        $scope.isDisabled= false;
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
        $scope.DeleteNotification = function (data) {
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
                            notificationSubject: data.notificationSubject,
                            notificationDate: data.notificationDate,
                            notificationContent: data.notificationContent,
                            notificationSend: data.notificationSend,
                            branchId: data.branchName,
                            notificationId: data.notificationId
                        };
                        $http.post($scope.bshimServerURL + "/DeleteNotification", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getNotificatuiPaginatedList();
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

    });