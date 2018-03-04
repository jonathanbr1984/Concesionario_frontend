'use strict';

(function(){

class VehiculosUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('palmiConApp')
  .component('vehiculosUpdate', {
    templateUrl: 'app/vehiculos/vehiculos-update/vehiculos-update.html',
    controller: VehiculosUpdateComponent,
    controllerAs: 'vehiculosUpdateCtrl'
  });

})();
