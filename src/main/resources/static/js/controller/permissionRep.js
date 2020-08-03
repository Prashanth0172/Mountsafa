app.controller('permissionRepCtrl',
    function ($scope, $timeout, $http, $location, $filter, Notification) {
        $scope.bshimServerURL = "/bs";
        $scope.operation = 'Create';
        $scope.inactiveStatus = "Active";
        $scope.ButtonStatus = "InActive";
        $scope.firstPage = true;
        $scope.lastPage = false;
        $scope.pageNo = 0;
        $scope.prevPage = false;
        $scope.isPrev = false;
        $scope.isNext = false;
        $scope.clicked = false;

        $scope.removePermissionRep = function () {
            $scope.permissionName = "";
        };

        $scope.getPermissionLevelsList = function () {
            var url = "/bs/getPermissionLevelsList";
            $http.post(url).then(function (response) {
                var data = response.data;
                $scope.perList = data;
                $("#permissionLevels").modal('show');
                $("#htmldata").html($scope.buildCategory(0,data));
            })
        }

        $scope.buildCategory = function (parent,category) {

            var html = "";

            if (typeof(category['parentCategory'][parent])!=undefined && typeof(category['parentCategory'][parent])!="" && typeof(category['parentCategory'][parent])!=null) {
                html += "<ul>\n";


                for (cat_id in category['parentCategory'][parent]) {

                    cat_id=category['parentCategory'][parent][cat_id];

                    if (typeof(category['parentCategory'][cat_id])==undefined || typeof(category['parentCategory'][cat_id])=="" ||  typeof(category['parentCategory'][cat_id])==null) {
                        html += "<li> <input type='checkbox' name='" + category['category'][cat_id]['name'] + "' value='" + category['category'][cat_id]['id'] + "'> " + category['category'][cat_id]['name'] +" </li> ";
                    }
                    if (typeof(category['parentCategory'][cat_id])!=undefined || typeof(category['parentCategory'][cat_id])!="" ||  typeof(category['parentCategory'][cat_id])!=null) {

                      //  console.log("catid",cat_id);

                        html += "<li> <input type='checkbox' name='" + category['category'][cat_id]['name'] + "' value='" + category['category'][cat_id]['id'] + "'> " + category['category'][cat_id]['name'] +" ";
                        html +=  $scope.buildCategory(cat_id, category);
                        html += "</li> ";
                    }
                }
                html += "</ul> \n";
            }
            return html;

        }
        $scope.addPermissionRep = function () {
            $scope.removePermissionRep();
            $('#per-title').text("Add Permission");
            $scope.operation = 'Create';
            $scope.status = "Active";
            $("#submit").text("Save");
            $("#add_new_permission_modal").modal('show');
        };

    });