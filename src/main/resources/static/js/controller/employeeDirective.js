/**
 * Created by sahera on 18/3/19.
 */


app.directive("addNewEmployee", function ($http, Notification) {
    return {
        restrict: 'E',
        templateUrl: "partials/employeeDirective.html",
        link: function ($scope, $timeout, $location, $filter) {
            $scope.bshimServerURL = "/bs";
            $scope.operation = 'Create';
            $scope.inactiveStatus = "Active";
            $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
            $scope.saveEmployee = function () {

                if ($scope.employeeName == '' || $scope.employeeName == null) {
                    Notification.warning({message: 'Employee Name  can not be empty', positionX: 'center', delay: 2000});
                    return false;
                }
                else if (angular.isUndefined($scope.emailId)||$scope.emailId==''|| $scope.emailId == null) {
                    Notification.warning({message: 'Enter Valid EmailId', positionX: 'center', delay: 2000});
                    $scope.isDisabled= false;
                } else if (angular.isUndefined($scope.empDesignation)||$scope.empDesignation==''|| $scope.empDesignation == null) {
                    Notification.warning({message: 'Designation can not be empty', positionX: 'center', delay: 2000});
                    $scope.isDisabled= false;
                }
                else {
                    $scope.elist=[];
                    angular.forEach($scope.earningList,function (val,key) {
                        // if(val.empearnings==true){
                            $scope.elist.push(val);
                        // }
                    })
                    $scope.dlist=[];
                    angular.forEach($scope.deductionList,function (val,key) {
                        // if(val.empdeductions==true){
                            $scope.dlist.push(val);
                        // }
                    })
                    var saveEmployee;
                    saveEmployee = {
                        employeeId: $scope.employeeId,
                        empBranch: $scope.empBranch,
                        employeeCode: $scope.employeeCode,
                        employeeName: $scope.employeeName,
                        userType: $scope.userType,
                        empType: $scope.empType,
                        typeOfEmp: $scope.typeOfEmp,
                        empDepartment: $scope.empDepartment,
                        empDesignation: $scope.empDesignation,
                        empCoordinator: $scope.empCoordinator,
                        reportTo: $scope.reportTo,
                        empDoj: $scope.empDoj,
                        empCapability: $scope.empCapability,
                        speciality: $scope.speciality,
                        mobile: $scope.mobile,
                        emailId: $scope.emailId,
                        aadharNo: $scope.aadharNo,
                        passportNo: $scope.passportNo,
                        experience: $scope.experience,
                        addressLine1: $scope.addressLine1,
                        addressLine2: $scope.addressLine2,
                        country: $scope.country,
                        state: $scope.state,
                        city: $scope.city,
                        postalCode: $scope.postalCode,
                        userName: $scope.userName,
                        password: $scope.password,
                        salEffectiveDate: $scope.salEffectiveDate,
                        basicSal: $scope.basicSal,
                        empAge: $scope.empAge,
                        empDob: $scope.empDob,
                        empearnings: angular.toJson($scope.elist),
                        empdeductions: angular.toJson($scope.dlist),
                        status: $scope.status,
                        hrId:$scope.hrId


                    };
                    $http.post($scope.bshimServerURL + '/saveEmployee', angular.toJson(saveEmployee)).then(function (response) {
                        var data = response.data;
                        if (data === "") {
                            Notification.error({
                                message: 'Employee Or UserName Already Created',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        else {
                            $("#add_new_Employee_modal").modal('hide');
                            Notification.success({
                                message: 'Employee  Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                            $scope.getEmployeeList();
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
            }
            $scope.stateCity = function(state){
                var url = "/bs/getStateCity?stateId=" + state;
                $http.post(url).then(function (response) {
                    var data = response.data;
                    $scope.cityList = angular.copy(data);
                })
            }
            $scope.getEarningList = function () {
                $http.post('/bs' + '/getEarningList').then(function (response) {
                    var data = response.data;
                    $scope.earningList = data;
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
            };
            $scope.getEarningList();

            $scope.getDeductionList = function () {
                $http.post('/bs' + '/getDeductionList').then(function (response) {
                    var data = response.data;
                    $scope.deductionList = angular.copy(data);
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
            };
            $scope.getDeductionList();
            $scope.getEmpGenNo = function () {
                $(".loader").css("display", "block");
                $http.post($scope.bshimServerURL  + '/generateEmpNo').then(function (response) {
                    $scope.employeeCode= response.data;
                    if(angular.isUndefined($scope.employeeCode)||$scope.employeeCode==''|| $scope.employeeCode == null){
                        $scope.employeeCode='EMP00001';
                    }

                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                })

            };
            $scope.countryState = function(country){
                var url = "/bs/getCountryState?countryId=" + country;
                $http.post(url).then(function (response) {
                    var data = response.data;
                    $scope.stateList = angular.copy(data);

                })
            }

            $scope.earningamountdetails = [];
            $scope.earningamountdetails.push({
                earningName:'',
                earningAmount:'',
            });
            $scope.addEmployee = function (id) {
                if (angular.isUndefined(id)) {
                    id = "";
                }
                $http.post($scope.bshimServerURL + '/hrDetailsModal?hrId=' + id).then(function (response) {
                    var data = response.data;
                    $scope.employeeId = "";
                    if(data.empBranch!=null) {
                        $scope.empBranch = parseInt(data.empBranch);
                    }
                    else{
                        $scope.empBranch =null;
                    }
                    $scope.empAge = data.hrage;
                    $scope.employeeCode = data.empCode;
                    $scope.employeeName = data.hrFullName;
                    $scope.userType = data.empUserType;
                    $scope.empDepartment = data.empDepartment;
                    $scope.empType = data.employeeType;
                    $scope.typeOfEmp = data.typeOfEmpl;
                    $scope.empCoordinator = data.empCoordinator;
                    $scope.reportTo = data.empReportTo;
                    if (data.reportingDate != null) {
                        $scope.empDoj = new Date(data.reportingDate);
                    }
                    else {
                        $scope.empDoj = new Date();
                    }
                    if (data.dobtext != null) {
                        $scope.empDob = new Date(data.dobtext);
                    }
                    else {
                        $scope.empDob = new Date();
                    }
                    $scope.empCapability = data.empCapability;
                    $scope.speciality = data.empSpeciality;
                    $scope.mobile = data.hrphoneNo;
                    $scope.emailId = data.hrEmailAddress;
                    $scope.aadharNo = data.empAdharNo;
                    $scope.passportNo = data.passportNew;
                    $scope.experience = data.empExperience;
                    $scope.addressLine1 = data.hrAddress1;
                    $scope.addressLine2 = data.hrAddress2;
                    $scope.country = data.country;
                    $scope.state = data.state;
                    $scope.city = data.city;
                    $scope.postalCode = data.postCode;
                    $scope.userName = data.empUserName;
                    $scope.password = data.empPassword;
                    $scope.empDesignation = data.positionText;
                    if (data.empSalaryEffDate != null) {
                        $scope.salEffectiveDate = new Date(data.empSalaryEffDate);
                    }
                    else {
                        $scope.salEffectiveDate = new Date();
                    }
                    $scope.empearnings = angular.fromJson(data.empearnings);
                    $scope.empdeductions =angular.fromJson( data.empdeductions);

                    if (data.status != null) {
                        $scope.status = data.status;
                    }
                else {
                        $scope.status = "Active";
                    }
                    $scope.countryState($scope.country);
                    $scope.stateCity($scope.state);
                    $scope.getEmpGenNo();
                    $('#modelName').text("Add Employee");
                    $("#submit").text("Save");
                    $("#sub_step02").removeClass("in active");
                    $("#add_new_Employee_modal").modal('show');
                })
            };
            $scope.format = 'dd/MM/yyyy';
            $scope.openn = function () {
                $scope.popupp.opened = true;
            };
            $scope.popupp = {
                opened: false
            };
            $scope.format = 'dd/MM/yyyy';
            $scope.openn1 = function () {
                $scope.popupp1.opened = true;
            };
            $scope.popupp1= {
                opened: false
            };

            $scope.open2 = function () {
                $scope.popup2.opened = true;
            };

            $scope.popup2 = {
                opened: false
            };


            $scope.calculateEmpAge = function () {
                var ageDif = Date.now() - $scope.empDob.getTime();
                var ageDate = new Date(ageDif); // miliseconds from epoch
                $scope.empAge= Math.abs(ageDate.getUTCFullYear() - 1970);
            }

            $scope.back_wizardEdit1Emp = function () {
                $("#sub_step02").removeClass("in active");
                $("#sub_step01").addClass("in active");
                $("#next").show();
                $("#back").hide();

            };


            $scope.next_wizardEditEmp = function () {
                $("#sub_step01").removeClass("in active");
                $("#sub_step02").addClass("in active");
                $("#next").hide();
                $("#saveId").show();
                $("#back1").show();
            }


            $scope.back_wizardEditEmp = function () {
                $("#sub_step02").removeClass("in active");
                $("#sub_step01").addClass("in active");
                $("#next").show();
                $("#back1").hide();
                $("#saveId").hide();
            }
            $scope.getBranchesList = function (val) {
                if (angular.isUndefined(val)) {
                    val = "";
                }

                $(".loader").css("display", "block");
                $http.post($scope.bshimServerURL  + '/getBranchesList?searchText=' + val).then(function (response) {
                    var data = response.data;
                    $scope.branchesList= data;
                    $scope.searchText = val;
                    $scope.bran=[];
                    angular.forEach( $scope.branchesList,function (val,key) {
                        if(val.status=="Active"){
                            $scope.bran.push(val) ;
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
            $scope.getBranchesList();

            $scope.getDepartmentList = function (val) {
                if (angular.isUndefined(val)) {
                    val = "";
                }

                $(".loader").css("display", "block");
                $http.post($scope.bshimServerURL  + '/getDepartmentList?searchText=' + val).then(function (response) {
                    var data = response.data;
                    $scope.departmentList= data;
                    $scope.searchText = val;

                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                })

            };
            $scope.getDepartmentList();
            $scope.getDesList = function () {
                $http.post($scope.bshimServerURL + '/getDesList').then(function (response) {
                    var data = response.data;
                    $scope.designationList = data;
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
            };
            $scope.getDesList();

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
        }
        }
});