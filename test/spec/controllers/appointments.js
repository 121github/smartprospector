'use strict';

describe('Controller: AppointmentsCtrl', function () {

  // load the controller's module
  beforeEach(module('smartprospectorApp'));

  var AppointmentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmentsCtrl = $controller('AppointmentsCtrl', {
      $scope: scope
    });
  }));

});
