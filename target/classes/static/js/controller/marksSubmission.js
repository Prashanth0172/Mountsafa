app.controller('marksSubmissionController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;

        $scope.getMarksSubList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getMarksSubList?&searchText=" + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.marksList = data.list;
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
        $scope.getMarksSubList();
        $scope.addMarksSubmission = function () {
            $scope.ASSList=[];
            $scope.subComponentList=[];
            $(".loader").css("display", "block");
            $('#modelName').text("Add Marks Submission");
            $("#submit").text("Save");


            $("#add_new_marksSubmission_modal").modal('show');
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
        $scope.levelClass = function(gradeId){
            var url = "/bs/getClassLevel?levelId=" + gradeId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.classList = angular.copy(data);
            })
        }
        $scope.classSubject = function(classId){
            if(classId==undefined){
                classId="";
            }
            var url = "/bs/getclassSubject?classId=" + classId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.subjectList = angular.copy(data);
                $scope.subjectss=[];
                angular.forEach($scope.subjectList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.subjectss.push(val);
                    }

                })
            })
        }
        $scope.selectedquestion= [];
        $scope.selectQuestion = function (ques) {
            var index = $scope.selectedquestion.indexOf(ques.question);
            if (parseInt(index) >= 0) {
                $scope.selectedquestion.splice(index, 1);
            }else {
                $scope.selectedquestion.push(ques.question);
            }
            $scope.assessmentId=$scope.selectedquestion;
            $scope.getstd(ques);
        };
        var expandedq = false;
        $scope.showCheckboxesq=function() {
            var checkboxesq = document.getElementById("checkboxesq");
            if (!expandedq) {
                checkboxesq.style.display = "block";
                expandedq = true;
            } else {
                checkboxesq.style.display = "none";
                expandedq = false;
            }
        }
        $scope.topicQuestion = function(subId){
            $http.post($scope.bshimServerURL + '/getQuesBasedOnSubject?subjectId='+subId).then(function (response) {
                var data = response.data;
                $scope.questionList = data;

            })
        }
        $scope.multipleChoiceList = function(subId){
            $http.post($scope.bshimServerURL + '/getQuesAnswerList?questionId='+subId).then(function (response) {
                var data = response.data;
                $scope.quesAnswerList = data;

            })
        }
        $scope.getstd = function (quesList) {
            $http.post($scope.bshimServerURL + "/getstdListBasedOnClassAndLevel?level=" + $scope.level + "&class=" + $scope.classId).then(function (response) {
                var data = response.data;
                $scope.studentList = data;
                $scope.lastList = [];
                $scope.studentMap = {};
                angular.forEach($scope.studentList, function (value, key) {
                    var create = {};
                    create.studentName = value.studentName;
                    create.maxMarks = value.maxMarks;
                    $scope.lastList.push(create);
                })
                angular.forEach($scope.assessmentId, function (val, key) {
                    $scope.studentMap[val] = angular.copy($scope.lastList);
                    // $scope.studentMap[val.assessmentDetailsId]=angular.copy($scope.studentList);
                    $scope.quesAnsType = quesList.questionType;

                })
            });
        }

        $scope.getEmployeeList = function () {
            $http.post($scope.bshimServerURL + '/getEmployeeList').then(function (response) {
                var data = response.data;
                $scope.employeeList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getEmployeeList();
        $scope.saveAssessment = function () {
            var saveDetails;
            saveDetails = {
                asId: $scope.asId,
                employee: $scope.teacher,
                levelId: $scope.level,
                subjectId: $scope.subject,
                classId: $scope.classId,
                studentName: angular.toJson($scope.assessmentId),
                mapValue: $scope.studentMap

            };
            $http.post($scope.bshimServerURL + '/saveMarksSubmission', angular.toJson(saveDetails)).then(function (response) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    $scope.getMarksSubList();
                    $("#add_new_marksSubmission_modal").modal('hide');
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
        }

        $scope.editMarksSub = function (marks) {
            $http.post($scope.bshimServerURL+"/editMarksSub?id="+marks.id).then(function (response) {
                var data = response.data;
                $scope.id = data.id;
                $scope.teacher = data.employee;
                $scope.levelClass(data.levelId);
                $scope.level = data.levelId;
                $scope.classSubject(data.classId);
                $scope.classId = data.classId;
                $scope.topicQuestion(data.subjectId);
                $scope.subject = data.subjectId;
                $("#add_new_marksSubmission_modal").modal('show');
            });
        }
        $scope.deleteMarksSub = function (data) {
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
                        $http.post($scope.bshimServerURL +"/deleteMarksSub?id="+data.id).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getMarksSubList();
                            if(data==""){
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