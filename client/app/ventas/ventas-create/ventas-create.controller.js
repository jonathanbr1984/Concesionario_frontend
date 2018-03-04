'use strict';

(function(){

class VentasCreateComponent {
  constructor(ventasService, clientesService, vehiculosService, $state) {
    this.ventasService = ventasService;
    this.clientesService = clientesService;
    this.vehiculosService = vehiculosService;
    this.$state = $state;
  }
  $onInit(){
    this.clientesService.query().$promise
    .then(response => {
      this.clientes = response;
      // console.log('Clientes', response);
    })
    .catch(err => {
      console.log('Error en cliente', err);
    })
    this.vehiculosService.query().$promise
    .then(response => {
      this.vehiculos = response;
      // console.log('Vehiculo', response);
    })
    .catch(err => {
      console.log('Error en Vehiculo', err);
    })
  	// this.ventasService.query().$promise
  	// .then(response => {
  	// 	this.venta = response;
  	// 	console.log('Ventas', response);
  	// })
  	// .catch(err => {
  	// 	console.log('Error en Venta', err);
  	// })
  }
  createVenta(){
  	this.ventasService.save(this.venta).$promise
  	.then(response => {
  		console.log('Ventas Registrada', response);
  		this.$state.go('main');
  	})
  	.catch(err => {
  		console.log('Error en la Venta', err);
  	})
  }
}

angular.module('palmiConApp')
  .component('ventasCreate', {
    templateUrl: 'app/ventas/ventas-create/ventas-create.html',
    controller: VentasCreateComponent,
    controllerAs: 'vm'
  });

})();
