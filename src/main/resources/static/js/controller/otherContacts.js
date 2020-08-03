app.controller('contactController',
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
        $scope.Addres = '';

        $scope.removeOtherContactsData = function () {
            $scope.customerId="";
            $scope.contactNameText="";
            $scope.GSTINText="";
            $scope.stateId="";
            $scope.contactContactText="";
            $scope.contactEmailText="";
            $scope.contactAddressText="";
            $scope.personInchargeText="";
            $scope.countryId="";
            $scope.selectedCurrency="";
            $scope.bankNameText="";
            $scope.accNoText="";
            $scope.panNumberText="";
            $scope.bankBranchText="";
            $scope.IFSCText="";
            $scope.websiteText="";
        }

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



        // $scope.getContactList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getContactsList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.contactList= data;
        //         $scope.searchText = val;
        //         $scope.leave=[];
        //         angular.forEach($scope.contactsList,function (val,key) {
        //             if(val.status=="Active"){
        //                 $scope.country.push(val);
        //             }
        //
        //         })
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
        // $scope.getContactList();

        // $scope.inactiveLeave = function () {
        //     if ($scope.clicked == false) {
        //         $scope.inactiveStatus = "InActive";
        //         $scope.ButtonStatus = "Active";
        //         var page = "Page";
        //     }
        //     else {
        //         $scope.inactiveStatus = "Active";
        //         $scope.ButtonStatus = "InActive";
        //         var page = "";
        //     }
        //     $scope.clicked = !$scope.clicked;
        //     $scope.getContactList();
        //
        // };


        $scope.getContactList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getContactList?&type=" + $scope.inactiveStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.contactList = data.list;
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
        $scope.getContactList();


        $scope.editContact  = function(data) {
                $scope.otherContactId=data.otherContactId,
            $scope.contactNameText=data.fullName;
            $scope.GSTINText=data.gstCode;
            $scope.selectedState=parseInt(data.state);
            $scope.contactContactText=data.contactNumber;
            $scope.contactEmailText=data.email;
            $scope.contactAddressText=data.address;
            $scope.personInchargeText=data.personIncharge;
            $scope.selectedCountry=parseInt(data.country);
            $scope.selectedCurrency=parseInt(data.currency);
            $scope.bankNameText=data.bankName;
            $scope.accNoText=data.accountNo;
            $scope.panNumberText=data.panNO;
            $scope.bankBranchText=data.branchName;
            $scope.stateId=data.state;
            $scope.countryId=data.country;
            $scope.IFSCText=data.iFSCCode;
            $scope.websiteText=data.website;
            $scope.status=data.status;
            $scope.operation = 'Edit';
            $('#modelName').text("Edit Contact");
            $("#add_new_contact_modal").modal('show');
        }, function (error) {
            Notification.error({
                message: 'Something went wrong, please try again',
                positionX: 'center',
                delay: 2000
            });
        };


        $scope.addContact = function () {

            $scope.status="Active"
            $(".loader").css("display", "block");
            // $scope.status = "Active";
            $('#modelName').text("Add Contact");
            $("#submit").text("Save");
            $("#add_new_contact_modal").modal('show');
        };


        $scope.saveContact = function () {
            if (angular.isUndefined($scope.contactEmailText) || $scope.contactEmailText == ''||$scope.contactEmailText == null) {
                Notification.warning({message: 'Please Enter EmailId', positionX: 'center', delay: 2000});
            } else {
                var saveCustomerDetails;
                saveCustomerDetails = {
                    fullName: $scope.contactNameText,
                    email: $scope.contactEmailText,
                    contactNumber: $scope.contactContactText,
                    address: $scope.contactAddressText,
                    companyRegNo: $scope.companyRegNo,
                    notificationFlag: $scope.notificationFlag,
                    from_Reg_Comp: $scope.fromRegNo,
                    to_Reg_Comp: $scope.toRegNo,
                    notificationId: $scope.notificationId,
                    gstCode: $scope.GSTINText,
                    state: $scope.stateId,
                    personIncharge: $scope.personInchargeText,
                    country: $scope.countryId,
                    currency: $scope.selectedCurrency,
                    bankName: $scope.bankNameText,
                    accountNo: $scope.accNoText,
                    contStatus: $scope.contStatusText,
                    branchName: $scope.bankBranchText,
                    iFSCCode: $scope.IFSCText,
                    website: $scope.websiteText,
                    panNO: $scope.panNumberText,
                    otherContactId: $scope.otherContactId,
                    status: $scope.status
                };
                $http.post($scope.bshimServerURL + '/saveContact', angular.toJson(saveCustomerDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Already exists', positionX: 'center', delay: 2000});
                    } else {
                        $scope.removeOtherContactsData();
                        $scope.getContactList();
                        $("#add_new_contact_modal").modal('hide');
                        if (!angular.isUndefined(data) && data !== null) {
                            $scope.searchText = "";
                        }
                        Notification.success({
                            message: 'Contact Created  successfully',
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

        };

        $scope.removeOtherContactsData = function () {
            $scope.customerId="";
            $scope.contactNameText="";
            $scope.GSTINText="";
            $scope.stateId="";
            $scope.contactContactText="";
            $scope.contactEmailText="";
            $scope.contactAddressText="";
            $scope.personInchargeText="";
            $scope.countryId="";
            $scope.selectedCurrency="";
            $scope.bankNameText="";
            $scope.accNoText="";
            $scope.panNumberText="";
            $scope.bankBranchText="";
            $scope.IFSCText="";
            $scope.websiteText="";
        }

        $scope.deleteContact = function (data) {
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
                            otherContactId: data.otherContactId,
                            fullName: data.fullName,
                            email:data.email,
                            contactNumber: data.contactNumber,
                            address: data.address,
                            companyRegNo: data.companyRegNo,
                            gstCode: data.gstCode,
                            personIncharge: data.personIncharge,
                            bankName: data.bankName,
                            accountNo: data.accountNo,
                            branchName: data.branchName,
                            iFSCCode: data.iFSCCode,
                            website: data.website,
                            panNO :data.panNO,
                            country :data.country,
                            state :data.state
                        }
                        $http.post($scope.bshimServerURL +"/deleteContact", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getContactList();
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