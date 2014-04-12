quests_app.factory("units_api", function($http){
    return {
        getUnits: function(callback) {
            $http.get('js/includes/JSON/units.js').success(callback);
        }
    }
});