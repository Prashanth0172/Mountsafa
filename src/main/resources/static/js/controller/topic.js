app.controller('topicController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;

        $scope.getPaginatedTopicList = function (page) {
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
                prevPage: $scope.isPrev,
                nextPage: $scope.isNext
            }
            if(angular.isUndefined($scope.SearchText)){
                $scope.SearchText="";
            }
            if(angular.isUndefined($scope.gradeNameText)||$scope.gradeNameText==null){
                $scope.gradeNameText="";
            }
            if(angular.isUndefined($scope.studentText)||$scope.studentText==null){
                $scope.studentText="";
            }
            $http.post($scope.bshimServerURL  + '/getPaginatedTopicList?searchText=' + $scope.SearchText+'&checkboxStatusForStudent='+$scope.checkboxStatusForStudent+'&gradeSearch='+$scope.gradeNameText+'&studentSearch='+$scope.studentText,angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                $scope.topicList = data.list;
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
        $scope.getPaginatedTopicList();
        $scope.editTopic  = function(data) {
            $scope.topicId = parseInt(data.topicId);
            $scope.levelId = parseInt(data.level);
            $scope.levelClass($scope.levelId);
            $scope.classId = parseInt(data.classId);
            $scope.classSubject($scope.classId);
            $scope.subjectId =parseInt(data.subject);
            $scope.subjectChapter($scope.subjectId);
            $scope.topicText = data.topicName;
            $scope.StatusText = data.status;
            $scope.previoustopicDetails=angular.fromJson(data.topicList);
            angular.forEach($scope.previoustopicDetails,function (val,key) {
                val.chapter=parseInt(val.chapter);
                val.Assignment=parseInt(val.Assignment);
            });
            $scope.operation = 'Edit';
            $('#topic-title').text("Edit Topic");
            $("#add_new_topic_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };


        $scope.deleteTopic = function (data) {
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
                            topicId:data.topicId,
                            subjectId:data.subject,
                            chapterId:data.chapter,
                            topicText:data.topicName,
                            StatusText:data.status

                        };
                        $http.post($scope.bshimServerURL +"/deleteTopic", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getPaginatedTopicList();
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