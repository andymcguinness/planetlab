quests_app.factory("quests_api", function($http){
    return {
        getQuests: function(callback) {
            $http.get('js/includes/JSON/quests.js').success(callback);
        }
    }
});