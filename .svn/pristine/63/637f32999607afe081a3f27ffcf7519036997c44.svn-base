app.controller('emailTemplateController',
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

        $scope.removeEmail = function () {
            $scope.emailId="";
            $scope.emailName = "";
            $scope.emailSubject = "";
            $scope.sendTo = "";
            $scope.description = "";
            $scope.branchName=null;

        };


        $scope.EditEmail = function (data) {
            $scope.emailId = data.emailId;
            $scope.emailName = data.emailName;
            $scope.emailSubject = data.emailSubject;
            $scope.description = data.emailDescription;
            $scope.branchName = parseInt(data.branchId);
            $scope.statusText = data.emailStatus;
            $scope.operation = 'Edit';
            $('#student-title').text("Edit EMAIL");
            $("#add_Email_master").modal('show');

        }, function (error) {
            Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };

        $scope.addEmailTemp = function () {
            $scope.statusText = "Active";
            $scope.operation='create';
            $scope.removeEmail();
            $('#student-title').text("Add Email");
            $("#add_Email_master").modal('show');

        };

        //
        // $scope.getEmailList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getEmailList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.EmailList= data;
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
        // $scope.getEmailList();
        $scope.inactiveEmail = function () {
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
            $scope.getEmailPaginatedList();

        };
        $scope.getEmailPaginatedList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getEmailPaginatedList?&type=" + $scope.ButtonStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.EmailList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeEmail();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getEmailPaginatedList();



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



        $scope.saveEmail = function () {
            $scope.isDisabled= true;
            if (angular.isUndefined($scope.emailName) || $scope.emailName == '') {
                Notification.warning({message: 'Email Name can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;

            }
            else if (angular.isUndefined($scope.description) || $scope.description == '') {
                Notification.warning({message: 'Email Description can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;

            }
                else {
                var saveEmailDetails;
                saveEmailDetails = {
                    emailId: $scope.emailId,
                    emailName: $scope.emailName,
                    emailSubject: $scope.emailSubject,
                    emailDescription: $scope.description,
                    branchId: $scope.branchName,
                    emailStatus: $scope.statusText
                };
                $http.post($scope.bshimServerURL + "/saveNewEmailMaster", angular.toJson(saveEmailDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: ' Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_Email_master").modal('hide');
                        if($scope.operation=='Edit'){
                            Notification.success({
                                message: 'GradeMaster is Updated successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }else {
                            Notification.success({
                                message: 'GradeMaster is Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.removeEmail();
                        $scope.getEmailPaginatedList();
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
        $scope.DeleteEmail = function (data) {
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
                            emailName: data.emailName,
                            emailSubject: data.emailSubject,
                            description: data.emailDescription,
                            statusText: data.emailStatus,
                            emailId: data.emailId
                        };
                        $http.post($scope.bshimServerURL + "/deleteEmail", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getEmailPaginatedList();
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