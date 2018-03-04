'use strict';

(function(){

class VehiculosCreateComponent {
  constructor(vehiculosService, $state) {
    this.vehiculosService = vehiculosService;
    this.$state = $state;
  }
  $onInit(){
  	// this.vehiculosService.query().$promise
  	// .then(response => {
  	// 	this.vehiculos = response;
  	// 	console.log('Vehiculos', response);
  	// })
  	// .catch(err => {
  	// 	console.log('Error', err);
  	// })
  }
  createVehiculo(){
  	this.vehiculosService.save(this.vehiculo).$promise
  	.then(response => {
  		console.log('Vehiculo Registrado con Exito', response);
  		this.$state.go('main');
  	})
  	.catch(err => {
  		console.log('Perdon, no se pudo registrar el vehiculo');
  	})
  }
}

angular.module('palmiConApp')
  .component('vehiculosCreate', {
    templateUrl: 'app/vehiculos/vehiculos-create/vehiculos-create.html',
    controller: VehiculosCreateComponent,
    controllerAs: 'vm'
  });

})();
