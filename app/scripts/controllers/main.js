'use strict';

angular.module('smartprospectorApp')
  .controller('MainCtrl', function ($scope, Auth, $location) {
    
    $scope.doLogout = function () {
      Auth.logout();
    };
    
    $scope.go = function (path) {
      $location.path(path);
    };
    
  });
