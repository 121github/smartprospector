'use strict';

angular.module('smartprospectorApp')
  .controller('LoginCtrl', function($rootScope, $scope, Auth) {
    
    $rootScope.pageTitle = 'Welcome';
    $scope.alert = {show : false, msg  : ''};

    $scope.doLogin = function() {
      if ($scope.loginForm.$invalid) {
        $scope.alert = {show : true, msg  : 'Please provide your username & password'};
        return false;
      }
      Auth.login($scope.user.username, $scope.user.password);
    };
  });
