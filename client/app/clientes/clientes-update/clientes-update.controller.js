'use strict';

(function(){

class ClientesUpdateComponent {
  constructor(clientesService, $state, $stateParams) {
    this.clientesService = clientesService;
    this.$state = $state;
    this.$stateParams = $stateParams;
  }
  $onInit(){
  	this.clientesService.get({id: this.$stateParams.idCliente}).$promise
  	.then(response => {
  		this.cliente = response;
  	})
  	.catch(err => {
  		console.log('ERROR', err);
  	})
  }
  updateCliente(){
  	this.clientesService.update({id: this.cliente.id}, this.cliente).$promise
  	.then(response => {
  		console.log('se actualizo cliente', response);
  		this.$state.go('main');
  	})
  	.catch(err => {
  		console.log('no se pudo actualizar el cliente', err);
  	})
  }
}

angular.module('palmiConApp')
  .component('clientesUpdate', {
    templateUrl: 'app/clientes/clientes-update/clientes-update.html',
    controller: ClientesUpdateComponent,
    controllerAs: 'vm'
  });

})();
