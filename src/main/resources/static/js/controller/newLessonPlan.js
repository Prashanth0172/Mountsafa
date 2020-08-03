app.controller('newLessonPlanController',
    function ($scope, $timeout, $http, $location, $filter, Notification,$rootScope) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.date = new Date();
        $scope.inactiveStatus = "Active";
        $scope.removeLessonPlan = function () {
            $scope.lessonPlanId = "";
            $scope.outcomesText = "";
            $scope.resourcesText = "";
            $scope.activitesText = "";
            $scope.integrationText = "";
            $scope.KnowledgeText = "";
            $scope.remarksText = "";
            $scope.lessonPlanning = "";
            $scope.objective = "";
            $scope.introduction = "";
            $scope.immersion = "";
            $scope.operation = "";
            $scope.termNm = null;
            $scope.assessmentYes = "";
            $scope.componentNm = "";
            $scope.subComponent = "";
            $scope.newComponent = "";
            $scope.maxMarks = "";
            $scope.levelId = null;
            $scope.classId = null;
            $scope.subjectId = null;
            $scope.chapterId = null;
            $scope.topicId = null;
            $scope.checkedBy = null;
            $scope.lessonPlanDate = new Date();
            $scope.topicName = null;
            $scope.weekText = "";
            $scope.toWeekText = "";
        };
        $scope.levelClasses = function () {
            if ($scope.level != undefined) {
                var url = "/bs/getClassLevel?levelId=" + $scope.level;
                $http.post(url).then(function (response) {
                    var data = response.data;
                    $scope.classList = data;
                })
            }
        }
        $scope.levelClasses();
        $scope.levelClass = function(gradeId){
            var url = "/bs/getClassLevel?levelId=" + gradeId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.classesList = angular.copy(data);
                $scope.classes=[];
                angular.forEach($scope.classesList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.classes.push(val);
                    }

                })

            })
        }
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.popup2 = {
            opened: false
        };

        $scope.getSubjectList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL + '/getSubjectList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.subjectList = data;
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
            $scope.getLessonPaginationList();

        };
        $scope.getLessonPaginationList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getpaginatedLesssonPlan?&searchText=" + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.planList = data.list;
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
        $scope.getLessonPaginationList();

        $scope.ChapterSubject = function (subject) {
            var url = "/bs/getChapterSubject?subjectId=" + subject;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.chapterList = angular.copy(data);
            })
        }
        $scope.getTopicDetails = function (levelId,termId,subjectId,chapterId,topicId) {
            var url = "/bs/getTopicDetails?levelId=" + levelId + "&termId=" + termId + "&subjectId=" + subjectId+ "&chapterId=" + chapterId + "&topicId=" + topicId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.topicDetailsList = angular.copy(data);
            })
        }

        $scope.WeekList = function (topic) {
            $scope.topicNameList = [];
            angular.forEach($scope.topicList11, function (val, key) {
                if (val.TopicName == topic) {
                    $scope.weekText = val.fromWeek;
                    $scope.toWeekText = val.toWeek;
                }

            })
        }
        // $scope.validateMarks = function (data) {
        //     if (data.maxMarks < data.marks) {
        //         Notification.error({message: 'Marks Cannot Be Greater Max Marks ', positionX: 'center', delay: 2000});
        //         data.marks =0;
        //     }
        // }


        $scope.subjectChapter = function (subjectId) {
            var url = "/bs/getChapterSubject?subjectId=" + subjectId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.chapterList = angular.copy(data);
                $scope.chapters = [];
                angular.forEach($scope.chapterList, function (val, key) {
                    if (val.status == "Active") {
                        $scope.chapters.push(val);
                    }

                })

            })
        }
        $scope.compSubComp = function (componentId) {
            var url = "/bs/getSubCompBasedOnComp?componentId=" + componentId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.subComponentList = angular.copy(data);
                $scope.subbcomps = [];
                angular.forEach($scope.subComponentList, function (val, key) {
                    if (val.status == "Active") {
                        $scope.subbcomps.push(val);
                    }

                })
                $scope.componentValue(componentId);

            })

        }
        $scope.selectedquestion= [];
        $scope.selectQuestion = function (questionId) {
            var index = $scope.selectedquestion.indexOf(questionId);
            if (parseInt(index) >= 0) {
                $scope.selectedquestion.splice(index, 1);
            }else {
                $scope.selectedquestion.push(questionId);
            }
            $scope.assessmentId=$scope.selectedquestion;
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
        $scope.componentValue = function (component) {
            var url = "/bs/getComponentValue?component=" + component;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.newComponent = data.weightage;
            })
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


        $scope.getTopicList = function (chapterId) {
            $http.post($scope.bshimServerURL + '/getTopicListbyChapter?chapterId=' + chapterId).then(function (response) {
                var data = response.data;
                $scope.topicList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.classSubject = function(classId){
            if(classId==undefined){
                classId=null;
            }
            if(classId!=null) {
                var url = "/bs/getclassSubject?classId=" + classId;
                $http.post(url).then(function (response) {
                    var data = response.data;
                    $scope.subjectList = angular.copy(data);
                })
            }
        }
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
        $scope.addAssessmentDetails = function (ass) {
            $scope.topicId=ass.topic;
            $scope.lessonPlanId=ass.lessonPlanId;
            $("#add_new_Assesment_modal").modal('show');
        }

        $scope.openAssessment = function (ass) {
            $scope.topic = ass.topic;
            $scope.topicId = ass.topic;
            $scope.topicName = ass.topicName;
            $scope.levelName = ass.levelName;
            $scope.termName = ass.termName;
            $scope.subjectName = ass.subjectName;
            $scope.chapterName = ass.chapterName;
            $scope.componentName = ass.componentName;
            $scope.subcomponentName = ass.subcomponentName;
            $scope.questionName = ass.questionDetailsName;
            $scope.chapter = ass.chapter;
            $scope.date=new Date();
            $scope.level = ass.level;
            $scope.lessonPlanId = ass.lessonPlanId;
            $scope.classId = ass.classes;
            $scope.subject = ass.subject;
            $scope.maxMarks = ass.maxMarks;
            $scope.component = ass.component;
            $scope.questionsListId = [];
            angular.forEach($scope.questionName, function (val, key) {
                    $scope.questionsListId.push(val.assessmentDetailsId);

            })
            $scope.levelClass($scope.level);
            if(ass.assesmentId!=null){
                $http.post($scope.bshimServerURL + "/editAssesmentSub?id=" +ass.assesmentId).then(function (response) {
                    var data = response.data;
                    $scope.term = parseInt(data.term);
                    $scope.level =parseInt(data.level);
                    $scope.asId =parseInt(data.asId);
                    $scope.classId =parseInt(data.classId);
                    $scope.subject =parseInt(data.subject);
                    $scope.date=data.date;
                    $scope.chapter = parseInt(data.chapter);
                    $scope.component = parseInt(data.component);
                    $scope.assessmentDetailsId = parseInt(data.questionName);
                    $scope.studentList = data.mapValue;
                    $scope.studentMap=angular.fromJson($scope.studentList);
                });
            }
            $("#add_new_detail_modal").modal('show');
        }

        $scope.openSimpleAssessment = function (ass) {
            $scope.term = parseInt(ass.term);
            $scope.level = parseInt(ass.level);
            $scope.classId = parseInt(ass.classes);
            $scope.subject = parseInt(ass.subject);
            $scope.chapter = parseInt(ass.chapter);
            $scope.component = parseInt(ass.component);
            $scope.subComponent = parseInt(ass.subComponent);
            $scope.levelClass($scope.level);
            $scope.classSubject($scope.classId);
            $scope.subjectChapter($scope.subject);
            $rootScope.lessonPlanValueId = ass.lessonPlanId;
            $scope.compSubComp($scope.component);

            if (ass.assesmentId != null) {
                $http.post($scope.bshimServerURL + "/editAssesmentSub?id=" + ass.assesmentId).then(function (response) {
                    var data = response.data;
                    $scope.term = parseInt(data.term);
                    $scope.level = parseInt(data.level);
                    $scope.levelClass(data.level);
                    $scope.classId = parseInt(data.classId);
                    $scope.classSubject(data.classId);
                    $scope.subject = parseInt(data.subject);
                    $scope.subjectChapter(data.subject);
                    $scope.chapter = parseInt(data.chapter);
                    $scope.component = parseInt(data.component);
                    $scope.compSubComp($scope.component);
                    $scope.subComponent = parseInt(data.subComponent);
                    $scope.asId = parseInt(data.asId);
                    $scope.studentsName = [];
                    $scope.lessonPlanValueId = data.lessonplanId;
                    $scope.studentsName = angular.fromJson(data.studentsName);
                    angular.forEach($scope.studentList, function (val, key) {
                        if ($scope.studentsName.indexOf(val.studentName) != -1) {
                            val.value = true;
                            $scope.selectedStudents.push(val.studentName);
                        } else {
                            val.value = false;
                        }
                    })
                    $scope.topicList = data.mapValue;
                    $scope.topicsList = data.mapValue;
                    $scope.operation = 'Edit';
                    $('#topic-title').text("Edit Topic");
                })
            }
            $("#add_new_AS_modal").modal('show');

        }

        $scope.getstd = function () {
            $http.post($scope.bshimServerURL + "/getstdListBasedOnClassAndLevel?level=" + $scope.level + "&class=" + $scope.classId).then(function (response) {
                var data = response.data;
                $scope.studentList = data;
                $scope.studentMap={};
                angular.forEach($scope.questionName,function (val,key) {
                    angular.forEach($scope.studentList ,function (value,key) {
                        value.maxMarks = val.maxMarks;
                    })
                    $scope.studentMap[val.assessmentDetailsId]=angular.copy($scope.studentList);
                })
            });
        }

        $scope.saveAssessment = function (type) {
            $scope.map = {};
            angular.forEach($scope.studentMap, function (val, questionkey) {
                $scope.topicList = [];
                angular.forEach(val,function (value,key) {
                    var create = {};
                    create.marks = value.marks;
                    create.remarks = value.remarks;
                    create.studentName = value.studentName;
                    create.maxMarks = value.maxMarks;
                    $scope.topicList.push(create);
                    $scope.map[questionkey] = $scope.topicList;
                })
            });

            var saveDetails;
            saveDetails = {
                asId: $scope.asId,
                employee: $scope.teacher,
                mapValue: $scope.map,
                chapter: $scope.chapter,
                level: $scope.level,
                subject: $scope.subject,
                classId: $scope.classId,
                topicName: $scope.topicName,
                component: $scope.component,
                subComponent: $scope.subComponent,
                topicName: $scope.topicName,
                date: $scope.date,
                term:$scope.termName,
                questionName:$scope.assessmentDetailsId,
                studentsName: angular.toJson($scope.questionsListId),
                flag:type

            };
            $http.post($scope.bshimServerURL + '/saveAssLessonPlan?id=' + $scope.lessonPlanId, angular.toJson(saveDetails)).then(function (response) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    $("#add_new_detail_modal").modal('hide');
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

        $scope.editLessonPlan = function (data) {
            $scope.lessonPlanId = data.lessonPlanId;
            $scope.levelId = parseInt(data.level);
            $scope.levelClass($scope.levelId);
            $scope.subjectId = parseInt(data.subject);
            $scope.ChapterSubject($scope.subjectId);
            $scope.chapterId = parseInt(data.chapter);
            $scope.getTopicList($scope.chapterId);
            $scope.topicName = parseInt(data.topic);
            $scope.classId = parseInt(data.classes);
            $scope.outcomesText = data.learningOutcomes;
            $scope.resourcesText = data.resources;
            $scope.activitesText = data.activities;
            $scope.integrationText = data.islamicIntegration;
            $scope.KnowledgeText = data.knowledge;
            $scope.remarksText = data.remarks;
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
            $scope.assessmentYes = data.assessment;
            $scope.weekText = data.weekText;
            $scope.toWeekText = data.toWeekText;
            $scope.StatusText = data.status;
            $scope.lessonPlanDate = new Date(data.lessonPlanDate);
            $scope.checkedBy = data.checkedBy;
            $scope.termNm = parseInt(data.term);
            $scope.componentNm = parseInt(data.component);
            $scope.compSubComp($scope.componentNm);
            $scope.subComponent=parseInt(data.subComponent);
            $scope.newComponent = data.weightage;
            $scope.maxMarks = data.maxMarks;
            $scope.fileName=data.attachFile;
            $scope.topicDetailsList=angular.fromJson(data.sowDetailsList);
            $scope.operation = 'Edit';
            $('#plan-title').text("Edit Lesson Plan");
            $("#add_new_plan_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.addLessonPlan = function () {
            $('#plan-title').text("Add LessonPlan");
            $scope.StatusText = "Active";
            $scope.lessonPlanDate = new Date();
            $("#submit").text("Save");
            $("#add_new_plan_modal").modal('show');
        };

        $scope.getTermsList = function () {
            $http.post($scope.bshimServerURL + '/getTermsList').then(function (response) {
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
        $scope.getTermsList();
        $scope.topicQuestion = function(topicId,subComponentId){
            $http.post($scope.bshimServerURL + '/getQuesBasedOnTopicAndSubComponent?topicId='+topicId+ '&subComponentId=' + subComponentId).then(function (response) {
                var data = response.data;
                $scope.questionList = data;

            })
        }
        // $scope.topicQuestion = function(subComponentId,componentId){
        //     $http.post($scope.bshimServerURL + '/getQuesBasedOnTopicAndSubComponent?topicId='+$scope.topicId+ '&subComponentId=' + subComponentId+ '&lessonPlanId=' + $scope.lessonPlanId+ '&componentId=' + componentId).then(function (response) {
        //         var data = response.data;
        //         $scope.questionList = data.assessmentQuestionDetailsPojo;
        //         $scope.quesionDetailsList=angular.fromJson(data.questionListDetails);
        //         angular.forEach($scope.quesionDetailsList,function (val,key) {
        //             angular.forEach($scope.questionList,function (value,key) {
        //                 if(value.assessmentDetailsId==val){
        //                     value.assessmentId=true;
        //                 }
        //             })
        //
        //         })
        //         $scope.quesList=[];
        //         angular.forEach($scope.quesionDetailsList,function (val,key) {
        //             angular.forEach($scope.questionList,function (value,key) {
        //                 if(value.assessmentDetailsId==val){
        //                     $scope.quesList.push(value);
        //                     console.log($scope.quesList);
        //                 }
        //             })
        //
        //         })
        //
        //
        //     })
        // }

        $scope.getComponentList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL + '/getComponentList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.componentList = data;
                $scope.searchText = val;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.getComponentList();

        $scope.saveLessonPlan = function () {
            if ($scope.levelId === '' || $scope.levelId == null || angular.isUndefined($scope.levelId)) {
                Notification.warning({message: 'Select Level', positionX: 'center', delay: 2000});
            }
            else if ($scope.subjectId === '' || $scope.subjectId == null || angular.isUndefined($scope.subjectId)) {
                Notification.warning({message: 'Select Subject', positionX: 'center', delay: 2000});
            }

            else if ($scope.chapterId === '' || $scope.chapterId == null || angular.isUndefined($scope.chapterId)) {
                Notification.warning({message: 'Select Chapter', positionX: 'center', delay: 2000});
            }
            else if ($scope.assessmentYes === '' || $scope.assessmentYes == null || angular.isUndefined($scope.assessmentYes)) {
                Notification.warning({message: 'Select Chapter', positionX: 'center', delay: 2000});
            }
            else {
                var saveDetails;
                saveDetails = {
                    lessonPlanId: $scope.lessonPlanId,
                    topic: $scope.topicName,
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
                    assessment: $scope.assessmentYes,
                    level: $scope.levelId,
                    weekText: $scope.weekText,
                    toWeekText: $scope.toWeekText,
                    checkedBy: $scope.checkedBy,
                    term: $scope.termNm,
                    component: $scope.componentNm,
                    subComponent: $scope.subComponent,
                    newComponent: $scope.newComponent,
                    maxMarks: $scope.maxMarks,
                    lessonPlanDate: $scope.lessonPlanDate,
                    questionId:angular.toJson($scope.assessmentId),
                    attachFile: $scope.fileToUpload,
                    sowDetailsList: angular.toJson($scope.topicDetailsList)

                };
                $http.post($scope.bshimServerURL + '/saveLessonPlan', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({
                            message: 'Already Configured for that topic',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $scope.removeLessonPlan();
                        $scope.getLessonPaginationList();
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
        $scope.saveLessonPlanAssesmentDetails = function () {
            var saveDetails;
                saveDetails = {
                    lessonPlanId: $scope.lessonPlanId,
                    assessment: $scope.assessmentYes,
                    component: $scope.componentNm,
                    subComponent: $scope.subComponent,
                    newComponent: $scope.newComponent,
                    maxMarks: $scope.maxMarks,
                    questionId:angular.toJson($scope.assessmentId)

                };
                $http.post($scope.bshimServerURL + '/saveLessonPlanAssesmentDetails', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({
                            message: 'Already Configured for that topic',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $scope.removeLessonPlan();
                        $scope.getLessonPaginationList();
                        $("#add_new_Assesment_modal").modal('hide');
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
        $scope.importLessonPlan = function () {
            $("#add_new_Lesson_plan_import_modal").modal('show');
        };
        $scope.saveLessonPlanImportMaster = function () {
            $scope.isDisabled = true;
            var formElement = document.getElementById("details");
            var details = new FormData(formElement);
            $http.post($scope.bshimServerURL + '/saveLessonPlanImportMaster?levelId=' + $scope.levelId + '&subjectId=' + $scope.subjectId, details,
                {
                    headers: {'Content-Type': undefined},
                    transformRequest: angular.identity,
                }).then(function (response) {
                    $("#add_new_Lesson_plan_import_modal").modal('hide');
                    $scope.getLessonPaginationList();
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
                    if (result == true) {
                        var deleteDetails = {
                            lessonPlanId: data.lessonPlanId,
                            topicId: data.topic,
                            subjectId: data.subject,
                            chapterId: data.chapter,
                            classId: data.classes,
                            outcomesText: data.learningOutcomes,
                            resourcesText: data.resources,
                            activitesText: data.activities,
                            integrationText: data.islamicIntegration,
                            KnowledgeText: data.knowledge,
                            remarksText: data.remarks,
                            StatusText: data.status,
                            levelId: data.level

                        };
                        $http.post($scope.bshimServerURL + "/deleteLessonPlan", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getLessonPaginationList();
                            $scope.removeLessonPlan();
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
        $scope.imageUpload = function (event) {
            var files = event.target.files;
            var file = files[0];
            var srcString;
            var imageCompressor = new ImageCompressor;
            var compressorSettings = {
                toWidth: 200,
                toHeight: 200,
                mimeType: 'image/png',
                mode: 'strict',
                quality: 1,
                grayScale: false,
                sepia: false,
                threshold: false,
                speed: 'low'
            };
            if (files && file) {
                var reader = new FileReader();
                reader.onload = function (readerEvt) {
                    binaryString = readerEvt.target.result;
                    $('.image-preview').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage);
                };
            }
        };
        function proceedCompressedImage(compressedSrc) {
            $('#image-preview').attr('src', compressedSrc);
            $scope.fileToUpload = compressedSrc;
        }

    });