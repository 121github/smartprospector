'use strict';

angular.module('smartprospectorApp')
  .controller('UsersCtrl', function ($rootScope, $scope, User) {
    
    $rootScope.pageTitle = 'Users';
    $scope.roles         = ['All'];
    $scope.filterRole    = {selected: 'All'};
    $scope.loading       = true;
    
    $scope.users = User.query({action: 'all'}, function () {
      $scope.users.forEach(function(user) {
        if ($scope.roles.indexOf(user.role) === -1) {
          $scope.roles.push(user.role);
        }
      });
      $scope.loading = false;
    });
    
    $scope.filterByRole = function(user) {
      return $scope.filterRole.selected === 'All' ? true : user.role === $scope.filterRole.selected ? true : false;
    };
    
  });
