app.controller('ihesLessonPlanController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
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
        $scope.open3 = function () {
            $scope.popup3.opened = true;
        };

        $scope.popup3 = {
            opened: false
        };
        $scope.open4 = function () {
            $scope.popup4.opened = true;
        };

        $scope.popup4 = {
            opened: false
        };
        $scope.open5 = function () {
            $scope.popup5.opened = true;
        };

        $scope.popup5 = {
            opened: false
        };$scope.open6 = function () {
            $scope.popup6.opened = true;
        };

        $scope.popup6 = {
            opened: false
        };$scope.open7 = function () {
            $scope.popup7.opened = true;
        };

        $scope.popup7 = {
            opened: false
        };$scope.open8 = function () {
            $scope.popup8.opened = true;
        };

        $scope.popup8 = {
            opened: false
        };$scope.open9 = function () {
            $scope.popup9.opened = true;
        };

        $scope.popup9 = {
            opened: false
        };$scope.open10 = function () {
            $scope.popup10.opened = true;
        };

        $scope.popup10 = {
            opened: false
        };
        $scope.open11 = function () {
            $scope.popup11.opened = true;
        };

        $scope.popup11 = {
            opened: false
        };$scope.open12= function () {
            $scope.popup12.opened = true;
        };

        $scope.popup12 = {
            opened: false
        };$scope.open13 = function () {
            $scope.popup13.opened = true;
        };

        $scope.popup13 = {
            opened: false
        };$scope.open14 = function () {
            $scope.popup14.opened = true;
        };

        $scope.popup14 = {
            opened: false
        };
        $scope.open15 = function () {
            $scope.popup15.opened = true;
        };

        $scope.popup15= {
            opened: false
        };
        $scope.iheseditMarks = function (data) {
            $scope.iheslessonId = data.iheslessonId;
            $scope.level = data.level;
            $scope.class = data.classes;
            $scope.subject = data.subject;
            $scope.chapter = data.chapter;
            $scope.topic = data.topic;
            $scope.instructional = angular.fromJson(data.instructional);
            if ($scope.instructional != null) {
                // if ($scope.instructional.teachingLearingDate === '' || $scope.instructional.teachingLearingDate == null || angular.isUndefined($scope.instructional.teachingLearingDate)) {
                    $scope.instructional.teachingLearingDate = new Date($scope.instructional.teachingLearingDate);
                // }
                // if ($scope.instructional.coachingLearingDate === '' || $scope.instructional.coachingLearingDate == null || angular.isUndefined($scope.instructional.coachingLearingDate)) {
                    $scope.instructional.coachingLearingDate = new Date($scope.instructional.coachingLearingDate);
                // }
                // if ($scope.instructional.trainingLearingDate === '' || $scope.instructional.trainingLearingDate == null || angular.isUndefined($scope.instructional.trainingLearingDate)) {
                    $scope.instructional.trainingLearingDate = new Date($scope.instructional.trainingLearingDate);
                // }
                // if ($scope.instructional.advisioryLearningDate === '' || $scope.instructional.advisioryLearningDate == null || angular.isUndefined($scope.instructional.advisioryLearningDate)) {
                    $scope.instructional.advisioryLearningDate = new Date($scope.instructional.advisioryLearningDate);
                // }
                // if ($scope.instructional.consultancyLearingDate === '' || $scope.instructional.consultancyLearingDate == null || angular.isUndefined($scope.instructional.consultancyLearingDate)) {
                    $scope.instructional.consultancyLearingDate = new Date($scope.instructional.consultancyLearingDate);
                // }
            }
            $scope.investigational = angular.fromJson(data.investigational);
            if ($scope.investigational != null) {
                // if ($scope.investigational.teachingLearingDate === '' || $scope.investigational.teachingLearingDate == null || angular.isUndefined($scope.investigational.teachingLearingDate)) {
                    $scope.investigational.teachingLearingDate = new Date($scope.investigational.teachingLearingDate);
                // }
                // if ($scope.investigational.coachingLearingDate === '' || $scope.investigational.coachingLearingDate == null || angular.isUndefined($scope.investigational.coachingLearingDate)) {

                    $scope.investigational.coachingLearingDate = new Date($scope.investigational.coachingLearingDate);
                // }
                // if ($scope.investigational.trainingLearingDate === '' || $scope.investigational.trainingLearingDate == null || angular.isUndefined($scope.investigational.trainingLearingDate)) {

                    $scope.investigational.trainingLearingDate = new Date($scope.investigational.trainingLearingDate);
                // }
                // if ($scope.investigational.advisioryLearningDate === '' || $scope.investigational.advisioryLearningDate == null || angular.isUndefined($scope.investigational.advisioryLearningDate)) {
                    $scope.investigational.advisioryLearningDate = new Date($scope.investigational.advisioryLearningDate);
                // }
                // if ($scope.investigational.consultancyLearingDate === '' || $scope.investigational.consultancyLearingDate == null || angular.isUndefined($scope.investigational.consultancyLearingDate)) {
                    $scope.investigational.consultancyLearingDate = new Date($scope.investigational.consultancyLearingDate);
                // }
            }
            $scope.immersion = angular.fromJson(data.immersion);
            if ($scope.immersion != null) {
                // if ($scope.immersion.teachingLearingDate === '' || $scope.immersion.teachingLearingDate == null || angular.isUndefined($scope.immersion.teachingLearingDate)) {
                    $scope.immersion.teachingLearingDate = new Date($scope.immersion.teachingLearingDate);
                // }
                // if ($scope.immersion.coachingLearingDate === '' || $scope.immersion.coachingLearingDate == null || angular.isUndefined($scope.immersion.coachingLearingDate)) {
                    $scope.immersion.coachingLearingDate = new Date($scope.immersion.coachingLearingDate);
                // }
                // if ($scope.immersion.trainingLearingDate === '' || $scope.immersion.trainingLearingDate == null || angular.isUndefined($scope.immersion.trainingLearingDate)) {
                    $scope.immersion.trainingLearingDate = new Date($scope.immersion.trainingLearingDate);
                // }
                // if ($scope.immersion.advisioryLearningDate === '' || $scope.immersion.advisioryLearningDate == null || angular.isUndefined($scope.immersion.advisioryLearningDate)) {
                    $scope.immersion.advisioryLearningDate = new Date($scope.immersion.advisioryLearningDate);
                // }
                // if ($scope.immersion.consultancyLearingDate === '' || $scope.immersion.consultancyLearingDate == null || angular.isUndefined($scope.immersion.consultancyLearingDate)) {
                    $scope.immersion.consultancyLearingDate = new Date($scope.immersion.consultancyLearingDate);
                // }
            }
            $("#add_edit_Marks").modal('show');
        }
        $scope.ihesViewMarks = function (data) {
            $scope.iheslessonId=data.iheslessonId;
            $scope.level=data.level;
            $scope.class=data.classes;
            $scope.subject=data.subject;
            $scope.chapter=data.chapter;
            $scope.topic=data.topic;
            $scope.textbookChapter=data.textbookChapter;
            $scope.workbook=data.workbook;
            $scope.objectives=data.objectives;
            $scope.instructional = angular.fromJson(data.instructional);
            $scope.investigational = angular.fromJson(data.investigational);
            $scope.immersion = angular.fromJson(data.immersion);
            $("#add_ihes_veiw_Marks").modal('show');
        }
        $scope.removeIhes = function () {
            $scope.iheslessonId="";
            $scope.LevelName="";
            $scope.classId="";
            $scope.subjectId="";
            $scope.chapter="";
            $scope.topic="";
            $scope.descText = "";
            $scope.character = "";
            $scope.skillsCompetency = "";
            $scope.academic = "";
            $scope.application = "";
            $scope.immersion = "";

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
        $scope.classes = function(level){
            var url = "/bs/getClassLevel?levelId=" + level;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.classesList = angular.copy(data);

            })
        }

        $scope.subjectclass = function(className){
            var url = "/bs/getSubjectClass?classesId=" + className;
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
        $scope.getchapterListBasedOnSubject = function (subjectId) {
            $http.post($scope.bshimServerURL +"/getChapterSubject?subjectId="+subjectId).then(function (response) {
                var data = response.data;
                $scope.chapterList = data;

            })
        };

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
        $scope.addIhes = function () {
            $(".loader").css("display", "block");
            $('#topic-title').text("Add IHESLessonPlan");
            $("#submit").text("Save");


            $("#add_new_ihes_modal").modal('show');
        };

        $scope.getIhesPlanList = function () {
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getIhesPlanList').then(function (response) {
                var data = response.data;
                $scope.ihesList= data;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getIhesPlanList();

        $scope.saveIhesEditMarks = function () {
            var saveDetails;
            saveDetails = {
                iheslessonId:$scope.iheslessonId,
                instructional: angular.toJson($scope.instructional),
                investigational: angular.toJson($scope.investigational),
                immersion: angular.toJson($scope.immersion)

            };
            $http.post($scope.bshimServerURL + '/saveIhesEditMarks', angular.toJson(saveDetails)).then(function (response) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    $scope.getIhesPlanList();
                    $("#add_edit_Marks").modal('hide');
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


        $scope.saveIhes = function () {
             var saveDetails;
             saveDetails = {
                 iheslessonId:$scope.iheslessonId,
                 levelId:$scope.LevelName,
                 classId:$scope.classId,
                 subjectId:$scope.subjectId,
                 chapterId:$scope.chapter,
                 topicId:$scope.topic,
                 description:$scope.descText,
                 textbookCheckbox:$scope.textbook,
                 textbookChapter:$scope.textbookChapter,
                 workbookCheckbox:$scope.workbook,
                 workbook: $scope.workbookRef,
                 objectivesCheckbox:$scope.objectives,
                 objectives:$scope.objectivesText,
                 immersionKnowledge:$scope.immersion,
                 chapterBuilding:$scope.character,
                 skillsCompetency:$scope.skillsCompetency,
                 academicAchievement:$scope.academic,
                 applicationLife:$scope.application
             };
             $http.post($scope.bshimServerURL + '/saveIhes', angular.toJson(saveDetails)).then(function (response) {
                 var data = response.data;
                 if (data == "") {
                     Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                 }
                 else {
                     $scope.removeIhes();
                     $scope.getIhesPlanList();
                     $("#add_new_ihes_modal").modal('hide');
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

        $scope.editIhes  = function(data) {
            $scope.iheslessonId = data.iheslessonId;
            $scope.LevelName = parseInt(data.levelId);
            $scope.classes(data.levelId);
            $scope.classId = parseInt(data.classId);
            $scope.subjectclass(data.classId);
            $scope.subjectId = parseInt(data.subjectId);
            $scope.getchapterListBasedOnSubject(data.subjectId);
            $scope.chapter = parseInt(data.chapterId);
            $scope.getTopicList(data.chapterId);
            $scope.topic = parseInt(data.topicId);
            $scope.descText = data.description;
            $scope.textbookChapter = data.textbookChapter;
            $scope.workbookRef = data.workbook;
            $scope.objectivesText = data.objectives;
            $scope.textbook=data.textbookCheckbox== "true";
            $scope.workbook=data.workbookCheckbox== "true";
            $scope.objectives=data.objectivesCheckbox== "true";
            $scope.immersion=data.immersionKnowledge== "true";
            $scope.character=data.chapterBuilding== "true";
            $scope.skillsCompetency=data.skillsCompetency== "true";
            $scope.academic=data.academicAchievement== "true";
            $scope.application=data.applicationLife== "true";
            $scope.application = 'Edit';
            $('#topic-title').text("Edit IHES LessonPlan");
            $("#add_new_ihes_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };

        $scope.deleteIhes = function (data) {
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
                            iheslessonId:data.iheslessonId,
                            LevelName:data.levelId,
                            classId:data.classId,
                            subjectId:data.subjectId,
                            chapter:data.chapterId,
                            topic:data.topicId,
                            descText:data.description,
                            textbook:data.textbookCheckbox,
                            textbookChapter:data.textbookChapter,
                            workbook:data.workbookCheckbox,
                            workbookRef:data.workbook,
                            objectives:data.objectivesCheckbox,
                            objectivesText:data.objectives,
                            immersion:data.immersionKnowledge,
                            character:data.chapterBuilding,
                            skillsCompetency:data.skillsCompetency,
                            academic:data.academicAchievement,
                            application:data.applicationLife

                        };
                        $http.post($scope.bshimServerURL +"/deleteIhes", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getIhesPlanList();
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