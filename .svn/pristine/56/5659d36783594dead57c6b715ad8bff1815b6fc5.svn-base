
app.controller('formsetupCtrl',[
    '$scope','$http','Notification',

    function ($scope,$http,Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.supplier = 1;
        $scope.formsetupId="";
        $scope.typePrefix="";
        $scope.nextRef="";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.editForm = function(data) {
            $scope.typePrefix=data.typeprefix;
            $scope.formsetupId = data.formsetupId;
            $scope.nextRef=data.nextref;
            $("#edit_modal").modal('show');
        },function (error) {
            Notification.error({message: 'Something went wrong, please try again',positionX: 'center',delay: 2000});

        };
        $scope.addNewFormSetupPopulate = function () {
            $scope.title = "Add FormSetup";
            $('#formsetup-title').text("Add FormSetup");
            $("#submit").text("Save");
            $("#edit_modal").modal('show');
        }

        $scope.removeFormSetUp = function () {
            $scope.typename = "";
            $scope.nextref = "";
                $scope.formsetupId = "";
                $scope.typeprefix = "";
                $scope.transtype = "";
                $scope.operation='Create';
        };

        $scope.saveOrUpdateformsetup= function () {
            if ($scope.typename === ''||$scope.typename==null||angular.isUndefined($scope.typename)) {
                Notification.error({message: 'Enter Type Name', positionX: 'center', delay: 2000});
            }
            else if ($scope.typeprefix === ''||$scope.typeprefix==null||angular.isUndefined($scope.typeprefix)) {
                Notification.error({message: 'Enter Type Prefix', positionX: 'center', delay: 2000});
            }
            else if ($scope.currentref === ''||$scope.currentref==null||angular.isUndefined($scope.currentref)) {
                Notification.error({message: 'Enter Current Ref', positionX: 'center', delay: 2000});
            }
            else {
                var saveFormSetupDetails;
                saveFormSetupDetails = {
                    typename: $scope.typename,
                    typeprefix: $scope.typeprefix,
                    nextref: $scope.currentref,
                    formsetupId: $scope.formsetupId,
                    typeprefix: $scope.typeprefix,
                    transactionType: $scope.transtype

                };
                $http.post('/bs' + '/saveformsetup', angular.toJson(saveFormSetupDetails, "Create")).then(function (response, status, headers, config) {
                    var data = response.data;
                    if(data==''){
                        Notification.error({message: 'Formsetup already added', positionX: 'center', delay: 2000});
                    } else {
                        Notification.success({
                            message: 'Formsetup created Successfully',
                            positionX: 'center',
                            delay: 2000
                        });
                        $("#edit_modal").modal('hide');
                        $scope.getformsetList();
                        $scope.removeFormSetUp();
                    }

                });
            }

        };
        $scope.editFormsetupPopulate = function (typename) {
            $http.post('/bs' + '/editFormSetupMethod?typeName='+typename).then(function (response) {
                var data = response.data;
                $scope.formsetupId = data.formsetupId;
                $scope.typename = data.typename;
                $scope.typeprefix = data.typeprefix;
                $scope.currentref = data.nextref;
                $scope.typeprefix = data.typeprefix;
                $scope.transtype = data.transactionType;
                $('#formsetup-title').text("Edit FormSetUP");
                $("#submit").text("Update");
                $("#edit_modal").modal('show');
                $scope.operation='Edit';
            });
        }
        //
        // $scope.formsetList = function () {
        //     $http.post('/pos' + '/getFormsetupList').then(function (response) {
        //         var data = response.data;
        //         $scope.formsetupList = data;
        //     },function (error){
        //         Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
        //     })
        // };
        // $scope.formsetList();
        $scope.getformsetList = function (page) {
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
            if (angular.isUndefined($scope.formSetupSearchText)) {
                $scope.formSetupSearchText = "";
            }
            $http.post('/bs' + '/getPaginatedFormsetupList?&searchText=' + $scope.formSetupSearchText, angular.toJson(paginationDetails)).then(function (response) {
                var data = response.data;
                $scope.formsetupList = data.list;
                $scope.first = data.firstPage;
                $scope.last = data.lastPage;
                $scope.prev = data.prevPage;
                $scope.next = data.nextPage;
                $scope.pageNo = data.pageNo;
            },function (error){
                Notification.error({message: 'Something went wrong, please try again', positionX: 'center', delay: 2000});
            })
        };
        $scope.getformsetList();
        $scope.termForm = function (formsetupId,termsDesc) {
            console.log('termform :: ');
            console.log(formsetupId+' ### '+termsDesc);
            $scope.setupId = formsetupId;
            $scope.desc = termsDesc;
            $("#term_desc").modal('show');

        };

        $scope.saveFormsetupDesc = function(){
            var saveDescription;
            console.log($scope.desc);
            saveDescription = {
                termsDesc : $scope.desc,
                formsetupId:$scope.setupId
            };
            console.log('SAVE DESC ::');
            console.log(saveDescription);
            $http.post('/bs' +'/saveDescription', angular.toJson(saveDescription, "Create")).then(function (response) {
                $("#term_desc").modal('hide');
                var data = response.data;
                // $scope.formsetupList();
                $scope.formsetList();
            })
        };



        /***************ANJANA***************/

        $(function () {
            function initToolbarBootstrapBindings() {
                var fonts = ['Arial',
                        'Arial Black',
                        'Courier',
                        'Courier New',
                        'Comic Sans MS',
                        'Helvetica',
                        'Impact',
                        'Lucida Sans',
                        'Tahoma',
                        'Times',
                        'Times New Roman',
                        'Verdana'],
                    fontTarget = $('[title=Font]').siblings('.dropdown-menu');
                $.each(fonts, function (idx, fontName) {
                    fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
                });
                $('a[title]').tooltip({container: 'body'});
                $('.dropdown-menu input').click(function () {
                    return false;
                })
                    .change(function () {
                        $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
                    })
                    .keydown('esc', function () {
                        this.value = '';
                        $(this).change();
                    });

                $('[data-role=magic-overlay]').each(function () {
                    var overlay = $(this), target = $(overlay.data('target'));
                    overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
                });
                if ("onwebkitspeechchange" in document.createElement("input")) {
                    var editorOffset = $('#editor').offset();
                    $('#voiceBtn').css('position', 'absolute').offset({
                        top: editorOffset.top,
                        left: editorOffset.left + $('#editor').innerWidth() - 35
                    });
                } else {
                    $('#voiceBtn').hide();
                }
            };

            function showErrorAlert(reason, detail) {
                var msg = '';
                if (reason === 'unsupported-file-type') {
                    msg = "Unsupported format " + detail;
                } else {
                    console.log("error uploading file", reason, detail);
                }
                $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#alerts');
            }
            ;
            initToolbarBootstrapBindings();
            $('#editor').wysiwyg({fileUploadError: showErrorAlert});
            window.prettyPrint && prettyPrint();
        });

    }
]);