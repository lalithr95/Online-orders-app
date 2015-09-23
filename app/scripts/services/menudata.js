'use strict';

/**
 * @ngdoc service
 * @name dgBaseApp.menuData
 * @description
 * # menuData
 * Service in the dgBaseApp.
 */
angular.module('dgBaseApp')
  .service('menuData', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.menu_data = function() {
    	$http.get('/menu-data').success(function(response){
    		return response;
    	});
    };
  });
