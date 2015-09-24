'use strict';
angular.module('theFirstMealApp')
    .factory('geolocation', ['$rootScope', 'deviceReady', '$window',
        function ($rootScope, deviceReady, $window) {
            return {
                getCurrentPosition: deviceReady(function (onSuccess, onError, options) {
                    $window.navigator.geolocation.getCurrentPosition(function () {
                        var that = this,
                            args = arguments;
                        if (onSuccess) {
                            $rootScope.$apply(function () {
                                onSuccess.apply(that, args);
                            });
                        }
                    }, function () {
                        var that = this,
                            args = arguments;
                        if (onError) {
                            $rootScope.$apply(function () {
                                onError.apply(that, args);
                            });
                        }
                    }, options);
                }),
                watchPosition: deviceReady(function (onSuccess, onError, options) {
                    $window.navigator.geolocation.watchPosition(function () {
                        var that = this,
                            args = arguments;
                        if (onSuccess) {
                            $rootScope.$apply(function () {
                                onSuccess.apply(that, args);
                            });
                        }
                    }, function () {
                        var that = this,
                            args = arguments;
                        if (onError) {
                            $rootScope.$apply(function () {
                                onError.apply(that, args);
                            });
                        }
                    }, options);
                })
            };
  }]);