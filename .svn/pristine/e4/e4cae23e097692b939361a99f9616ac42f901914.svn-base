app.controller('discounttypeController',
    function($scope, $http, $location, $filter, Notification, ngTableParams,  $timeout, $window, $rootScope) {
        console.log("aaaaaaaaaaaaa");
        $scope.bshimServerURL = "/bs";
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.customerId = 1;
        $scope.userRights = [];
        $scope.operation = 'Create';
        $scope.customer = 1;
        $scope.ButtonStatus = "InActive";
        $scope.inactiveStatus = "Active";
        $scope.clicked = false;
        
        $scope.feeconfigurationList=function () {
            $window.location.href = '/home#!/configuration';

        };
        $scope.removeDiscountType = function () {
            $scope.discountId="";
            $scope.disname = "";
            $scope.DiscountCriteria = "";
            $scope.DiscountPercentage = "";
        };
        $scope.getDiscountTypeList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getDiscountTypeList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.discountTypeList= data;
                $scope.searchText = val;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.inactiveButton = function (){
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
            $scope.getPaginatedDiscountTypeList();

        };
        $scope.getPaginatedDiscountTypeList = function (page) {
            if(angular.isUndefined($scope.searchText)){
                $scope.searchText="";
            }
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
                    $scope.lastPage = false;
                    $scope.isNext = false;
                    $scope.isPrev = false;
                    $scope.pageNo = 0;
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
            $http.post($scope.bshimServerURL  + '/getPaginatedDiscountTypeList?searchText=' + $scope.searchText+'&type='+$scope.inactiveStatus, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                $scope.discountTypeList = data.list;
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
        $scope.getPaginatedDiscountTypeList();
        $scope.branchList = function() {
            $http.post("bs/getBranchesList").then(function (response) {
                var data = response.data;
                $scope.branchesList = data;
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
        }

        $scope.branchList();

        $scope.addDiscount = function () {
            $scope.removeDiscountType();
            $scope.status="Active";
            $scope.branchid=null;
            $scope.operation='create';
            $('#student-title').text("Add Discount Type");
            $("#add_discount_type").modal('show');
        };
        $scope.fromDateList = [];
        $scope.toDateList = [];
        $scope.saveDiscountType=function () {
            if ($scope.disname == '' || $scope.disname == null) {
                Notification.warning({message: 'DiscountName  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.DiscountCriteria == '' || $scope.DiscountCriteria == null) {
                Notification.warning({message: 'DiscountCriteria  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
           else {
                $scope.isDisabled = true;
                var saveDiscountDetails;
                saveDiscountDetails = {
                    discountId: $scope.discountId,
                    discountType: $scope.disname,
                    discountCriteria: $scope.DiscountCriteria,
                    discountPercentage: $scope.DiscountPercentage,
                    branchId: $scope.branchId,
                    discountStatus: $scope.status
                };
                $http.post($scope.bshimServerURL + "/saveDiscountType", angular.toJson(saveDiscountDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: ' Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_discount_type").modal('hide');
                        if($scope.operation=='Edit'){
                            Notification.success({
                                message: 'DiscoutType is Updated successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }else {
                            Notification.success({
                                message: 'DiscoutType is Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.removeDiscountType();
                        $scope.getPaginatedDiscountTypeList();
                        $scope.isDisabled= false;

                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled= false;

                });
            };
        };

        $scope.EditDiscountType = function(data) {
            $scope.discountId=data.discountId;
            $scope.disname=data.discountType;
            $scope.DiscountCriteria =data.discountCriteria;
            $scope.DiscountPercentage =data.discountPercentage;
            $scope.status =data.discountStatus;
            $scope.branchId = parseInt(data.branchId);
            $scope.operation='Edit';
            $('#student-title').text("Edit Discount Type");
            $("#add_discount_type").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };

        $scope.DeleteDiscountType = function (data) {
            bootbox.confirm({
                title: "Alert",
                message: "Do you want to Continue?",
                buttons: {
                    confirm: {
                        label: 'OK'
                    },
                    cancel: {
                        label: 'Cancel'
                    }
                },
                callback: function (result) {
                    if(result == true){
                        var deleteDetails = {
                            discountId:data.discountId,
                            discountType:data.discountType
                        };
                        $http.post($scope.bshimServerURL +"/deleteDiscountType", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getPaginatedDiscountTypeList();
                            if(data==true){
                                Notification.success({
                                    message: 'Successfully Deleted',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }else {
                                Notification.warning({
                                    message: 'Cannot delete Already in Use',
                                    positionX: 'center',
                                    delay: 2000
                                });
                            }
                        }, function (error) {
                            Notification.warning({
                                message: 'Cannot be delete,already it is using',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };


    });