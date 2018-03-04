'use strict';

describe('Component: VehiculosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiConApp'));

  var VehiculosCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    VehiculosCreateComponent = $componentController('vehiculos-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
