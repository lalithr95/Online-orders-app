'use strict';
angular.module('dgBaseApp')
    .constant('appSettings', {
        'baseURL': '/Application/Documents/programs/platform/app/Http/Controllers/API',
        'api': {
            'heartbeat': '/heartbeat'
        }
    });