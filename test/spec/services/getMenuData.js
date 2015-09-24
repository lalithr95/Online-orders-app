'use strict';

describe('Service: getMenuData', function () {

  // load the service's module
  beforeEach(module('theFirstMealApp'));

  // instantiate service
  var getMenuData;
  beforeEach(inject(function (_getMenuData_) {
    getMenuData = _getMenuData_;
  }));

  it('should do something', function () {
    expect(!!getMenuData).toBe(true);
  });

});
