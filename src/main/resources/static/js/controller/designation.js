
/**
 * Created by prasad on 7/1/2017.
 */

app.controller('designationCtrl',
    function ($scope, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.DesId = "";
        $scope.DesName = "";
        $scope.DesDescription = "";
        $scope.status = "";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.ButtonStatus = "InActive";
        $scope.clicked = false;

        $scope.removeDesDetails = function () {
            $scope.DesId = "";
            $scope.DesBranch = null;
            $scope.DesName = "";
            $scope.DesDescription = "";
            $scope.status = "";
            $scope.isDisabled= false;
            $scope.operation = "";
        };


        //TO ADD//

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
            $scope.getDesignationPaginatedList();

        };

        $scope.addDes = function () {
            $(".loader").css("display", "block");
            $scope.DesName = "";
            $scope.DesDescription = "";
            $scope.status = "Active";
            $('#modelName').text("Add Designation");
            $("#submit").text("Save");
            $("#add_new_Desig_modal").modal('show');
        };

        $scope.editDes = function (data) {
            $scope.DesId=data.designationId;
            $scope.DesBranch =parseInt(data.branchId);
            $scope.DesName =data.designationName;
            $scope.DesDescription =data.designationDesc;
            $scope.status =data.designationStatus;
            $scope.operation = 'Edit';
            $('#modelName').text("Edit Designation");
            $("#add_new_Desig_modal").modal('show');
            $("#submit").text("Update");
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });

        };



        // $scope.getDesList = function () {
        //     $http.post($scope.bshimServerURL + '/getDesList').then(function (response) {
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
        $scope.getDesignationPaginatedList= function (page) {
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
            $http.post($scope.bshimServerURL + "/getDesignationPaginatedList?&type=" +   $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                var i = 0;
                $scope.designationList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeDesDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getDesignationPaginatedList();


        //   ToSAVE//
        $scope.saveDes = function () {

            if($scope.DesBranch === ''||$scope.DesBranch==null||angular.isUndefined($scope.DesBranch)) {
                Notification.warning({message: 'Enter Branch Name', positionX: 'center', delay: 2000});
            }
            else if ($scope.DesName === ''||$scope.DesName==null||angular.isUndefined($scope.DesName)) {
                Notification.warning({message: 'Enter Designation Name', positionX: 'center', delay: 2000});
            }
            else {
                var saveDes;
                saveDes = {
                    designationId: $scope.DesId,
                    designationName: $scope.DesName,
                    designationDesc: $scope.DesDescription,
                    branchId: $scope.DesBranch,
                    designationStatus: $scope.status

                };
                $http.post($scope.bshimServerURL + '/saveDes', angular.toJson(saveDes)).then(function (response) {
                    var data = response.data;
                    if (data === "") {
                        // $scope.isDisabled = false;
                        Notification.error({
                            message: 'Dept  Already Created',
                            positionX: 'center',
                            delay: 2000
                        });
                    }
                    else {
                        $("#add_new_Desig_modal").modal('hide');
                        Notification.success({
                            message: 'Dept  Created  successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                        $scope.getDesignationPaginatedList();
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

        $scope.deleteDes = function (data) {
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
                        $http.post($scope.bshimServerURL + '/deleteDes?designationId='+ data).then(function (response) {
                            var data = response.data;
                            $scope.status = data.designationStatus;
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
                            $scope.getDesignationPaginatedList();
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
    });

