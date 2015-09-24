'use strict';
/**
 * @ngdoc function
 * @name theFirstMealApp.controller:MenudatactrlCtrl
 * @description
 * # MenudatactrlCtrl
 * Controller of the theFirstMealApp
 */
angular.module('theFirstMealApp')
    .controller('MenudatactrlCtrl', ['$scope', 'getMenuData', 'appSettings', '$timeout', '$window', function ($scope, getMenuData, appSettings, $timeout, $window) {
        $scope.menuData = {};
        $scope.appSettings = appSettings;
        $scope.loading = true;
        $timeout(function () {
            getMenuData()
                .success(function (response) {
                    $scope.menuData = response;
                    $scope.loading = false;
                })
                .error(function (response) {
                    $window.alert('An error occured while loading your menu, please check back later. ' + JSON.stringify(response));
                    $scope.loading = false;
                });
        }, 0);
  }]);