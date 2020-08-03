
app.controller('userCtrl',
    function ($scope, $rootScope, $http, $location, $filter, Notification) {
        $scope.word = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.userRights = [];
        $scope.operation = 'Create';
        $scope.EmailAddress = 'me@example.com';


        $scope.feeconfigurationList=function () {
            $window.location.href = '/home#!/configuration';
        };

        $scope.removeuserDetails = function () {
            $scope.userEmailText = "";
            $scope.userNameText = "";
            $scope.pswdText = "";
            $scope.userText="";
            $scope.AddressText="";
            $scope.FullNameText="";
            $scope.SecurityQuestionText="";
            $scope.AnswerText="";
            $scope.TelephoneNumberText="";
            $scope.EmailAddressText="";
            $scope.PasswordText="";
        }

        $scope.saveuserDetails = function () {
            if (angular.isUndefined($scope.userText) || $scope.userText == '' || $scope.userText == null) {
                Notification.warning({message: ' Please Enter Branch', positionX: 'center', delay: 2000});

            }
            else if ($scope.PasswordText === '') {
                Notification.warning({message: 'password cannot be empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }
            else if ($scope.EmailAddressText === ''||angular.isUndefined($scope.EmailAddressText)) {
                Notification.warning({message: 'EmailId cannot be empty', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }
            else if (!$scope.word.test($scope.EmailAddressText)&&!angular.isUndefined($scope.EmailAddressText)&&$scope.EmailAddressText!="") {
                Notification.warning({message: 'Enter Valid EmailId', positionX: 'center', delay: 2000});
                $scope.isDisabled= false;
            }
            else {
                var saveUserDetails;
                saveUserDetails = {
                    userName: $scope.userText,
                    passwordUser: $scope.PasswordText,
                    currentPassword: $scope.currentPassword,
                    full_name: $scope.FullNameText,
                    securityQuestion: $scope.SecurityQuestionText,
                    securityAnswer: $scope.AnswerText,
                    phone: $scope.TelephoneNumberText,
                    email: $scope.EmailAddressText,
                    status: $scope.status,
                    userType: $scope.userType
                };
                $http.post("/bs/saveLoginDetails", angular.toJson(saveUserDetails)).then(function (response) {
                    var data = response.data;
                    if (data == "") {
                        Notification.error({message: 'Email Already exists', positionX: 'center', delay: 2000});
                    } else {
                        $("#add_user_master").modal('hide');
                        Notification.success({message: 'User Created  successfully', positionX: 'center', delay: 2000});
                        $scope.removeuserDetails();
                        $scope.getUserList();
                        $scope.isDisabled= false;
                    }
                }, function (error) {
                    Notification.error({
                        message: 'Please Enter Valid Credentials',
                        positionX: 'center',
                        delay: 2000
                    });
                    $scope.isDisabled= false;
                });
            }

        }

        $scope.getUserList = function () {
            $(".loader").css("display", "block");
            $http.post("/bs/getUserDetailsList").then(function (response) {
                var data = response.data.object;
                console.log(data);
                $scope.userList = data;

            }, function (error) {
                Notification.error({
                    message: 'Something went wrong, please try again',
                    positionX: 'center',
                    delay: 2000
                });
            })
        };
        $scope.getUserList();
        $scope.addUserDetails = function () {
            $scope.useraccount_id="";
            $scope.user_loginId="";
            $scope.userText="";
            $scope.AddressText="";
            $scope.FullNameText="";
            $scope.SecurityQuestionText="";
            $scope.AnswerText="";
            $scope.TelephoneNumberText="";
            $scope.EmailAddressText="";
            $scope.PasswordText="";
            $scope.statusText = "Active";
            $scope.removeuserDetails();
            $("#title").text("Add");
            $("#add_user_master").modal('show');
        };
    });
