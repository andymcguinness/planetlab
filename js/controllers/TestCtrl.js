quests_app.controller('TestCtrl', ['$scope', 'quests_api', function($scope, quests_api){
    quests_api.getQuests(function(data) {
        $scope.tests = data;
    });
}]);