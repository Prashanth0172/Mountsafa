/**
 * Created by prasad on 7/1/2017.
 */

app.controller('semesterCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.semesterId = "";
        $scope.SemesterName = "";
        $scope.LevelName = "";
        $scope.Sdate = "";
        $scope.Edate = "";
        $scope.SemesterDesc = "";
        $scope.status = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "InActive";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.Sdate = new Date();
        $scope.Edate = new Date();
        $scope.clicked = false;


        $scope.format = 'dd/MM/yyyy';
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.popup1 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };
        $scope.popup2 = {
            opened: false
        };
        $scope.removeSemesterDetails = function () {
            $scope.semesterId = "";
            $scope.SemesterName = "";
            $scope.LevelName = [];
            $scope.selectedGrades=[];
            $scope.gradeList=[];
            $scope.getGradeList();
            $scope.Sdate = "";
            $scope.Edate = "";
            $scope.SemesterDesc = "";
            $scope.status = "";
            $scope.isDisabled= false;
            $scope.operation = "";
            $scope.semeterBranch=null;
        };

        //
        // $scope.open = function () {
        //     $("add_new_open_modal").modal('show');
        // }

        //TO ADD//
        $scope.selectedGrades = [];
        $scope.pushSelectedGrades = function (id) {
            var index = $scope.selectedGrades.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedGrades.splice(index, 1);
            }else {
                $scope.selectedGrades.push(id);
            }
            $scope.LevelName=$scope.selectedGrades;
        };
        var expanded = false;
        $scope.showCheckboxes=function() {
            var checkboxes = document.getElementById("checkboxes");
            if (!expanded) {
                checkboxes.style.display = "block";
                expanded = true;
            } else {
                checkboxes.style.display = "none";
                expanded = false;
            }
        }
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
            $scope.getSemesterPaginatedList();

        };
        $scope.addSemester = function () {
            $(".loader").css("display", "block");
            $scope.semesterId = "";
            $scope.SemesterName = "";
            $scope.Sdate=new Date();
            $scope.Edate=new Date();
            $scope.SemesterDesc = "";
            $scope.status = "Active";
            $('#modelName').text("Add Semester");
            $("#submit").text("Save");
            $("#add_new_Semester_modal").modal('show');
        };

        //
        $scope.getSemesterPaginatedList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getSemesterPaginatedList?&type=" +  $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.semesterList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeSemesterDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getSemesterPaginatedList();

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
        $scope.editSemester = function (data) {
            $scope.semesterId = data.semesterId;
            $scope.SemesterName =data.semesterName;
            // $scope.LevelName = parseInt(data.level);
            $scope.semeterBranch = parseInt(data.branchId);
            $scope.Sdate = new Date(data.startDate);
            $scope.Edate = new Date(data.endDate);
            $scope.SemesterDesc = data.description;
            $scope.status = data.semesterStatus;
            $scope.operation = 'Edit';
            $('#modelName').text("Edit Semester");
                $("#add_new_Semester_modal").modal('show');
                $("#submit").text("Update");
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });

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



        //   ToSAVE//
        $scope.saveSemester = function () {

            if ($scope.SemesterName == '' || $scope.SemesterName == null) {
                Notification.warning({message: 'SemesterName  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            // else if($scope.LevelName == '' || $scope.LevelName == null) {
            //     Notification.warning({message: 'LevelName  can not be empty', positionX: 'center', delay: 2000});
            //     return false;
            // }
            else if($scope.SemesterName == '' || $scope.SemesterName == null) {
                Notification.warning({message: 'SemesterName  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
                // $scope.isDisabled = true;
                var saveSemester;
                saveSemester = {
                    semesterId: $scope.semesterId,
                    semesterName: $scope.SemesterName,
                    // level:angular.toJson($scope.LevelName),
                    branchId: $scope.semeterBranch,
                    startDate: $scope.Sdate,
                    endDate: $scope.Edate,
                    description: $scope.SemesterDesc,
                    semesterStatus: $scope.status

                };
                $http.post($scope.bshimServerURL + '/saveSemester', angular.toJson(saveSemester)).then(function (response) {
                    var data = response.data;
                    if (data === "") {
                        // $scope.isDisabled = false;
                        Notification.error({
                            message: 'Semester  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Semester_modal").modal('hide');
                        Notification.success({
                            message: 'Semester  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                         $scope.getSemesterPaginatedList();
                         $scope.removeSemesterDetails();
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
        // $scope.saveEditSemester = function () {
        //     $scope.isDisabled = true;
        //     var editSemester;
        //     editSemester = {
        //         semesterId: $scope.semesterId,
        //         semesterName: $scope.SemesterName,
        //         level:$scope.LevelName,
        //         branchId: $scope.semeterBranch,
        //         startDate: $scope.Sdate,
        //         endDate: $scope.Edate,
        //         description: $scope.SemesterDesc,
        //         semesterStatus: $scope.status
        //
        //     };
        //     $http.post($scope.bshimServerURL + '/saveEditSemester', angular.toJson(editSemester)).then(function (response) {
        //         var data = response.data;
        //         if (data === "") {
        //             Notification.error({
        //                 message: 'Semester  Already Created',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //         }
        //         else {
        //             $("#add_new_Semester_modal").modal('hide');
        //             Notification.success({
        //                 message: 'Semester  Created  successfully',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //             $scope.getSemesterPaginatedList();
        //             $scope.removeSemesterDetails();
        //         }
        //
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //
        //     });
        // }
        $scope.deleteSemester = function (data) {
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
                        $http.post($scope.bshimServerURL + '/deleteSemester?semesterId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.semesterList;
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
                            $scope.getSemesterPaginatedList();
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

