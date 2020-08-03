app.controller('subjectCategoryController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;

        $scope.inactiveStatus = "Active";
        $scope.removeSubjectCatgeory = function () {
            $scope.subjectCategroyName="";
            $scope.subjectCategoryId = "";
            $scope.description = "";
            $scope.status = "";
        };
        $scope.inactive = function () {
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
            $scope.getPaginatedSubjectCategoryList();

        };

        $scope.getPaginatedSubjectCategoryList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getPaginatedSubjectCategoryList?&type=" +  $scope.ButtonStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.subjectList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeSubject();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginatedSubjectCategoryList();

        $scope.getSubjectCategoryList = function () {
            $http.post($scope.bshimServerURL + '/getSubjectCategoryList?searchText='+"").then(function (response) {
                var data = response.data;
                $scope.subjectCategoryList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getSubjectCategoryList();

        $scope.editSubjectCategory  = function(data) {
            $scope.subjectCategoryId = data.subjectCategoryId;
            $scope.subjectCategroyName = data.subjectCategroyName;
            $scope.description = data.description;
            $scope.status = data.status;
            $scope.operation = 'Edit';
            $('#subject-title').text("Edit Subject Category");
            $("#add_new_subjectCat_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.addSubjectCategory = function () {
            $('#subject-title').text("Add Subject Category");
            $scope.StatusText = "Active";
            $("#submit").text("Save");
            $("#add_new_subjectCat_modal").modal('show');
        };

        $scope.saveSubjectCategory = function () {
            if ($scope.subjectCategroyName === ''||$scope.subjectCategroyName==null||angular.isUndefined($scope.subjectCategroyName)) {
                Notification.warning({message: 'Enter Subject Category', positionX: 'center', delay: 2000});
            }
            else {
                var saveDetails;
                saveDetails = {
                    subjectCategoryId: $scope.subjectCategoryId,
                    description: $scope.description,
                    subjectCategroyName: $scope.subjectCategroyName,
                    status: $scope.status
                };
                $http.post($scope.bshimServerURL + '/saveSubjectCategory', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: ' Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                        $("#add_new_subjectCat_modal").modal('hide');
                        $scope.getPaginatedSubjectCategoryList();
                        $scope.removeSubjectCatgeory();
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
        };
        $scope.deleteSubjectCategory = function (data) {
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
                            subjectCategoryId:data.subjectCategoryId,
                            subjectCategroyName:data.subjectCategroyName,
                            description:data.description,
                            status:data.status

                        };
                        $http.post($scope.bshimServerURL +"/deleteSubjectCategory", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getPaginatedSubjectCategoryList();
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