app.controller('weekdayController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.getWeekdayList = function () {
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getWeekdayList').then(function (response) {
                var data = response.data;
                $scope.weekdayList= data;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getWeekdayList();
        $scope.editWeekday  = function(data) {
            $scope.weekdayId = data.weekdayId;
            $scope.sunday=data.sunday== "Working";
            $scope.monday=data.monday== "Working";
            $scope.tuesday=data.tuesday== "Working";
            $scope.wednesday=data.wednesday== "Working";
            $scope.thursday=data.thursday== "Working";
            $scope.friday=data.friday== "Working";
            $scope.saturday=data.saturday== "Working";
            $scope.operation = 'Edit';
            $('#weekday-title').text("Edit Weekday");
            $("#add_new_weekday_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.addWeekday = function () {
            $('#weekday-title').text("Add Weekday");
            $scope.sunday = true;
            $scope.monday = true;
            $scope.tuesday = true;
            $scope.wednesday = true;
            $scope.thursday = true;
            $scope.friday = true;
            $scope.saturday = true;
            $("#submit").text("Save");
            $("#add_new_weekday_modal").modal('show');
        };

        $scope.saveWeekday = function () {
                var saveDetails;
                saveDetails = {
                    weekdayId: $scope.weekdayId,
                    sunday: $scope.sunday,
                    monday: $scope.monday,
                    tuesday: $scope.tuesday,
                    wednesday: $scope.wednesday,
                    thursday: $scope.thursday,
                    friday: $scope.friday,
                    saturday: $scope.saturday
                };
                $http.post($scope.bshimServerURL + '/saveWeekday', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getWeekdayList();
                        $("#add_new_weekday_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'Created  successfully',
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

        };

        $scope.deleteWeekday = function (data) {
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
                            weekdayId:data.weekdayId,
                            sunday:data.sunday,
                            monday:data.monday,
                            tuesday:data.tuesday,
                            wednesday:data.wednesday,
                            thursday:data.thursday,
                            friday:data.friday,
                            saturday:data.saturday

                        };
                        $http.post($scope.bshimServerURL +"/deleteWeekday", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getWeekdayList();
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