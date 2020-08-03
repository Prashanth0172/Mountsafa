
app.controller('trainerController',
    function ($scope, $rootScope, $http, $location, $filter, Notification) {
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.userRights = [];
        $scope.bshimServerURL ="/bs";
        $scope.operation = 'Create';
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.ButtonStatus = "Active";




        $scope.editTrainer = function(data){
            $scope.id =data.id;
            $scope.type = data.type;
            $scope.code = data.code;
            $scope.name = data.name;
            $scope.charges = data.charges;
            $scope.phone = data.phone;
            $scope.email = data.email;
            $scope.remarks = data.remarks;
            $scope.status = data.status;
            $scope.branchid=parseInt(data.branchId);
            $scope.branchList();
            $("#title").text("Edit Trainer");
            $("#add_user_trainer").modal('show');
        };
        $scope.removeTrainerDetails = function () {
            $scope.id = "";
            $scope.type = "";
            $scope.code = "";
            $scope.name = "";
            $scope.charges = "";
            $scope.phone = "";
            $scope.email = "";
            $scope.remarks = "";
            $scope.status = "";
            $scope.isDisabled= false;
            $scope.operation = "";
        };
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
            $scope.getTrainerPaginatedList();

        };
        $scope.getTrainerPaginatedList= function (page) {
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
            $http.post($scope.bshimServerURL + "/getTrainerPaginatedList?&type=" +$scope.ButtonStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                var i = 0;
                $scope.trainerList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeTrainerDetails();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getTrainerPaginatedList();
        $scope.deleteTrainer = function (data) {
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
                    if(result == true){
                        var deleteDetails = {
                            id:data.id,
                            name:data.name,
                            code:data.code,
                            type:data.type,
                            charges:data.charges,
                            phone:data.phone,
                            email:data.email,
                            remarks:data.remarks,
                            status:data.status,
                            branchId:data.branchId


                        };
                        $http.post("bs/deleteTrainer", angular.toJson(deleteDetails)).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getTrainerPaginatedList();
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

        $scope.saveTrainer = function () {
            if ($scope.branchid == '' || $scope.branchid == null) {
                Notification.warning({message: 'BranchName  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.name == '' || $scope.name == null) {
                Notification.warning({message: 'TrainerName  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.type == '' || $scope.type == null) {
                Notification.warning({message: 'TrainerType  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else if($scope.email == '' || $scope.email == null) {
                Notification.warning({message: 'TrainerEmail  can not be empty', positionX: 'center', delay: 2000});
                return false;
            }
            else {
            var saveTrainer;
            saveTrainer = {
                id:$scope.id,
                name: $scope.name,
                code: $scope.code,
                type: $scope.type,
                charges: $scope.charges,
                phone: $scope.phone,
                email: $scope.email,
                remarks: $scope.remarks,
                status: $scope.status,
                branchId:$scope.branchid

            };
            $http.post("/bs/saveTrainer", angular.toJson(saveTrainer)).then(function (response) {
                var data = response.data;
                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                } else {
                    $("#add_user_trainer").modal('hide');
                    $scope.getTrainerPaginatedList();
                    Notification.success({message: 'User Created  successfully', positionX: 'center', delay: 2000});
                }
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
            };

        }

        // $scope.getTrainerList = function () {
        //     $(".loader").css("display", "block");
        //     $http.post("/bs/getTrainerList").then(function (response) {
        //         var data = response.data.object;
        //         console.log(data);
        //         $scope.trainerList = data;
        //
        //     }, function (error) {
        //         Notification.error({
        //             message: 'Something went wrong, please try again',
        //             positionX: 'center',
        //             delay: 2000
        //         });
        //     })
        // };
        // $scope.getTrainerList();


        // $scope.editDes = function (data) {
        //     $scope.DesId=data.designationId;
        //     $scope.DesBranch =parseInt(data.branchId);
        //     $scope.DesName =data.designationName;
        //     $scope.DesDescription =data.designationDesc;
        //     $scope.status =data.designationStatus;
        //     $scope.operation = 'Edit';
        //     $('#designation-title').text("Edit Designation");
        //     $("#add_new_Desig_modal").modal('show');
        //     $("#submit").text("Update");
        // }, function (error) {
        //     Notification.error({
        //         message: 'Something went wrong, please try again',
        //         positionX: 'center',
        //         delay: 2000
        //     });
        //
        // };


        $scope.addtrainer = function () {
            $scope.id = null;
            $scope.holidayname="";
            $scope.employeetype=null;
            $scope.typeOfEmployee="";
            $scope.noofdays="";
            $scope.status="Active";
            $scope.dt=new Date();
            $scope.dt1=new Date();
            $scope.branchList();
            $("#title").text("Add Trainer");
            $("#add_user_trainer").modal('show');
        };



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


    });
