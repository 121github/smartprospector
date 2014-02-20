'use strict';

angular.module('smartprospectorApp')
  .controller('LoginCtrl', function($rootScope, $scope, $location, Auth, Alert) {

    $rootScope.pageTitle = 'Welcome';
    Auth.killUser();
    
    $scope.doLogin = function() {
      if ($scope.loginForm.$invalid) {
        Alert.show('danger', 'The username & password fields are required');
        return false;
      }
      Auth.login($scope.user.username, $scope.user.password).$promise.then(
      function (response) {
        Auth.setUser(response);
        $location.path('/dashboard');
      },
      function (response) {
        Alert.show('danger', response.data);
      });
    };
    
  });
