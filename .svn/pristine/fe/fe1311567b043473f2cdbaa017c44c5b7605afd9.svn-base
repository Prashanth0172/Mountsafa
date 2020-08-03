app.controller('visitorController',
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


        $scope.inactiveStatus = "Active";
        $scope.removeVisitor = function () {
            $scope.vistorId="";
            $scope.visitorName = "";
            $scope.visitorNo = "";
            $scope.visitorAddress = "";
            $scope.visitorMobile = "";
            $scope.visitorEmailID = "";
            $scope.visitorLogin = "";
            $scope.visitorPurpose = "";
            $scope.visitorToMeet = "";
            $scope.vistorStatus = "";

        };
     $scope.addVisitor =function(){
         $scope.getVisGenNo();
         var today = new Date();
         var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
         var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
         var dateTime = date+' '+time;
         $('#title').text("Add Visitor");
         $scope.vistorId="";
         $scope.visitorName = "";
         $scope.visitorNo = "";
         $scope.visitorAddress = "";
         $scope.visitorMobile = "";
         $scope.visitorEmailID = "";
         $scope.visitorLogin = dateTime;
         $scope.visitorPurpose = "";
         $scope.visitorToMeet = "";
         $scope.vistorStatus = "Active";
         $("#add_new_visitor_modal").modal('show');
         }

        $scope.getVisGenNo = function () {
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getVisGenNo').then(function (response) {
                $scope.visitorNo= response.data;


            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

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
        $scope.editVisitor  = function(data) {
            $scope.vistorId = data.vistorId;
            $scope.visitorName = data.visitorName;
            $scope.visitorNo = data.visitorNo;
            $scope.visitorAddress = data.visitorAddress;
            $scope.visitorMobile = data.visitorMobile;
            $scope.visitorEmailID = data.visitorEmailID;
            $scope.visitorLogin =  data.visitorLogin;
            $scope.visitorPurpose = data.visitorPurpose;
            $scope.visitorToMeet = data.visitorToMeet;
            $scope.vistorStatus = data.vistorStatus;
            $scope.operation = 'Edit';
            $scope.getVisitorList();
            $('#visitor-title').text("Edit Visitor");
            $("#add_new_visitor_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.saveVisitor = function () {
                var saveVisitor;
            saveVisitor = {

                vistorId: $scope.vistorId,
                visitorName: $scope.visitorName,
                visitorNo: $scope.visitorNo,
                visitorAddress: $scope.visitorAddress,
                visitorMobile: $scope.visitorMobile,
                visitorEmailID: $scope.visitorEmailID,
                visitorLogin: $scope.visitorLogin,
                visitorPurpose: $scope.visitorPurpose,
                visitorToMeet: $scope.visitorToMeet,
                vistorStatus: $scope.vistorStatus
                };
                $http.post($scope.bshimServerURL + '/saveVisitor', angular.toJson(saveVisitor, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeVisitor();
                        $scope.getVisitorList();
                        $("#add_new_visitor_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: ' Created  successfully',
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

            ;
        };

        $scope.getVisitorList = function () {
            $http.post($scope.bshimServerURL + '/getVisitorList').then(function (response) {
                var data = response.data;
                $scope.visitorList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getVisitorList();
        $scope.deleteVisitor = function (data) {
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
                            vistorId: $scope.vistorId,
                            visitorName: $scope.visitorName,
                            visitorNo: $scope.visitorNo,
                            visitorAddress: $scope.visitorAddress,
                            visitorMobile: $scope.visitorMobile,
                            visitorEmailID: $scope.visitorEmailID,
                            visitorLogin: $scope.visitorLogin,
                            visitorPurpose: $scope.visitorPurpose,
                            visitorToMeet: $scope.visitorToMeet,
                            vistorStatus: $scope.vistorStatus

                        };
                        $http.post($scope.bshimServerURL + '/deleteVisitor?vistorId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.getVisitorList();
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
                        })
                    }
                }
            });
        };

    });