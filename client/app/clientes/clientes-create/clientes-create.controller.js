'use strict';

(function(){

class ClientesCreateComponent {
  constructor(clientesService, $state) {
    this.clientesService = clientesService;
    this.$state = $state;
  }
  $onInit(){}
  createCliente(){
  	this.clientesService.save(this.cliente).$promise
  	.then(response => {
  		console.log('Se registro cliente', response);
  		this.$state.go('main');
  	})
  	.catch(err => {
  		console.log('Perdon no se pudo registras clientr', err);
  	})
  }
}

angular.module('palmiConApp')
  .component('clientesCreate', {
    templateUrl: 'app/clientes/clientes-create/clientes-create.html',
    controller: ClientesCreateComponent,
    controllerAs: 'vm'
  });

})();
