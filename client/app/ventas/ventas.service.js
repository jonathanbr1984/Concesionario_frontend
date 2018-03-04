'use strict';

function ventasService($resource, API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource(API + '/api/ventas/:id', {
		id: '@id'
	}, {
	update: {
		method: 'PUT'
	}
	})
}

angular.module('palmiConApp')
  .factory('ventasService', ventasService);
