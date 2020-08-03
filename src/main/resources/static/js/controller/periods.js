app.controller('periodsController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        // $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.inactiveStatus = "Active";
        $scope.removePeriodsDetails = function () {
            $scope.periodId="";
            $scope.periodName = "";
            $scope.periodTo = "";
            $scope.periodFrom = "";
            $scope.StatusText = null;
            $scope.weekdayText = null;
            $scope.hours = "";
        };
        $scope.editPeriods  = function(data) {
                $scope.periodId = data.periodId;
                $scope.periodName = data.periodName;
                $("#from_time").val(data.periodFrom);
                $("#to_time").val(data.periodTo);
                $("#total_hours").val(data.hours);
                $("#weekdayId").val(data.weekdayText);
                $scope.StatusText = data.status;
                $scope.operation = 'Edit';
                $('#period-title').text("Edit Period");
                $("#add_new_period_modal").modal('show');
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
        };
        $scope.addNewPeriodsPopulate = function () {
            $('#period-title').text("Add Period");
            $scope.periodName = null;
            $scope.StatusText = "Active";
            $("#submit").text("Save");
            $("#add_new_period_modal").modal('show');
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
            $scope.getPaginationList();

        };
        $scope.getPaginationList = function (page){
            switch (page){
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
            $http.post($scope.bshimServerURL + "/getpaginatedPeriod?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.periodList = data.list;
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
        $scope.getPaginationList();

        $scope.getWeekday = function () {
            $http.post($scope.bshimServerURL + '/getWeekday').then(function (response) {
                var data = response.data;
                $scope.weekdayList = data;
                weekdayId
                var html='<option>Select</option>';
                for(var i=0;i<$scope.weekdayList.length;i++){

                    html+='<option value="'+$scope.weekdayList[i]+'">'+$scope.weekdayList[i]+'</option>'

                }
                $("#weekdayId").html(html);

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            });
        };
        $scope.getWeekday();

        $scope.savePeriod = function () {
            if ($scope.periodName === ''||$scope.periodName==null||angular.isUndefined($scope.periodName)) {
                Notification.warning({message: 'Enter period Name', positionX: 'center', delay: 2000});
            }
            else {
                var savePeriodDetails;
                savePeriodDetails = {
                    periodId: $scope.periodId,
                    periodName: $scope.periodName,
                    weekdayText: $("#weekdayId").val(),
                    periodTo: $("#to_time").val(),
                    periodFrom: $("#from_time").val(),
                    hours: $("#total_hours").val(),
                    status: $scope.StatusText
                };
                $http.post($scope.bshimServerURL + '/savePeriod', angular.toJson(savePeriodDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removePeriodsDetails();
                        $scope.getPaginationList();
                        $("#add_new_period_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.periodSearchText = "";
                        }
                        Notification.success({
                            message: 'period Created  successfully',
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
            ;
        };
        
        $scope.caltime= function () {
            var valuestart = $("#from_time").val();
            var valuestop = $("#to_time").val();

//create date format
            var timeStart = new Date("01/01/2007 " + valuestart).getHours();
            var timeEnd = new Date("01/01/2007 " + valuestop).getHours();

            var hourDiff = timeEnd - timeStart;
        }

         $scope.timediff=function(s,e){
            s = timeobject(s);
            e = timeobject(e);
            e.hour = (e.ampm === 'PM' &&  s.ampm !== 'PM' && e.hour < 12) ? e.hour + 12 : e.hour;
            hourDiff = Math.abs(e.hour-s.hour);
            minuteDiff = e.minute - s.minute;

            if(minuteDiff < 0){
                minuteDiff = Math.abs(60 + minuteDiff);
                hourDiff = hourDiff - 1;
            }

            return hourDiff+':'+ Math.abs(minuteDiff);
        }
        $scope.timdiff = function () {
            if($('#from_time').val() != '' && $('#to_time').val() != '')
            {


                var valuestart = $("#from_time").val();
                var valuestop = $("#to_time").val();

                var startdata=valuestart.split(':');
                var stopdata=valuestop.split(':');
                var hoursdiff="";
                var minutediff="";
                if(startdata[0]>stopdata[0]){
                    hoursdiff=parseInt(startdata[0])-parseInt(stopdata[0]);
                }else{
                    hoursdiff=parseInt(stopdata[0])-parseInt(startdata[0]);
                }

                if(startdata[1]>stopdata[1]){
                    minutediff=parseInt(startdata[1])-parseInt(stopdata[1]);
                }else{
                    minutediff=parseInt(stopdata[1])-parseInt(startdata[1]);
                }
if(hoursdiff<10){
    hoursdiff="0"+hoursdiff;
}

                if(minutediff<10){
                    minutediff="0"+minutediff;
                }
                var hours=hoursdiff+":"+minutediff;

                var k=hours;
                $("#total_hours").val(k);




            }





        }
        $scope.deletePeriod = function (data) {
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
                            periodId:data.periodId,
                            periodName:data.periodName,
                            weekdayText:data.weekdayText,
                            periodTo:data.periodTo,
                            periodFrom:data.periodFrom,
                            hours:data.hours,
                            StatusText:data.status

                        };
                        $http.post($scope.bshimServerURL +"/deletePeriod", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getPaginationList();
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