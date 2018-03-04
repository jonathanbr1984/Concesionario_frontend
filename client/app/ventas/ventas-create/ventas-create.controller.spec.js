'use strict';

describe('Component: VentasCreateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiConApp'));

  var VentasCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    VentasCreateComponent = $componentController('ventas-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
