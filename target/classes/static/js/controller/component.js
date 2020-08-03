app.controller('componentController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        // $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.inactiveStatus = "Active";
        $scope.removeComponentDetails = function () {
            $scope.componentId="";
            $scope.componentName = "";
            $scope.status = "";
            $scope.operation = "";
        };
        $scope.editComponent  = function(data) {
                $scope.componentId = data.componentId;
                $scope.componentName = data.componentName;
                $scope.weightage = data.weightage;
                $scope.status = data.status;
                $scope.operation = 'Edit';
                $('#component-title').text("Edit Component");
                $("#add_new_component_modal").modal('show');
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
        };

        $scope.addNewComponentPopulate = function () {
            $('#component-title').text("Add Component");
            $scope.componentName = "";
            $scope.weightage = "";
            $scope.status = "Active";
            $("#submit").text("Save");
            $("#add_new_component_modal").modal('show');
        };

        $scope.getPaginationCompList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getPaginationCompList?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.componentList = data.list;
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
        $scope.getPaginationCompList();


        $scope.inactiveButton = function () {
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
            $scope.getPaginationCompList();

        };
        // $scope.getComponentList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getComponentList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.componentList= data;
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
        // $scope.getComponentList();
        $scope.saveComponent = function () {
            if ($scope.componentName === ''||$scope.componentName==null||angular.isUndefined($scope.componentName)) {
                Notification.warning({message: 'Enter component Name', positionX: 'center', delay: 2000});
            } else if ($scope.weightage === ''||$scope.weightage==null||angular.isUndefined($scope.weightage)) {
                Notification.warning({message: 'Enter weightage ', positionX: 'center', delay: 2000});
            }
            else {
                var saveComponentDetails;
                saveComponentDetails = {
                    componentId: $scope.componentId,
                    componentName: $scope.componentName,
                    weightage: $scope.weightage,
                    status: $scope.status
                };
                $http.post($scope.bshimServerURL + '/saveComponent', angular.toJson(saveComponentDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeComponentDetails();
                        $scope.getPaginationCompList();
                        $("#add_new_component_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
                        }
                        Notification.success({
                            message: 'Component Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    }) ;
                });
            };
        };

        $scope.deleteComponent = function (data) {
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
                            componentId:data.componentId,
                            componentName:data.componentName,
                            weightage:data.weightage,
                            status:data.status

                        };
                        $http.post($scope.bshimServerURL +"/deleteComponent", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getPaginationCompList();
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