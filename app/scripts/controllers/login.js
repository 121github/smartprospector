'use strict';

angular.module('smartprospectorApp')
  .controller('LoginCtrl', function($rootScope, $scope, $location, Auth) {

    $rootScope.pageTitle = 'Welcome';
    $scope.alert = {
      show: false,
      msg: ''
    };
    
    Auth.deauthoriseUser();

    $scope.doLogin = function() {
      if ($scope.loginForm.$invalid) {
        $scope.alert = {
          show: true,
          msg: 'The username and password fields are required'
        };
        return false;
      }
      Auth.login($scope.user.username, $scope.user.password).$promise.then(
      function (response) {
        Auth.createUser(response);
        $location.path('/dashboard');
      },
      function (response) {
        $scope.alert = {
          show: true,
          msg: response.data
        };
      });
    };
    
  });
