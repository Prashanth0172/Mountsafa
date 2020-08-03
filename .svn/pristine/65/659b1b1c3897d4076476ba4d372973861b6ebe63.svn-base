app.controller('viewRepCtrl',
    function ($scope, $http, $location, $filter, $timeout, $rootScope, Notification) {
        $scope.bshimServerURL = "/bs";

        $scope.today = function () {
            $scope.dt = new Date();
            $scope.dt1 = new Date();
        };
        $scope.today();
        $scope.format = 'dd/MM/yyyy';

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };
        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.popup2 = {
            opened: false
        };
        $scope.getFinStartDate = function () {
            var url = "company/getCompany";
            $http.get(url)
                .then(function mySuccess(response) {
                    $scope.dt = new Date(response.data.startyear);
                    $scope.dt.setHours(10);
                    $scope.dt1 = new Date();
                    $scope.dateOptions = {
                        minDate: response.data.startyear,
                        maxDate: response.data.endyear
                    };
                });
        }
        $scope.getFinStartDate();

        $scope.exportFullDataExcel = function () {
            $rootScope.exportAction("excel")
        };
        $scope.exportFullDataPdf = function () {
            $rootScope.exportAction("pdf")
        };
        $scope.getAccountList = function (val,showPopUp) {
            if (angular.isUndefined(val)) {
                val = "";
            }
            $http.post('/bs' + '/getAccountMasterList?accountSearchText=' + val).then(function (response) {
                var data = response.data;
                $scope.accountList = angular.copy(data);
                $("#selectAccount").modal('show');
                $scope.accountSearchText = val;
                $scope.searchText = val;
            },function (error) {
                Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
            })
        };
        $scope.appendAccount = function (account) {
            $scope.accountSearchText = account.accountname;
            $scope.account = account.accountid;
            $scope.showEmailBox = false;
            $("#selectAccount").modal('hide');

        }

            $scope.getTransctionsSelAccount = function () {

                // if ($scope.dt > $scope.dt1) {
                //     Notification.info({
                //         message: 'FromDate should be less than ToDate ',
                //         positionX: 'center',
                //         delay: 2000
                //     });
                //     return false;
                // }
                $http.get('/bs' + '/viewLedger?accountMasterId=' + $scope.account).then(function (response) {
                    $scope.gltransactionList = response.data;
                })

            }
            $scope.remove = function () {
                $scope.text = "";
                $scope.accountSearchText = "";

            }
    });
