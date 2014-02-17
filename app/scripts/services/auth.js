'use strict';

angular.module('smartprospectorApp')
  .service('Auth', function Auth($rootScope, $resource, $cookieStore, $location) {

    var User = $resource('smartapi/user/:action/:username/:password', {
      action   : 'index',
      username : '@username',
      password : '@password'
    });

    var currentUser = {};

    var setUser = function (userData) {
      currentUser = new User(userData);
      $cookieStore.put('currentUser', currentUser);
      $rootScope.$broadcast('permissionsChanged');
    };

    if ($cookieStore.get('currentUser')) {
      setUser($cookieStore.get('currentUser'));
    } else {
      setUser({permissions: []});
    }

    var login = function(username, password) {
      return User.get({username: username, password: password, action: 'login'});
    };

    var logout = function () {
      currentUser.$save({action: 'logout'}, function () {
        setUser({permissions: []});
        $location.path('/login');
      });
    };

    var killUser = function () {
      setUser({permissions: []});
      $location.path('/login');
    };

    var isLoggedIn = function () {
      return currentUser.permissions.length > 0;
    };

    var isAuthorised = function (permission) {
      return !permission || currentUser.permissions.indexOf(permission) !== -1;
    };

    return {
      login: login,
      setUser: setUser,
      currentUser: currentUser,
      isLoggedIn: isLoggedIn,
      logout: logout,
      isAuthorised: isAuthorised,
      killUser: killUser
    };
  });
