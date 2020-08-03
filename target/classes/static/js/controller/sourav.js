app.controller=('souravController' , function ($scope,$http,$function) {

    $scope.bshimServerURL = "/bs";


    $scope.saveSourav = function () {
        var savedetails;
        savedetails={
            souravNm: $scope.souravNm,
            sex: $scope.sex,
            checkbox:$scope.checkbox
        };
        $http.post($scope.bshimServerURL + '/saveSourav', angular.toJson(savedetails,create).then(function (response)  {
            var data=response.data;
        }));
    }

    $scope.getCountryList = function (val) {

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

})

