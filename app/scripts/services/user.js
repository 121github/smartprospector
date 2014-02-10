'use strict';

angular.module('smartprospectorApp')
  .service('User', function User($resource) {
    
    return $resource('smartapi/user/:action/:id', {action: 'index', id: '@id'});
    
  });
