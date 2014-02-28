'use strict';

angular.module('smartprospectorApp')
  .service('Search', function Search($resource) {
    
    return $resource('smartapi/search/:action/:id', {action: 'companies', id: '1'});
    
  });