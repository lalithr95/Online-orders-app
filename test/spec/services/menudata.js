'use strict';

describe('Service: menuData', function () {

  // load the service's module
  beforeEach(module('dgBaseApp'));

  // instantiate service
  var menuData;
  beforeEach(inject(function (_menuData_) {
    menuData = _menuData_;
  }));

  it('should do something', function () {
    expect(!!menuData).toBe(true);
  });

});
