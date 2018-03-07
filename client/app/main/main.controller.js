'use strict';

(function() {

  class MainController {

    constructor(clientesService, ventasService, vehiculosService) {
      this.clientesService = clientesService;
      this.ventasService = ventasService;
      this.vehiculosService = vehiculosService;
    }

    $onInit() {
      this.clientesService.query().$promise
      .then(response => {
        this.cliente = response;
        // console.log('Clientes', response);
      })
      .catch(err => {
        console.log('Error Cliente', err);
      })
      this.ventasService.query().$promise
      .then(response => {
        this.venta = response;
        // console.log('Ventas', response);
      })
      .catch(err => {
        console.log('Error Venta', err);
      })
      this.vehiculosService.query().$promise
      .then(response => {
        this.vehiculo = response;
        // console.log('Vehiculos', response);
      })
      .catch(err => {
        console.log('Error Vehiculo', err);
      })
    }
  }

  angular.module('palmiConApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });
})();
