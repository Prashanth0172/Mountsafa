

app.controller('PayrollCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.EmpId = "";
        $scope.EmpName = null;
        $scope.EmpAddress = "";
        $scope.EmpPhNo = "";
        $scope.EmpEmail = "";
        $scope.EmpDesig = "";
        $scope.EmpDept = "";
        $scope.EmpPP = "";
        $scope.EmpTDays = null;
        $scope.EmpPDays = "";
        $scope.EmpDOJ = "";
        $scope.EmpPanNo = "";
        $scope.EmpPFNo = "";
        $scope.EmpBSal = "";
        $scope.EmpDSal = "";
        $scope.EmpBankAcc = "";
        $scope.EmpEarn = "";
        $scope.EmpDuc = "";
        $scope.EmpGr = "";
        $scope.EmpNet = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.EmpBSal = parseFloat('0.00');
        $scope.EmpEarn = parseFloat('0.00');
        $scope.EmpDuc = parseFloat('0.00');
        $scope.EmpGr = parseFloat('0.00');
        $scope.EmpNet = parseFloat('0.00');
        $scope.netSal = parseFloat('0.00');
        $scope.grossSal = parseFloat('0.00');


        $scope.removePayrollDetails = function () {
            $scope.EmpId = "";
            $scope.EmpName = null;
            $scope.EmpAddress = "";
            $scope.EmpPhNo = "";
            $scope.EmpEmail = "";
            $scope.EmpDesig = "";
            $scope.EmpDept = "";
            $scope.EmpPP = "";
            $scope.EmpTDays = null;
            $scope.EmpPDays = "";
            $scope.EmpDOJ = "";
            $scope.EmpPanNo = "";
            $scope.EmpPFNo = "";
            $scope.EmpBSal = "";
            $scope.EmpDSal = "";
            $scope.EmpBankAcc = "";
            $scope.EmpEarn = "";
            $scope.EmpDuc = "";
            $scope.EmpGr = "";
            $scope.EmpNet = "";
            $scope.isDisabled = false;
            $scope.operation = "";
        };
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.inactivePayroll = function () {
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
            $scope.getPayrollList();

        };
        //TO ADD//


        $scope.format = 'dd/MM/yyyy';

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };


        $scope.format = 'dd/MM/yyyy';

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.popup2 = {
            opened: false
        };


        $scope.addPayroll = function () {
            // $(".loader").css("display", "block");
            $scope.EmpId = "";
            $scope.EmpName =null;
            $scope.EmpAddress = "";
            $scope.EmpPhNo = "";
            $scope.EmpEmail = "";
            $scope.EmpDesig = "";
            $scope.EmpDept = "";
            $scope.EmpPP = new Date();
            $scope.EmpTDays = null;
            $scope.EmpPDays = "";
            $scope.EmpDOJ = "";
            $scope.EmpPanNo = "";
            $scope.EmpPFNo = "";
            $scope.EmpBSal = "";
            $scope.EmpDSal = "";
            $scope.EmpBankAcc = "";
            $scope.EmpEarn = "";
            $scope.EmpDuc = "";
            $scope.EmpGr = "";
            $scope.EmpNet = "";
            $scope.status="Active";
            $('#modelName').text("Add Payroll");
            $("#submit").text("Save");
            $("#add_Payroll_modal").modal('show');
        };


        // $scope.editPayroll = function (searchText) {
        //     if (angular.isUndefined(searchText)) {
        //         $scope.searchText = "";
        //     }
        //     $(".loader").css("display", "block");
        //     $http.post('/pos' + '/editPayroll').then(function (response) {
        //         var data = response.data.object;
        //         console.log(data);
        //         $scope.PayrollList = data;
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
        // $scope.editPayroll();
        //



        $scope.editPayroll = function (data) {
            $scope.EmpId = data.empId,
                $scope.EmpName =data.empName ,
                $scope.EmpAddress = data.empAddress,
                $scope.EmpPhNo = data.empPhNo,
                $scope.EmpEmail = data.empEmail ,
                $scope.EmpDesig = data.empDesignation,
                $scope.EmpDept = data.empDepartment,
                $scope.EmpPP =new Date( data.payPeriod),
                $scope.EmpTDays = data.totalWorkingDays,
                $scope.EmpPDays = data.totalPresentDays,
                $scope.EmpDOJ = new Date(data.empDOJ),
                $scope.EmpPanNo = data.panNo,
                $scope.EmpPFNo = data.pfNo,
                $scope.EmpBSal = data.basicSalary,
                $scope.EmpDSal =data.dailyWage ,
                $scope.EmpBankAcc =data.employeeBankAcc ,
                $scope.EmpEarn =data.earningsAmt ,
                $scope.EmpDuc = data.deductionAmt,
                $scope.EmpGr = data.grossSal,
                $scope.EmpNet =data.netSal ,
                $scope.status=data.status;
            $('#Payroll-title').text("Edit Payroll");
            $("#submit").text("Update");
            $("#add_Payroll_modal").modal('show');

        };


        // //   ToSAVE//
        $scope.savePayroll = function ()
        {

            if ($scope.EmpName == '' || $scope.EmpName == null) {
                Notification.warning({message: 'Employee  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if ($scope.EmpEmail == '' || $scope.EmpEmail == null) {
                Notification.warning({message: 'Employee Email  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if ($scope.EmpTDays == '' || $scope.EmpTDays == null) {
                Notification.warning({message: 'Total Days can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
                var savePayroll;
                savePayroll = {
                    empId:$scope.EmpId ,
                    empName:  $scope.EmpName ,
                    empAddress:  $scope.EmpAddress ,
                    empPhNo:  $scope.EmpPhNo ,
                    empEmail:  $scope.EmpEmail ,
                    empDesignation:   $scope.EmpDesig ,
                    empDepartment:  $scope.EmpDept ,
                    payPeriod:   $scope.EmpPP ,
                    totalWorkingDays:    $scope.EmpTDays ,
                    totalPresentDays:   $scope.EmpPDays ,
                    empDOJ:  $scope.EmpDOJ ,
                    panNo:  $scope.EmpPanNo ,
                    pfNo:  $scope.EmpPFNo ,
                    basicSalary:    $scope.EmpBSal ,
                    dailyWage:  $scope.EmpDSal ,
                    employeeBankAcc:   $scope.EmpBankAcc ,
                    earningsAmt:  $scope.EmpEarn ,
                    deductionAmt:   $scope.EmpDuc ,
                    grossSal:  $scope.EmpGr ,
                    netSal:  $scope.EmpNet ,
                    status:  $scope.status


                };
                $http.post('/bs' + '/savePayroll', angular.toJson(savePayroll, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data === "") {
                        Notification.error({
                            message: 'Payroll  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_Payroll_modal").modal('hide');
                        Notification.success({
                            message: 'Payroll  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                        $scope.getPayrollList();
                        $scope.removePayrollDetails();
                    }

                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled = false;

                });
            }
            ;
        }

        // $scope.netSal = parseFloat(($scope.deductionAmt - $scope.earningsAmt).toFixed(2));

        $scope.getPayrollList = function () {
            $http.post('/bs' + '/getPayrollList').then(function (response) {
                var data = response.data;
                $scope.payrollList = angular.copy(data);
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getPayrollList();

        $scope.calculatesalary = function () {
            var salary = parseInt($scope.EmpBSal) / parseInt($scope.EmpTDays);
            $scope.EmpDSal = salary;
            $scope.EmpPFNo=parseInt($scope.EmpDSal)*parseInt($scope.EmpPDays);
            $scope.EmpGr =parseInt($scope.EmpBSal)+parseInt(($scope.EmpEarn));
            $scope.EmpNet =parseInt($scope.EmpGr)-parseInt($scope.EmpDuc);
            if(parseInt($scope.EmpPDays)>parseInt($scope.EmpTDays)){
                $scope.EmpPDays=0;
            }
            else{
                $scope.EmpPDays;
            }
        };


        // $scope.addNewEmployeePopulate = function () {
        //     $('#employee-title').text("Add Country");
        //     $scope.StatusText = "Active";
        //     $("#submit").text("Save");
        //     $("#add_Employee_modal").modal('show');
        // };


        //
        // $scope.vieww = function () {
        //     $('#employee-title').text("Add Country");
        //     $scope.StatusText = "Active";
        //     $("#submit").text("Save");
        //     $("#add_vieww").modal('show');
        // };
        //

        // $scope.saveEmployee = function ()
        // {
        //
        //     if ($scope.EmpName == '' || $scope.EmpName == null) {
        //         Notification.warning({message: 'Employee  can not be empty', positionX: 'center', delay: 2000});
        //         return false;
        //     }
        //     else {
        //         var saveEmployee;
        //         saveEmployee = {
        //             employeeId:   $scope.EmpID ,
        //             employeeName:  $scope.EmpName ,
        //             employeeAddress:  $scope.EmpAddress ,
        //             employeePhNo:  $scope.EmpPhNo ,
        //             employeeEmail: $scope.EmpEmail ,
        //             employeeDesignation: $scope.EmpDesig ,
        //             employeeDepartment: $scope.EmpDept ,
        //             employeeExperience:  $scope.EmpExp ,
        //             employeeDOB:  $scope.EmpDOB ,
        //             employeeDOJ: $scope.EmpDOJ ,
        //             panNo:$scope.EmpPan,
        //             pfNo:$scope.EmpPF,
        //             employeeGender: $scope.EmpGender ,
        //             employeeBankAcc:  $scope.EmpBank,
        //             status:$scope.status
        //
        //         };
        //         $http.post('/bs' + '/saveEmployee', angular.toJson(saveEmployee, "Create")).then(function (response, status, headers, config) {
        //             var data = response.data;
        //             if (data === "") {
        //                 Notification.error({
        //                     message: 'Employee  Already Created',
        //                     positionX: 'center',
        //                     delay: 2000
        //                 });
        //             }
        //             else {
        //                 $("#add_Employee_modal").modal('hide');
        //                 Notification.success({
        //                     message: 'Employee  Created  successfully',
        //                     positionX: 'center',
        //                     delay: 2000
        //                 });
        //                 $scope.getEmployeeList();
        //                 $scope.removeEmployeeDetails();
        //             }
        //
        //         }, function (error) {
        //             Notification.error({
        //                 message: 'Something went wrong, please try again',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //             $scope.isDisabled = false;
        //
        //         });
        //     }
        //     ;
        // }
        //






        $scope.getPayrollByName=function(type) {
            $http.post('/bs'  + "/getPayrollByName?name=" + type).then(function (response) {
                var data = response.data;
                console.log(data);
                $scope.EmpName =data.employeeName ;
                $scope.EmpAddress=data.addressLine1;
                $scope.EmpPhNo=data.mobile;
                $scope.EmpEmail=data.emailId ;
                $scope.EmpDesig=data.empDesignation;
                $scope.EmpDept=data.empDepartment;
                $scope.EmpDOJ=data.empDoj;
                $scope.EmpBSal=data.basicSal;
            });
        };

        // $scope.vieww = function (data) {
        //
        //     $http.post('pos' + "/getPayrollDetails?employeeId="+data.EmpId).then(function (response) {
        //         $scope.PayrollList= response.data;
        //         $scope.totalValue=parseInt(0);
        //         angular.forEach( $scope.serviceInvoiceList, function (value, key) {
        //             $scope.totalValue= parseInt($scope.totalValue + value.totalamt);
        //         })
        //         // var invData=response.data;
        //         // $scope.servicePrice = invData.price;
        //     });
        //     $scope.EmpObj = data;
        //     if(customers.lastName!=null) {
        //         $scope.employeeName = data.customers.firstName + data.customers.lastName;
        //     }else{
        //         $scope.employeeName = data.customers.firstName;
        //     }
        //     $scope.EmpEmail =data.employee.employeeEmail;
        //     $scope.EmpAddress =data.employee.employeeAddress;
        //     $scope.EmpPhNo =data.employee.employeePhNo;
        //     $scope.EmpDesig =data.employee.employeeDesignation;
        //     $scope.EmpDept =data.employee.employeeDepartment;
        //     $scope.EmpDOJ = data.book_datetime;
        //     if (angular.isUndefined(data.services)) {
        //         $scope.serviceName = data.services.name;
        //         $scope.price = data.services.price;
        //     }
        //
        //     $scope.servicePrice = data.servicePrice;
        //     $("#add_vieww").modal('show');
        // };
        //

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

        // $scope.getDeptList = function () {
        //     $http.post('/bs' + '/getDeptList').then(function (response) {
        //         var data = response.data;
        //         $scope.departmentList = data;
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     });
        // };
        // $scope.getDeptList();
        //
        //
        // $scope.getDesList = function () {
        //     $http.post('/bs' + '/getDesList').then(function (response) {
        //         var data = response.data;
        //         $scope.designationList = data;
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     });
        // };
        // $scope.getDesList();
        //
        // $scope.saveDept = function () {
        //
        //     if ($scope.DepName == '' || $scope.DepName == null) {
        //         Notification.warning({message: 'Loan  can not be empty', positionX: 'center', delay: 2000});
        //         return false;
        //     }
        //     else {
        //         $scope.isDisabled = true;
        //         var saveDept;
        //         saveDept = {
        //             deptId: $scope.DeptId,
        //             deptName: $scope.DepName,
        //             deptDesc: $scope.DepDescription,
        //             status: $scope.status
        //
        //         };
        //         $http.post('/bs' + '/saveDept', angular.toJson(saveDept, "Create")).then(function (response, status, headers, config) {
        //             var data = response.data;
        //             if (data === "") {
        //                 $scope.isDisabled = false;
        //                 Notification.error({
        //                     message: 'Dept  Already Created',
        //                     positionX: 'center',
        //                     delay: 2000
        //                 });
        //             }
        //             else {
        //                 $("#add_new_Dept_modal").modal('hide');
        //                 Notification.success({
        //                     message: 'Dept  Created  successfully',
        //                     positionX: 'center',
        //                     delay: 2000
        //                 });
        //                 $scope.getDeptList();
        //                 // // $scope.removeLoanDetails();
        //             }
        //
        //         }, function (error) {
        //             Notification.error({
        //                 message: 'Something went wrong, please try again',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //             $scope.isDisabled = false;
        //
        //         });
        //     }
        //     ;
        // }
        // $scope.saveDes = function () {
        //
        //     if ($scope.DesName == '' || $scope.DesName == null) {
        //         Notification.warning({message: 'Designation  can not be empty', positionX: 'center', delay: 2000});
        //         return false;
        //     }
        //     else {
        //         $scope.isDisabled = true;
        //         var saveDes;
        //         saveDes = {
        //             desId: $scope.DesId,
        //             desName: $scope.DesName,
        //             desDesc: $scope.DesDescription,
        //             status: $scope.status
        //
        //         };
        //         $http.post('/bs' + '/saveDes', angular.toJson(saveDes, "Create")).then(function (response, status, headers, config) {
        //             var data = response.data;
        //             if (data === "") {
        //                 $scope.isDisabled = false;
        //                 Notification.error({
        //                     message: 'Dept  Already Created',
        //                     positionX: 'center',
        //                     delay: 2000
        //                 });
        //             }
        //             else {
        //                 $("#add_new_Desig_modal").modal('hide');
        //                 Notification.success({
        //                     message: 'Dept  Created  successfully',
        //                     positionX: 'center',
        //                     delay: 2000
        //                 });
        //                 $scope.getDesList();
        //                 // // $scope.removeLoanDetails();
        //             }
        //
        //         }, function (error) {
        //             Notification.error({
        //                 message: 'Something went wrong, please try again',
        //                 positionX: 'center',
        //                 delay: 2000
        //             });
        //             $scope.isDisabled = false;
        //
        //         });
        //     }
        //     ;
        // }
        $scope.DeletePayroll = function (data) {
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
                        $http.post($scope.bshimServerURL + '/DeletePayroll?EmpId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.payrollList;
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
                            $scope.getPayrollList();
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


