app.controller('grademasterController',
    function($scope, $http, $location, $filter, Notification, ngTableParams,  $timeout, $window, $rootScope) {
        console.log("aaaaaaaaaaaaa");
        $scope.bshimServerURL = "/bs";
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.customerId = 1;
        $scope.userRights = [];
        $scope.operation = 'Create';
        $scope.customer = 1;
        $scope.today = new Date();
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.removeGradeMaster = function () {
            $scope.gradeId = "";
            $scope.gradename = "";
            $scope.gradedesc = "";
            $scope.StatusText = "";
            $scope.operation = "";
            $scope.branchid = null;
        };


        $scope.EditGrade = function (data) {
            $scope.gradename = data.gradeName;
            $scope.gradedesc = data.gradeDescription;
            $scope.statusText = data.gradeStatus;
            $scope.gradeId = data.gradeId;
            $scope.branchid  =parseInt(data.branchId);
            $scope.operation = 'Edit';
            $scope.branchList();
            $('#student-title').text("Edit GradeMaster");
            $("#add_grade_master").modal('show');

        }, function (error) {
            Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };

        $scope.getGradeList = function () {
            $http.post($scope.bshimServerURL + '/getGradeListNormal').then(function (response) {
                var data = response.data.object;
                $scope.gradeList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getGradeList();


        $scope.addgrademaster = function () {
            $scope.statusText = "Active";
            $scope.operation='create';
            $scope.branchList();
            // $scope.removeGradeMaster();
            $('#student-title').text("Add Level");
            $("#add_grade_master").modal('show');

        };

        $scope.inactivegrade = function () {
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
            $scope.getPaginationList();

        };
        $scope.getPaginationList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getpaginatedgrade?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.gradeList = data.list;
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
        $scope.getPaginationList();

        $scope.saveGradeMaster = function () {
            if (angular.isUndefined($scope.branchid) || $scope.branchid == '') {
                Notification.warning({message: 'Branch Name can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;

            }
            else if (angular.isUndefined($scope.gradename) || $scope.gradename == '') {
                Notification.warning({message: 'Level Name can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled = false;
            }
            else {
                var saveGrade;
                saveGrade = {
                    gradeId: $scope.gradeId,
                    gradeName: $scope.gradename,
                    gradeDescription: $scope.gradedesc,
                    gradeStatus: $scope.statusText,
                    branchId:$scope.branchid
                };
                $http.post("/bs/saveGrade", angular.toJson(saveGrade)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    } else {
                        $("#add_grade_master").modal('hide');
                        $scope.getPaginationList();
                        $scope.removeGradeMaster();
                        Notification.success({message: 'Level Created  successfully', positionX: 'center', delay: 2000});
                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
                // }

            }
        }


        $scope.DeleteGrade = function (data) {
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
                                gradeName: data.gradeName,
                                gradeDescription: data.gradeDescription,
                                gradeStatus: data.gradeStatus,
                                gradeId: data.gradeId
                            };
                            $http.post($scope.bshimServerURL + "/deleteGradeMaster", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                                var data = response.data;
                                $scope.getPaginationList();
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


        $scope.branchList = function() {
            $http.post("bs/getBranchesList").then(function (response) {
                var data = response.data;
                $scope.branchesList = data;
                $scope.bran=[];
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
        }



    });
