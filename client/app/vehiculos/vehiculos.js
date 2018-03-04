'use strict';

angular.module('palmiConApp')
  .config(function ($stateProvider) {
    $stateProvider
    	.state('vehiculos-create', {
        url: '/vehiculos-create',
        template: '<vehiculos-create></vehiculos-create>'
      })
      .state('vehiculos-update', {
        url: '/vehiculos-update/:id',
        template: '<vehiculos-update></vehiculos-update>'
      });
  });
