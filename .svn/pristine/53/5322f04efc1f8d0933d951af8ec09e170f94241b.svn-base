app.controller('timeController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.removeTT = function () {
            $scope.level = null;
            $scope.className = "";
            $scope.subject = null;
            $scope.chooseDay = "";
            $scope.period = "";
            $scope.teacher = "";
            $scope.facility = "";
            $scope.operation = "";
        };

        $scope.addTimetable = function () {
            $('#topic-title').text("Add Timetable");
            $scope.addNewTimetable();
            $("#submit").text("Save");
            $("#add_new_tt_modal").modal('show');
        };
        $scope.previoustopicDetails=[];
        $scope.addNewTimetable = function(){
            if($scope.previoustopicDetails==""){
                $scope.previoustopicDetails = [];
            }
            $scope.previoustopicDetails.push({
                subject:null,
                chooseDay:'',
                period:null,
                teacher:null,
                facility:null

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
        $scope.classes = function(level){
            var url = "/bs/getClassLevel?levelId=" + level;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.classesList = angular.copy(data);

            })
        }
        $scope.addClassTable = function () {
            $(".loader").css("display", "block");
            $('#class-title').text("Class Timetable");
            $("#submit").text("Save");


            $("#add_class_table_modal").modal('show');
        };
        $scope.GenerateReport = function (LevelName,classId) {
            if (angular.isUndefined($scope.LevelName)) {
                Notification.warning({message: 'Select Levelname', positionX: 'center', delay: 2000});

            }
            else if (angular.isUndefined($scope.classId)) {
                Notification.warning({message: 'Select Class', positionX: 'center', delay: 2000});
            }
            else {
                $http.post($scope.bshimServerURL + "/generateReport?LevelName=" + LevelName + '&classId=' + classId).then(function (response) {
                    var data = response.data;
                    $scope.reportList = data;

                var periodlist=data.periodsList;

                    var datalist = data.list;
                    var weekdays = [];
                    weekdays.push("Sunday");
                    weekdays.push("Monday");
                    weekdays.push("Tuesday");
                    weekdays.push("Wednesday");
                    weekdays.push("Thursday");
                    weekdays.push("Friday");
                    weekdays.push("Saturday");
                    var html = '<table style="height: 18px;" width="1095">' +
                        '<tbody>' +
                        // '<tr>' +
                        // '<td colspan="18" align="center" valign="middle" height="27"><span style="font-size: medium; color: #337ab7;"><b>Adni Islamic School</b></span></td>' +
                        // '</tr>' +
                        '<tr>' +
                        '<td colspan="18" align="center" valign="middle" height="27"><span style="font-family: serif;color: #337ab7;font-size: medium;">' + data.level + '</span></td>' +
                        '</tr>' +
                        '<tr>' +
                        '<td colspan="18" align="left" valign="middle" height="27" style="font-family: serif;color: #337ab7;"><strong><span style="font-size: medium;">' + data.className + '</span></strong></td>' +
                        '</tr>' +
                        '</tbody>' +
                        '</table>';
                    html += '<table>';
                    html += '<tbody><tr><td rowspan="2" align="center" valign="middle" height="54" style="font-family: serif;font-size: 14px;color: #007cba;"><b>Day/ Time</b></td>';
                    for (var h = 0; h < periodlist.length; h++) {

                        html+='<td rowspan="2" align="center" valign="middle" style="transform: rotate(332deg);font-size: 11px;color: #007cba;">'+periodlist[h]["periodFrom"]+'-'+periodlist[h]["periodTo"]+'</td>';


                }
                html+='</tr></tbody>';

                for(var i=0; i<weekdays.length;i++){
                    html+='<tbody><tr><td rowspan="2" align="center" valign="middle" height="54" style="font-family: serif;font-size: 14px;color: #007cba;">'+weekdays[i]+'</td>';

                    for(var j=0;j<periodlist.length;j++){
                         if(datalist[i]!=undefined && datalist[i]!='' && datalist[i]['periodFrom']==periodlist[j]['periodFrom'] && datalist[i]['periodTo']==periodlist[j]['periodTo']){
                             html+='<td rowspan="2" align="center" valign="middle">'+datalist[i]['subName']+'<br>'+datalist[i]['teacherName']+'</td>';
                         }else{
                             html+='<td rowspan="2" align="center" valign="middle">&nbsp;</td>';
                         }


                    }

                    html+='</tr></tbody>';
                }

                html+='</table>';

$("#reportbody").html(html);


                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                })
                $(".loader").css("display", "block");
                $("#submit").text("Save");
                $("#generate_report").modal('show');
            }
        };
        $scope.addTeacherTable = function () {
            $(".loader").css("display", "block");
            $('#tchr-title').text("Teacher Timetable");
            $("#submit").text("Save");


            $("#add_teacher_table_modal").modal('show');
        };
        $scope.generateTeacherReport = function (teacherName) {
            if (angular.isUndefined(teacherName)) {
                Notification.warning({message: 'Select Teacher', positionX: 'center', delay: 2000});
            }
            else {
                $http.post($scope.bshimServerURL + "/generateTeacherReport?teacherName=" + teacherName).then(function (response) {
                    var data = response.data;
                    $scope.teacherList = data;
                    var periodlist = data.periodsList;
                    var datalist = data.list;
                    var weekdays = [];
                    weekdays.push("Sunday");
                    weekdays.push("Monday");
                    weekdays.push("Tuesday");
                    weekdays.push("Wednesday");
                    weekdays.push("Thursday");
                    weekdays.push("Friday");
                    weekdays.push("Saturday");
                    var html = '<table style="height: 18px;" width="1095">' +
                        '<tbody>' +
                        // '<tr>' +
                        // '<td colspan="18" align="center" valign="middle" height="27"><span style="font-size: medium; color: #337ab7;"><b>Adni Islamic School</b></span></td>' +
                        // '</tr>' +
                        '</tbody>' +
                        '</table>';
                    html += '<table>';
                    html += '<tbody><tr><td rowspan="2" align="center" valign="middle" height="54" style="font-family: serif;font-size: 14px;color: #007cba;"><b>Day/ Time</b></td>';
                    for (var h = 0; h < periodlist.length; h++) {

                    html+='<td rowspan="2" align="center" valign="middle" style="transform: rotate(332deg);font-size: 11px;color: #007cba;">'+periodlist[h]["periodFrom"]+'-'+periodlist[h]["periodTo"]+'</td>';


                }
                html+='</tr></tbody>';

                for(var i=0; i<datalist.length;i++){
                    html+='<tbody><tr><td rowspan="2" align="center" valign="middle" height="54" style="font-family: serif;font-size: 14px;color: #007cba;">'+datalist[i]["chooseDay"]+'</td>';

                    for(var j=0;j<periodlist.length;j++){
                        if(datalist[i]!=undefined && datalist[i]!='' && datalist[i]['periodFrom']==periodlist[j]['periodFrom'] && datalist[i]['periodTo']==periodlist[j]['periodTo']){
                            html+='<td rowspan="2" align="center" valign="middle">'+datalist[i]['subName']+'<br>'+datalist[i]['teacherName']+'</td>';
                        }else{
                            html+='<td rowspan="2" align="center" valign="middle">&nbsp;</td>';
                        }


                    }

                    html+='</tr></tbody>';
                }

                html+='</table>';

                $("#reportteacherbody").html(html);


                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                })
                $(".loader").css("display", "block");
                $("#submit").text("Save");
                $("#generate_teacher_report").modal('show');
            }
        };
        $scope.addMasterTable = function () {
            $(".loader").css("display", "block");
            $('#master-title').text("Master Timetable");
            $("#submit").text("Save");


            $("#add_master_table_modal").modal('show');
        };
        $scope.generateMasterReport = function (weekday) {
            if (angular.isUndefined(weekday)) {
                Notification.warning({message: 'Select Weekday', positionX: 'center', delay: 2000});
            }
            else {
                $http.post($scope.bshimServerURL + "/generateMasterReport?weekday=" + weekday).then(function (response) {
                    var data = response.data;

                    var day=$("#weekday").val();


                    var weekdays = [];
                    weekdays.push("Sunday");
                    weekdays.push("Monday");
                    weekdays.push("Tuesday");
                    weekdays.push("Wednesday");
                    weekdays.push("Thursday");
                    weekdays.push("Friday");
                    weekdays.push("Saturday");
                    var html = '<table><tr><th>'+day+'</th></tr></table>';


                for(var i=0; i<data.length;i++){
                    html+='<table><tbody><tr><td rowspan="2" align="center" valign="middle" height="54" style="font-family: serif;font-size: 14px;color: #007cba;">'+data[i]['Class']+'</td>';

                    var periodlist=data[i]['List'];
                    for(var j=0;j<periodlist.length;j++){

                            html+='<td rowspan="2" align="center" valign="middle">'+periodlist[j]["periodFrom"]+'-'+periodlist[j]["periodTo"]+'<br>'+periodlist[j]["teacherName"]+'</td>';



                    }

                    html+='</tr></tbody></table>';
                }



                $("#reportmasterbody").html(html);


                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                })
                $(".loader").css("display", "block");
                $("#submit").text("Save");
                $("#generate_master_report").modal('show');
            }
        };
        $scope.getTimetable = function () {
            var url = "/bs/getTimetable";
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.tableList = data;
            })
        }
        $scope.getTimetable();
        $scope.removecross = function(data){
            $scope.index=data;
            $scope.previoustopicDetails.splice($scope.index,1);
        };

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
        $scope.levelClass = function(gradeId){
            if(gradeId==undefined){
                gradeId=null;
            }
            if(gradeId!=null){
                var url = "/bs/getClassLevel?levelId=" + gradeId;
                $http.post(url).then(function (response) {
                    var data = response.data;
                    $scope.classList = angular.copy(data);
                })
            }
        }
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
        $scope.getPeriodList = function () {
            $http.post($scope.bshimServerURL + '/getPeriodList').then(function (response) {
                var data = response.data;
                $scope.list = data;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getPeriodList();
        $scope.getFacilityDetails = function () {
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getFacilityDetails').then(function (response) {
                var data = response.data;
                $scope.facilityList= data;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getFacilityDetails();

        $scope.editTimetable = function (data) {
            $scope.isDisabled= false;
            $scope.previoustopicDetails =[];
            $scope.previoustopicDetails.push({
                    subject:parseInt(data.subject),
                chooseDay:data.chooseDay,
                period:parseInt(data.period),
                teacher: parseInt(data.teacher),
                facility:parseInt(data.facility)

            });
            $scope.ttId = data.ttId;
            $scope.level = parseInt(data.level);
            $scope.className = parseInt(data.className);
            $scope.operation = 'Edit';
            $scope.isDisabled= true;
            $('#modelName').text("Edit TimeTable");
            $("#add_new_tt_modal").modal('show');
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
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getGradeList();
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
        $scope.saveTimeTable = function () {
                $scope.isDisabled = true;
                var saveTimeTable;
            saveTimeTable = {
                ttId: $scope.ttId,
                level: $scope.level,
                className: $scope.className,
                ttList: angular.toJson($scope.previoustopicDetails)

                };
                $http.post($scope.bshimServerURL + '/saveTimeTable', angular.toJson(saveTimeTable)).then(function (response) {
                    var data = response.data;
                    if (data === "") {
                        Notification.error({
                            message: 'TimeTable  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_tt_modal").modal('hide');
                        $scope.isDisabled= false;
                       $scope. getTimetable();
                        $scope.removeTT();
                        Notification.success({
                            message: 'TimeTable  Created  successfully',
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

            ;
        }
        $scope.deleteTT = function (data) {
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
                            ttId:data.ttId,
                            level:data.level,
                            className:data.className,
                            subject:data.subject,
                            chooseDay:data.chooseDay,
                            period:data.period,
                            teacher:data.teacher,
                            facility:data.facility

                        };
                        $http.post($scope.bshimServerURL +"/deleteTT", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getTimetable();
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