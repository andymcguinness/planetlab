quests_app.controller('QuestPageCtrl', ['$scope', '$routeParams', 'quests_api', function($scope, $routeParams, quests_api) {
    $scope.quest = $routeParams.quest;

    $scope.msg = "QUESTPAGE";
}]);