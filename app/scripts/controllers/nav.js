'use strict';

angular.module('smartprospectorApp')
  .controller('NavCtrl', function ($scope) {
    
    $scope.links = [
      {page: 'dashboard', text: 'Dashboard', icon: 'fa-dashboard', permission: 'access_app'},
      {page: 'search', text: 'Search', icon: 'fa-search', permission: 'access_search'},
      {page: 'appointments', text: 'Appointments', icon: 'fa-clock-o', permission: 'access_appointments'},
      {page: 'messages', text: 'Messages', icon: 'fa-inbox', permission: 'access_messages'},
      {page: 'planner', text: 'Planner', icon: 'fa-globe', permission: 'access_planner'},
      {page: 'settings', text: 'Settings', icon: 'fa-gears', permission: 'access_settings'},
      {page: 'users', text: 'Users', icon: 'fa-users', permission: 'access_users'},
      {page: 'reporting', text: 'Reporting', icon: 'fa-bar-chart-o', permission: 'access_reporting'}
    ];
    
  });
