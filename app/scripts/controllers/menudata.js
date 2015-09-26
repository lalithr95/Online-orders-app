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
        $scope.cart = {};
        $scope.appSettings = appSettings;
        $scope.loading = true;
        console.log(0);
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
        $scope.count = 0;
        $scope.addItem = function(index) {
            if ( $scope.cart[$scope.menuData.items[index].name] > 0) {
                $scope.cart[$scope.menuData.items[index].name]++;
            }
            else {
                $scope.cart[$scope.menuData.items[index].name] = 1;
            }
            $scope.count++;
            console.log($scope.cart);
        };
        $scope.addPackage = function(index) {
            if ( $scope.cart[$scope.menuData.packages[index].name] > 0) {
                $scope.cart[$scope.menuData.packages[index].name]++;
            }
            else {
                $scope.cart[$scope.menuData.packages[index].name] = 1;
            }
            $scope.count++;
            console.log($scope.cart);  
        };
        //TODO Need to implement the counter part
  }]);