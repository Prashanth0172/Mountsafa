app.controller('hrController',
    function ($scope, $timeout, $http, $location, $filter, Notification,$window,$rootScope) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.inactiveStatus = "Active";

        $scope.companyLogoPath = "";
        $scope.moreid = "";

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
        $scope.open10 = function () {
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
        $scope.open9 = function () {
            $scope.popup9.opened = true;
        };

        $scope.popup9 = {
            opened: false
        };

        $scope.open5 = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.openedFrom = true;
        };
        $scope.open6 = function ($event, dt) {
            $event.preventDefault();
            $event.stopPropagation();
            dt.openedTo = true;
        };
        $scope.next_wizardEdit = function (flag) {
            if (flag != 'edit') {
                if ($scope.positionText === '' || $scope.positionText == null || angular.isUndefined($scope.positionText)) {
                    Notification.error({message: 'Enter Position Applied ', positionX: 'center', delay: 2000});
                } else if ($scope.hrFullName === '' || $scope.hrFullName == null || angular.isUndefined($scope.hrFullName)) {
                    Notification.error({message: 'Enter Full Name', positionX: 'center', delay: 2000});
                } else if ($scope.StatusText === '' || $scope.StatusText == null || angular.isUndefined($scope.StatusText)) {
                    Notification.error({message: 'Please Status', positionX: 'center', delay: 2000});
                }
                else {
                    $("#sub_step12").removeClass("in active");
                    $("#sub_step22").addClass("in active");
                    $("#next").hide();
                    $("#next1").show();
                    $("#back1").show();
                }

        }}
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
            $("#back1").show();
            $("#saveId").show();


        }
        $scope.back_wizardEdit = function () {
            $("#sub_step22").removeClass("in active");
            $("#sub_step23").removeClass("in active");
            $("#sub_step24").removeClass("in active");
            $("#sub_step25").removeClass("in active");
            $("#sub_step12").addClass("in active");
            $("#next").show();
            $("#back1").hide();

            $("#next1").hide();
            $("#next2").hide();
            $("#next3").hide();



            
            $("#saveId").hide();


        }

        $scope.editAdmission = function (data) {
            // $scope.next_wizardEdit('edit');
            $scope.setAllDetails(data);
            $scope.academicQualiList = angular.fromJson(data.academicQuali);

            $scope.formDetails = [];
            angular.forEach($scope.academicQualiList,function (datas) {
                $scope.formDetails.push({
                    academicQualiTo :new Date(datas.academicQualiTo),
                    academicQualiFrom :new Date(datas.academicQualiFrom),
                    academicQualiNo :datas.academicQualiNo,
                    academicQualiSchool :datas.academicQualiSchool,
                    academicQualiLevel :datas.academicQualiLevel,
                    academicQualiGrade :datas.academicQualiGrade,


                })
            })
            $scope.academicQualiList = $scope.formDetails;
            $scope.arSpeaking =data.arabicSpeaking,
                $scope.arWriting =data.arabicSpeaking,
                $scope.arReading =data.arabicReading,
                $scope.engSpeaking =data.engSpeaking,
                $scope.engWriting =data.engWriting,
                $scope.engReading =data.engReading,
                $scope.malSpeaking =data.malSpeaking,
                $scope.malWriting =data.malWriting,
                $scope.malReading =data.malReading,
                $scope.operation = 'Edit';
            $scope.back_wizardEdit();
            $('#hr-title').text("Edit Application Form");
            $("#add_new_hr_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };

        $scope.addNewAdmission = function () {
            $('#admission-title').text("Add Admission");
            $scope.StatusText = "";
            $scope.removeHrDetails();
            $scope.back_wizardEdit();
            $scope.hrage = "0";
            $scope.spouseage = "0";
            $("#submit").text("Save");
            $("#add_new_hr_modal").modal('show');
        };
        $scope.academicQualiList = [];
        $scope.AddNewAcademicQuali = function(){
            if($scope.academicQualiList==""){
                $scope.academicQualiList = [];
            }
            $scope.academicQualiList.push({
                academicQualiNo:'',
                academicQualiSchool:'',
                academicQualiFrom: new Date(),
                academicQualiLevel:'',
                academicQualiGrade:'',
                academicQualiTo: new Date(),

            });
        };
        $scope.feildOfSpecList = [];
        $scope.AddNewfeildOfSpec = function(){
            if($scope.feildOfSpecList==""){
                $scope.feildOfSpecList = [];
            }
            $scope.feildOfSpecList.push({
                feildOfSpecThesis:'',
                feildOfSpecDetail:'',
                feildOfSpecDegree:'',
                feildOfSpecNo:'',
            });
        };
        $scope.feildOfSpecList = [];
        $scope.AddNewfeildOfSpec = function(){
            if($scope.feildOfSpecList==""){
                $scope.feildOfSpecList = [];
            }
            $scope.feildOfSpecList.push({
                feildOfSpecThesis:'',
                feildOfSpecDetail:'',
                feildOfSpecDegree:'',
                feildOfSpecNo:'',
            });
        };
        $scope.workExperiencedetailsList = [];
        $scope.AddNewWorkExper = function(){
            if($scope.workExperiencedetailsList==""){
                $scope.workExperiencedetailsList = [];
            }
            $scope.workExperiencedetailsList.push({
                workExpFrom:'',
                workExpTo:'',
                workExpCompany:'',
                workExpPosition:'',
                workExpSal:'',
            });
        };
        $scope.referenceDetailsList = [];
        $scope.AddNewReference = function(){
            if($scope.referenceDetailsList==""){
                $scope.referenceDetailsList = [];
            }
            $scope.referenceDetailsList.push({
                referName:'',
                referCompany:'',
                referPosition:'',
                referAddress:'',
                refertelNo:'',
                referRelation:'',
            });
        };
        $scope.getCountryList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getCountryList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.countryList= data;
                $scope.searchText = val;
                $scope.country=[];
                angular.forEach( $scope.countryList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.country.push(val) ;
                    }

                })

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };

        $scope.getCountryList();
        $scope.countryState = function(country){
            var url = "/bs/getCountryState?countryId=" + country;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.stateList = angular.copy(data);
                $scope.state=[];
                angular.forEach( $scope.stateList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.state.push(val) ;
                    }

                })
            })
        }
        $scope.stateCity = function(state){
            var url = "/bs/getStateCity?stateId=" + state;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.cityList = angular.copy(data);
                $scope.city=[];
                angular.forEach( $scope.cityList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.city.push(val) ;
                    }

                })
            })
        }

        $scope.getHrList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getHrApplicList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.hrlist= data;
                $scope.searchText = val;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getHrList();

        $scope.calculateAge = function () {
            var ageDif = Date.now() - $scope.dOBText.getTime();
            var ageDate = new Date(ageDif); // miliseconds from epoch
            $scope.hrage= Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        $scope.calculateAge1 = function () {
            var ageDif = Date.now() - $scope.spouseDOBText.getTime();
            var ageDate = new Date(ageDif); // miliseconds from epoch
            $scope.spouseage= Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        $scope.peDateAppoint=new Date();
        $scope.savehrApplication = function () {
            var saveHrDetails;
            saveHrDetails = {
                hrId: $scope.hrId,
                hrFullName: $scope.hrFullName,
                dOBText: $scope.dOBText,
                passportNew: $scope.passportNew,
                passportOld:$scope.passportOld,
                hrNationality: $scope.hrNationality,
                hrSex: $scope.hrSex,
                hrAddress1: $scope.hrAddress1,
                hrAddress2: $scope.hrAddress2,
                country: $scope.countryId,
                state: $scope.stateId,
                city: $scope.cityId,
                postCode: $scope.postCode,
                status: $scope.StatusText,
                hrphoneNo: $scope.hrphoneNo,
                hPNo: $scope.hPNo,
                hrEmailAddress: $scope.hrEmailAddress,
                hrage: $scope.hrage,
                hrplaceOfBirth: $scope.hrplaceOfBirth,
                hrmaritalstatus: $scope.hrmaritalstatus,
                hrHPNo: $scope.hrHPNo,
                spouseFullName: $scope.spouseFullName,
                spousepassportNew: $scope.spousepassportNew,
                spousepassportOld: $scope.spousepassportOld,
                spouseDOBText: $scope.spouseDOBText,
                spouseNationality: $scope.spouseNationality,
                spouseage: $scope.spouseage,
                spouseplaceOfBirth: $scope.spouseplaceOfBirth,
                spouseAddress: $scope.spouseAddress,
                spousephoneNo: $scope.spousephoneNo,
                spouseHPNo: $scope.spouseHPNo,
                academicQuali: angular.toJson($scope.academicQualiList),
                feildOfSpec: angular.toJson($scope.feildOfSpecList),
                pecomsch: $scope.pecomsch,
                pedesignation: $scope.pedesignation,
                peDateAppoint: $scope.peDateAppoint,
                preEmpAddress: $scope.preEmpAddress,
                preEmpTelNo: $scope.preEmpTelNo,
                preEmpSal: $scope.preEmpSal,
                preEmpavail: $scope.preEmpavail,
                positionText: $scope.positionText,
                identityCard: $scope.fileToUpload,
                hrResume: $scope.fileToUpload1,
                relevantcert: $scope.fileToUpload2,
                photocopy: $scope.fileToUpload3,
                tertiaryeducerts: $scope.fileToUpload4,

                otherdocs: $scope.fileToUpload5,
                workExperiencedetailsList: angular.toJson($scope.workExperiencedetailsList),
                reasonForLeaving: $scope.reasonForLeaving,
                longServeMSI: $scope.longServeMSI,
                furtherStudies: $scope.furtherStudies,
                expecedSalary: $scope.expecedSalary,
                personalObservation: $scope.personalObservation,
                contrtrowIslamic: $scope.contrtrowIslamic,
                usPrinAndConcept: $scope.usPrinAndConcept,
                rolePlayMSI: $scope.rolePlayMSI,
                booksWritingIslamic: $scope.booksWritingIslamic,
                medicalHistory: $scope.medicalHistory,
                medicaldisabilities: $scope.medicaldisabilities,
                age:$scope.age,
                arabicSpeaking:$scope.arSpeaking,
                arabicWriting:$scope.arWriting,
                arabicReading:$scope.arReading,
                engSpeaking:$scope.engSpeaking,
                engWriting:$scope.engWriting,
                engReading:$scope.engReading,
                malSpeaking:$scope.malSpeaking,
                malWriting:$scope.malWriting,
                malReading:$scope.malReading,
                applicationDate:new Date($scope.applicationDate),
                referenceDetailsList: angular.toJson($scope.referenceDetailsList),
                declarationDate:$scope.declarationDate,
                declarationSignature:$scope.declarationSignature,
                spouseOccipation:$scope.spouseOccipation

            };
            $http.post($scope.bshimServerURL + '/saveHrApplication', angular.toJson(saveHrDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    $scope.getHrList();
                    $scope.removeHrDetails();
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
        };
        $scope.removeIterviewschedDetails = function () {
            $scope.interviewSchedNotes="";
            $scope.interviewerSchedStatus="";
        }
        $scope.removeIterviewDetails = function () {
            $scope.interviewerText="";
            $scope.interviewDate=new Date();
            $scope.interviewNotes="";
        }
        $scope.removeKivDetails = function () {
            $scope.interviewerText="";
            $scope.interviewDate=new Date();
            $scope.interviewNotes="";
        }
        $scope.saveKivDetails = function () {
            var saveKivDetails;
            saveKivDetails = {
                hrId: $scope.kivid,
                kivremarks:$scope.kivremarks
            };
            $http.post($scope.bshimServerURL + '/saveKIVDetails', angular.toJson(saveKivDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    $scope.removeKivDetails();
                    $("#add_new_KIV_modal").modal('hide');
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
        };
        $scope.savesecondInterviewDetails = function () {
            var saveDetails;
            saveDetails = {
                hrId: $scope.secondInterviewid,
                notes:$scope.notes,
                secondInteviewStatus:$scope.secondInteviewStatus,
                reportingDate:$scope.reportDate,
                salaryoffered:$scope.interviewerSalary
            };
            $http.post($scope.bshimServerURL + '/savesecondInterviewDetails', angular.toJson(saveDetails, "Create")).then(function (response, status, headers, config) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    $scope.getHrList();
                    $scope.employeeDetails=data;
                    $scope.removeIterviewDetails();
                    $scope.getEmployeeList();
                    $("#add_second_new_Interview_modal").modal('hide');
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
        $scope.saveInterviewDetails = function () {
            if($scope.interviewtime==null||$scope.interviewtime==undefined){
                Notification.error({message: 'Enter Interview Time', positionX: 'center', delay: 2000});
            }else {
                var saveKivDetails;
                saveKivDetails = {
                    hrId: $scope.Interviewid,
                    interviewtime:$scope.interviewtime,
                    interviewerText:$scope.interviewerText,
                    interviewDate:$scope.interviewDate,
                    interviewNotes:$scope.interviewNotes

                };
                $http.post($scope.bshimServerURL + '/saveInterviewDetails', angular.toJson(saveKivDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.getHrList();
                        $scope.removeIterviewDetails();
                        $scope.getEmployeeList();
                        $("#add_new_Interview_modal").modal('hide');
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
            }
        };$scope.saveInterviewscheDetails = function () {
            if ($scope.interviewerSchedStatus === '' || $scope.interviewerSchedStatus == null || angular.isUndefined($scope.interviewerSchedStatus)) {
                Notification.error({message: 'Please Select Status ', positionX: 'center', delay: 2000});
            }
            else {

                var saveKivDetails;
                saveKivDetails = {
                    hrId: $scope.Interviewid,
                    interviewSchedNotes: $scope.interviewSchedNotes,
                    interviewerSchedStatus: $scope.interviewerSchedStatus,
                    reportingDate:$scope.reportDate,
                    salaryoffered:$scope.interviewerSalary


                };
                $http.post($scope.bshimServerURL + '/saveInterviewSchedDetails', angular.toJson(saveKivDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.employeeDetails=data;
                        $scope.getHrList();
                        $scope.removeIterviewschedDetails();
                        $scope.getEmployeeList();
                        $("#add_new_InterviewSchuduled_modal").modal('hide');
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
            }
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
        $scope.removeHrDetails = function () {
            $scope.hrId = "";
            $scope.hrFullName = "";
            $scope.dOBText = new Date();
            $scope.passportNew = "";
            $scope.hrNationality = "";
            $scope.hrSex = "";
            $scope.hrAddress1 = "";
            $scope.hrAddress2 = "";
            $scope.postCode = "";
            $scope.countryId = null;
            $scope.stateId = null;
            $scope.cityId = null;
            $scope.hrphoneNo = "";
            $scope.hPNo = "";
            $scope.hrEmailAddress = "";
            $scope.hrage = "";
            $scope.applicationDate = new Date();
            $scope.hrplaceOfBirth = "";
            $scope.hrmaritalstatus = "";
            $scope.hrHPNo = "";
            $scope.spouseFullName = "";
            $scope.spousepassportNew = "";
            $scope.spousepassportOld = "";
            $scope.spouseDOBText = new Date();
            $scope.spouseNationality = "";
            $scope.spouseage = "";
            $scope.spouseplaceOfBirth = "";
            $scope.spouseAddress = "";
            $scope.spousephoneNo = "";
            $scope.spouseHPNo = "";
            $scope.academicQualiList = [];
            $scope.feildOfSpecList = [];
            $scope.pecomsch = "";
            $scope.passportOld="";
            $scope.pedesignation = "";
            $scope.peDateAppoint = new Date();
            $scope.preEmpAddress = "";
            $scope.preEmpTelNo = "";
            $scope.preEmpSal = "";
            $scope.preEmpavail = "";
            $scope.positionText = "";
            $scope.identityCard = "";
            $scope.hrResume = "";
            $scope.relevantcert = "";
            $scope.photocopy = "";
            $scope.tertiaryeducerts = "";
            $scope.otherdocs = "";
            $scope.workExperiencedetailsList = "";
            $scope.reasonForLeaving = "";
            $scope.longServeMSI = "";
            $scope.furtherStudies = "";
            $scope.expecedSalary = "";
            $scope.personalObservation = "";
            $scope.contrtrowIslamic = "";
            $scope.usPrinAndConcept = "";
            $scope.rolePlayMSI = "";
            $scope.booksWritingIslamic = "";
            $scope.medicalHistory = "";
            $scope.medicaldisabilities = "";
            $scope.referenceDetailsList = [];
            $scope.declarationDate="";
            $scope.declarationSignature="";
            $scope.spouseOccipation="";
        };

        $scope.back_wizardEdit1 = function () {
            $("#sub_step22").removeClass("in active");
            $("#sub_step23").removeClass("in active");
            $("#sub_step24").removeClass("in active");
            $("#sub_step25").removeClass("in active");
            $("#sub_step12").addClass("in active");
            $("#next").show();
            $("#back").hide();

        };
        if($rootScope.add == 'hr'){
            $window.location.reload();
        }

        $scope.access = function(data){
            $rootScope.add = 'hr';
            $rootScope.hrId = data.hrId;
            $rootScope.hrFullName =data.hrFullName;
            $window.location.href="/home#!/TeachingObservationForm";

        }
        $scope.printDivA4 = function(divName) {
            $("#add_OfferLetter_row").modal('hide');
            $("#add_AccLetter_row").modal('hide');
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
            document.close();
            $('#print_invoice').hide();
            $('#acceptance_invoice').hide();
            $("#close").hide();
            $("#add_AccLetter_row").modal('hide');
            $scope.reloadPage();
        }
        $scope.setAllDetails = function (data) {
            $scope.hrId = data.hrId;
            $scope.hrFullName = data.hrFullName;
            $scope.dOBText = new Date(data.dOBText);
            $scope.passportNew = data.passportNew;
            $scope.hrNationality = data.hrNationality;
            $scope.hrSex = data.hrSex;
            $scope.hrAddress1 = data.hrAddress1;
            $scope.hrAddress2 = data.hrAddress2;
            $scope.countryId = parseInt(data.country);
            $scope.stateId = parseInt(data.state);
            $scope.cityId = parseInt(data.city);
            $scope.postCode = data.postCode;
            $scope.StatusText = data.status;
            $scope.hrphoneNo = data.hrphoneNo;
            $scope.hPNo = data.hPNo;
            $scope.hrEmailAddress = data.hrEmailAddress;
            $scope.hrage = data.hrage;
            $scope.applicationDate = new Date(data.applicationDate);
            $scope.hrplaceOfBirth = data.hrplaceOfBirth;
            $scope.hrmaritalstatus = data.hrmaritalstatus;
            $scope.hrHPNo = data.hrHPNo;
            $scope.spouseFullName = data.spouseFullName;
            $scope.spousepassportNew = data.spousepassportNew;
            $scope.spousepassportOld = data.spousepassportOld;
            $scope.spouseDOBText = new Date(data.spouseDOBText);
            $scope.spouseNationality = data.spouseNationality;
            $scope.spouseage = data.spouseage;
            $scope.spouseplaceOfBirth = data.spouseplaceOfBirth;
            $scope.spouseAddress = data.spouseAddress;
            $scope.spousephoneNo = data.spousephoneNo;
            $scope.spouseHPNo = data.spouseHPNo;
            $scope.academicQualiList = angular.fromJson(data.academicQuali);
            $scope.feildOfSpecList = angular.fromJson(data.feildOfSpec);
            $scope.pecomsch = data.pecomsch;
            $scope.pedesignation = data.pedesignation;
            $scope.peDateAppoint = new Date(data.peDateAppoint);
            $scope.preEmpAddress = data.preEmpAddress;
            $scope.preEmpTelNo = data.preEmpTelNo;
            $scope.preEmpSal = data.preEmpSal;
            $scope.preEmpavail = data.preEmpavail;
            $scope.positionText = data.positionText;
            $scope.fileName=  data.identityCard;
            $scope.fileName1= data.hrResume;
            $scope.fileName2= data.relevantcert;
            $scope.passportOld=data.passportOld;
            $scope.fileName3= data.photocopy;
            $scope.fileName4= data.tertiaryeducerts;
            $scope.fileName5= data.otherdocs;
            $scope.workExperiencedetailsList = angular.fromJson(data.workExperiencedetailsList);
            $scope.reasonForLeaving = data.reasonForLeaving;
            $scope.longServeMSI = data.longServeMSI;
            $scope.furtherStudies = data.furtherStudies;
            $scope.expecedSalary = data.expecedSalary;
            $scope.personalObservation = data.personalObservation;
            $scope.contrtrowIslamic = data.contrtrowIslamic;
            $scope.usPrinAndConcept = data.usPrinAndConcept;
            $scope.rolePlayMSI = data.rolePlayMSI;
            $scope.booksWritingIslamic = data.booksWritingIslamic;
            $scope.medicalHistory = data.medicalHistory;
            $scope.medicaldisabilities = data.medicaldisabilities;
            $scope.age = data.age;
            $scope.referenceDetailsList = angular.fromJson(data.referenceDetailsList);
            $scope.countryState($scope.countryId);
            $scope.stateCity($scope.stateId);
            $scope.declarationDate=new Date(data.declarationDate);
            $scope.declarationSignature=data.declarationSignature;
            $scope.spouseOccipation=data.spouseOccipation;
        }

        $scope.deleteAdmission = function (data) {
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
                        $http.post($scope.bshimServerURL + '/deleteAdmission?id='+ data.hrId).then(function (response) {
                            var data = response.data;
                            $scope.getHrList();
                            if (data == "") {
                                Notification.error({
                                    message: 'It Is Already In Use Cant be Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }else {
                                Notification.success({
                                    message: 'Successfully Deleted',
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
                }
            });
        };
        $scope.myFunction= function(hr) {
            $scope.moreid = hr;
            document.getElementById("myDropdown").classList.toggle("show");
        }

        $scope.viewAdmission = function (data) {
            $scope.setAllDetails(data);
            $("#lessionPlanMain_row").modal('show');
        };
        $scope.interviewDate=new Date();
        $scope.dOBText = new Date();
        $scope.applicationDate = new Date();
        $scope.declarationDate = new Date();
        $scope.spouseDOBText = new Date();

        $scope.addKIVModal = function (id) {
            $scope.kivid = id;
            $http.post($scope.bshimServerURL + '/addKIVModal?hrId='+ id).then(function (response) {
                var data = response.data;
            if (data.kivremarks != null) {
                $scope.kivremarks = data.kivremarks;
                }
            ;
            $("#add_new_KIV_modal").modal('show');

        })
        }
        $scope.addInterviewModal = function (id) {
            $scope.Interviewid = id;
            $http.post($scope.bshimServerURL + '/addInterviewModal?hrId=' + id).then(function (response) {
                var data = response.data;
                if (data.interviewDate != null) {
                    $scope.interviewDate = new Date(data.interviewDate);
                }
                else {
                    $scope.interviewDate = new Date();
                }
                $scope.interviewerText = data.interviewerText;
                $scope.interviewtime = data.interviewTime;
                $scope.interviewNotes = data.interviewNotes;

                ;
                $("#add_new_Interview_modal").modal('show');

            })
        }
        $scope.add2InterviewModal = function (id) {
            $scope.secondInterviewid = id;
            $http.post($scope.bshimServerURL + '/getSecondInterviewDetails?hrId=' + id).then(function (response) {
                var data = response.data;
                $scope.notes = data.notes;
                $scope.secondInteviewStatus = data.secondInteviewStatus;
                if (data.reportingDate != null) {
                    $scope.reportDate = new Date(data.reportingDate);
                }
                else {
                    $scope.reportDate = new Date();
                }
                $scope.interviewerSalary=data.salaryoffered;
            })
            $("#add_second_new_Interview_modal").modal('show');
        }
        $scope.offerLetter = function (id) {
            $http.post($scope.bshimServerURL + '/hrDetailsModal?hrId=' + id).then(function (response) {
                var data = response.data;
                if (data.reportingDate != null) {
                    $scope.empDoj = new Date(data.reportingDate);
                }
                else {
                    $scope.empDoj = new Date();
                }
                // $scope.employeeCode=$scope.employeeDetails.employeeCode;
                $scope.employeeName=data.hrFullName;
                $scope.empDesignation=data.positionText;
            })
            $("#add_OfferLetter_row").modal('show');
        }

        $scope.acceptanceLetter = function (id) {
            $http.post($scope.bshimServerURL + '/acceptanceDetails?hrId=' + id).then(function (response) {
                var data = response.data;
                $scope.employeeDetails=data;
                $scope.employeeName = data.employeeName;
                $scope.employeeId = data.employeeId;
                $scope.bankName = data.bankName;
                $scope.bankaccNo = data.bankaccNo;
                $scope.epfaccNo = data.epfaccNo;
                $scope.address = data.address;
                $scope.email = data.email;
                $scope.hrId = data.hrId;
                $scope.mobile = data.mobile;
                $scope.home = data.home;
                $scope.empDoj=data.empDoj;
                $scope.employeeCode=data.employeeCode;
                $scope.employeeName=data.employeeName;
                $scope.empDesignation=data.empDesignation;
                $scope.basicSal=data.basicSal;
                $scope.fileName6= data.acceptLetter;

            })
            $("#add_AccLetter_row").modal('show');
        }

        $scope.saveAcceptance = function(){
            var saveAcceptance;
            saveAcceptance = {
                bankdetailsId:$scope.bankdetailsId,
                employeeName: $scope.employeeName,
                employeeId: $scope.employeeId,
                bankName: $scope.bankName,
                bankaccNo: $scope.bankaccNo,
                epfaccNo: $scope.epfaccNo,
                address: $scope.address,
                email: $scope.email,
                mobile: $scope.mobile,
                home: $scope.home,
                hrId: $scope.hrId,
                acceptLetter: $scope.fileToUpload6

            };
            $http.post($scope.bshimServerURL + '/saveAcceptance', angular.toJson(saveAcceptance)).then(function (response) {
                var data = response.data;
                if (data === "") {
                    Notification.error({
                        message: 'Acceptance  Already Created',
                        positionX: 'center',
                        delay: 2000
                    });
                }
                else {
                    $("#add_AccLetter_row").modal('hide');
                    $scope.addEmployee(data.hrId);
                    Notification.success({
                        message: 'Acceptance  Created  successfully',
                        positionX: 'center',
                        delay: 2000
                    });
                    // $scope.getEmployeeList();
                }

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });

            });
        }

        $scope.addInterviewscheModal = function (id) {
            $scope.Interviewid = id;
            $http.post($scope.bshimServerURL + '/addInterviewModal?hrId='+ id).then(function (response) {
                var data = response.data;
                $scope.interviewerSchedStatus = data.interviewerSchedStatus;
                $scope.interviewSchedNotes = data.interviewSchedNotes;
                if (data.reportingDate != null) {
                    $scope.reportDate = new Date(data.reportingDate);
                }
                else {
                    $scope.reportDate = new Date();
                }
                $scope.interviewerSalary=data.salaryoffered;

            ;
            $("#add_new_InterviewSchuduled_modal").modal('show');

        })
        }

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
        $scope.imageUpload1 = function (event1) {
            var files = event1.target.files;
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
                    $('.image-preview1').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview1').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage1);
                };
            }
        };
        $scope.imageUpload2 = function (event2) {
            var files = event2.target.files;
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
                    $('.image-preview2').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview2').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage2);
                };
            }
        };
        $scope.imageUpload3 = function (event3) {
            var files = event3.target.files;
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
                    $('.image-preview3').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview3').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage3);
                };
            }
        };
        $scope.imageUpload4 = function (event4) {
            var files = event4.target.files;
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
                    $('.image-preview4').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview4').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage4);
                };
            }
        };
        $scope.imageUpload5 = function (event5) {
            var files = event5.target.files;
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
                    $('.image-preview5').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview5').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage5);
                };
            }
        };
        $scope.imageUpload6 = function (event6) {
            var files = event6.target.files;
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
                    $('.image-preview6').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview6').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage6);
                };
            }
        };

        function proceedCompressedImage1(compressedSrc) {
            $('#image-preview1').attr('src', compressedSrc);
            $scope.fileToUpload1 = compressedSrc;
        }

        function proceedCompressedImage2(compressedSrc) {
            $('#image-preview2').attr('src', compressedSrc);
            $scope.fileToUpload2 = compressedSrc;
        }

        function proceedCompressedImage3(compressedSrc) {
            $('#image-preview3').attr('src', compressedSrc);
            $scope.fileToUpload3 = compressedSrc;
        }
        function proceedCompressedImage4(compressedSrc) {
            $('#image-preview4').attr('src', compressedSrc);
            $scope.fileToUpload4 = compressedSrc;
        }
        function proceedCompressedImage5(compressedSrc) {
            $('#image-preview5').attr('src', compressedSrc);
            $scope.fileToUpload5 = compressedSrc;
        }
        function proceedCompressedImage6(compressedSrc) {
            $('#image-preview6').attr('src', compressedSrc);
            $scope.fileToUpload6 = compressedSrc;
        }

    }
);