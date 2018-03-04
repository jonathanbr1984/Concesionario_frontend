'use strict';

describe('Component: VentasUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('palmiConApp'));

  var VentasUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    VentasUpdateComponent = $componentController('ventas-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
