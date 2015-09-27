'use strict';
/**
 * @ngdoc function
 * @name theFirstMealApp.controller:MenudatactrlCtrl
 * @description
 * # MenudatactrlCtrl
 * Controller of the theFirstMealApp
 */
angular.module('theFirstMealApp')
    .controller('MenudatactrlCtrl', ['$scope', 'getMenuData', 'appSettings', '$timeout', '$window', '$localStorage', function ($scope, getMenuData, appSettings, $timeout, $window, $localStorage) {
        $scope.menuData = {};
        $scope.$storage = $localStorage.$default({
                cart: {},
                count: 0
            });
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
        $scope.addItem = function(index) {
            if ( $scope.$storage.cart[$scope.menuData.items[index].name] > 0) {
                $scope.$storage.cart[$scope.menuData.items[index].name]++;
            }
            else {
                $scope.$storage.cart[$scope.menuData.items[index].name] = 1;
            }
            $scope.$storage.count++;
            console.log($scope.$storage.cart);
        };
        $scope.addPackage = function(index) {
            if ( $scope.$storage.cart[$scope.menuData.packages[index].name] > 0) {
                $scope.$storage.cart[$scope.menuData.packages[index].name]++;
            }
            else {
                $scope.$storage.cart[$scope.menuData.packages[index].name] = 1;
            }
            $scope.$storage.count++;
            console.log($scope.$storage.cart);  
        };
        //TODO Need to implement the counter part
  }]);