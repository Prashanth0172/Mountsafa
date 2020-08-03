
app.directive("addNewTopic", function ($http, Notification) {
    return {
        restrict: 'E',
        templateUrl: "partials/AddTopic.html",
        link: function ($scope) {
            $scope.removeTopic = function () {
                $scope.topicId="";
                if($scope.type!='sow'){
                    $scope.levelId=null;
                    $scope.classId = null;
                    $scope.subjectId = null;
                    $scope.previoustopicDetails=[];
                }
            };
            $scope.addTopic = function () {
                if($scope.type!='sow'){
                    $scope.removeTopic();
                }
                $('#topic-title').text("Add Topic");
                $scope.addNewTopic();
                $scope.StatusText = "Active";
                $("#submit").text("Save");
                $("#add_new_topic_modal").modal('show');
            };
            $scope.previoustopicDetails=[];
            $scope.addNewTopic = function(){
                if($scope.previoustopicDetails==""){
                    $scope.previoustopicDetails = [];
                }
                $scope.previoustopicDetails.push({
                    chapter:null,
                    TopicName:'',
                    Assignment:null,
                    status:"Active"

                });
            };
            $scope.removecross = function(data){
                $scope.index=data;
                $scope.previoustopicDetails.splice($scope.index,1);
            };

            $scope.getGradeList = function () {
                $http.post($scope.bshimServerURL + '/getGradeListNormal').then(function (response) {
                    var data = response.data.object;
                    $scope.gradeList = data;
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                });
            };
            $scope.getGradeList();
            $scope.levelClass = function(gradeId){
                if(gradeId==undefined){
                    gradeId=null;
                }
                if(gradeId!=null){
                    var url = "/bs/getClassLevel?levelId=" + gradeId;
                    $http.post(url).then(function (response) {
                        var data = response.data;
                        $scope.classList = angular.copy(data);
                    })
                }
            }
            $scope.checkTopicName=function(topic,index){
                angular.forEach($scope.previoustopicDetails,function (val,key) {
                    if(index!=key){
                        if(val.TopicName==topic.TopicName&&val.chapter==topic.chapter){
                            Notification.error({
                                message: ' Topic and Chapter is already Added',
                                positionX: 'center',
                                delay: 2000
                            });
                            topic.TopicName=null;
                        }
                    }
                })
            }

            $scope.classSubject = function(classId){
                if(classId==undefined){
                    classId=null;
                }
                if(classId!=null) {
                    var url = "/bs/getclassSubject?classId=" + classId;
                    $http.post(url).then(function (response) {
                        var data = response.data;
                        $scope.subjectList = angular.copy(data);
                    })
                }
            }
            $scope.subjectChapter= function(subjectId){
                if(subjectId==undefined){
                    subjectId=null;
                }
                if(subjectId!=null) {
                    var url = "/bs/getChapterSubject?subjectId=" + subjectId;
                    $http.post(url).then(function (response) {
                        var data = response.data;
                        $scope.chapterList = angular.copy(data);
                    })
                }
            }
            $scope.saveTopic = function () {
                // if ($scope.subjectId === ''||$scope.subjectId==null||angular.isUndefined($scope.subjectId)) {
                //        Notification.warning({message: 'Select Subject', positionX: 'center', delay: 2000});
                //    }
                //   else if ($scope.chapterId === ''||$scope.chapterId==null||angular.isUndefined($scope.chapterId)) {
                //        Notification.warning({message: 'Select Chapter', positionX: 'center', delay: 2000});
                //    }
                // else if ($scope.topicText === ''||$scope.topicText==null||angular.isUndefined($scope.topicText)) {
                //     Notification.warning({message: 'Enter Topic', positionX: 'center', delay: 2000});
                // }
                // else {
                var saveDetails;
                saveDetails = {
                    topicId:$scope.topicId,
                    level:$scope.levelId,
                    classId:$scope.classId,
                    subject:$scope.subjectId,
                    topicList: angular.toJson($scope.previoustopicDetails),
                };
                $http.post($scope.bshimServerURL + '/saveTopic', angular.toJson(saveDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_new_topic_modal").modal('hide');
                        $scope.removeTopic();
                        $scope.getPaginatedTopicList();
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
            }
            $scope.getComponentList = function () {
                $http.post($scope.bshimServerURL  + '/getComponentList').then(function (response) {
                    var data = response.data;
                    $scope.componentList= data;

                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                })

            };

            $scope.getComponentList();

        }

        }
});