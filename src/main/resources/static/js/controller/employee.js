/**
 * Created by prasad on 7/1/2017.
 */

app.controller('employeeCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.employeeId = "";
        $scope.empBranch = "";
        $scope.employeeName = "";
        $scope.userType = "";
        $scope.empDepartment = "";
        $scope.empType = "";
        $scope.typeOfEmp = "";
        $scope.empDepartment = "";
        $scope.empCoordinator = "";
        $scope.reportTo = "";
        $scope.empDoj = "";
        $scope.empDob = "";
        $scope.empCapability = "";
        $scope.speciality = "";
        $scope.mobile = "";
        $scope.emailId = "";
        $scope.aadharNo = "";
        $scope.passportNo = "";
        $scope.experience = "";
        $scope.addressLine1 = "";
        $scope.addressLine2 = "";
        $scope.country = "";
        $scope.state = "";
        $scope.country = "";
        $scope.city = "";
        $scope.postalCode = "";
        $scope.userName = "";
        $scope.password = "";
        $scope.salEffectiveDate = "";
        $scope.basicSal = "";
        $scope.empearnings = "";
        $scope.empdeductions = "";
        $scope.status = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.ButtonStatus = "Active";
        $scope.empDob = new Date();
        $scope.empDoj = new Date();
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;


        $scope.OfferLetter = function (data) {
            $scope.setAllDetails(data);
            $("#add_OfferLetter_row").modal('show');
        };
        $scope.offerList=[];
        $scope.addnew = function () {
            $scope.offerList.push({

            })
        };

        // $scope.AccLetter = function (data) {
        //     $scope.bankdetailsId = "";
        //     $scope.bankName = "";
        //     $scope.bankaccNo = "";
        //     $scope.epfaccNo = "";
        //     $scope.address = "";
        //     $scope.email = "";
        //     $scope.mobile = "";
        //     $scope.home = "";
        //     $scope.StatusText="Active"
        //     $("#add_AccLetter_row").modal('show');
        // };

        $scope.AccLetter = function (data) {
            $scope.setBankDetails(data);
            $("#add_AccLetter_row").modal('show');
        };


        $scope.setBankDetails=function(data){
            $scope.employeeId =data.employeeId;
            $scope.address = data.addressLine1;
            $scope.email = data.emailId;
            $scope.mobile = data.mobile;
            $scope.home = data.city;

        }

        $scope.removeDesDetails = function () {
            $scope.employeeId = "";
            $scope.empBranch = "";
            $scope.employeeCode = "";
            $scope.employeeName = "";
            $scope.userType = "";
            $scope.empDepartment = "";
            $scope.empType = "";
            $scope.typeOfEmp = "";
            $scope.empDepartment = "";
            $scope.empCoordinator = "";
            $scope.reportTo = "";
            $scope.empDoj = new Date();
            $scope.empCapability = "";
            $scope.speciality = "";
            $scope.mobile = "";
            $scope.emailId = "";
            $scope.aadharNo = "";
            $scope.passportNo = "";
            $scope.experience = "";
            $scope.addressLine1 = "";
            $scope.addressLine2 = "";
            $scope.country = "";
            $scope.state = "";
            $scope.country = "";
            $scope.city = "";
            $scope.postalCode = "";
            $scope.userName = "";
            $scope.password = "";
            $scope.salEffectiveDate = new Date();
            $scope.basicSal = "";
            $scope.empearnings = "";
            $scope.empdeductions = "";
            $scope.status = "";
            $scope.isDisabled= false;
            $scope.operation = "";
            $scope.empAge = "";
            $scope.empDob = new Date();
        };

        $scope.removeDesDetails = function () {
            $scope.employeeId = "";
            $scope.empBranch = "";
            $scope.employeeCode = "";
            $scope.employeeName = "";
            $scope.userType = "";
            $scope.empDepartment = "";
            $scope.empType = "";
            $scope.typeOfEmp = "";
            $scope.empDepartment = "";
            $scope.empCoordinator = "";
            $scope.reportTo = "";
            $scope.empDoj = new Date();
            $scope.empCapability = "";
            $scope.speciality = "";
            $scope.mobile = "";
            $scope.emailId = "";
            $scope.aadharNo = "";
            $scope.passportNo = "";
            $scope.experience = "";
            $scope.addressLine1 = "";
            $scope.addressLine2 = "";
            $scope.country = "";
            $scope.state = "";
            $scope.country = "";
            $scope.city = "";
            $scope.postalCode = "";
            $scope.userName = "";
            $scope.password = "";
            $scope.salEffectiveDate = new Date();
            $scope.basicSal = "";
            $scope.empearnings = "";
            $scope.empdeductions = "";
            $scope.status = "";
            $scope.isDisabled= false;
            $scope.operation = "";
            $scope.empAge = "";
            $scope.empDob = new Date();
        };


        $scope.setAllDetails=function (data) {
            $scope.employeeId =data.employeeId;
            $scope.empBranch = parseInt(data.empBranch);
            $scope.employeeCode = data.employeeCode;
            $scope.employeeName = data.employeeName;
            $scope.userType = data.userType;
            $scope.empDepartment = data.empDepartment;
            $scope.empType = data.empType;
            $scope.typeOfEmp = data.typeOfEmp;
            $scope.empDesignation = data.empDesignation;
            $scope.empCoordinator = data.empCoordinator;
            $scope.reportTo = data.reportTo;
            $scope.empDoj = new Date(data.empDoj);
            $scope.empDob = new Date(data.empDob);
            $scope.empCapability = data.empCapability;
            $scope.speciality = data.speciality;
            $scope.mobile = data.mobile;
            $scope.emailId = data.emailId;
            $scope.aadharNo = data.aadharNo;
            $scope.passportNo = data.passportNo;
            $scope.experience = data.experience;
            $scope.addressLine1 = data.addressLine1;
            $scope.addressLine2 = data.addressLine2;
            $scope.country = data.country;
            $scope.state = data.state;
            $scope.city = data.city;
            $scope.postalCode = data.postalCode;
            $scope.userName = data.userName;
            $scope.password = data.password;
            $scope.salEffectiveDate =new Date(data.salEffectiveDate);
            $scope.basicSal = data.basicSal;
            $scope.empearnings = data.empearnings;
            $scope.empdeductions = data.empdeductions;
            $scope.empAge =data.empAge;
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

        $scope.editEmployee = function (data) {
            $scope.employeeId =data.employeeId;
            $scope.empBranch = parseInt(data.empBranch);
            $scope.employeeName = data.employeeName;
            $scope.empAge=data.empAge;
            $scope.userType = data.userType;
            $scope.empDepartment = data.empDepartment;
            $scope.empType = data.empType;
            $scope.typeOfEmp = data.typeOfEmp;
            $scope.empDesignation = data.empDesignation;
            $scope.empCoordinator = data.empCoordinator;
            $scope.reportTo = data.reportTo;
            $scope.empDoj = new Date(data.empDoj);
            $scope.empDob = new Date(data.empDob);
            $scope.empCapability = data.empCapability;
            $scope.speciality = data.speciality;
            $scope.mobile = data.mobile;
            $scope.emailId = data.emailId;
            $scope.aadharNo = data.aadharNo;
            $scope.employeeCode = data.employeeCode;
            $scope.passportNo = data.passportNo;
            $scope.experience = data.experience;
            $scope.addressLine1 = data.addressLine1;
            $scope.addressLine2 = data.addressLine2;
            $scope.country = parseInt(data.country);
            $scope.state = parseInt(data.state);
            $scope.city = parseInt(data.city);
            $scope.postalCode = data.postalCode;
            $scope.userName = data.userName;
            $scope.password = data.password;
            $scope.status = data.status;
            $scope.countryState($scope.country);
            $scope.stateCity($scope.state);
            $http.post('/bs'+ '/editEmployee?employeeName=' + data.employeeName).then(function (response) {
                var data = response.data;
                $scope.salEffectiveDate =new Date(data.salEffectiveDate);
                $scope.basicSal = data.basicSal;
                $scope.empearnings = angular.fromJson(data.empearnings);
                $scope.empdeductions =angular.fromJson( data.empdeductions);
                $scope.formDetails=[];
                $scope.earningList=[];
                angular.forEach($scope.empearnings,function (datas) {
                    if(datas.empearnings==true){
                        $scope.formDetails.push({
                            empearnings:datas.empearnings,
                            earningAmount :datas.earningAmount,
                            earningName :datas.earningName
                        })
                    }
                })
                $scope.earningList =angular.fromJson($scope.formDetails);
                $scope.formdeductionDetails=[];
                $scope.deductionList=[];
                angular.forEach($scope.empdeductions,function (datas) {
                    if(datas.empdeductions==true){
                        $scope.formdeductionDetails.push({
                            empdeductions:datas.empdeductions,
                            deductionAmount :datas.deductionAmount,
                            deductionName :datas.deductionName
                        })
                    }
                })
                $scope.deductionList =angular.fromJson($scope.formdeductionDetails);
            });
            $scope.operation = 'Edit';
            $('#employee-title').text("Edit Employee");
                $("#add_new_Employee_modal").modal('show');
                $("#submit").text("Update");
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
        };

        $scope.saveEmployee = function () {

            if ($scope.employeeName == '' || $scope.employeeName == null) {
                Notification.warning({message: 'Employee Name  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if (angular.isUndefined($scope.emailId) || $scope.emailId == '' || $scope.emailId == null) {
                Notification.warning({message: 'Enter Valid EmailId', positionX: 'center', delay: 2000});
                $scope.isDisabled = false;
            } else if (angular.isUndefined($scope.empDesignation) || $scope.empDesignation == '' || $scope.empDesignation == null) {
                Notification.warning({message: 'Designation can not be empty', positionX: 'center', delay: 2000});
                $scope.isDisabled = false;
            }
            else {
                $scope.elist = [];
                angular.forEach($scope.earningList, function (val, key) {
                    if (val.empearnings == true) {
                        $scope.elist.push(val);
                    }
                })
                $scope.dlist = [];
                angular.forEach($scope.deductionList, function (val, key) {
                    if (val.empdeductions == true) {
                        $scope.dlist.push(val);
                    }
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
                    status: $scope.status
                };
                $http.post($scope.bshimServerURL + '/saveEmployee', angular.toJson(saveEmployee)).then(function (response) {
                    var data = response.data;
                    if (data === "") {
                        Notification.error({
                            message: 'Employee  Already Created',
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

                });
            }
        }
        $scope.viewEmployee = function (data) {
            $scope.setAllDetails(data);
            $("#View_Employee").modal('show');
        };




        $scope.deleteEmployee = function (data) {
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
                        $http.post($scope.bshimServerURL + '/deleteEmployee?employeeId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.employeeList;
                            if ($scope.status == "InActive") {
                                Notification.success({
                                    message: 'It is Already in use So Status Changes to Inactive',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            } else {
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                            $scope.getEmployeeList();
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





    });

