app.controller('branchesController',
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
        $scope.Email = 'me@example.com';

        $scope.removeBranches = function () {
            $scope.branchesId="";
            $scope.branchNameText = "";
            $scope.branchCodeText = "";
            $scope.emailText = "";
            $scope.contactText = "";
            $scope.addline1Text = "";
            $scope.addline2Text = "";
            $scope.countryId = null;
            $scope.stateId = null;
            $scope.cityId = null;
            $scope.postalCodeText = "";
            $scope.usrnameText = "";
            $scope.pwdText = "";
            $scope.StatusText = "";
            $scope.operation = "";
        };


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
                angular.forEach( $scope.countryList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.country.push(val) ;
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

        // $scope.getBranchesList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getBranchesList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.branchesList= data;
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
        // $scope.getBranchesList();

        $scope.inactivebranch = function () {
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
            $http.post($scope.bshimServerURL + "/getpaginatedbranch?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.branchesList = data.list;
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



        $scope.editBranches  = function(data) {
            $scope.branchesId = data.branchesId;
            $scope.branchNameText = data.branchName;
            $scope.branchCodeText = data.branchCode;
            $scope.emailText = data.email;
            $scope.contactText = data.contact;
            $scope.addline1Text = data.addressLine1;
            $scope.addline2Text = data.addressLine2;
            $scope.countryId = parseInt(data.country);
            $scope.countryState(data.country);
            $scope.stateId = parseInt(data.state);
            $scope.stateCity(data.state);
            $scope.cityId = parseInt(data.city);
            $scope.postalCodeText = data.postalCode;
            $scope.usrnameText = data.userName;
            $scope.pwdText = data.password;
            $scope.StatusText = data.status;
            $scope.operation = 'Edit';
            $('#branches-title').text("Edit Branch");
            $("#add_new_branches_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };
        $scope.addBranches = function () {
            $scope.removeBranches();
            $('#branches-title').text("Add Branch");
            $scope.StatusText = "Active";
            $("#submit").text("Save");
            $("#add_new_branches_modal").modal('show');
        };


        $scope.countryState = function(country){
            var url = "/bs/getCountryState?countryId=" + country;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.stateList = angular.copy(data);
                $scope.state=[];
                angular.forEach( $scope.stateList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.state.push(val) ;
                    }

                })
            })
        }
        $scope.stateCity = function(state){
            var url = "/bs/getStateCity?stateId=" + state;
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.cityList = angular.copy(data);
                $scope.city=[];
                angular.forEach( $scope.cityList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.city.push(val) ;
                    }

                })
            })
        }


        $scope.saveBranches = function () {
            if (angular.isUndefined($scope.branchNameText) || $scope.branchNameText == '' || $scope.branchNameText == null) {
                Notification.warning({message: ' Please Enter Branch', positionX: 'center', delay: 2000});
            }
            else  if (angular.isUndefined($scope.branchCodeText) || $scope.branchCodeText == ''||$scope.branchCodeText == null) {
                Notification.warning({message: 'Please Enter BranchCode', positionX: 'center', delay: 2000});
            }
            else  if (angular.isUndefined($scope.emailText) || $scope.emailText == ''||$scope.emailText == null) {
                Notification.warning({message: 'Enter valid EmailId', positionX: 'center', delay: 2000});
            }
            else  if (angular.isUndefined($scope.contactText) || $scope.contactText == ''||$scope.contactText == null) {
                Notification.warning({message: 'Please Enter Contact', positionX: 'center', delay: 2000});
            }
            else  if (angular.isUndefined($scope.usrnameText) || $scope.usrnameText == ''||$scope.usrnameText == null) {
                Notification.warning({message: 'Please Enter UserName', positionX: 'center', delay: 2000});
            }
            else  if (angular.isUndefined($scope.pwdText) || $scope.pwdText == ''||$scope.pwdText == null) {
                Notification.warning({message: 'Please Enter Password', positionX: 'center', delay: 2000});
            }
            else {
                var saveBranchDetails;
                saveBranchDetails = {
                    branchesId: $scope.branchesId,
                    branchName: $scope.branchNameText,
                    branchCode: $scope.branchCodeText,
                    email: $scope.emailText,
                    contact: $scope.contactText,
                    addressLine1: $scope.addline1Text,
                    addressLine2: $scope.addline2Text,
                    country: $scope.countryId,
                    state: $scope.stateId,
                    city: $scope.cityId,
                    postalCode: $scope.postalCodeText,
                    userName: $scope.usrnameText,
                    password: $scope.pwdText,
                    status: $scope.StatusText
                };
                $http.post($scope.bshimServerURL + '/saveBranches', angular.toJson(saveBranchDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $scope.removeBranches();
                        $scope.getPaginationList();
                        $("#add_new_branches_modal").modal('hide');
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
        $scope.deleteBranches = function (data) {
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
                            branchesId :data.branchesId,
                        branchNameText :data.branchName,
                        branchCodeText : data.branchCode,
                        emailText : data.email,
                        contactText : data.contact,
                        addline1Text : data.addressLine1,
                        addline2Text : data.addressLine2,
                        countryId : data.country,
                        stateId : data.state,
                        cityId : data.city,
                        postalCodeText : data.postalCode,
                        usrnameText : data.userName,
                        pwdText : data.password,
                        StatusText : data.status

                        };
                        $http.post($scope.bshimServerURL +"/deleteBranches", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
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