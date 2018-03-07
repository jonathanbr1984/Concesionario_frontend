'use strict';

(function(){

class VehiculosUpdateComponent {
  constructor(vehiculosService, $state, $stateParams) {
    this.vehiculosService = vehiculosService;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }
  $onInit(){
  	this.vehiculosService.get({id: this.$stateParams.idVehiculo}).$promise
  	.then(response => {
  		this.vehiculo = response;
  	})
  	.catch(err => {
  		console.log('ERROR', err);
  	})
  }
  updateVehiculo(){
  	this.vehiculosService.update({id: this.vehiculo.id}, this.vehiculo).$promise
  	.then(response => {
  		console.log('Vehiculo actualizado', response);
  		this.$state.go('main')
  	})
  	.catch(err => {
  		console.log('Perdon el vehiculo no se actualizo', err);
  	})
  }
}

angular.module('palmiConApp')
  .component('vehiculosUpdate', {
    templateUrl: 'app/vehiculos/vehiculos-update/vehiculos-update.html',
    controller: VehiculosUpdateComponent,
    controllerAs: 'vm'
  });

})();
