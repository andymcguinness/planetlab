quests_app.controller('QuestPageCtrl', ['$scope', '$rootScope', '$routeParams', 'quests_api', function($scope, $rootScope, $routeParams, quests_api) {
    $scope.quest = $routeParams.quest;

    quests_api.getQuests(function(data) {
        for(i=0;i<data["quests"].length;i++){
            if(data["quests"][i]["name"] === $scope.quest) {
                $scope.questInfo = data["quests"][i];
            }
        }
    });

    $rootScope.isLoggedIn = "true";
}]);