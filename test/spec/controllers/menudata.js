'use strict';

describe('Controller: MenudatactrlCtrl', function () {

  // load the controller's module
  beforeEach(module('dgBaseApp'));

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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenudatactrlCtrl.awesomeThings.length).toBe(3);
  });
});
