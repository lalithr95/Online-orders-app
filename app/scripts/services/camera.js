'use strict';
angular.module('dgBaseApp')
    .factory('camera', ['$rootScope', 'deviceReady', '$window',
        function ($rootScope, deviceReady, $window) {
            // Wrapper for phonegap's camera feature
            return {
                getPicture: deviceReady(function (onSuccess, onError, options) {
                    options = angular.extend({
                        quality: 100,
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        sourceType: navigator.camera.PictureSourceType.CAMERA,
                        encodingType: navigator.camera.EncodingType.JPEG,
                        saveToPhotoAlbum: true
                    }, options || {});
                    $window.navigator.camera.getPicture(function () {
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