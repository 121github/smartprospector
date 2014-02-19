'use strict';

angular.module('smartprospectorApp')
  .controller('CreateUserCtrl', function ($rootScope, $scope, Role) {
    
    $rootScope.pageTitle = 'Create User';
    $scope.loading = true;

    $scope.roles = Role.query(function () {
      if ($scope.roles.length > 0) {
        $scope.user = {role: $scope.roles[0].id};
      }
      $scope.loading = false;
    });
    
    $scope.doCreateUser = function (user) {
      alert(user);
    };
    
  });
