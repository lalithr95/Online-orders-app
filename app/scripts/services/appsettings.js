'use strict';
angular.module('theFirstMealApp')
    .constant('appSettings', {
        'baseURL': 'http://tfm.appaday.org/api',
        'api': {
            'menuData': '/menu-data',
            'user_token': '/user/token' 
        }
    });