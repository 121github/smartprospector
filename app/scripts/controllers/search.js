'use strict';

angular.module('smartprospectorApp').controller('SearchCtrl', function ($rootScope, $scope) {
    $rootScope.pageTitle = 'Search';
    
    $rootScope.items = [
        {name:'Companies',desc:'Search for a business'}, 
        {name:'Contact',desc:'Search for a person'},
        {name:'Map',desc:'Search for an address'}
      ];
      
      //set the default search type
      $rootScope.name = "Companies";
      $rootScope.description = "Search for a business";
      
      $rootScope.selectItem = function(item){
        $rootScope.name = item.name;
        $rootScope.description = item.desc;
      };
    
    
    //sector multiselect
    $scope.sectors = [{id:1, name: 'Food and Drink'}, {id:2, name: 'Industrial'}, {id:1, name: 'Technology'}];
    $scope.selectedSectors = [];
        //sector multiselect
    $scope.status = [{id:1, name: 'New'}, {id:2, name: 'In Progress'}, {id:1, name: 'Complete'}];
    $scope.selectedStatus = [];
  });
