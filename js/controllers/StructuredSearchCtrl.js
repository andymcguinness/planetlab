quests_app.controller('StructuredSearchCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.search = Object.keys($location.search()).toString();

    $scope.isLoggedIn = "true";
}]);