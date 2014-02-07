'use strict';

angular.module('smartprospectorApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })
  .config(function($httpProvider) {
    $httpProvider.responseInterceptors.push('securityInterceptor');
  })
  .provider('securityInterceptor', function() {
    this.$get = function($location, $q) {
      return function(promise) {
        return promise.then(null, function(response) {
          if(response.status === 403 || response.status === 401) {
            $location.path('/login');
          }
          return $q.reject(response);
        });
      };
    };
  })
  .run(function($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (!Auth.isAuthorised(next.permission)) {
        if (Auth.isLoggedIn()) {
          $location.path('/dashboard');
        } else {
          $location.path('/login');
        }
      }
    });
  });
