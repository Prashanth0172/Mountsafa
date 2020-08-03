app.controller('doctormasterController',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;
        $scope.ButtonStatus = "Active";


        $scope.removeGradeMaster = function () {
            $scope.doctorpanelId="";
            $scope.doctorname = "";
            $scope.doctorcode = "";
            $scope.doctorspecialization = "";
            $scope.doctoraddress = "";
            $scope.doctorphone = "";
            $scope.doctoremail = "";
            $scope.doctorRemarks = "";
            $scope.doctorstatus = "";
            $scope.branchName = "";
            // $scope.doctorRemarks = "";

        };
        $scope.inactive = function () {
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
            $scope.getDoctorPaginatedList();

        };

        $scope.EditDoctor = function (data) {
            $scope.doctorpanelId = data.doctorpanelId;
            $scope.doctorname = data.doctorName;
            $scope.doctorcode = data.doctorCode;
            $scope.doctorspecialization = data.doctorSpecialization;
            $scope.doctoraddress = data.doctorAddress;
            $scope.doctorphone = data.doctorPhone;
            $scope.doctoremail = data.doctorEmail;
            $scope.doctorRemarks = data.doctorRemarks;
            $scope.branchName = parseInt(data.branchId);
            $scope.doctorstatus = data.doctorStatus;
            $scope.operation = 'Edit';
            $('#student-title').text("Edit Doctorpanel");
            $("#add_Doctor_master").modal('show');

        }, function (error) {
            Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        };

        $scope.addgrademaster = function () {
            $scope.statusText = "Active";
            $scope.operation='create';
            $scope.removeGradeMaster();
            $('#student-title').text("Add Doctor");
            $("#add_Doctor_master").modal('show');

        };

        //
        // $scope.getDoctorList = function (val) {
        //     if (angular.isUndefined(val)) {
        //         val = "";
        //     }
        //
        //     $(".loader").css("display", "block");
        //     $http.post($scope.bshimServerURL  + '/getDoctorList?searchText=' + val).then(function (response) {
        //         var data = response.data;
        //         $scope.doctorpanelList= data;
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
        // $scope.getDoctorList();
        $scope.getDoctorPaginatedList = function (page) {
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
            $http.post($scope.bshimServerURL + "/getDoctorPaginatedList?&type=" + $scope.ButtonStatus+ '&searchText=' + $scope.searchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                console.log(data);
                var i = 0;
                $scope.doctorpanelList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
                $scope.listStatus = true;
                $scope.removeGradeMaster();

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getDoctorPaginatedList();

        $scope.getBranchesList = function (val) {
            if (angular.isUndefined(val)) {
                val = "";
            }

            $(".loader").css("display", "block");
            $http.post($scope.bshimServerURL  + '/getBranchesList?searchText=' + val).then(function (response) {
                var data = response.data;
                $scope.branchesList= data;
                $scope.searchText = val;
                $scope.bran=[];
                angular.forEach( $scope.branchesList,function (val,key) {
                    if(val.status=="Active"){
                        $scope.bran.push(val) ;
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

        $scope.getBranchesList();



        $scope.saveDoctorpanel = function () {
            $scope.isDisabled= true;
            if (angular.isUndefined($scope.doctorname) || $scope.doctorname == ''|| $scope.doctorname==null) {
                Notification.warning({message: 'Doctor name can not be Empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;

            }
            else if (angular.isUndefined($scope.doctoremail) || $scope.doctoremail == ''|| $scope.doctoremail==null) {
                Notification.warning({message: 'Give Correct EmailId', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }
            // else if (!$scope.word.test($scope.doctoremail)&&!angular.isUndefined($scope.emailId)&&$scope.doctoremail!="") {
            //     Notification.warning({message: 'Enter Valid EmailId', positionX: 'center', delay: 2000});
            //     $scope.isDisabled= false;
            // }
            else {
                var saveDoctorDetails;
                saveDoctorDetails = {
                    doctorpanelId: $scope.doctorpanelId,
                    doctorName: $scope.doctorname,
                    doctorCode: $scope.doctorcode,
                    doctorSpecialization: $scope.doctorspecialization,
                    doctorAddress: $scope.doctoraddress,
                    doctorPhone: $scope.doctorphone,
                    doctorEmail: $scope.doctoremail,
                    doctorRemarks: $scope.doctorRemarks,
                    doctorStatus: $scope.doctorStatus,
                    branchId: $scope.branchName
                    // status: $scope.doctorstatus
                };
                $http.post($scope.bshimServerURL + "/saveNewDoctorMaster", angular.toJson(saveDoctorDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: ' Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        $("#add_Doctor_master").modal('hide');
                        if($scope.operation=='Edit'){
                            Notification.success({
                                message: 'DoctorPanel is Updated successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }else {
                            Notification.success({
                                message: 'DoctorPanel is Created  successfully',
                                positionX: 'center',
                                delay: 2000
                            });
                        }
                        $scope.removeGradeMaster();
                        $scope.getDoctorPaginatedList();
                        $scope.isDisabled= false;
                    }
                }, function (error) {
                    Notification.error({
                        message: 'Something went wrong, please try again',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled= false;
                });
            }
        };
        $scope.DeleteDoctor = function (data) {
            // if (data.gradeStatus == "InActive" && data.gradeStatus != "Active") {
            //     Notification.warning({
            //         message: 'Cannot Delete Aleady in use',
            //         positionX: 'center',
            //         delay: 2000
            //     });
            // }
            // else {
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
                    if (result == true) {
                        var deleteDetails = {
                            doctorpanelId: data.doctorpanelId,
                            doctorname: data.doctorName,
                            doctorcode: data.doctorcode,
                            doctorstatus: data.doctorStatus,
                            doctorspecialization: data.doctorspecialization,
                            doctorphone: data.doctorphone
                        };
                        $http.post($scope.bshimServerURL + "/deleteDoctor", angular.toJson(deleteDetails, "Create")).then(function (response, status, headers, config) {
                            var data = response.data;
                            $scope.getDoctorPaginatedList();
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
                                message: 'Cannot delete Already in Use',
                                positionX: 'center',
                                delay: 2000
                            });
                        });
                    }
                }
            });
        };

    });