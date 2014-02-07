'use strict';

angular.module('smartprospectorApp')
  .service('Auth', function Auth($rootScope, $resource, $cookieStore, $location) {
    var User = $resource('smartapi/user/:action/:username/:password', {action: '@action', username: '@username', password: '@password'}, {
      login: {
        method: 'GET',
        params: {
          action: 'login'
        }
      },
      logout: {
        method: 'POST',
        params: {
          action: 'logout'
        }
      }
    });
    var currentUser = new User($cookieStore.get('currentUser')) || new User({permissions: []});
    var login = function(username, password) {
      return User.login({
        username: username,
        password: password
      });
    };
    var logout = function () {
      currentUser.$logout({}, function () {
        $location.path('/login');
      });
    };
    var setUser = function (userData) {
      currentUser = new User(userData);
      $cookieStore.put('currentUser', currentUser);
      $rootScope.$broadcast('permissionsChanged');
    };
    var isLoggedIn = function () {
      return currentUser.permissions.length > 0;
    };
    var isAuthorised = function (permission) {
      return !permission || currentUser.permissions.indexOf(permission) !== -1;
    };
    var deauthoriseUser = function () {
      setUser({permissions: []});
    };
    return {
      login: login,
      setUser: setUser,
      currentUser: currentUser,
      isLoggedIn: isLoggedIn,
      logout: logout,
      isAuthorised: isAuthorised,
      deauthoriseUser: deauthoriseUser
    };
  });
