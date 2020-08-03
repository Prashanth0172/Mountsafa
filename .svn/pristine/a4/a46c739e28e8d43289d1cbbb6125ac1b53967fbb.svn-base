app.controller('permissionCtrl',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "InActive";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;

        $scope.removePermission = function () {
            $scope.permissionId = "";
            $scope.permissionName = "";
            $scope.parentId = "";
            $scope.status = "Active";
        };

        $scope.inactivePermission = function () {
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
            }
            $scope.clicked = !$scope.clicked;
            $scope.getPaginationPermission();

        };

        $scope.getPermissionList = function () {
            var url = "/bs/getPermissionList";
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.perList = data;
            })
        }
        $scope.getPaginationPermission = function (page) {
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
                prevPage: $scope.isPrev,
                nextPage: $scope.isNext
            }
            if (angular.isUndefined($scope.searchText)) {
                $scope.searchText = "";
            }
            $http.post($scope.bshimServerURL + "/getPaginationPermission?&type=" + $scope.inactiveStatus + '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                $scope.permissionList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginationPermission();

        $scope.editPermission = function (data) {
            $scope.permissionId = data.permissionId;
            $scope.parentId = parseInt(data.parentId);
            $scope.getPermissionList();
            $scope.permissionName = data.permissionName;
            $scope.status = data.status;
            $scope.operation = 'Edit';
            $('#per-title').text("Edit Permission");
            $("#add_new_permission_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.addPermission = function () {
            $scope.removePermission();
            $('#per-title').text("Add Permission");
            $scope.operation = 'Create';
            $scope.status = "Active";
            $("#submit").text("Save");
            $("#add_new_permission_modal").modal('show');
            $scope.getPermissionList();
        };

        $scope.savePermission = function () {
            if (angular.isUndefined($scope.permissionName) || $scope.permissionName == '' || $scope.permissionName == null) {
                Notification.warning({message: ' Please Enter the PermissionName', positionX: 'center', delay: 2000});
            }
            else {
                var saveDetails;
                saveDetails = {
                    permissionId: $scope.permissionId,
                    parentId: $scope.parentId,
                    permissionName: $scope.permissionName,
                    status: $scope.status
                };
                $http.post($scope.bshimServerURL + '/savePermission', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removePermission();
                        $scope.getPaginationPermission();
                        $("#add_new_permission_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'Permission Created  successfully',
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

        $scope.deletePermission = function (data) {
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
                            permissionId: data.permissionId,
                            status: data.status,
                            permissionName: data.permissionName,
                            parentId: data.parentId

                        };
                        $http.post($scope.bshimServerURL + "/deletePermission", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getPaginationPermission();
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
    });