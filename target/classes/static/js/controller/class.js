/**
 * Created by prasad on 7/1/2017.
 */

app.controller('classCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.ClassId = "";
        $scope.classBranch = "";
        $scope.ClassName = "";
        $scope.LevelName = "";
        $scope.status = "";
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
        $scope.removeClassDetails = function () {
            $scope.classBranch = null;
            $scope.ClassName = "";
            $scope.LevelName = null;
            $scope.status = "";
            $scope.isDisabled= false;
            $scope.operation = "";
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
             $scope.getClassPaginatedList();

        };
        //TO ADD//

        $scope.addClass = function () {
            $(".loader").css("display", "block");
            $scope.ClassName = "";
            $scope.status = "Active";
            $scope.classBranch=null;
            $scope.LevelName=null;
            $('#modelName').text("Add Class");
            $("#submit").text("Save");
            $("#add_new_Class_modal").modal('show');
        };

        //
        // $scope.getClassList = function () {
        //     $http.post($scope.bshimServerURL + '/getClassList').then(function (response) {
        //         var data = response.data;
        //         $scope.classList = data;
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     });
        // };
        // $scope.getClassList();


        $scope.getClassPaginatedList= function (page) {
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
            $http.post($scope.bshimServerURL + "/getClassPaginatedList?&type=" + $scope.inactiveStatus + '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.classList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeClassDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getClassPaginatedList();
        $scope.editClass = function (data) {
                $scope.ClassId=data.classId;
                $scope.classBranch = parseInt(data.branchId);
                $scope.ClassName =data.className;
                $scope.LevelName =data.levelId;
                $scope.status =data.classStatus;
            $scope.operation = 'Edit';
            $('#designation-title').text("Edit Class");
                $("#add_new_Class_modal").modal('show');
                $("#submit").text("Update");
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });

        };
        $scope.getBranchesList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getBranchesList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.branchesList= data;
                $scope.searchText = val;
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

        };

        $scope.getBranchesList();

        $scope.getGradeList = function () {
            $http.post($scope.bshimServerURL + '/getGradeListNormal').then(function (response) {
                var data = response.data.object;
                $scope.gradeList = data;
                $scope.gradee=[];
                angular.forEach( $scope.gradeList,function (val,key) {
                    if(val.gradeStatus=="Active"){
                        $scope.gradee.push(val) ;
                    }

                })

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getGradeList();



        //   ToSAVE//
        $scope.saveClass = function () {

            if ($scope.classBranch == '' || $scope.classBranch == null) {
                Notification.warning({message: 'Branch  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }

            if ($scope.ClassName == '' || $scope.ClassName == null) {
                Notification.warning({message: 'Class  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if ($scope.LevelName == '' || $scope.LevelName == null) {
                Notification.warning({message: 'Level  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
                $scope.isDisabled = true;
                var saveDes;
                saveDes = {
                    classId: $scope.ClassId,
                    branchId: $scope.classBranch,
                    className: $scope.ClassName,
                    levelId: $scope.LevelName,
                    classStatus: $scope.status

                };
                $http.post($scope.bshimServerURL + '/saveClass', angular.toJson(saveDes)).then(function (response) {
                    var data = response.data;
                    if (data === "") {
                        // $scope.isDisabled = false;
                        Notification.error({
                            message: 'Class  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Class_modal").modal('hide');
                        $scope.removeClassDetails();
                        Notification.success({
                            message: 'Class  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                        $scope.getClassPaginatedList();
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
        }

        $scope.deleteClass = function (data) {
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
                        $http.post($scope.bshimServerURL + '/deleteClass?classId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.classList;
                            if ($scope.status == "InActive") {
                                Notification.success({
                                    message: 'It is Already in use So Status Changes to Inactive',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            } else {
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                            $scope.getClassPaginatedList();
                        }, function (error) {
                            Notification.error({
                                message: 'Something went wrong, please try again',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };
    });

