'use strict';

(function(){

class VentasUpdateComponent {
  constructor(ventasService, vehiculosService, $state, $stateParams) {
    this.ventasService = ventasService;
    this.vehiculosService = vehiculosService;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }
  $onInit(){
  	this.ventasService.get({id: this.$stateParams.idVenta}).$promise
  	.then(response => {
  		this.venta = response;
  		console.log('Ventas', response);
  	})
  	.catch(err => {
  		console.log('ERROR', err);
  	})
  	this.vehiculosService.query().$promise
  	.then(response => {
  		console.log('Vehiculos', response);
  	})
  	.catch(err => {
  		console.log('ERROR', err);
  	})
  }
  updateVenta(){
  	this.ventasService.update({id: this.venta.id}, this.venta).$promise
  	.then(response => {
      this.$state.go('main');
  		console.log('Venta Actualizada', response);
  	})
  	.catch(err => {
  		console.log('Perdon la venta no se hizo', err);
  	})
  }
}

angular.module('palmiConApp')
  .component('ventasUpdate', {
    templateUrl: 'app/ventas/ventas-update/ventas-update.html',
    controller: VentasUpdateComponent,
    controllerAs: 'vm'
  });

})();
