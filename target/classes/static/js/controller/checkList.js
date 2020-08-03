app.controller('createcheckListCtrl',
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

        $scope.removeCheck = function () {
            $scope.checkId = "";
            $scope.level1 = null;
            $scope.level2 = null;
            $scope.level3 = null;
            $scope.accountName = "";
            $scope.priority = "";
            $scope.status = "Active";
        };


        $scope.getCheckList1 = function () {
            var url = "/bs/getcheckList1";
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.checkList1 = data;
                angular.forEach($scope.checkList1, function (val) {
                    $scope.level1 = val.accountName;
                })
            })
        }

        $scope.accountLevel1MasterList = [];
        $scope.getCheckList2 = function (level1) {
            var url = "/bs/getcheckList2?level1Id=" + level1;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.checkList2 = data;
            })
        }

        $scope.accountLevel2MasterList = [];
        $scope.getCheckList3 = function (level2) {
            var url = "/bs/getcheckList3?level2Id=" + level2;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.checkList3 = data;
            })
        }

        $scope.inactiveCheckList = function () {
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
            }
            $scope.clicked = !$scope.clicked;
            $scope.getPaginationCheckList();

        };
        $scope.getPaginationCheckList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getpaginatedCheckList?&type=" + $scope.inactiveStatus + '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.checkList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginationCheckList();


        $scope.editCheck = function (data) {
            $scope.checkId = data.checkId;
            $scope.level1 = data.level1;
            $scope.level2 = data.level2;
            $scope.accountName = data.accountName;
            $scope.priority = data.priority;
            $scope.status = data.status;
            $scope.operation = 'Edit';
            $('#check-title').text("Edit CheckList");
            $("#add_new_check_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.addCheck = function () {
            $scope.removeCheck();
            $('#check-title').text("Add Check");
            $scope.operation = 'Create';
            $scope.status = "Active";
            $("#submit").text("Save");
            $("#add_new_check_modal").modal('show');
            $scope.getCheckList1();
        };

        $scope.saveCheck = function () {
            if (angular.isUndefined($scope.accountName) || $scope.accountName == '' || $scope.accountName == null) {
                Notification.warning({message: ' Please Enter the AccountName', positionX: 'center', delay: 2000});
            }
            else {
                var saveCheckDetails;
                saveCheckDetails = {
                    checkId: $scope.checkId,
                    level1: $scope.level1,
                    level2: $scope.level2,
                    level3: $scope.level3,
                    accountName: $scope.accountName,
                    priority: $scope.priority,
                    status: "Active"
                };
                $http.post($scope.bshimServerURL + '/saveCheck', angular.toJson(saveCheckDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeCheck();
                        $scope.getPaginationCheckList();
                        $("#add_new_check_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'ChekckList Created  successfully',
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

    });