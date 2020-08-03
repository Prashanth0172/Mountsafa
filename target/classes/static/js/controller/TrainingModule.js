app.controller('trainingModuleController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.status='Active';
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "Active";

        $scope.removeGradeMaster = function () {
            $scope.trainingId="";
            $scope.trainingName = "";
            $scope.trainingDescription = "";
            $scope.statusText = "";
            $scope.trainingStatus = "";
            $scope.branchName=null;

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
            $scope.getTrainingModulePaginatedList();

        };




        $scope.EditTrainingModule = function (data) {
            $scope.trainingName = data.trainingModuleName;
            $scope.trainingDescription = data.trainingDescription;
            // $scope.statusText = data.gradeStatus;
            $scope.trainingId = data.trainingId;
            $scope.branchName = parseInt(data.branchId);
            $scope.trainingStatus = data.trainingStatus;

            $scope.operation = 'Edit';
            $('#student-title').text("Edit TrainingModule");
            $("#add_TrainingModule_master").modal('show');

        }, function (error) {
            Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };

        $scope.addtrainingmaster = function () {
            $scope.status ="Active";
            $scope.operation='create';
            $scope.removeGradeMaster();
            $('#student-title').text("Add Training");
            $("#add_TrainingModule_master").modal('show');

        };


        // $scope.getTrainingModuleList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getTrainingModuleList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.TrainingmoduleList= data;
        //         $scope.searchText = val;
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
        //
        // $scope.getTrainingModuleList();
        $scope.getTrainingModulePaginatedList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getTrainingModulePaginatedList?&type=" + $scope.ButtonStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                var i = 0;
                $scope.TrainingmoduleList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeTrainingMaster();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getTrainingModulePaginatedList();
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

        $scope.saveTrainingModule = function () {
            $scope.isDisabled= true;
            if (angular.isUndefined($scope.trainingName) || $scope.trainingName == '' || $scope.trainingName==null) {
                Notification.warning({message: 'TrainingModule Name can not be Empty', positionX: 'center', delay: 2000});


            } else {
                var saveTrainingModuleDetails;
                saveTrainingModuleDetails = {
                    trainingId: $scope.trainingId,
                    trainingModuleName: $scope.trainingName,
                    branchId: $scope.branchName,
                    trainingStatus: $scope.status,
                    trainingDescription: $scope.trainingDescription
                    // gradeStatus: $scope.statusText
                };
                $http.post($scope.bshimServerURL + "/saveNewTrainingModule", angular.toJson(saveTrainingModuleDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: ' Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_TrainingModule_master").modal('hide');
                        if($scope.operation=='Edit'){
                            Notification.success({
                                message: 'TrainingModule is Updated successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }else {
                            Notification.success({
                                message: 'TrainingModule is Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.removeGradeMaster();
                        $scope.getTrainingModulePaginatedList();
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
            }
        };
        $scope.DeleteTrainingModule = function (data) {
            // if (data.gradeStatus == "InActive" && data.gradeStatus != "Active") {
            //     Notification.warning({
            //         message: 'Cannot Delete Aleady in use',
            //         positionX: 'center',
            //         delay: 2000
            //     });
            // }
            // else {
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
                        var deleteDetails = {
                            trainingId: data.trainingId,
                            trainingName: data.trainingModuleName,
                            trainingDescription: data.trainingDescription,
                            trainingStatus: data.trainingStatus,
                            // gradeId: data.gradeId
                        };
                        $http.post($scope.bshimServerURL + "/deleteTrainingmodule", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getTrainingModulePaginatedList();
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
                                message: 'Cannot delete Already in Use',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };

    });