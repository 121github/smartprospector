'use strict';

angular.module('smartprospectorApp')
  .service('searchCompanies', function Companies($resource) {
    return $resource('smartapi/search/:action/:id', {action: 'companies', id: '@id'});
  });
  
angular.module('smartprospectorApp')
  .service('searchContacts', function Contacts($resource) {
    return $resource('smartapi/search/:action/:id', {action: 'contacts', id: '@id'});
  });
  
  