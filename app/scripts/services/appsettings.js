'use strict';
angular.module('theFirstMealApp')
    .constant('appSettings', {
        'baseURL': 'http://tfm.appaday.org/api',
        'api': {
            'menuData': '/menu-data',
            'userToken': '/user/token' 
        }
    });