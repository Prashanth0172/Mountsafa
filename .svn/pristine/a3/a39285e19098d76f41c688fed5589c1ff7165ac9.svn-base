/**
 * Created by prasad on 7/1/2017.
 */

app.controller('deductionCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.deductionId = "";
        $scope.deductionName = "";
        $scope.bshimServerURL ="/bs";
        $scope.deductionDescription = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "InActive";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;

        $scope.removeDeductionDetails = function () {
            $scope.deductionId = "";
            $scope.deductionName = "";
            $scope.deductionDescription = "";
            $scope.isDisabled= false;
            $scope.operation = "";
        };

        $scope.inactiveDeduction = function () {
            if ($scope.clicked == false) {
                $scope.inactiveStatus = "InActive";
                $scope.ButtonStatus = "Active";
            }
            else {
                $scope.inactiveStatus = "Active";
                $scope.ButtonStatus = "InActive";
            }
            $scope.clicked = !$scope.clicked;
            $scope.getPaginatedDeductionList();

        };
        //TO ADD//

        $scope.addDeduction = function () {
            $(".loader").css("display", "block");
            $scope.deductionId = "";
            $scope.deductionName = "";
            $scope.deductionDescription = "";
            $scope.status = "Active";
            $scope.removeDeductionDetails();
            $('#modelName').text("Add Deduction");
            $("#submit").text("Save");
            $("#add_new_Deduction_modal").modal('show');
        };


        $scope.editDeduction = function (data) {
            $scope.deductionId=data.deductionId;
            $scope.deductionName=data.deductionName;
            $scope.deductionDescription=data.deductionDesc;
            $scope.status=data.status;
            $('#modelName').text("Add Deduction");
            $("#submit").text("Save");
            $("#add_new_Deduction_modal").modal('show');

        }

        //   ToSAVE//
        $scope.saveDeduction = function () {
            if ($scope.deductionName == '' || $scope.deductionName == null || angular.isUndefined($scope.deductionName)) {
                Notification.warning({message: 'Deduction  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
                $scope.isDisabled = true;
                var saveDeductions;
                saveDeductions = {
                    deductionId: $scope.deductionId,
                    deductionName: $scope.deductionName,
                    deductionDesc: $scope.deductionDescription,
                    status: $scope.status

                };
                $http.post('/bs' + '/saveDeduction', angular.toJson(saveDeductions, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    $scope.getPaginatedDeductionList();
                    if (data === "") {
                        $scope.isDisabled = false;
                        Notification.error({
                            message: 'Deduction  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Deduction_modal").modal('hide');
                        Notification.success({
                            message: 'Deduction  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });

                        $scope.removeDeductionDetails();
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
        $scope.getPaginatedDeductionList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getPaginatedDeductionList?&type=" +  $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.deductionList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeDeductionDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginatedDeductionList();

        $scope.deleteDeduction = function (data) {
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
                        $http.post('/bs'  + '/deleteDeduction?deductionId='+ data).then(function (response) {
                            var data = response.data;
                            if (data == "") {
                                $scope.getPaginatedDeductionList();
                                Notification.success({
                                    message: 'Attribute deleted successfully',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                            else {
                                $("#add_new_Deduction_modal").modal('hide');
                                if (!angular.isUndefined(data) && data !== null) {
                                    $scope.searchText = "";
                                }
                                if ($scope.StatusText == "InActive") {
                                    $scope.getPaginatedDeductionList("", "InActive");
                                    Notification.success({
                                        message: 'Status has been changed to Active',
                                        positionX: 'center',
                                        delay: 2000
                                    });
                                }
                                else {
                                    $scope.getPaginatedDeductionList("", "");
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

