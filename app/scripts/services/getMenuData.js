'use strict';
/**
 * @ngdoc service
 * @name theFirstMealApp.menuData
 * @description
 * # menuData
 * Service in the theFirstMealApp.
 */
angular.module('theFirstMealApp')
    .service('getMenuData', ['$http', 'appSettings',
        function ($http, appSettings) {
            return function () {
                return $http.get(appSettings.baseURL + appSettings.api.menuData);
            };
        }]);