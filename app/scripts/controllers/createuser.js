'use strict';

angular.module('smartprospectorApp')
  .controller('CreateUserCtrl', function ($rootScope, $scope, Role, User, Alert) {

    $rootScope.pageTitle = 'Create User';
    $scope.loading = true;

    $scope.roles = Role.query(function () {
      if ($scope.roles.length > 0) {
        $scope.user = {role_id: $scope.roles[0].id};
      }
      $scope.loading = false;
    });

    $scope.doCreateUser = function (user) {
      if ($scope.createUserForm.$invalid) {
        Alert.show('danger', 'Please complete all fields.');
        return false;
      }
      new User(user).$save({action: 'create'},
      function () {
        Alert.show('success', 'New user created. The password has been sent to \'' + user.email + '\'.');
        user.first_name = '';
        user.last_name  = '';
        user.username   = '';
        user.email      = '';
        $scope.createUserForm.$setPristine(true);
      },
      function (response) {
        Alert.show('danger', response.data);
      });
    };

  });
