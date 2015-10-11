'use strict';
/**
 * @ngdoc overview
 * @name theFirstMealApp
 * @description
 * # theFirstMealApp
 *
 * Main module of the application.
 */
angular.module('theFirstMealApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCordova',
    'ui.bootstrap',
    'ngStorage'
  ])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'views/menudata-view.html',
                controller: 'MenudatactrlCtrl'
            })
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/checkout', {
                templateUrl: 'views/checkout-view.html',
                controller: 'CheckoutCtrl'
            })
            .when('/orders', {
                templateUrl: 'views/order-view.html',
                controller: 'OrderCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function ($rootScope, $window, $document, deviceReady) {
        $rootScope.isDummyCordova = $window.isDummyCordova;
        // Online or offline
        $rootScope.online = navigator.onLine;
        var wentOffline = function () {
                $rootScope.$apply(function () {
                    $rootScope.online = false;
                });
                $document.scrollTop(0, 250, function (t) { // EaseOut Cubic
                    return (--t) * t * t + 1;
                });
            },
            wentOnline = function () {
                $rootScope.$apply(function () {
                    $rootScope.online = true;
                });
            };
        try {
            $window.addEventListener('offline', wentOffline, false);
            $window.addEventListener('online', wentOnline, false);
        } catch (err) {
            console.warn(err.message, err.stack);
        }
        // Cordova online/offline
        try {
            deviceReady(function () {
                $rootScope.online = $window.navigator.connection ? $window.navigator.connection.type !== $window.Connection.NONE : $rootScope.online;
                try {
                    $window.document.addEventListener('offline', wentOffline, false);
                    $window.document.addEventListener('online', wentOnline, false);
                } catch (err) {
                    console.warn('Issues with phonegap/cordova offline ' + err.message, err.stack);
                }
            })();
        } catch (err) {
            console.warn('Issues with phonegap/cordova offline ' + err.message, err.stack);
        }
    });