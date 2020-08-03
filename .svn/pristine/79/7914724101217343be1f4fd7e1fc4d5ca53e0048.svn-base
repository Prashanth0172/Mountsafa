/**
 * Created by prasad on 7/1/2017.
 */

app.controller('suppliersCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.SupId = "";
        $scope.SupBranch = "";
        $scope.SupName = "";
        $scope.SupCode = "";
        $scope.SupGst = "";
        $scope.SupAddress = "";
        $scope.SupPhone = "";
        $scope.SupEmail = "";
        $scope.SupRemarks = "";
        $scope.status = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.removeSuppliersDetails = function () {
            $scope.SupId = "";
            $scope.SupBranch = "";
            $scope.SupName = "";
            $scope.SupCode = "";
            $scope.SupGst = "";
            $scope.SupAddress = "";
            $scope.SupPhone = "";
            $scope.SupEmail = "";
            $scope.SupRemarks = "";
            $scope.status = "";
            $scope.isDisabled= false;
            $scope.operation = "";
        };
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "Active";
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
             $scope.getSuppliersPaginatedList();

        };


        //TO ADD//

        $scope.addSuppliers = function () {
            $(".loader").css("display", "block");
            $scope.SupId = "";
            $scope.SupBranch = "";
            $scope.SupName = "";
            $scope.SupCode = "";
            $scope.SupGst = "";
            $scope.SupAddress = "";
            $scope.SupPhone = "";
            $scope.SupEmail = "";
            $scope.SupRemarks = "";
            $scope.status = "Active";
            $('#modelName').text("Add Suppliers");
            $("#submit").text("Save");
            $("#add_new_Suppliers_modal").modal('show');
        };

        //
        // $scope.getSuppliersList = function () {
        //     $http.post($scope.bshimServerURL + '/getSuppliersList').then(function (response) {
        //         var data = response.data;
        //         $scope.suppliersList = data;
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     });
        // };
        // $scope.getSuppliersList();
        $scope.getSuppliersPaginatedList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getSuppliersPaginatedList?&type=" + $scope.ButtonStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.suppliersList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeSuppliersDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getSuppliersPaginatedList();


        $scope.editSuppliers = function (data) {
            $scope.SupId =data.suppliersId;
            $scope.SupBranch = parseInt(data.branchId);
            $scope.SupName = data.suppliersName;
            $scope.SupCode = data.suppliersCode;
            $scope.SupGst = data.gstNo;
            $scope.SupAddress =data.suppliersAddress;
            $scope.SupPhone = data.suppliersPhone;
            $scope.SupEmail = data.suppliersEmail;
            $scope.SupRemarks = data.suppliersRemarks;
            $scope.status = data.suppliersStatus;
            $scope.operation = 'Edit';
            $('#supplier-title').text("Edit supplier");
                $("#add_new_Suppliers_modal").modal('show');
                $("#submit").text("Update");
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });

        };
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
        //   ToSAVE//
        $scope.saveSuppliers = function () {

            if ($scope.SupName == '' || $scope.SupName == null) {
                Notification.warning({message: 'Supplier  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if (angular.isUndefined($scope.SupBranch) || $scope.SupBranch == ''|| $scope.SupBranch==null) {
                Notification.warning({message: 'Please Select Branch', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }
            else if (angular.isUndefined($scope.SupCode) || $scope.SupCode == ''|| $scope.SupCode==null) {
                Notification.warning({message: 'Give Correct SupplierCode', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }
            else if (angular.isUndefined($scope.SupEmail) || $scope.SupEmail == ''|| $scope.SupEmail==null) {
                Notification.warning({message: 'Give Correct EmailId', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }


            else {
                $scope.isDisabled = true;
                var saveSuppliers;
                saveSuppliers = {
                    suppliersId: $scope.SupId,
                    branchId: $scope.SupBranch,
                    suppliersName: $scope.SupName,
                    suppliersCode: $scope.SupCode,
                    gstNo: $scope.SupGst,
                    suppliersAddress: $scope.SupAddress,
                    suppliersPhone: $scope.SupPhone,
                    suppliersEmail: $scope.SupEmail,
                    suppliersRemarks: $scope.SupRemarks,
                    suppliersStatus: $scope.status


                };
                $http.post($scope.bshimServerURL + '/saveSuppliers', angular.toJson(saveSuppliers)).then(function (response) {
                    var data = response.data;
                    if (data === "") {
                        // $scope.isDisabled = false;
                        Notification.error({
                            message: 'Supplier  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Suppliers_modal").modal('hide');
                        Notification.success({
                            message: 'Supplier  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                         $scope.getSuppliersPaginatedList();
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

        $scope.deleteSuppliers = function (data) {
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
                        $http.post($scope.bshimServerURL + '/deleteSuppliers?suppliersId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.suppliersList;
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
                            $scope.getSuppliersPaginatedList();
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

