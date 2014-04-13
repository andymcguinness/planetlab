quests_app.controller('StructuredSearchCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    $scope.search = Object.keys($location.search()).toString();

    $rootScope.isLoggedIn = "true";
}]);