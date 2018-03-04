'use strict';

describe('Component: VehiculosUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiConApp'));

  var VehiculosUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    VehiculosUpdateComponent = $componentController('vehiculos-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
