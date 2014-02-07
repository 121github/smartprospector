'use strict';

angular.module('smartprospectorApp')
  .controller('MainCtrl', function ($scope, Auth) {
    $scope.doLogout = function () {
      Auth.logout();
    };
  });
