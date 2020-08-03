/**
 * Created by prasad on 7/1/2017.
 */

app.controller('remaindersCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.remainderId = "";
        $scope.RemainderBranch = "";
        $scope.RemainderName = "";
        $scope.Reason = "";
        $scope.LevelName = "";
        $scope.ClassName = "";
        $scope.Semester = "";
        $scope.sentTo = "";
        $scope.RemainderStart = "";
        $scope.Days = "";
        $scope.Untill = "";
        $scope.status = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.ButtonStatus = "Active";

        $scope.removeRemaindersDetails = function () {
            $scope.remainderId = "";
            $scope.RemainderBranch = "";
            $scope.RemainderName = "";
            $scope.Reason = "";
            $scope.LevelName = "";
            $scope.ClassName = "";
            $scope.Semester = "";
            $scope.sentTo = "";
            $scope.RemainderStart = "";
            $scope.Days = "";
            $scope.Untill = "";
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
             $scope.getRemaindersPaginatedList();

        };


        //TO ADD//

        $scope.addRemainder = function () {
            $scope.remainderId = "";
            $scope.RemainderBranch = "";
            $scope.RemainderName = "";
            $scope.Reason = "";
            $scope.LevelName = null;
            $scope.ClassName =null;
            $scope.Semester = null;
            $scope.sentTo = null;
            $scope.RemainderStart = "";
            $scope.Email =null;
            $scope.Days =null;
            $scope.Untill =null;
            $scope.status = "Active";
            $('#modelName').text("Add Remainders");
            $("#submit").text("Save");
            $("#add_new_Remainders_modal").modal('show');
        };


        // $scope.getRemaindersList = function () {
        //     $http.post($scope.bshimServerURL + '/getRemaindersList').then(function (response) {
        //         var data = response.data;
        //         $scope.remaindersList = data;
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     });
        // };
        // $scope.getRemaindersList();
        $scope.getRemaindersPaginatedList= function (page) {
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
            $http.post($scope.bshimServerURL + "/getRemaindersPaginatedList?&type=" +   $scope.ButtonStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                var i = 0;
                $scope.remaindersList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeRemaindersDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getRemaindersPaginatedList();
        $scope.editRemainders = function (data) {
            $scope.remainderId = data.remainderId;
            $scope.RemainderBranch = parseInt(data.branchId);
            $scope.RemainderName = data.remainderName;
            $scope.Reason = data.reason;
            $scope.LevelName = data.levelName;
            $scope.ClassName = data.className;
            $scope.Semester = data.semester;
            $scope.sentTo = data.sentTo;
            $scope.RemainderStart = data.remainderStart;
            $scope.Days = data.days;
            $scope.Email = data.emailTemplate;
            $scope.Untill = data.untill;
            $scope.status = data.remainderStatus;
            $scope.operation = 'Edit';
            $('#Semester-title').text("Edit Semester");
                $("#add_new_Remainders_modal").modal('show');
                $("#submit").text("Update");
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });

        };


        //   ToSAVE//
        $scope.saveRemainders = function () {

            if ($scope.RemainderBranch == '' || $scope.RemainderBranch == null) {
                Notification.warning({message: 'RemainderBranch  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.RemainderName == '' || $scope.RemainderName == null) {
                Notification.warning({message: 'RemainderName  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.LevelName == '' || $scope.LevelName == null) {
                Notification.warning({message: 'LevelName  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.ClassName == '' || $scope.ClassName == null) {
                Notification.warning({message: 'ClassName  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.Semester == '' || $scope.Semester == null) {
                Notification.warning({message: 'Semester  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.sentTo == '' || $scope.sentTo == null) {
                Notification.warning({message: 'SendTo  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }

            else if($scope.Email == '' || $scope.Email == null) {
                Notification.warning({message: 'EmailTemplate  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
                $scope.isDisabled = true;
                var saveRemainders;
                saveRemainders = {
                    remainderId: $scope.remainderId,
                    remainderName: $scope.RemainderName,
                    reason: $scope.Reason,
                    branchId: $scope.RemainderBranch,
                    levelName: $scope.LevelName,
                    className: $scope.ClassName,
                    semester: $scope.Semester,
                    sentTo: $scope.sentTo,
                    remainderStart: $scope.RemainderStart,
                    days: $scope.Days,
                    untill: $scope.Untill,
                    emailTemplate: $scope.Email,
                    remainderStatus: $scope.status

                };
                $http.post($scope.bshimServerURL + '/saveRemainders', angular.toJson(saveRemainders)).then(function (response) {
                    var data = response.data;
                    if (data === "") {
                        // $scope.isDisabled = false;
                        Notification.error({
                            message: 'Remainder  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Remainders_modal").modal('hide');
                        Notification.success({
                            message: 'Remainder  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                         $scope.getRemaindersPaginatedList();
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

        $scope.deleteRemainder = function (data) {
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
                        $http.post($scope.bshimServerURL + '/deleteRemainder?remainderId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.remaindersList;
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
                            $scope.getRemaindersPaginatedList();
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


        $scope.getBranchesList();
        $scope.getClassList = function () {
            $http.post($scope.bshimServerURL + '/getClassList').then(function (response) {
                var data = response.data;
                $scope.classList = data;
                $scope.classs=[];
                angular.forEach( $scope.classList,function (val,key) {
                    if(val.classStatus=="Active"){
                        $scope.classs.push(val) ;
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
        $scope.getClassList();
        $scope.getSemesterList = function () {
            $http.post($scope.bshimServerURL + '/getSemesterList').then(function (response) {
                var data = response.data;
                $scope.semesterList = data;
                $scope.seme=[];
                angular.forEach( $scope.semesterList,function (val,key) {
                    if(val.semesterStatus=="Active"){
                        $scope.seme.push(val) ;
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
        $scope.getSemesterList();
    });

