'use strict';

angular.module('palmiConApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('clientes-create', {
        url: '/clientes-create',
        template: '<clientes-create></clientes-create>'
      })
      .state('clientes-update', {
        url: '/clientes-update/:idCliente',
        template: '<clientes-update></clientes-update>'
      });
  });
