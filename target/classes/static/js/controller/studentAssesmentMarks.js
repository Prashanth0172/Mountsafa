app.controller('samController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;

        $scope.inactiveStatus = "Active";
        $scope.removeStudentAss = function () {
            $scope.level="";
            $scope.classId="";
            $scope.subject = "";
            $scope.chapter = "";
            $scope.term = "";
            $scope.component = "";
            $scope.studentsName = "";
            $scope.lastList=[];

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


        $scope.chapTopic = function (name) {
            $http.post($scope.bshimServerURL + "/getchapTopic?chapTopic="+name).then(function (response) {
                var data = response.data;
                $scope.planList1=data;
            })
        };


        $scope.addStudentAss = function () {
            $scope.ASSList=[];
            $(".loader").css("display", "block");
            $('#topic-title').text("Student Wise Marks");
            $("#submit").text("Save");


            $("#add_new_Sam_modal").modal('show');
        };
        $scope.editSAM  = function(data) {
            $scope.term = parseInt(data.term);
            $scope.levelClass(data.level);
            $scope.level =parseInt(data.level);
            $scope.asId =parseInt(data.asId);
            $scope.classSubject(data.classId);
            $scope.classId =parseInt(data.classId);
            $scope.subjectChapter(data.subject);
            $scope.studentsName=[];
            $scope.studentsName = angular.fromJson(data.studentsName);
            angular.forEach($scope.studentList,function (val,key) {
                if($scope.studentsName.indexOf(val.studentName)!=-1){
                    val.value=true;
                }else {
                    val.value=false;
                }
            })
            $scope.subject =parseInt(data.subject);
            $scope.chapter = parseInt(data.chapter);
            $scope.component = parseInt(data.component);
            $scope.questionList = data.mapValue;
            $scope.assListDetails=[];
            $scope.ASSList=[];
            angular.forEach(angular.fromJson(data.asList),function (val,key) {
                var sb={};
                sb.question = val.question;
                sb.maxMarks=val.maxMarks;
                sb.marks=val.marks;
                sb.remarks=val.remarks;
                $scope.ASSList.push(sb);
            });
            $scope.operation = 'Edit';
            $('#topic-title').text("Edit StudentAssesment");
            $("#add_new_Sam_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
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
        $scope.saveStudentAss = function () {
            if (angular.isUndefined($scope.semesterId) || $scope.semesterId == '' || $scope.semesterId == null) {
                Notification.warning({message: ' Please Enter Semester', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.term) || $scope.term == '' || $scope.term == null) {
                Notification.warning({message: 'Please Enter Term', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.level) || $scope.level == '' || $scope.level == null) {
                Notification.warning({message: 'Please Enter Level', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.classId) || $scope.classId == '' || $scope.classId == null) {
                Notification.warning({message: 'Please Enter Class', positionX: 'center', delay: 2000});
            }

            else if (angular.isUndefined($scope.subject) || $scope.subject == '' || $scope.subject == null) {
                Notification.warning({message: 'Please Enter Subject', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.chapterId) || $scope.chapterId == '' || $scope.chapterId == null) {
                Notification.warning({message: 'Please Enter Chapter', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.topicId) || $scope.topicId == '' || $scope.topicId == null) {
                Notification.warning({message: 'Please Enter Topic', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.assesmentName) || $scope.assesmentName == '' || $scope.assesmentName == null) {
                Notification.warning({message: 'Please Enter Assessment', positionX: 'center', delay: 2000});
            }

            else if (angular.isUndefined($scope.studentsName) || $scope.studentsName == '' || $scope.studentsName == null) {
                Notification.warning({message: 'Please Enter Student Name', positionX: 'center', delay: 2000});
            }
            else {
                var saveDetails;
                saveDetails = {
                    samId: $scope.samId,
                    semester: $scope.semesterId,
                    topic: $scope.topicId,
                    assesment: $scope.assesmentName,
                    level: $scope.level,
                    classId: $scope.classId,
                    subject: $scope.subject,
                    chapter: $scope.chapterId,
                    term: $scope.term,
                    component: $scope.component,
                    studentsName: angular.toJson($scope.studentsName),
                    mapValue: $scope.questionList
                };
                $http.post($scope.bshimServerURL + '/saveStudentAss', angular.toJson(saveDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeStudentAss();
                        $scope.getStudentAssesmentList();
                        $("#add_new_Sam_modal").modal('hide');
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
        };
        // $scope.getCreatorList = function () {
        //     $http.post($scope.bshimServerURL + '/getCreatorList').then(function (response) {
        //         var data = response.data;
        //         $scope.creatorList = data;
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     });
        // };
        // $scope.getCreatorList();

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
        $scope.getStudentAssesmentList = function () {
            $http.post($scope.bshimServerURL + '/getStudentAssesmentList').then(function (response) {
                var data = response.data;
                $scope.studentAssList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getStudentAssesmentList();
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

        $scope.selectedStudents = [];
        $scope.pushSelectedStudents = function (name) {
            var index = $scope.selectedStudents.indexOf(name);
            if (parseInt(index) >= 0) {
                $scope.selectedStudents.splice(index, 1);
            }else {
                $scope.selectedStudents.push(name);
            }
            $scope.studentsName=$scope.selectedStudents;
            $scope.getMarks($scope.acreatorId);
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

        $scope.subjectChapter = function (subjectId) {
            var url = "/bs/getChapterSubject?subjectId=" + subjectId;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.chapterList = angular.copy(data);
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

        $scope.studentLevelClass = function (level,classId) {
            $http.post($scope.bshimServerURL + '/getStudentListOnLevelAndClass?level=' + level + '&classId=' +classId).then(function (response) {
                var data = response.data;
                $scope.studentList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.getstd = function () {
            $http.post($scope.bshimServerURL + "/getstdListBasedOnClassAndLevel?level=" + $scope.level + "&class=" + $scope.classId).then(function (response) {
                var data = response.data;
                $scope.studentList = data;
            });
        }


        $scope.getAssesmentList = function (semesterId,term,level,classId,subject,chapterId,topicId) {
            $http.post($scope.bshimServerURL + '/getAssesmentListBasedOnAll?semesterId=' + semesterId + '&term=' +term+'&level=' +level+'&classId=' +classId+'&subject=' +subject+'&chapterId=' +chapterId+'&topicId=' +topicId).then(function (response) {
                var data = response.data;
                $scope.creatorList = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.deleteSAM = function (data) {
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
                            samId:data.samId,
                            level:data.level,
                            classId:data.classId,
                            subject:data.subject,
                            chapter:data.chapter,
                            component:data.component,
                            studentsName:data.studentsName

                        };
                        $http.post($scope.bshimServerURL +"/deleteAS", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getStudentAssesmentList();
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


        $scope.getMarks = function (name) {
            $scope.questionList={};
            $http.post($scope.bshimServerURL + "/getMarksStudentAss?name=" + name).then(function (response) {
                var data = response.data;
                $scope.ASSList = data;
                $scope.lastList=[];
                angular.forEach($scope.ASSList,function (val,key) {
                    var create={};
                    create.question = val.question;
                    create.maxMarks = val.maxMarks;
                    create.marks = val.marks;
                    create.remarks = val.remarks;
                    $scope.lastList.push(create);
                });
                angular.forEach($scope.studentsName,function (val,key) {
                    $scope.questionList[val]=angular.copy($scope.lastList);
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

    });