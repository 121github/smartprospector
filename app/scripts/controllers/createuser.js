'use strict';

angular.module('smartprospectorApp')
  .controller('CreateUserCtrl', function ($scope, Role) {
    
    $scope.loading = true;
    $scope.roles = Role.query(function () {
      $scope.loading = false;
    });
    
  });
