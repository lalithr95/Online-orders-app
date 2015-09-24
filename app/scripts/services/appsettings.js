'use strict';
angular.module('theFirstMealApp')
    .constant('appSettings', {
        'baseURL': 'http://localhost:8086/TheFirstMeal/public/api',
        'api': {
            'menuData': '/menu-data'
        }
    });