'use strict';

angular.module('palmiConApp')
  .config(function ($stateProvider) {
    $stateProvider
    .state('ventas-create', {
        url: '/ventas-create',
        template: '<ventas-create></ventas-create>'
      })
      .state('ventas-update', {
        url: '/ventas-update/:idVenta',
        template: '<ventas-update></ventas-update>'
      });
  });
