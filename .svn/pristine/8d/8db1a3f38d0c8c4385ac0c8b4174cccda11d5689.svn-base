/**
 * Created by prasad on 7/1/2017.
 */

app.controller('earningCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.earningId = "";
        $scope.earningName = "";
        $scope.earningDesc = "";
        $scope.status = "";
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


        $scope.removeEarningDetails = function () {
            $scope.earningId = "";
            $scope.earningName = "";
            $scope.earningDesc = "";
            $scope.status = "Active";
            $scope.emethod = null;
            $scope.isDisabled= false;
            $scope.operation = "";
        };

        $scope.inactiveearning = function () {
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
            $scope.getPaginatedEarningList();

        };

        //TO ADD//

        $scope.addEarning = function () {
            $(".loader").css("display", "block");
            $scope.earningId = "";
            $scope.earningName = "";
            $scope.earningDesc = "";
            $scope.status = "Active";
            $scope.removeEarningDetails();
            $('#modelName').text("Add Earning");
            $("#submit").text("Save");
            $("#add_new_Earning_modal").modal('show');
        };

        //
        // $scope.getEarningList = function () {
        //     $http.post('/bs' + '/getEarningList').then(function (response) {
        //         var data = response.data;
        //         $scope.earningList = data;
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     });
        // };
        // $scope.getEarningList();

        $scope.getPaginatedEarningList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getPaginatedEarningList?&type=" +  $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.earningList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginatedEarningList();

        $scope.editEarning = function (data) {
            $scope.earningId=data.earningId;
            $scope.earningName=data.earningName;
            $scope.earningDesc=data.earningDesc;
            $scope.status=data.status;
            $scope.emethod = data.emethod;
            $scope.actualPeriod= data.actual;
            $scope.month1=data.month1;
            $scope.month2=data.month2;
            $scope.month3=data.month3;
            $scope.month4=data.month4;
            $scope.month5=data.month5;
            $scope.month6=data.month6;
            $scope.month8=data.month7;
            $scope.month9=data.month9;
            $scope.month10=data.month10;
            $scope.month11=data.month11;
            $scope.month12=data.month12;
            $scope.accumulated =data.accumulated;
            $('#modelName').text("Edit Earning");
            $("#submit").text("Save");
            $("#add_new_Earning_modal").modal('show');

        }
        $scope.isEmpty = function (card) {
            return card == '';
        }





        //   ToSAVE//
        $scope.saveEarning = function () {

            if ($scope.earningName == '' || $scope.earningName == null||angular.isUndefined($scope.earningName)) {
                Notification.warning({message: 'Earning  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
                $scope.isDisabled = true;
                var saveEarning;
                saveEarning = {
                    earningId: $scope.earningId,
                    earningName: $scope.earningName,
                    earningDesc: $scope.earningDesc,
                    status: $scope.status,
                    emethod: $scope.emethod,
                    actualPeriod: $scope.actualPeriod,
                    month1: $scope.month1,
                    month2: $scope.month2,
                    month3: $scope.month3,
                    month4: $scope.month4,
                    month5: $scope.month5,
                    month6: $scope.month6,
                    month7: $scope.month7,
                    month8: $scope.month8,
                    month9: $scope.month9,
                    month10: $scope.month10,
                    month11: $scope.month11,
                    month12: $scope.month12,
                    accumulated: $scope.accumulated


                };
                $http.post('/bs' + '/saveEarning', angular.toJson(saveEarning, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data === "") {
                        $scope.isDisabled = false;
                        Notification.error({
                            message: 'Earning  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Earning_modal").modal('hide');
                        Notification.success({
                            message: 'Earning  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                        $scope.getPaginatedEarningList();
                        $scope.removeEarningDetails();
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

        $scope.deleteEarning = function (data) {
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
                        $http.post('/bs' + '/deleteEarning?earningId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.status;
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
                            $scope.getPaginatedEarningList();
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

