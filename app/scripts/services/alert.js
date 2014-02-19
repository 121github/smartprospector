'use strict';

angular.module('smartprospectorApp')
  .service('Alert', function Alert($rootScope, $timeout) {
    $rootScope.alert = {
      show: false,
      type: '',
      message: ''
    };
    var timoutStartCounter = 0,
      timoutStopCounter = 0;
    var show = function(type, message) {
      timoutStartCounter++;
      $rootScope.alert = {
        show: true,
        type: type,
        message: message
      };
      $timeout(function() {
        timoutStopCounter++;
        if (timoutStopCounter === timoutStartCounter) {
          $rootScope.alert.show = false;
        }
      }, 10000);
    };
    return {
      show: show
    };
  });
