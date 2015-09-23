'use strict';
/**
 * @ngdoc function
 * @name dgBaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dgBaseApp
 */
angular.module('dgBaseApp')
    .controller('MainCtrl', function ($scope, geolocation, $window) {
        $scope.currentLatLng = 'An Unknown Location';
        $scope.errInLocation = false;
        $scope.loadingLocation = true;

        function trackLocation(onSuccess, onError, options) {
            geolocation.getCurrentPosition(onSuccess, onError, options);
            geolocation.watchPosition(onSuccess, onError, options);
            $scope.fetchCurrentLocation = function () {
                $scope.loadingLocation = true;
                $scope.errInLocation = false;
                $window.setTimeout(function () {
                    geolocation.getCurrentPosition(onSuccess, onError, options);
                }, 200);
            };
        }
        trackLocation(function (pos) {
            console.log('geolocation - success', arguments);
            if (!pos || !pos.coords) {
                $scope.errInLocation = true;
                $scope.currentLatLng = 'An Unknown Location';
            } else {
                $scope.currentLatLng = (pos.coords.latitude + ', ' + pos.coords.longitude);
                $scope.errInLocation = false;
            }
            $scope.loadingLocation = false;
        }, function (err) {
            console.log('geolocation.watchPosition - failed', arguments);
            $scope.errInLocation = err.message;
            $scope.loadingLocation = false;
        }, {
            maximumAge: 3000,
            timeout: 30000,
            enableHighAccuracy: false
        });
    });