app.controller('teachingObservationController',
    function ($scope, $timeout, $http, $location, $filter, Notification,$rootScope,$window) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';

        $scope.inactiveStatus = "Active";

        $scope.companyLogoPath = "";

        $scope.importPopup = function(){
            $("#import_Country").modal('show');
        }


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



        // $scope.getDiscountTypeList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getDiscountTypeList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.discountTypeList= data;
        //         $scope.searchText = val;
        //
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     })
        //
        // };
        //
        // $scope.getDiscountTypeList();
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

        $scope.addTeachingObservationForm = function () {
            $scope.Sdate = new Date();
            $scope.Edate = new Date();
            $scope.type=null;
            $scope.teacherName=$rootScope.hrFullName;

            $('#student-title').text("Teaching Observation Form");
            $("#add_new_Teaching_Observation_modal").modal('show');

        };

        if($rootScope.add == 'hr'){
            $scope.addTeachingObservationForm();
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

        $scope.getSubjectList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getSubjectList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.subjectList= data;
                $scope.searchText = val;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getSubjectList();


        $scope.getTeachingObservationList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getTeacherObservationList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.teacherObservationList= data;
                $scope.searchText = val;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getTeachingObservationList();


        $scope.removeTeachingObservation = function () {
            $scope.teachingObservationId="";
            $scope.teacherName = "";
            $scope.subjectId = "";
            $scope.Sdate = "";
            $scope.Edate = "";
            $scope.inductionSetStudentReadyScore = "";
            $scope.inductionSetStudentReadyRemarks = "";
            $scope.inductionSetGreetingProceduresScore = "";
            $scope.inductionSetGreetingProceduresRemarks = "";
            $scope.inductionSetCalenderForDayScore = "";
            $scope.inductionSetCalenderForDayRemarks = "";
            $scope.inductionSetLessonObjectiveScore = "";
            $scope.inductionSetLessonObjectiveRemarks = "";
            $scope.deliverySetStimulusScore = "";
            $scope.deliverySetStimulusRemarks = "";
            $scope.deliverySetPreviousLessonScore = "";
            $scope.deliverySetPreviousLessonRemarks = "";
            $scope.deliverySetTeachingFromGeneralScore = "";
            $scope.deliverySetTeachingFromGeneralRemarks = "";
            $scope.deliverySetWhiteBoardScore = "";
            $scope.deliverySetWhiteBoardScoreRemarks = "";
            $scope.deliverySetTeachingAidsScore = "";
            $scope.deliverySetTeachingAidsRemarks = "";
            $scope.deliverySetTextbookRefScore = "";
            $scope.deliverySetTextbookRefRemarks = "";
            $scope.deliverySetMakingAssociationScore = "";
            $scope.deliverySetMakingAssociationRemarks = "";
            $scope.deliverySetThinkingLevelScore = "";
            $scope.deliverySetThinkingLevelRemarks = "";
            $scope.deliverySetInteractionStudentScore = "";
            $scope.deliverySetInteractionStudentRemarks = "";
            $scope.deliverySetAppropriateLevelScore = "";
            $scope.deliverySetAppropriateLevelRemarks = "";
            $scope.deliverySetProperLanguageScore = "";
            $scope.deliverySetProperLanguageRemarks = "";
            $scope.deliverySetPronounciationScore = "";
            $scope.deliverySetPronounciationRemarks = "";
            $scope.deliverySetStudentConfidenceScore = "";
            $scope.deliverySetStudentConfidenceRemarks = "";
            $scope.deliverySetLearningStylesScore = "";
            $scope.deliverySetLearningStylesRemarks = "";
            $scope.deliverySetSupervisingClassworkScore = "";
            $scope.deliverySetSupervisingClassworkRemarks = "";
            $scope.deliverySetClassroomManagementScore = "";
            $scope.deliverySetClassroomManagementRemarks = "";
            $scope.deliverySetStudentManagementScore = "";
            $scope.deliverySetStudentManagementRemarks = "";
            $scope.lessonConclusionLessonPlanScore = "";
            $scope.lessonConclusionLessonPlanRemarks = "";
            $scope.lessonConclusionStudentAchievementScore = "";
            $scope.lessonConclusionStudentAchievementRemarks = "";
            $scope.lessonConclusionNextLessonScore = "";
            $scope.lessonConclusionNextLessonRemarks = "";
            $scope.additionalRemarks = "";
            $scope.signature = "";
            $scope.type = "";
            $scope.noAttempt = "";
            $scope.belowExpectation = "";
            $scope.minReq = "";
            $scope.goodAttempt = "";
            $scope.wellDone = "";
            $scope.levelId="";
            if($rootScope.add == 'hr') {
                $window.location.href="/home#!/hr";
            }

        };


        $scope.EditTeacherObservation = function (data) {
            $scope.teachingObservationId = data.teachingObservationId;
            $scope.teacherName = data.teacherName;
            $scope.subjectId = data.subjectId;
            $scope.levelId = data.level;
            $scope.Sdate = new Date(data.sdate);
            $scope.Edate = new Date(data.edate);
            $scope.inductionSetStudentReadyScore = data.inductionSetStudentReadyScore;
            $scope.inductionSetStudentReadyRemarks = data.inductionSetStudentReadyRemarks;
            $scope.inductionSetGreetingProceduresScore = data.inductionSetGreetingProceduresScore;
            $scope.inductionSetGreetingProceduresRemarks = data.inductionSetGreetingProceduresRemarks;
            $scope.inductionSetCalenderForDayScore = data.inductionSetCalenderForDayScore;
            $scope.inductionSetCalenderForDayRemarks = data.inductionSetCalenderForDayRemarks;
            $scope.inductionSetLessonObjectiveScore = data.inductionSetLessonObjectiveScore;
            $scope.inductionSetLessonObjectiveRemarks = data.inductionSetLessonObjectiveRemarks;
            $scope.deliverySetStimulusScore = data.deliverySetStimulusScore;
            $scope.deliverySetStimulusRemarks = data.deliverySetStimulusRemarks;
            $scope.deliverySetPreviousLessonScore = data.deliverySetPreviousLessonScore;
            $scope.deliverySetPreviousLessonRemarks = data.deliverySetPreviousLessonRemarks;
            $scope.deliverySetTeachingFromGeneralScore = data.deliverySetTeachingFromGeneralScore;
            $scope.deliverySetTeachingFromGeneralRemarks = data.deliverySetTeachingFromGeneralRemarks;
            $scope.deliverySetWhiteBoardScore = data.deliverySetWhiteBoardScore;
            $scope.deliverySetWhiteBoardScoreRemarks = data.deliverySetWhiteBoardScoreRemarks;
            $scope.deliverySetTeachingAidsScore = data.deliverySetTeachingAidsScore;
            $scope.deliverySetTeachingAidsRemarks = data.deliverySetTeachingAidsRemarks;
            $scope.deliverySetTextbookRefScore = data.deliverySetTextbookRefScore;
            $scope.deliverySetTextbookRefRemarks = data.deliverySetTextbookRefRemarks;
            $scope.deliverySetMakingAssociationScore = data.deliverySetMakingAssociationScore;
            $scope.deliverySetMakingAssociationRemarks = data.deliverySetMakingAssociationRemarks;
            $scope.deliverySetThinkingLevelScore = data.deliverySetThinkingLevelScore;
            $scope.deliverySetThinkingLevelRemarks = data.deliverySetThinkingLevelRemarks;
            $scope.deliverySetInteractionStudentScore = data.deliverySetInteractionStudentScore;
            $scope.deliverySetInteractionStudentRemarks = data.deliverySetInteractionStudentRemarks;
            $scope.deliverySetAppropriateLevelScore = data.deliverySetAppropriateLevelScore;
            $scope.deliverySetAppropriateLevelRemarks = data.deliverySetAppropriateLevelRemarks;
            $scope.deliverySetProperLanguageScore = data.deliverySetProperLanguageScore;
            $scope.deliverySetProperLanguageRemarks = data.deliverySetProperLanguageRemarks;
            $scope.deliverySetPronounciationScore = data.deliverySetPronounciationScore;
            $scope.deliverySetPronounciationRemarks = data.deliverySetPronounciationRemarks;
            $scope.deliverySetStudentConfidenceScore = data.deliverySetStudentConfidenceScore;
            $scope.deliverySetStudentConfidenceRemarks = data.deliverySetStudentConfidenceRemarks;
            $scope.deliverySetLearningStylesScore = data.deliverySetLearningStylesScore;
            $scope.deliverySetLearningStylesRemarks = data.deliverySetLearningStylesRemarks;
            $scope.deliverySetSupervisingClassworkScore = data.deliverySetSupervisingClassworkScore;
            $scope.deliverySetSupervisingClassworkRemarks = data.deliverySetSupervisingClassworkRemarks;
            $scope.deliverySetClassroomManagementScore = data.deliverySetClassroomManagementScore;
            $scope.deliverySetClassroomManagementRemarks = data.deliverySetClassroomManagementRemarks;
            $scope.deliverySetStudentManagementScore = data.deliverySetStudentManagementScore;
            $scope.deliverySetStudentManagementRemarks = data.deliverySetStudentManagementRemarks;
            $scope.lessonConclusionLessonPlanScore = data.lessonConclusionLessonPlanScore;
            $scope.lessonConclusionLessonPlanRemarks = data.lessonConclusionLessonPlanRemarks;
            $scope.lessonConclusionStudentAchievementScore = data.lessonConclusionStudentAchievementScore;
            $scope.lessonConclusionStudentAchievementRemarks = data.lessonConclusionStudentAchievementRemarks;
            $scope.lessonConclusionNextLessonScore = data.lessonConclusionNextLessonScore;
            $scope.lessonConclusionNextLessonRemarks = data.lessonConclusionNextLessonRemarks;
            $scope.additionalRemarks = data.additionalRemarks;
            $scope.observationReport = data.observationReport;
            $scope.signature = data.signature;
            $scope.type = data.type;
            if(data.noAttempt=='true'){
                $scope.noAttempt = true;
            }else {
                $scope.noAttempt = false;
            }
            if(data.belowExpectation=='true'){
                $scope.belowExpectation = true;
            }else {
                $scope.belowExpectation = false;
            }
            if(data.minReq=='true'){
                $scope.minReq = true;
            }else {
                $scope.minReq = false;
            }
            if(data.goodAttempt=='true'){
                $scope.goodAttempt = true;
            }else {
                $scope.goodAttempt = false;
            }
            if(data.wellDone=='true'){
                $scope.wellDone = true;
            }else {
                $scope.wellDone = false;
            }
            // $scope.noAttempt = data.noAttempt;
            // $scope.belowExpectation = data.belowExpectation;
            // $scope.minReq = data.minReq;
            // $scope.goodAttempt = data.goodAttempt;
            // $scope.wellDone = data.wellDone;
            // $scope.branchName = parseInt(data.branchId);
            $scope.operation = 'Edit';
            $('#student-title').text("Edit Teaching Observation Form");
            $("#add_new_Teaching_Observation_modal").modal('show');

        }, function (error) {
            Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };

        $scope.open10 = function () {
            $scope.popup10.opened = true;
        };

        $scope.popup10 = {
            opened: false
        };

        $scope.DeleteTeacherObservation = function (data) {
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

                            teachingObservationId: data.teachingObservationId,
                        };
                        $http.post($scope.bshimServerURL + "/DeleteTeacherObservation", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getTeachingObservationList();
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


        $scope.saveTeachingObservation = function () {
            $scope.isDisabled= true;
            if (angular.isUndefined($scope.teacherName) || $scope.teacherName == ''|| $scope.teacherName==null) {
                Notification.warning({message: 'Teacher name can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;

            }
            else if (angular.isUndefined($scope.subjectId) || $scope.subjectId == ''|| $scope.subjectId==null) {
                Notification.warning({message: 'Subject Cannot be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }else if (angular.isUndefined($scope.signature) || $scope.signature == ''|| $scope.signature==null) {
                Notification.warning({message: 'Status Cannot be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }
            else {
                if($rootScope.add!="hr"){
                    $rootScope.hrId="";
                }
                var saveTeacherDetails;
                saveTeacherDetails = {
                    teachingObservationId: $scope.teachingObservationId,
                    teacherName: $scope.teacherName,
                    level:$scope.levelId,
                    subjectId: $scope.subjectId,
                    hrId: $rootScope.hrId,
                    sdate: $scope.Sdate,
                    edate: $scope.Edate,
                    inductionSetStudentReadyScore: $scope.inductionSetStudentReadyScore,
                    inductionSetStudentReadyRemarks: $scope.inductionSetStudentReadyRemarks,
                    inductionSetGreetingProceduresScore: $scope.inductionSetGreetingProceduresScore,
                    inductionSetGreetingProceduresRemarks: $scope.inductionSetGreetingProceduresRemarks,
                    inductionSetCalenderForDayScore: $scope.inductionSetCalenderForDayScore,
                    inductionSetCalenderForDayRemarks: $scope.inductionSetCalenderForDayRemarks,
                    inductionSetLessonObjectiveScore: $scope.inductionSetLessonObjectiveScore,
                    inductionSetLessonObjectiveRemarks: $scope.inductionSetLessonObjectiveRemarks,
                    deliverySetStimulusScore: $scope.deliverySetStimulusScore,
                    deliverySetStimulusRemarks: $scope.deliverySetStimulusRemarks,
                    deliverySetPreviousLessonScore: $scope.deliverySetPreviousLessonScore,
                    deliverySetPreviousLessonRemarks: $scope.deliverySetPreviousLessonRemarks,
                    deliverySetTeachingFromGeneralScore: $scope.deliverySetTeachingFromGeneralScore,
                    deliverySetTeachingFromGeneralRemarks: $scope.deliverySetTeachingFromGeneralRemarks,
                    deliverySetWhiteBoardScore: $scope.deliverySetWhiteBoardScore,
                    deliverySetWhiteBoardScoreRemarks: $scope.deliverySetWhiteBoardScoreRemarks,
                    deliverySetTeachingAidsScore: $scope.deliverySetTeachingAidsScore,
                    deliverySetTeachingAidsRemarks: $scope.deliverySetTeachingAidsRemarks,
                    deliverySetTextbookRefScore: $scope.deliverySetTextbookRefScore,
                    deliverySetTextbookRefRemarks: $scope.deliverySetTextbookRefRemarks,
                    deliverySetMakingAssociationScore: $scope.deliverySetMakingAssociationScore,
                    deliverySetMakingAssociationRemarks: $scope.deliverySetMakingAssociationRemarks,
                    deliverySetThinkingLevelScore: $scope.deliverySetThinkingLevelScore,
                    deliverySetThinkingLevelRemarks: $scope.deliverySetThinkingLevelRemarks,
                    deliverySetInteractionStudentScore: $scope.deliverySetInteractionStudentScore,
                    deliverySetInteractionStudentRemarks: $scope.deliverySetInteractionStudentRemarks,
                    deliverySetAppropriateLevelScore: $scope.deliverySetAppropriateLevelScore,
                    deliverySetAppropriateLevelRemarks: $scope.deliverySetAppropriateLevelRemarks,
                    deliverySetProperLanguageScore: $scope.deliverySetProperLanguageScore,
                    deliverySetProperLanguageRemarks: $scope.deliverySetProperLanguageRemarks,
                    deliverySetPronounciationScore: $scope.deliverySetPronounciationScore,
                    deliverySetPronounciationRemarks: $scope.deliverySetPronounciationRemarks,
                    deliverySetStudentConfidenceScore: $scope.deliverySetStudentConfidenceScore,
                    deliverySetStudentConfidenceRemarks: $scope.deliverySetStudentConfidenceRemarks,
                    deliverySetLearningStylesScore: $scope.deliverySetLearningStylesScore,
                    deliverySetLearningStylesRemarks: $scope.deliverySetLearningStylesRemarks,
                    deliverySetSupervisingClassworkScore: $scope.deliverySetSupervisingClassworkScore,
                    deliverySetSupervisingClassworkRemarks: $scope.deliverySetSupervisingClassworkRemarks,
                    deliverySetClassroomManagementScore: $scope.deliverySetClassroomManagementScore,
                    deliverySetClassroomManagementRemarks: $scope.deliverySetClassroomManagementRemarks,
                    deliverySetStudentManagementScore: $scope.deliverySetStudentManagementScore,
                    deliverySetStudentManagementRemarks: $scope.deliverySetStudentManagementRemarks,
                    lessonConclusionLessonPlanScore: $scope.lessonConclusionLessonPlanScore,
                    lessonConclusionLessonPlanRemarks: $scope.lessonConclusionLessonPlanRemarks,
                    lessonConclusionStudentAchievementScore: $scope.lessonConclusionStudentAchievementScore,
                    lessonConclusionStudentAchievementRemarks: $scope.lessonConclusionStudentAchievementRemarks,
                    lessonConclusionNextLessonScore: $scope.lessonConclusionNextLessonScore,
                    lessonConclusionNextLessonRemarks: $scope.lessonConclusionNextLessonRemarks,
                    additionalRemarks: $scope.additionalRemarks,
                    observationReport: $scope.observationReport,
                    type: $scope.type,
                    noAttempt: $scope.noAttempt,
                    belowExpectation: $scope.belowExpectation,
                    minReq: $scope.minReq,
                    goodAttempt: $scope.goodAttempt,
                    wellDone: $scope.wellDone,
                    signature: $scope.signature,
                    reportingDate:$scope.reportDate,
                    salaryoffered:$scope.interviewerSalary
                    // branchId: $scope.branchName
                    // status: $scope.doctorstatus
                };
                $http.post($scope.bshimServerURL + "/saveTeachingObservation", angular.toJson(saveTeacherDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: ' Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_new_Teaching_Observation_modal").modal('hide');
                        if($scope.operation=='Edit'){
                            Notification.success({
                                message: 'Techer Observation Form is Updated  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }else {
                            Notification.success({
                                message: 'Techer Observation Form is Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.getTeachingObservationList();
                        if($rootScope.add == 'hr') {
                            $window.location.href="/home#!/hr";
                        }
                        // $scope.removeGradeMaster();
                        $scope.isDisabled= false;
                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled= false;
                });
            }
        };







    }
);