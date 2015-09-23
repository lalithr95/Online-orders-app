'use strict';
angular.module('dgBaseApp')
    .factory('deviceReady', ['$window',
        function ($window) {
            return function (fn) {
                var queue = [];
                var impl = function () {
                    queue.push(Array.prototype.slice.call(arguments));
                };
                var deviceReadyAction = function () {
                    queue.forEach(function (args) {
                        fn.apply(this, args);
                    });
                    impl = fn;
                };
                if ($window.dgIsDeviceReady !== true) {
                    $window.document.addEventListener('deviceready', deviceReadyAction, false);
                } else {
                    $window.setTimeout(deviceReadyAction, 0);
                }
                return function () {
                    return impl.apply(this, arguments);
                };
            };
    }]);