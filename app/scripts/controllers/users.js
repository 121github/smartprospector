'use strict';

angular.module('smartprospectorApp')
  .controller('UsersCtrl', function ($rootScope, $scope, User) {
    
    $rootScope.pageTitle = 'Users';
    $scope.roles         = [];
    var distinctRoles    = [];
    var selectedRoles    = [];
    $scope.loading       = true;
    
    $scope.users = User.query({action: 'all'}, function () {
      $scope.users.forEach(function(user) {
        if (distinctRoles.indexOf(user.role) === -1) {
          distinctRoles.push(user.role);
          $scope.roles.push({role: user.role, checked: false});
        }
      });
      selectedRoles = angular.copy(distinctRoles);
      $scope.loading = false;
    });
    
    $scope.toggleRoleFilter = function () {
      selectedRoles = angular.copy(distinctRoles);
      $scope.roles.forEach(function (role) {
        if (!role.checked) {
          selectedRoles.splice(selectedRoles.indexOf(role.role), 1);
        }
      });
      if (selectedRoles.length === 0) {
        selectedRoles = angular.copy(distinctRoles);
      }
    };
    
    $scope.filterByRole = function(user) {
      return (selectedRoles.indexOf(user.role) !== -1);
    };
    
  });
