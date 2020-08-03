
//use translate in controller
app.config(["$translateProvider",function($translateProvider){
    var fileNameConvention = {
        prefix: 'resource/i18nJson/locale-',
        suffix: '.json'
    };
     $translateProvider.useStaticFilesLoader(fileNameConvention);
     $translateProvider.useCookieStorage();
     $translateProvider.preferredLanguage('en');
     $translateProvider.fallbackLanguage("en");
}]);

app.controller("i18nController" ,["$scope","$translate",function($scope, $rootScope, $http, $httpParamSerializerJQLike,$translate){
    $scope.changeLanguage = function(lang){
        $translate.use(lang);
    }
}]);