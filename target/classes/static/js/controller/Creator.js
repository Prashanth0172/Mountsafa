app.controller('CreatorController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;

        $scope.inactiveStatus = "Active";
        $scope.removeAssCre = function () {
            $scope.acreatorId="";
            $scope.assesmentName="";
            $scope.assesmentType="";
            $scope.levelId="";
            $scope.classId="";
            $scope.subjectId="";
            $scope.chapterId = "";
            $scope.semesterId = "";
            $scope.termId = "";
            $scope.topicId = "";
            $scope.status = "";

        };
        $scope.format = 'dd/MM/yyyy';

        $scope.openA = function () {
            $scope.popupA.opened = true;
        };

        $scope.popupA = {
            opened: false
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

        };
        $scope.getChapterList = function (val) {
                if (angular.isUndefined(val)) {
                    val = "";
                }

                $(".loader").css("display", "block");
                $http.post($scope.bshimServerURL  + '/getChapterList?searchText=' + val).then(function (response) {
                    var data = response.data;
                    $scope.chapterlist= data;
                    $scope.searchText = val;

                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                })

            };
        $scope.getChapterList();
        $scope.selectedSem = [];
        $scope.pushSelectedSemester = function (id) {
            var index = $scope.selectedSem.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedSem.splice(index, 1);
            }else {
                $scope.selectedSem.push(id);
            }
            $scope.semester=$scope.selectedSem;
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
        $scope.selectedTerm = [];
        $scope.selectTerm = function (id) {
            var index = $scope.selectedTerm.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedTerm.splice(index, 1);
            }else {
                $scope.selectedTerm.push(id);
            }
            $scope.term=$scope.selectedTerm;
        };
        var expanded1 = false;
        $scope.showCheckboxes1=function() {
            var checkboxes1 = document.getElementById("checkboxes1");
            if (!expanded1) {
                checkboxes1.style.display = "block";
                expanded1 = true;
            } else {
                checkboxes1.style.display = "none";
                expanded1 = false;
            }
        }
        $scope.selectedgrade = [];
        $scope.selectGrade = function (id) {
            var index = $scope.selectedgrade.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedgrade.splice(index, 1);
            }else {
                $scope.selectedgrade.push(id);
            }
            $scope.level=$scope.selectedgrade;
        };
        var expanded2 = false;
        $scope.showCheckboxes2=function() {
            var checkboxes2 = document.getElementById("checkboxes2");
            if (!expanded2) {
                checkboxes2.style.display = "block";
                expanded2 = true;
            } else {
                checkboxes2.style.display = "none";
                expanded2 = false;
            }
        }

         $scope.selectedclass= [];
        $scope.selectClass = function (id) {
            var index = $scope.selectedclass.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedclass.splice(index, 1);
            }else {
                $scope.selectedclass.push(id);
            }
            $scope.class=$scope.selectedclass;
            $scope.ClassSubject();
        };
        var expanded3 = false;
        $scope.showCheckboxes3=function() {
            var checkboxes3 = document.getElementById("checkboxes3");
            if (!expanded3) {
                checkboxes3.style.display = "block";
                expanded3 = true;
            } else {
                checkboxes3.style.display = "none";
                expanded3 = false;
            }
        }
        $scope.selectedsub= [];
        $scope.selectSubject = function (id) {
            var index = $scope.selectedsub.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedsub.splice(index, 1);
            }else {
                $scope.selectedsub.push(id);
            }
            $scope.subject=$scope.selectedsub;
        };
        var expanded4 = false;
        $scope.showCheckboxes4=function() {
            var checkboxes4 = document.getElementById("checkboxes4");
            if (!expanded4) {
                checkboxes4.style.display = "block";
                expanded4 = true;
            } else {
                checkboxes4.style.display = "none";
                expanded4 = false;
            }
        }
         $scope.selectedchap= [];
        $scope.selectChapter = function (id) {
            var index = $scope.selectedchap.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedchap.splice(index, 1);
            }else {
                $scope.selectedchap.push(id);
            }
            $scope.chapter=$scope.selectedchap;
            $scope.ChapterTopic()
        };
        var expanded5 = false;
        $scope.showCheckboxes5=function() {
            var checkboxes5 = document.getElementById("checkboxes5");
            if (!expanded5) {
                checkboxes5.style.display = "block";
                expanded5 = true;
            } else {
                checkboxes5.style.display = "none";
                expanded5 = false;
            }
        }
        $scope.selectedtopic= [];
        $scope.selectTopic = function (id) {
            var index = $scope.selectedtopic.indexOf(id);
            if (parseInt(index) >= 0) {
                $scope.selectedtopic.splice(index, 1);
            }else {
                $scope.selectedtopic.push(id);
            }
            $scope.topic=$scope.selectedtopic;
            $scope.TopicQuestion()

        };
        var expanded6 = false;
        $scope.showCheckboxes6=function() {
            var checkboxes6 = document.getElementById("checkboxes6");
            if (!expanded6) {
                checkboxes6.style.display = "block";
                expanded6 = true;
            } else {
                checkboxes6.style.display = "none";
                expanded6 = false;
            }
        }
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
        $scope.getTopicList = function () {
            $http.post($scope.bshimServerURL + '/getTopicList').then(function (response) {
                var data = response.data;
                $scope.topicList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getTopicList();
        $scope.getClassList = function () {
            $http.post($scope.bshimServerURL + '/getClassList').then(function (response) {
                var data = response.data;
                $scope.classList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getClassList();


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

        $scope.getTermsList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getTermsList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.termList= data;
                $scope.searchText = val;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getTermsList();

        $scope.addAssC = function () {
            $scope.status="Active";
            $scope.assesmentDate= new Date();
            $(".loader").css("display", "block");
            $('#modelName').text("Add AssesmentCreator");
            $("#submit").text("Save");


            $("#add_new_ASSCre_modal").modal('show');
        };
        $scope.levelClass = function(gradeId){
            var url = "/bs/getClassLevel?levelId=" + gradeId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.classList = angular.copy(data);
                $scope.classes=[];
                angular.forEach($scope.classList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.classes.push(val);
                    }

                })

            })
        }
        $scope.semesterTerm = function (semesterId) {
            var url = "/bs/getTermSemester?semesterId=" + semesterId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.termList = angular.copy(data);
                $scope.termss = [];
                angular.forEach($scope.termList, function (val, key) {
                    if (val.status == "Active") {
                        $scope.termss.push(val);
                    }
                })
            })
        }
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
       $scope.ClassSubject = function(){
           var url = "/bs/getSubBasedOnClass";
           $http.post(url,angular.toJson($scope.selectedclass)).then(function (response) {
               var data = response.data;
               $scope.subjectList = data;

           })
       }
       $scope.ChapterTopic = function(){
           var url = "/bs/getTopicBasedOnChapter";
           $http.post(url,angular.toJson($scope.selectedchap)).then(function (response) {
               var data = response.data;
               $scope.topicList = data;

           })
       }
       $scope.TopicQuestion = function(){
           var url = "/bs/getQuesBasedOnTopic";
           $http.post(url,angular.toJson($scope.selectedtopic)).then(function (response) {
               var data = response.data;
               $scope.questionList = data;

           })
       }
        $scope.editCreator  = function(data) {
            $scope.acreatorId=data.acreatorId;
            $scope.assesmentName=data.assesmentName;
            $scope.assesmentType=parseInt(data.assesmentType);
            $scope.semester=parseInt(data.semesterId);
            $scope.term=parseInt(data.termId);
            $scope.level=parseInt(data.levelId);
            $scope.class=parseInt(data.classId);
            $scope.class=[];
            $scope.class=angular.fromJson(data.classId);
            angular.forEach($scope.classList,function (val,key) {
                if($scope.class.indexOf(val.classId)!=-1){
                    val.class=true;
                }else {
                    val.class=false;
                }
            })
            $scope.ClassSubject(data.classId);
            $scope.subject=parseInt(data.subjectId);
            $scope.subjectChapter(data.subjectId);
            $scope.chapter=[];
            $scope.chapter=angular.fromJson(data.chapterId);
            angular.forEach($scope.chapterList, function (val, key) {
                if ($scope.chapter.indexOf(val.chapterId) != -1) {
                    val.chapter = true;
                } else {
                    val.chapter = false;
                }
            })
            $scope.topic=[];
            $scope.topic=angular.fromJson(data.topicId);
            angular.forEach($scope.topicList,function (val,key) {
                if($scope.topic.indexOf(val.topicId)!=-1){
                    val.topic=true;
                }else{
                    val.topic=false;
                }
            })
            $scope.semesterTerm(data.termId);
            $scope.ChapterTopic(data.chapterId);
            $scope.TopicQuestion(data.topicId);
            $scope.questionList=angular.fromJson(data.questionName);
            $scope.formDetails=[];
            angular.forEach($scope.questionList,function (datas) {
                $scope.formDetails.push({
                    question :datas.question,
                    maxMarks :datas.maxMarks

                })
            })
            $scope.questionList = $scope.formDetails;
            $scope.assesmentDate =new Date(data.assesmentDate);
            $scope.status=data.status;
            $scope.operation = 'Edit';
            $('#topic-title').text("Edit AssessmentCreator");
            $("#add_new_ASSCre_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.saveAssCre = function () {
             var saveDetails;
             saveDetails = {
                 acreatorId:$scope.acreatorId,
                 assesmentName:$scope.assesmentName,
                 assesmentType:$scope.assesmentType,
                 semesterId:angular.toJson($scope.semester),
                 termId:angular.toJson($scope.term),
                 levelId:angular.toJson($scope.level),
                 classId:angular.toJson($scope.class),
                 subjectId:angular.toJson( $scope.subject),
                 chapterId:angular.toJson($scope.chapter),
                 topicId:angular.toJson($scope.topic),
                 questionName: angular.toJson($scope.questionList),
                 assesmentDate:$scope.assesmentDate,
                 status:$scope.status

             };
             $http.post($scope.bshimServerURL + '/saveAssCre', angular.toJson(saveDetails)).then(function (response) {
                 var data = response.data;
                 if (data == "") {
                     Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                 }
                 else {
                     $scope.removeAssCre();
                     $scope.getAssesCreatorPaginationList();
                     $("#add_new_ASSCre_modal").modal('hide');
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

        $scope.getCreatorList = function () {
            $http.post($scope.bshimServerURL + '/getCreatorList').then(function (response) {
                var data = response.data;
                $scope.creatorList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getCreatorList();



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
            $http.post($scope.bshimServerURL + "/getAssessmentTypePagination?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.assessmentTypeList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                // $scope.removeCountryDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginationList();

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
            $scope.getAssesCreatorPaginationList();

        };
        $scope.getAssesCreatorPaginationList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getpaginatedAssesmentCreator?&searchText=" + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.creatorList = data.list;
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
        $scope.getAssesCreatorPaginationList();


        $scope.getMakrs = function (name) {
            $scope.topicsList={};
            $http.post($scope.bshimServerURL + "/getMakrs?name=" + name).then(function (response) {
                var data = response.data;
                $scope.ASSList = data;
                $scope.lastList=[];
                angular.forEach($scope.ASSList,function (val,key) {
                    var create={};
                    create.topic = val.topic;
                    create.maxMarks = val.maxMarks;
                    create.marks = val.marks;
                    create.remarks = val.remarks;
                    $scope.lastList.push(create);
                });
                angular.forEach($scope.studentsName,function (val,key) {
                    $scope.topicsList[val]=angular.copy($scope.lastList);
                })
            })
        }
        $scope.getStudentList = function (val) {
            val="";
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getStudentListBasedOnGrade?searchText='+val).then(function (response) {
                var data = response.data;
                $scope.studentList= data.object;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.getStudentList();

        $scope.deleteAssessmentCreator = function (data) {
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
                        $http.post($scope.bshimServerURL +"/deleteAssessmentCreator?id="+data).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getAssesCreatorPaginationList();
                            // $scope.getCreatorList();
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