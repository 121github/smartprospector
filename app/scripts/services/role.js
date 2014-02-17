'use strict';

angular.module('smartprospectorApp')
  .service('Role', function Role($resource) {
    
    return $resource('smartapi/role/:action/:id', {action: 'index', id: '@id'});
    
  });
