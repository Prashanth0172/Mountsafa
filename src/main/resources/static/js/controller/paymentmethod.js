/**
 * Created by azgar.h on 7/1/2017.
 */

app.controller('paymentmethodCtrl',
    function ($scope, $http, $location, $filter, Notification, ngTableParams, $timeout) {
    $scope.inactiveStatus="Active";
        //added for pagination purpose @rahul
        $scope.firstPage=true;
        $scope.lastPage=false;
        $scope.pageNo=1;
        $scope.prevPage=false;
        $scope.isPrev=false;
        $scope.isNext=false;
        $scope.inactiveStatus = "Active";

        var location = window.location.origin;
        $scope.taxTypes = [
            {name: 'FullTax', value: 'FullTax'},
            {name: 'SimplifiedTax', value: 'SimplifiedTax'},
        ];
        $scope.notHide = "";
        $scope.updateCustomerId = function (newCustVal) {
            $scope.customer = newCustVal.customerId;
            $scope.removeAllItems();
        }
        $scope.removePaymentMethodDetails = function () {
            $scope.paymentmethodId = "0";
            $scope.PaymentMethodText="0";
            $scope.DescriptionText="0";
            $scope.TypeText="0";
            $scope.accountname="";
            $scope.defaultType=false;
            $scope.validateVoucher=false;
        };
        $scope.companyLogoPath = "";

        $scope.addNewPaymentMethodPopulate = function () {
            $scope.paymentmethodId = "";
            $scope.paymentmethodNameText = "";
            $scope.paymentmethodDescriptionText = "";
            $scope.paymentmethodTypeText = "";
            $scope.account = "";
            $scope.defaultType=false;
            $scope.validateVoucher=false;
            $scope.accountname="";
            $scope.paymentMethodText="Active";
            $('#payment-title').text("Add Payment Method");
            $("#add_new_PaymentMethod_modal").modal('show');

        };

        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";
        $scope.inactivePaymentMethod = function() {

            if($scope.clicked == false){
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
                var page="Page";
            }
            else{
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
                var page="";
            }
            $scope.clicked = !$scope.clicked;

        };


        $scope.getAccountList = function (val,showPopUp) {
            if (angular.isUndefined(val)) {
                val = "";
            }
            $http.post('/bs' + '/getAccountMasterList?accountSearchText=' + val).then(function (response) {
                var data = response.data;
                $scope.accountList = angular.copy(data);
                $("#selectAccount").modal('show');
                $scope.accountSearchText = val;
                $scope.searchText = val;
            },function (error) {
                Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
            })
        };

        $scope.appendAccount = function (account) {
            $scope.accountname = account.accountname;
            $scope.account = account.accountid;
            $scope.showEmailBox = false;
            $("#selectAccount").modal('hide');

        }
        $scope.getPaymentMethodList = function (type,page) {
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
            if (angular.isUndefined($scope.paymentMethodSearchText)) {
                $scope.paymentMethodSearchText = "";
            }
            $http.post('/bs' + '/getPaginatedPayMethodList?type='+  $scope.inactiveStatus + '&searchText=' + $scope.paymentMethodSearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                $scope.paymentMethodList = data.list;
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
        $scope.getPaymentMethodList();

        $scope.saveOrUpdatePayment= function () {
            if (angular.isUndefined($scope.paymentmethodNameText) || $scope.paymentmethodNameText == '' ) {
                Notification.warning({message: 'payment Name can not be empty', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.paymentmethodTypeText) || $scope.paymentmethodTypeText == '' ) {
                Notification.warning({message: 'payment Method Type can not be empty', positionX: 'center', delay: 2000});
            }

            else {
                $scope.isDisabled= true;
                $timeout(function(){
                    $scope.isDisabled= false;
                }, 3000)
                var savePaymentMethodDetails;
                savePaymentMethodDetails = {
                    paymentmethodId: $scope.paymentmethodId,
                    paymentmethodName: $scope.paymentmethodNameText,
                    paymentmethodDescription: $scope.paymentmethodDescriptionText,
                    paymentmethodType: $scope.paymentmethodTypeText,
                    accountMaster: $scope.accountname,
                    validateVoucher:$scope.validateVoucher,
                    defaultType:$scope.defaultType,
                    status:$scope.paymentMethodText
                };
                $http.post('/bs' + '/savePaymentMethod', angular.toJson(savePaymentMethodDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==""){
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removePaymentMethodDetails();
                        $scope.getPaymentMethodList();
                        $("#add_new_PaymentMethod_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.paymentMethodSearchText = "";
                        }
                        Notification.success({
                            message: 'Payment Method Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                },function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });

            };
        };
        $scope.editPayment = function(data) {
            $scope.setupobj = data;
            $scope.paymentmethodId = data.paymentmethodId;
            $scope.paymentmethodNameText = data.paymentmethodName;
            $scope.paymentmethodDescriptionText=data.paymentmethodDescription;
            $scope.paymentmethodTypeText=data.paymentmethodType;
            $scope.paymentMethodText=data.status;
            $scope.defaultType=data.defaultType==true;
            if(data.accountMaster!=null) {
                $scope.accountname = data.accountMaster;
            }
            else {
                $scope.accountname="";
            }
            if(data.defaultType=='true'){
                $scope.defaultType=true;
            }
            else {
                $scope.defaultType=false;
            }
            if(data.validateVoucher=='true'){
                $scope.validateVoucher=true;
            }
            else {
                $scope.validateVoucher=false;
            }
            $('#payment-title').text("Edit Payment Method");
            $("#add_new_PaymentMethod_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };
        $scope.deletePayment = function (data) {
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
                    //  alert("delete");
                    if(result == true){
                        $scope.paymentmethodId = data.paymentmethodId;
                        $scope.paymentmethodNameText=data.paymentmethodName;
                        $scope.paymentmethodDescriptionText=data.paymentmethodDescription;
                        $scope.CashAccountIDText=data.accountMaster;
                        $scope.paymentMethodText=data.status;
                        var deleteDetails = {
                            paymentmethodId : $scope.paymentmethodId,
                            paymentmethodName: $scope.paymentmethodNameText,
                            paymentmethodDescription : $scope.paymentmethodDescriptionText,
                            accountMaster: $scope.account
                        };
                        $http.post('/bs'  + '/deletePaymentMethod', angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            if(data=="") {
                                Notification.success({
                                    message: 'It Is Already In Use Cant be Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }else {
                                $scope.getPaymentMethodList();
                                if($scope.paymentMethodText=="InActive") {
                                    $scope.getPaymentMethodList("","InActive");
                                    Notification.success({
                                        message: 'Status has been changed to Active',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                }
                                else{
                                    $scope.getPaymentMethodList("","");
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

    });
