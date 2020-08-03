app.controller('gradingController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;

        $scope.removeList = function () {
                $scope.gradeMasterId=null;
                $scope.minimum = null;
                $scope.maximun = null;
                $scope.previouslistDetails=[];
        };


        $scope.addList = function () {
            $('#list-title').text("Add GradingMaster");
            $scope.addNewList();
            $("#submit").text("Save");
            $("#add_new_List_modal").modal('show');
        };

        $scope.previouslistDetails=[];
        $scope.addNewList = function(){
            if($scope.previouslistDetails==""){
                $scope.previouslistDetails = [];
            }
            $scope.previouslistDetails.push({
                minimum:null,
                grading:'',
                maximum:null,
                gradeMasterId:null,

            });
        };
        $scope.removecrossing = function(data){
            $scope.index=data;
            $scope.previouslistDetails.splice($scope.index,1);
        };

      ;



        $scope.editList  = function(data) {
            $scope.gradeMasterId = data.gradeMasterId;
            $scope.previouslistDetails=angular.fromJson(data.list);
            angular.forEach($scope.previouslistDetails,function (val,key) {
                val.minimum=parseInt(val.minimum);
                val.maximum=parseInt(val.maximum);
                val.grading=parseInt(val.grading);
            });
            $scope.previouslistDetails = angular.copy(data);
            $scope.operation = 'Edit';
            $('#list-title').text("Edit List");
            $("#add_new_List_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };

        $scope.getGradingList = function () {
            var url = "/bs/getGradingList";
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.topicDetailsList = angular.copy(data);
            })
        }
        $scope.getGradingList();

        $scope.saveList = function () {
            var saveDetails;
            saveDetails = {
                list: angular.toJson($scope.previouslistDetails)
            };
            $http.post($scope.bshimServerURL + '/saveList', angular.toJson(saveDetails)).then(function (response) {
                var data = response.data;
                $("#add_new_List_modal").modal('hide');
                $scope.getGradingList();
                $scope.removeList();

                if (data == "") {
                    Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                }
                else {
                    if (!angular.isUndefined(data) && data !== null) {
                        $scope.searchText = "";
                    }
                    Notification.success({
                        message: ' Created  successfully',
                        positionX: 'center',
                        delay: 2000
                    });
                }
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };


        $scope.deleteList = function (data) {
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
                            gradeMasterId:data.gradeMasterId,
                            previouslistDetails:data.list,
                        };
                        $http.post($scope.bshimServerURL +"/deleteList", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
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