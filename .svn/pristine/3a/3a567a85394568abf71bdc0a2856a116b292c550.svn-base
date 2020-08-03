app.controller('generalController',
    function($scope, $http, $location, $filter, Notification, ngTableParams,  $timeout, $window, $rootScope) {

        $scope.bshimServerURL = "/bs";
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.operation = 'Create';

        // $scope.getchange = function () {
        //     $rootScope.name=$scope.CompanyName;
        // };




        $scope.imageUpload = function (event) {
            var files = event.target.files;
            var file = files[0];
            var srcString;
            var imageCompressor = new ImageCompressor;
            var compressorSettings = {
                toWidth: 200,
                toHeight: 200,
                mimeType: 'image/png',
                mode: 'strict',
                quality: 1,
                grayScale: false,
                sepia: false,
                threshold: false,
                speed: 'low'
            };
            if (files && file) {
                var reader = new FileReader();
                reader.onload = function (readerEvt) {
                    binaryString = readerEvt.target.result;
                    $('.image-preview').attr('src', binaryString);
                };
                reader.readAsDataURL(file);
                reader.onloadend = function () {
                    srcString = $('.image-preview').attr("src");
                    imageCompressor.run(srcString, compressorSettings, proceedCompressedImage);
                };
            }
        };
        function proceedCompressedImage(compressedSrc) {
            $('#image-preview').attr('src', compressedSrc);
            $scope.fileToUpload = compressedSrc;
        }
        $scope.saveGeneralSettingDetails = function () {
            if (angular.isUndefined($scope.CompanyName) || $scope.CompanyName == ''|| $scope.CompanyName == null) {
                Notification.warning({message: 'Organization Name can not be Empty', positionX: 'center', delay: 2000});

            }
            else {
                var saveGeneralDetails;
                saveGeneralDetails = {
                    id: $scope.id,
                    companyName: $scope.CompanyName,
                    companyEmail: $scope.CompanyEmail,
                    companyLink: $scope.CompanyLink,
                    googleAnalyticsID: $scope.GoogleAnalyticsID,
                    dateFormat: $scope.DateFormat,
                    attachFile: $scope.fileToUpload,
                    address:$scope.address,
                    gst:$scope.gst
                };
                $http.post($scope.bshimServerURL + "/saveGeneral", angular.toJson(saveGeneralDetails)).then(function (response) {
                    var data = response.data;
                    console.log(data);
                    $scope.getGeneralSettingsDetailsList();
                    if (data == "") {
                        Notification.error({message: ' Already exists', positionX: 'center', delay: 2000});
                    }
                    else {
                        Notification.success({
                            message: 'General Settings Details is Created  successfully',
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
        $scope.BackGeneral=function(){
            window.location.href='#!/settings';
        }


        $scope.getGeneralSettingsDetailsList = function () {
            $http.post($scope.bshimServerURL + '/getGeneralSettingsDetailsList').then(function (response) {
                var data = response.data.object;
                console.log(data);
                // $scope.getGeneralSettingsDetailsList = data;
                if(data != null ) {
                    $scope.CompanyName = data.companyName;
                    $scope.CompanyEmail = data.companyEmail;
                    $scope.CompanyLink = data.companyLink;
                    $scope.GoogleAnalyticsID = data.googleAnalyticsID;
                    $scope.DateFormat = data.dateFormat;
                    $scope.fileName = data.attachFile;
                    $scope.address = data.address;
                    $scope.gst = data.gst;
                    $scope.fileToUpload = data.attachFile;
                    $rootScope.name = data.companyName;
                    $rootScope.logo = data.attachFile;
                    $rootScope.Address = data.object.address;
                    $rootScope.gst = data.object.gst;
                    $rootScope.organizationEmail = data.object.companyEmail;
                }
            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })

        };
        $scope.getGeneralSettingsDetailsList();
        $scope.time = {
            twelve: new Date(),
            twentyfour: new Date()
        };

        $scope.message = {
            hour: 'Hour is required',
            minute: 'Minute is required',
            meridiem: 'Meridiem is required'
        }
    });
