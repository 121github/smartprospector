'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('smartprospectorApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach the pageTitle to the scope', function () {
    expect(scope.pageTitle).not.toBe('');
  });
  
  describe('Login failure alert', function() {
    
    it('should attach the alert object to the scope', function () {
      expect(scope.alert).toBeDefined();
    });
    
    it('should hide the alert by default', function () {
      expect(scope.alert.show).toBe(false);
    });
    
    it('should contain an empty message by default', function () {
      expect(scope.alert.msg).toBe('');
    });
    
  });
  
});
