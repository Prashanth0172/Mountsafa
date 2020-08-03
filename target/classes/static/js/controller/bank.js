/**
 * Created by azgar.h on 7/1/2017.
 */

app.controller('bankCtrl',
    function ($scope, $http, $location, $filter, Notification, ngTableParams, $timeout) {
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.regEx = "/^[0-9]{10,10}$/";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.inactiveStatus = "Active";
        $scope.removeBankDetails = function () {
            $scope.bankId = "";
            $scope.bankNameText = "";
            $scope.AddressText = "";
            $scope.IFSCCodeText = "";
            $scope.EmailText = "";
            $scope.BranchNameText = "";
            $scope.PhoneNoText = "";
            $scope.accountNoText = "";
            $scope.operation = "";
        };
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.inactiveBank = function () {
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
            }
            $scope.clicked = !$scope.clicked;
            $http.post('/bs' + "/getBankList?type=" + $scope.inactiveStatus).then(function (response) {
                var data = response.data;
                $scope.bankList = data;
                $scope.listStatus = false;
            })
        };
        $scope.listStatus = "";
        $scope.getBankList = function (type,page) {

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
            if (angular.isUndefined($scope.bankSearchText)) {
                $scope.bankSearchText = "";
            }
            $http.post('/bs' + '/getPaginatedBankList?type='+  $scope.inactiveStatus + '&searchText=' + $scope.bankSearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                $scope.bankList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getBankList();
        $scope.addNewbankPopulate = function () {
            $scope.bankStatusText = "Active";
            $('#bank-title').text("Add Bank");
            $("#submit").text("Save");
            $("#add_new_Bank_modal").modal('show');
        };

        $scope.deleteBank = function (data) {
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
                        $http.post('/bs' + '/deleteBank?bankName=', data.bankName).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.status = data.status;
                            if ($scope.status == "InActive") {
                                $scope.getBankList();
                                Notification.success({
                                    message: 'It is Already in use So Status Changes to Inactive',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            } else {
                                $scope.removeBankDetails();
                                if ($scope.bankStatusText == "InActive") {
                                    $scope.getBankList("", "InActive");
                                    Notification.success({
                                        message: 'Status has been changed to Active',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                }
                                else {
                                    $scope.getBankList("", "");
                                    Notification.success({
                                        message: 'Status has been changed to InActive',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                }
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

        $scope.saveNewBank = function () {
            if ($scope.accountNoText === '' || angular.isUndefined($scope.accountNoText)) {
                Notification.warning({message: 'Account No can not be empty', positionX: 'center', delay: 2000});
            }
            // if ($scope.EmailText === '' || angular.isUndefined($scope.EmailText)) {
            //     Notification.warning({message: 'Enter valid EmailId', positionX: 'center', delay: 2000});
            // }
            else if ($scope.bankNameText === '' || angular.isUndefined($scope.bankNameText)) {
                Notification.error({message: 'Bank Name can not be empty', positionX: 'center', delay: 2000});
            }
            else {
                $scope.isDisabled = true;
                $timeout(function () {
                    $scope.isDisabled = false;
                }, 2000)
                var saveBankDetails;
                saveBankDetails = {
                    bankId: $scope.bankId,
                    bankName: $scope.bankNameText,
                    address: $scope.AddressText,
                    iFSCCode: $scope.IFSCCodeText,
                    bankEmail: $scope.EmailText,
                    branchName: $scope.BranchNameText,
                    bankPhoneNo: $scope.PhoneNoText,
                    bankAccountNo: $scope.accountNoText,
                    status: $scope.bankStatusText
                };

                $http.post('/bs' + '/saveBank', angular.toJson(saveBankDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({
                            message: 'Bank Name  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $scope.removeBankDetails();
                        $scope.getBankList();
                        $("#add_new_Bank_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.bankSearchText = "";
                        }
                        Notification.success({message: 'Bank Created  successfully', positionX: 'center', delay: 2000});
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
        $scope.getBankList();
        $scope.editbankPopulate = function (bankName) {
            $http.post('/bs' + '/editBank?bankName=' + bankName).then(function (response) {
                var data = response.data;
                $scope.setupobj = data;
                $scope.bankId = data.bankId;
                $scope.bankNameText = data.bankName;
                $scope.AddressText = data.address;
                $scope.IFSCCodeText = data.iFSCCode;
                $scope.EmailText = data.bankEmail;
                $scope.BranchNameText = data.branchName;
                $scope.PhoneNoText = data.bankPhoneNo;
                $scope.accountNoText = data.bankAccountNo;
                $scope.bankStatusText = data.status;
                $('#bank-title').text("Edit Bank");
                $("#submit").text("Update");
                $("#add_new_Bank_modal").modal('show');

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        }, function (error) {
            Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };
    });
