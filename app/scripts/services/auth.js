'use strict';

angular.module('smartprospectorApp')
  .service('Auth', function Auth($resource, apiBaseURL) {
    var User = $resource(apiBaseURL + 'api/user/:action/:username/:password', {action: '@action'}, {
      login: {
        method: 'GET',
        params: {
          action: 'login',
          username: '',
          password: ''
        }
      },
      logout: {
        method: 'POST',
        params: {
          action: 'logout'
        }
      }
    });
    var login = function(username, password) {
      return User.login({
        username: username,
        password: password
      });
    };
    return {
      login: login
    };
  });
