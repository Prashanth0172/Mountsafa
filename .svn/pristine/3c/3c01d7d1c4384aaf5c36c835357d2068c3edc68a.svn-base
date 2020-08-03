app.controller('lessonPlanController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';

        $scope.inactiveStatus = "Active";
        $scope.removeLessonPlan = function () {
            $scope.lessonPlanId="";
            $scope.outcomesText = "";
            $scope.resourcesText = "";
            $scope.activitesText = "";
            $scope.integrationText = "";
            $scope.KnowledgeText = "";
            $scope.remarksText = "";
            $scope.operation = "";
            $scope.levelId = "";
            $scope.classId = "";
            $scope.subjectId = "";
            $scope.chapterId = "";
            $scope.topicId = "";
        };

        $scope.classes = function(level){
            var url = "/bs/getClassLevel?levelId=" + level;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.classesList = angular.copy(data);

            })
        }


        $scope.subject = function(classes){
            var url = "/bs/getclassSubject?classId=" + classes;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.subjectList = angular.copy(data);

            })
        }

        $scope.chapter = function(subject){
            var url = "/bs/getChapterSubject?subjectId=" + subject;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.chapterList = angular.copy(data);
            })
        }


        $scope.topic = function(chapter){
            var url = "/bs/getTopicChapter?chapterName=" + chapter;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.topicList = angular.copy(data);
                angular.forEach($scope.topics,function (value) {
                    $scope.topicList = angular.fromJson(value.topicList);

                })

            })
        }


        $scope.subjectChapter= function(subjectId){
            var url = "/bs/getChapterSubject?subjectId=" + subjectId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.chapterList = angular.copy(data);
                $scope.chapters=[];
                angular.forEach($scope.chapterList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.chapters.push(val);
                    }

                })

            })
        }


        $scope.getLessonPlanList = function () {
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getLessonPlanList').then(function (response) {
                var data = response.data;
                $scope.planList= data;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getLessonPlanList();


        $scope.getAcademicYearList = function () {
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getAcademicYearList').then(function (response) {
                var data = response.data;
                $scope.academicYearList= data.object;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getAcademicYearList();


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


        $scope.getTopicList = function () {

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getTopicList').then(function (response) {
                var data = response.data;
                $scope.topics= data;
                // angular.forEach($scope.topics,function (value) {
                //     $scope.topicList = angular.fromJson(value.topicList);
                //
                // })

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getTopicList();


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
        $scope.editLessonPlan  = function(data) {
            $scope.lessonPlanId = data.lessonPlanId;
            $scope.topicId =data.topic;
            $scope.subjectId = data.subject;
            $scope.chapterId = data.chapter;
            $scope.classId = data.classes;
            $scope.outcomesText = data.learningOutcomes;
            $scope.resourcesText = data.resources;
            $scope.activitesText = data.activities;
            $scope.integrationText = data.islamicIntegration;
            $scope.KnowledgeText = data.knowledge;
            $scope.remarksText = data.remarks;
            $scope.levelId = data.level;
            $scope.StatusText = data.status;
            $scope.academic = data.academic;
            $scope.teacher = data.teacher;
            $scope.lessonPlanning = data.lessonPlanning;
            $scope.objective = data.objective;
            $scope.introduction = data.introduction;
            $scope.immersion = data.immersion;
            $scope.explanation = data.explanation;
            $scope.handsOnExp = data.handsOnExp;
            $scope.engagementHomework = data.engagementHomework;
            $scope.assessment = data.assessment;
            $scope.StatusText = data.status;
            $scope.operation = 'Edit';
            $('#plan-title').text("Edit LessonPlan");
            $("#add_new_plan_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.addLessonPlan = function () {
            $('#plan-title').text("Add Lesson Plan");
            $scope.StatusText = "Active";
            $("#submit").text("Save");
            $("#add_new_plan_modal").modal('show');
        };

        $scope.saveLessonPlan = function () {
         if ($scope.levelId === ''||$scope.levelId==null||angular.isUndefined($scope.levelId)) {
                Notification.warning({message: 'Select Level', positionX: 'center', delay: 2000});
            }
         else if ($scope.classId === ''||$scope.classId==null||angular.isUndefined($scope.classId)) {
             Notification.warning({message: 'Select Class', positionX: 'center', delay: 2000});
         }
         else if ($scope.subjectId === ''||$scope.subjectId==null||angular.isUndefined($scope.subjectId)) {
             Notification.warning({message: 'Select Subject', positionX: 'center', delay: 2000});
         }
           else if ($scope.chapterId === ''||$scope.chapterId==null||angular.isUndefined($scope.chapterId)) {
                Notification.warning({message: 'Select Chapter', positionX: 'center', delay: 2000});
            }
         // else if ($scope.topicId === ''||$scope.topicId==null||angular.isUndefined($scope.topicId)) {
         //     Notification.warning({message: 'Select Topic', positionX: 'center', delay: 2000});
         // }
            else {
                var saveDetails;
                saveDetails = {
                    lessonPlanId: $scope.lessonPlanId,
                    topic: $scope.topicId,
                    subject: $scope.subjectId,
                    chapter: $scope.chapterId,
                    classes: $scope.classId,
                    learningOutcomes: $scope.outcomesText,
                    resources: $scope.resourcesText,
                    activities: $scope.activitesText,
                    islamicIntegration: $scope.integrationText,
                    knowledge: $scope.KnowledgeText,
                    remarks: $scope.remarksText,
                    status: $scope.StatusText,
                    academic: $scope.academic,
                    teacher: $scope.teacher,
                    lessonPlanning: $scope.lessonPlanning,
                    objective: $scope.objective,
                    introduction: $scope.introduction,
                    immersion: $scope.immersion,
                    explanation: $scope.explanation,
                    handsOnExp: $scope.handsOnExp,
                    engagementHomework: $scope.engagementHomework,
                    assessment: $scope.assessment,
                    level: $scope.levelId
                };
                $http.post($scope.bshimServerURL + '/saveLessonPlan', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeLessonPlan();
                        $scope.getLessonPlanList();
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

            }
            ;
        };
        $scope.deleteLessonPlan = function (data) {
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
                            lessonPlanId:data.lessonPlanId,
                            topicId:data.topic,
                            subjectId:data.subject,
                            chapterId:data.chapter,
                            classId:data.classes,
                            outcomesText:data.learningOutcomes,
                            resourcesText:data.resources,
                            activitesText:data.activities,
                            integrationText:data.islamicIntegration,
                            KnowledgeText:data.knowledge,
                            remarksText:data.remarks,
                            StatusText:data.status,
                            levelId:data.level

                        };
                        $http.post($scope.bshimServerURL +"/deleteLessonPlan", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getLessonPlanList();
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