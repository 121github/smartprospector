'use strict';

angular.module('smartprospectorApp')
    .directive('hasPermission', function(Auth) {
      return {
        link: function(scope, element, attrs) {
          function toggleVisibilityBasedOnPermission() {
            var permission = attrs.hasPermission.trim();
            var isAuthorised = Auth.isAuthorised(permission);
            if (isAuthorised) {
              element.show();
            } else {
              element.hide();
            }
          }
          toggleVisibilityBasedOnPermission();
          scope.$on('permissionsChanged', toggleVisibilityBasedOnPermission);
        }
      };
    });
