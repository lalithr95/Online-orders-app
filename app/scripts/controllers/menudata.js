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
                count: 0,
                price: 0.00,
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
            if ( $scope.$storage.cart[$scope.menuData.items[index].name]) {
                $scope.$storage.cart[$scope.menuData.items[index].name].count++;
                $scope.$storage.price += $scope.menuData.items[index].price;
            }
            else {
                $scope.$storage.cart[$scope.menuData.items[index].name] = {};
                $scope.$storage.cart[$scope.menuData.items[index].name].price = $scope.menuData.items[index].price;
                $scope.$storage.cart[$scope.menuData.items[index].name].count = 1;
                $scope.$storage.price += $scope.menuData.items[index].price;
            }
            $scope.$storage.count++;
            console.log($scope.$storage.cart);
        };
        $scope.addPackage = function(index) {
            if ( $scope.$storage.cart[$scope.menuData.packages[index].name]) {
                $scope.$storage.cart[$scope.menuData.packages[index].name].count++;
                $scope.$storage.price += $scope.menuData.packages[index].price;
            }
            else {
                $scope.$storage.cart[$scope.menuData.packages[index].name] = {};
                $scope.$storage.cart[$scope.menuData.packages[index].name].price = $scope.menuData.items[index].price;
                $scope.$storage.cart[$scope.menuData.packages[index].name].count = 1;
                $scope.$storage.price += $scope.menuData.packages[index].price;
            }
            $scope.$storage.count++;
            console.log($scope.$storage.cart);  
        };
        var getStorage = function() {
            return $scope.$storage;
        };
        //TODO Need to implement the counter part
  }]);