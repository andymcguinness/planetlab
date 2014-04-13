quests_app.controller('QuestPageCtrl', ['$scope', '$routeParams', 'quests_api', function($scope, $routeParams, quests_api) {
    $scope.quest = $routeParams.quest;

    quests_api.getQuests(function(data) {
        for(i=0;i<data["quests"].length;i++){
            console.log(data["quests"][i].name)
        }
    });

    $scope.isLoggedIn = "true";
}]);