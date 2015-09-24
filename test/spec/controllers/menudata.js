'use strict';

describe('Controller: MenudatactrlCtrl', function () {

  // load the controller's module
  beforeEach(module('theFirstMealApp'));

  var MenudatactrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenudatactrlCtrl = $controller('MenudatactrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
