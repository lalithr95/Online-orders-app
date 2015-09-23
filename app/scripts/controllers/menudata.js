'use strict';

/**
 * @ngdoc function
 * @name dgBaseApp.controller:MenudatactrlCtrl
 * @description
 * # MenudatactrlCtrl
 * Controller of the dgBaseApp
 */
angular.module('dgBaseApp')
  .controller('MenudatactrlCtrl', function ($scope, menuData) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.menudata = menuData.menu_data();
  });
