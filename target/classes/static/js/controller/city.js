app.controller('cityController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "InActive";

        $scope.removeCity = function () {
            $scope.stateId=null;
            $scope.countryId = null;
            $scope.cityNameText = "";
            $scope.StatusText = "";
            $scope.operation = "";
        };

        $scope.countryState = function(country){
            var url = "/bs/getCountryState?countryId=" + country;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.stateList = angular.copy(data);
                $scope.state=[];
                angular.forEach($scope.stateList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.state.push(val);
                    }

                })

            })
        }

        // $scope.countryState=function(country){
        //
        //     $http.post($scope.bshimServerURL +"getCountryState?countryId" + country,angular.toJson()).then(function (response) {
        //         var data= response.data;
        //         $scope.stateList=angular.copy(data);
        //         $scope.state=[];
        //         angular.forEach($scope.stateList,function (val,key) {
        //             if(val.status=="Actve"){
        //                 $scope.state.push(val);
        //             }
        //         })
        //
        //     })
        // }
        
        $scope.getCountryList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getCountryList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.countryList= data;
                $scope.searchText = val;
                $scope.country=[];
                angular.forEach($scope.countryList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.country.push(val);
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

        $scope.getCountryList();

        $scope.inactiveCity = function () {
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
        $scope.getPaginationList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getpaginatedcity?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.cityList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                // $scope.removeState();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getPaginationList();


        $scope.editCity  = function(data) {
            $scope.cityId = data.cityId;
            $scope.countryId = data.countryId;
            $scope.countryState(data.countryId);
            $scope.stateId = data.stateId;
            $scope.cityNameText = data.cityName;
            $scope.StatusText = data.status;
            $scope.operation = 'Edit';
            $('#city-title').text("Edit City");
            $("#add_new_city_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.addCity = function () {
            $('#city-title').text("Add City");
            $scope.StatusText = "Active";
            $("#submit").text("Save");
            $("#add_new_city_modal").modal('show');
        };

        $scope.saveCity = function () {
            if (angular.isUndefined($scope.countryId) || $scope.countryId == '' || $scope.countryId == null) {
                Notification.warning({message: ' Please Select the Country', positionX: 'center', delay: 2000});
            }
            else  if (angular.isUndefined($scope.stateId) || $scope.stateId == ''||$scope.stateId == null) {
                Notification.warning({message: 'Select state', positionX: 'center', delay: 2000});
            }
            else if (angular.isUndefined($scope.cityNameText) || $scope.cityNameText == ''|| $scope.cityNameText == null) {
                Notification.warning({message: ' Please Enter the City', positionX: 'center', delay: 2000});
            }
            else {
                var saveCityDetails;
                saveCityDetails = {
                    cityId: $scope.cityId,
                    status: $scope.StatusText,
                    cityName: $scope.cityNameText,
                    stateId: $scope.stateId,
                    countryId: $scope.countryId

                };
                $http.post($scope.bshimServerURL + '/saveCity', angular.toJson(saveCityDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeCity();
                        $scope.getPaginationList();
                        $("#add_new_city_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'State Created  successfully',
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
        $scope.deleteCity = function (data) {
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
                            cityId:data.cityId,
                            stateId:data.stateName,
                            StatusText:data.status,
                            cityNameText:data.cityName,
                            countryId:data.countryId

                        };
                        $http.post($scope.bshimServerURL +"/deleteCity", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
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