app.controller('headerCtrl',
    function($rootScope, $scope, $http) {
        $scope.bshimServerURL = "/bs";
        // if(!isCookieSet){
        //     $rootScope.hidesideMenu = false;
        // }else{
        //     $rootScope.hidesideMenu = false;
        // }
        $scope.getCompanyName = function () {
            $http.post($scope.bshimServerURL  + '/getGeneralSettingsDetailsList').then(function (response) {
                var data = response.data;
                $scope.companyList= data.object;
                $rootScope.name =data.object.companyName;
                $rootScope.logo =data.object.attachFile;
                $rootScope.Address =data.object.address;
                $rootScope.gst =data.object.gst;
                $rootScope.organizationEmail =data.object.companyEmail;
            })

        };
        $scope.getCompanyName();
    });