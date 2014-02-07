'use strict';

angular.module('smartprospectorApp')
  .controller('NavCtrl', function ($scope) {
    
    $scope.links = [
      {page: 'dashboard', text: 'Dashboard', icon: 'glyphicon-dashboard', permission: 'access_app'},
      {page: 'search', text: 'Search', icon: 'glyphicon-search', permission: 'access_search'},
      {page: 'appointments', text: 'Appointments', icon: 'glyphicon-time', permission: 'access_appointments'},
      {page: 'messages', text: 'Messages', icon: 'glyphicon-inbox', permission: 'access_messages'},
      {page: 'planner', text: 'Planner', icon: 'glyphicon-globe', permission: 'access_planner'},
      {page: 'settings', text: 'Settings', icon: 'glyphicon-cog', permission: 'access_settings'},
      {page: 'users', text: 'Users', icon: 'glyphicon-user', permission: 'access_users'},
      {page: 'reporting', text: 'Reporting', icon: 'glyphicon-stats', permission: 'access_reports'}
    ];
    
  });
