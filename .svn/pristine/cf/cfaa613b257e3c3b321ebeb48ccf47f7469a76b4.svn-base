app.controller('sowController',
    function ($scope, $timeout, $http, $location, $filter, Notification, $window) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';

        $scope.inactiveStatus = "Active";
        $scope.removeSow = function () {
            $scope.sowId = "";
            $scope.topicList = [];
            $scope.levelId = null;
            $scope.classId = null;
            $scope.subjectId = null;
            $scope.chapterId = null;
            $scope.semesterId = null;
            $scope.termId = null;
        };
        $scope.type='sow';
        $scope.open1 = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.openedFrom = true;
        };
        $scope.open2 = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.openedTo = true;
        };

        $scope.importSow = function () {
            $("#add_new_plan_import_modal").modal('show');
        };
        $scope.saveSowImportMaster = function (subjectId,classId,termId,semesterId,levelId,chapterId) {
            $scope.isDisabled = true;
            var formElement = document.getElementById("details");
            var details = new FormData(formElement);
            $http.post($scope.bshimServerURL + '/saveSowImportMaster?levelId=' +levelId + '&semester=' + semesterId + '&term=' + termId + '&chapter=' + chapterId + '&classes=' + classId + '&subjectId=' + subjectId, details,
                {
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity,
                }).then(function (response) {
                    $("#add_new_plan_import_modal").modal('hide');
                    $scope.getSowList();
                    $scope.isDisabled = false;
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled = false;
                }
            )
        }


        $scope.getTopicList = function (chapterId) {
            $http.post($scope.bshimServerURL + '/getTopicListbyChapter?chapterId=' + chapterId).then(function (response) {
                var data = response.data;
                $scope.topicLists = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.getSemesterList = function () {
            $http.post($scope.bshimServerURL + '/getSemesterList').then(function (response) {
                var data = response.data;
                $scope.semesterList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getSemesterList();
        $scope.getTermList = function (semester) {
            $http.post($scope.bshimServerURL + '/getTermListbySemester?semesterId=' + semester).then(function (response) {
                var data = response.data;
                $scope.termList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.getSowList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getpaginatedsowList?&searchText=" + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.sowList = data.list;
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
        $scope.getSowList();




        $scope.topicList = [];
        $scope.addnewrowtopic = function () {
            if ($scope.topicList == "") {
                $scope.topicList = [];
            }
            $scope.topicList.push({
                topicId: null,
                pageNo: '',
                totalPages: '',
                activity: '',
                fromweek: '',
                toweek: '',

            });
        };

        $scope.openTopic = function (name) {
            if (name == null || name == '') {
                $scope.addTopic();
            };
        };


        $scope.editSow = function (data) {
            $scope.sowId = data.sowId;
            $scope.levelId = parseInt(data.level);
            $scope.classId = parseInt(data.classes);
            $scope.semesterId = parseInt(data.semester);
            $scope.termId = parseInt(data.term);
            $scope.subjectId = parseInt(data.subject);
            $scope.levelClass($scope.levelId);
            $scope.classSubject($scope.classId);
            $scope.subjectChapter($scope.subjectId);
            $scope.getTermList($scope.semesterId);
            $scope.chapterId = parseInt(data.chapter);
            $scope.getTopicList($scope.chapterId);
            $scope.topicList1 = angular.fromJson(data.sowList);
            $scope.formDetails=[];
            angular.forEach($scope.topicList1,function (datas) {
                $scope.formDetails.push({
                    activity :datas.activity,
                    fromweek :datas.fromweek,
                    pageNo :datas.pageNo,
                    topicId :parseInt(datas.topicId),
                    totalPages :datas.totalPages,
                    toweek :datas.toweek

                })
            })
            $scope.topicList=angular.fromJson($scope.formDetails);
            $scope.operation = 'Edit';
            $('#plan-title').text("Edit Sow");
            $("#add_new_plan_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };

        $scope.addSow = function () {
            $scope.topicList = [];
            $scope.addnewrowtopic();
            $('#plan-title').text("Add Sow");
            $scope.StatusText = "Active";
            $("#submit").text("Save");
            $("#add_new_plan_modal").modal('show');
        };

        $scope.removePreviousDetails = function (data) {
            $scope.index = data;
            $scope.topicList.splice($scope.index, 1);
        };

        $scope.saveSow = function () {
            if ($scope.levelId === '' || $scope.levelId == null || angular.isUndefined($scope.levelId)) {
                Notification.warning({message: 'Select Level', positionX: 'center', delay: 2000});
            }
            else if ($scope.classId === '' || $scope.classId == null || angular.isUndefined($scope.classId)) {
                Notification.warning({message: 'Select Class', positionX: 'center', delay: 2000});
            }
            else if ($scope.semesterId === '' || $scope.semesterId == null || angular.isUndefined($scope.semesterId)) {
                Notification.warning({message: 'Select Semester', positionX: 'center', delay: 2000});
            }
            else if ($scope.subjectId === '' || $scope.subjectId == null || angular.isUndefined($scope.subjectId)) {
                Notification.warning({message: 'Select Subject', positionX: 'center', delay: 2000});
            }
            else if ($scope.termId === '' || $scope.termId == null || angular.isUndefined($scope.termId)) {
                Notification.warning({message: 'Select Term', positionX: 'center', delay: 2000});
            }
            else if ($scope.chapterId === '' || $scope.chapterId == null || angular.isUndefined($scope.chapterId)) {
                Notification.warning({message: 'Select Chapter', positionX: 'center', delay: 2000});
            }

            else {
                var saveDetails;
                saveDetails = {
                    sowId: $scope.sowId,
                    level: $scope.levelId,
                    classes: $scope.classId,
                    semester: $scope.semesterId,
                    subject: $scope.subjectId,
                    chapter: $scope.chapterId,
                    term: $scope.termId,
                    sowList: angular.toJson($scope.topicList)
                };
                $http.post($scope.bshimServerURL + '/saveSow', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeSow();
                        $scope.getSowList();
                        $("#add_new_plan_modal").modal('hide');
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

            };
        };
        $scope.deleteSow = function (data) {
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
                            sowId: data.sowId
                        };
                        $http.post($scope.bshimServerURL + "/deleteSow", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getSowList();
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