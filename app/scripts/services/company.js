'use strict';

angular.module('smartprospectorApp')
  .service('Company', function Search($resource) {
    
    return $resource('smartapi/company/:action/:id', {action: 'index', id: '@id'});
    
  });