'use strict';

angular.module('smartprospectorApp')
  .service('Auth', function Auth($resource) {
    var User = $resource('smartapi/user/:action/:username/:password', {action: '@action'}, {
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
