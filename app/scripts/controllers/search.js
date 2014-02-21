'use strict';


angular.module('smartprospectorApp').controller('SearchCtrl', function ($rootScope, $scope) {

    $rootScope.pageTitle = 'Search';
    
    $rootScope.items = [
        {name:'Companies',desc:'Search for a business'}, 
        {name:'Contacts',desc:'Search for a person'},
        {name:'Maps',desc:'Search for an address'}
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
            //sector outcomes
    $scope.outcomes = [{id:1, name: 'No Answer'}, {id:2, name: 'Not Interested'}, {id:1, name: 'Call Back'}];
    $scope.selectedOutcomes = [];
  });


function RangeCtrl($scope){
  $scope.data = {range: "Hello"};
}