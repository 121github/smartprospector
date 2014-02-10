'use strict';

angular.module('smartprospectorApp')
  .controller('UsersCtrl', function ($rootScope, $scope, User) {
    
    $rootScope.pageTitle = 'Users';
    $scope.users = User.query({action: 'all'});
    $scope.roleFilter = 'all';
    
  });
