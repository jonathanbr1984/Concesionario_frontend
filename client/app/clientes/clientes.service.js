'use strict';

function clientesService($resource, API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource(API + '/api/clientes/:id', {
		id: '@id'
	}, {
	update: {
		method: 'PUT'
	}
	})
}

angular.module('palmiConApp')
  .factory('clientesService', clientesService);
