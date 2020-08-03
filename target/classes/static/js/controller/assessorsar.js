app.controller('assessorsarCntrl',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.dateJoined= new Date();
        $scope.dateConfirmed= new Date();
        $scope.interview= new Date();

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
        $scope.next_wizardEdit = function () {
            if ($scope.staffName === '' || $scope.staffName == null || angular.isUndefined($scope.staffName)) {
                Notification.error({message: 'Employee Name Can Not be Empty ', positionX: 'center', delay: 2000});
            }

            else {
                $("#sub_step12").removeClass("in active");
                $("#sub_step22").addClass("in active");
                $("#next").hide();
                $("#next1").show();
                $("#back1").show();
            }
        }
        $scope.next_wizardEdit1 = function () {
            $("#sub_step22").removeClass("in active");
            $("#sub_step23").addClass("in active");
            $("#next1").hide();
            $("#next2").show();
            $("#back1").show();

        }
        $scope.next_wizardEdit2 = function () {
            $("#sub_step23").removeClass("in active");
            $("#sub_step24").addClass("in active");
            $("#next2").hide();
            $("#next3").show();
            $("#back1").show();

        }
        $scope.next_wizardEdit3 = function () {
            $("#sub_step24").removeClass("in active");
            $("#sub_step25").addClass("in active");
            $("#next3").hide();
            $("#next4").show();
            $("#back1").show();

        }

        $scope.next_wizardEdit4 = function () {
            $("#sub_step25").removeClass("in active");
            $("#sub_step26").addClass("in active");
            $("#next4").hide();
            $("#next5").show();
            $("#back1").show();

        }
        $scope.next_wizardEdit5 = function () {
            $("#sub_step26").removeClass("in active");
            $("#sub_step27").addClass("in active");
            $("#sub_step28").addClass("in active");
            $("#sub_step29").addClass("in active");
            $("#next5").hide();
            $("#next6").show();
            $("#back1").show();

        }
        $scope.next_wizardEdit6 = function () {
            $("#sub_step27").removeClass("in active");
            $("#sub_step28").removeClass("in active");
            $("#sub_step29").removeClass("in active");
            $("#sub_step30").addClass("in active");
            $("#next6").hide();
            $("#saveId").show();
            $("#back1").show();

        }

        $scope.back_wizardEdit = function () {
            $("#sub_step22").removeClass("in active");
            $("#sub_step23").removeClass("in active");
            $("#sub_step24").removeClass("in active");
            $("#sub_step25").removeClass("in active");
            $("#sub_step26").removeClass("in active");
            $("#sub_step27").removeClass("in active");
            $("#sub_step28").removeClass("in active");
            $("#sub_step29").removeClass("in active");
            $("#sub_step30").removeClass("in active");
            $("#sub_step12").addClass("in active");
            $("#next").show();
            $("#back1").hide();

            $("#next1").hide();
            $("#next2").hide();
            $("#next3").hide();
            $("#next4").hide();
            $("#next5").hide();
            $("#next6").hide();
            $("#saveId").hide();


        }
        $scope.addNewAdmission = function () {
            $('#admission-title').text("Add Admission");
            $scope.StatusText = "Active";
            $scope.staffage = "0";
            $("#submit").text("Save");
            $("#add_new_hr_modal").modal('show');
        };

        $scope.getAssessorByName=function(type) {
            $http.post('/bs'  + "/getDetailsByName?name=" + type).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.staffName =data.employeeName ;
                $scope.EmpAddress=data.addressLine1;
                $scope.staffDesig=data.empDesignation;
                $scope.staffDepar=data.empDepartment;
                $scope.staffage = data.empAge;
                $scope.dateJoined = new Date(data.empDoj);
            });
        };

        $scope.editAssessor = function (data) {
            $scope.assrId = data.assId,
                $scope.staffName =data.staffName ,
                $scope.staffDesig = data.staffDesig,
                $scope.staffDepar = data.staffDepar,
                $scope.dateJoined = new Date(data.dateJoined) ,
                $scope.dateConfirmed = new Date(data.dateConfirmed),
                $scope.staffsupervisory = data.staffsupervisory,
                $scope.principal = data.principal,
                $scope.staffage = data.staffage,
                $scope.jobgrade = data.jobgrade,
                $scope.medleavetaken = data.medleavetaken,
                $scope.emergencyTaken = data.emergencyTaken,
                $scope.PerUndReveiw =data.PerUndReveiw ,
                $scope.currentPost =data.currentPost ,
                $scope.type =data.type ,
                $scope.koj = data.koj,
                $scope.qof = data.qof,
                $scope.initiative =data.initiative,
                $scope.neatness=data.neatness;
                $scope.cusf=data.cusf;
                $scope.responsibility=data.responsibility;
                $scope.dd=data.dd;
                $scope.aoi=data.aoi;
                $scope.paa=data.paa;
                $scope.sss=data.sss;
                $scope.pts=data.pts;
                $scope.hrs=data.hrs;
                $scope.adapt=data.adapt;
                $scope.eow=data.eow;
                $scope.commit=data.commit;
                $scope.comm=data.comm;
                $scope.asserts=data.asserts;
                $scope.psl=data.psl;
                $scope.sos=data.sos;
                $scope.leader=data.leader;
                $scope.tbg=data.tbg;
                $scope.deleg=data.deleg;
                $scope.dss=data.dss;
                $scope.plan=data.plan;
                $scope.org=data.org;
                $scope.strength=data.strength;
                $scope.enhancement=data.enhancement;
                $scope.weakness=data.weakness;
                $scope.programme=data.programme;
                $scope.proposed=data.proposed;
                $scope.encountered=data.encountered;
                $scope.efficient=data.efficient;
                $scope.agreement=data.agreement;
                $scope.reaction=data.reaction;
                $scope.signature=data.signature;
                $scope.ename=data.ename;
                $scope.interview=new Date(data.interview);
                $scope.courseList=data.courseList;
            $('#admission-title').text("Edit Assessor");
            $("#submit").text("Update");
            $("#add_new_hr_modal").modal('show');

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


        $scope.getAssessorList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }
            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getAssessorList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.assessorList= data;
                $scope.searchText = val;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getAssessorList();

        $scope.saveAsssssor = function () {
            // if (angular.isUndefined($scope.staffName) || $scope.staffName == ''|| $scope.staffName==null) {
            //     Notification.warning({message: 'Teacher name can not be Empty', positionX: 'center', delay: 2000});
            //     $scope.isDisabled= false;
            //
            // }
            // // else if (angular.isUndefined($scope.subjectId) || $scope.subjectId == ''|| $scope.subjectId==null) {
            // //     Notification.warning({message: 'Subject Cannot be Empty', positionX: 'center', delay: 2000});
            // //     $scope.isDisabled= false;
            // // }
            // else {
                var saveSarDetails;
                saveSarDetails = {
                    assId: $scope.assId,
                    staffName: $scope.staffName,
                    staffDesig: $scope.staffDesig,
                    staffDepar: $scope.staffDepar,
                    dateJoined: $scope.dateJoined,
                    dateConfirmed: $scope.dateConfirmed,
                    staffsupervisory: $scope.staffsupervisory,
                    principal: $scope.principal,
                    staffage: $scope.staffage,
                    jobgrade: $scope.jobgrade,
                    medleavetaken: $scope.medleavetaken,
                    emergencyTaken: $scope.emergencyTaken,
                    PerUndReveiw: $scope.PerUndReveiw,
                    currentPost: $scope.currentPost,
                    hrHPNo: $scope.hrHPNo,
                    koj: $scope.koj,
                    qof: $scope.qof,
                    initiative: $scope.initiative,
                    neatness: $scope.neatness,
                    cusf: $scope.cusf,
                    responsibility: $scope.responsibility,
                    dd: $scope.dd,
                    aoi: $scope.aoi,
                    paa: $scope.paa,
                    sss: $scope.sss,
                    pts: $scope.pts,
                    hrs: $scope.hrs,
                    adapt: $scope.adapt,
                    eow: $scope.eow,
                    commit: $scope.commit,
                    comm: $scope.comm,
                    asserts: $scope.asserts,
                    psl: $scope.psl,
                    sos: $scope.sos,
                    leader: $scope.leader,
                    tbg: $scope.tbg,
                    deleg: $scope.deleg,
                    dss: $scope.dss,
                    plan: $scope.plan,
                    strength: $scope.strength,
                    enhancement: $scope.enhancement,
                    weakness: $scope.weakness,
                    programme: $scope.programme,
                    proposed: $scope.proposed,
                    encountered: $scope.encountered,
                    efficient: $scope.efficient,
                    agreement: $scope.agreement,
                    reaction: $scope.reaction,
                    signature: $scope.signature,
                    ename: $scope.ename,
                    interview: $scope.interview,
                    courseList: angular.toJson($scope.coursedetails)

                };
                $http.post($scope.bshimServerURL + '/saveAssessorDetails', angular.toJson(saveSarDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getAssessorList();
                        $scope.removeAsserDetails();
                        $("#add_new_hr_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.countrySearchText = "";
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
            // }
        };


        $scope.coursedetails = [];
        $scope.addNewformDetails = function(){
            if($scope.coursedetails==""){
                $scope.coursedetails = [];
            }
            $scope.coursedetails.push({
                attended:'',
                place:'',
                period:'',
            });
        };

        $scope.remove=function(){
            $scope.coursedetails.pop();
        };
        $scope.removeAsserDetails = function () {
            $scope.assrId = "";
            $scope.staffName = "";
            $scope.staffDesig = "";
            $scope.staffDepar = "";
            $scope.dateJoined = "";
            $scope.dateConfirmed = "";
            $scope.staffsupervisory = "";
            $scope.principal = "";
            $scope.staffage = "";
            $scope.jobgrade = "";
            $scope.medleavetaken = "";
            $scope.emergencyTaken = "";
            $scope.PerUndReveiw = "";
            $scope.currentPost = "";
            $scope.type = "";
            $scope.koj = "";
            $scope.qof = "";
            $scope.initiative = "";
            $scope.neatness = "";
            $scope.cusf = "";
            $scope.responsibility = "";
            $scope.dd = "";
            $scope.aoi = "";
            $scope.paa = "";
            $scope.sss = "";
            $scope.pts="";
            $scope.hrs = "";
            $scope.adapt = "";
            $scope.eow = "";
            $scope.commit = "";
            $scope.comm = "";
            $scope.asserts = "";
            $scope.psl = "";
            $scope.sos = "";
            $scope.leader = "";
            $scope.tbg = "";
            $scope.deleg = "";
            $scope.dss = "";
            $scope.plan = "";
            $scope.org = "";
            $scope.strength = "";
            $scope.enhancement = "";
            $scope.weakness = "";
            $scope.programme = "";
            $scope.proposed = "";
            $scope.encountered = "";
            $scope.efficient = "";
            $scope.agreement = "";
            $scope.reaction = "";
            $scope.signature = "";
            $scope.ename = "";
            $scope.interview = "";
        };

        $scope.back_wizardEdit1 = function () {
            $("#sub_step22").removeClass("in active");
            $("#sub_step23").removeClass("in active");
            $("#sub_step24").removeClass("in active");
            $("#sub_step25").removeClass("in active");
            $("#sub_step26").removeClass("in active");
            $("#sub_step27").removeClass("in active");
            $("#sub_step28").removeClass("in active");
            $("#sub_step29").removeClass("in active");
            $("#sub_step30").removeClass("in active");
            $("#sub_step12").addClass("in active");
            $("#next").show();
            $("#back").hide();

        };


    }
);