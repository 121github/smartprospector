'use strict';


angular.module('smartprospectorApp').controller('SearchCtrl', function($scope) {
  $scope.pageTitle = 'Search';
  $scope.loading = false;
});

angular.module('smartprospectorApp').factory('Results', function(Search) {
  return Search.query({action: 'companies'});
});

function searchCtrl($scope,Search) {
 
  
  $scope.items = [
    {type: 'Companies', desc: 'Search for a business'},
    {type: 'Contacts', desc: 'Search for a person'},
    {type: 'Maps', desc: 'Search for an address'}
  ];

  //set the default search type
  $scope.type = "Companies";
  $scope.description = "Search for a business";
  $scope.reset = [];

  $scope.selectItem = function(item) {

    $scope.search.selectedOne = [];
    $scope.search.selectedTwo = [];
    $scope.search.selectedThree = [];


    console.log($scope.search);
    $scope.type = item.type;
    $scope.description = item.desc;
    //clear the selections
    $scope.search = $scope.reset;

    if (item.type === "Companies") {
      $scope.selectOneTitle = "Sector";
      $scope.selectTwoTitle = "Status";
      $scope.selectThreeTitle = "Outcome";


      //sector multiselect
      $scope.selectOne = [{id: 1, name: 'Food and Drink'}, {id: 2, name: 'Industrial'}, {id: 3, name: 'Technology'}];
      //sector multiselect
      $scope.selectTwo = [{id: 1, name: 'New'}, {id: 2, name: 'In Progress'}, {id: 3, name: 'Complete'}];
      //sector outcomes
      $scope.selectThree = [{id: 1, name: 'No Answer'}, {id: 2, name: 'Not Interested'}, {id: 3, name: 'Call Back'}];

    }
    else if (item.type === "Contacts") {

      $scope.selectOneTitle = "Position";
      $scope.selectTwoTitle = "Department";
      $scope.selectThreeTitle = "Income";

      //first multiselect
      $scope.selectOne = [{id: 1, name: 'Director'}, {id: 2, name: 'Manager'}, {id: 3, name: 'Consultant'}];
      //second multiselect
      $scope.selectTwo = [{id: 1, name: 'IT'}, {id: 2, name: 'Sales'}, {id: 3, name: 'Accounts'}];
      //third outcomes
      $scope.selectThree = [{id: 1, name: '£10k-£15k'}, {id: 2, name: '£15k-£30k'}, {id: 3, name: '£30k-£50k'}];
    }
  };


  $scope.selectOneTitle = "Sector";
  $scope.selectTwoTitle = "Status";
  $scope.selectThreeTitle = "Outcome";
  //clear the selections
  $scope.search = [{selectedOne: [], selectedTwo: [], selectedThree: []}];

  //sector multiselect
  $scope.selectOne = [{id: 1, name: 'Food and Drink'}, {id: 2, name: 'Industrial'}, {id: 3, name: 'Technology'}];
  //sector multiselect
  $scope.selectTwo = [{id: 1, name: 'New'}, {id: 2, name: 'In Progress'}, {id: 3, name: 'Complete'}];
  //sector outcomes
  $scope.selectThree = [{id: 1, name: 'No Answer'}, {id: 2, name: 'Not Interested'}, {id: 3, name: 'Call Back'}];



  $scope.displayIcon = 'glyphicon-minus';
  $scope.displayPanel = true;

  $scope.togglePanel = function(panelName) {
    if (panelName === false) {
      $scope.displayIcon = "glyphicon-minus";
    } else {
      $scope.displayIcon = "glyphicon-plus";
    }
  };
}

function resultsCtrl($scope, Results) {
  $scope.displayIcon = 'glyphicon-plus';
  $scope.displayPanel = true;

  $scope.togglePanel = function(panelName) {
    if (panelName === true) {
      $scope.displayIcon = "glyphicon-minus";
    } else {
      $scope.displayIcon = "glyphicon-plus";
    }
  };
  
  
  $scope.records = Results;
  
/*show results as table using ng-grid
  $scope.myData = Results;
  $scope.searchResults = { data: 'myData' }; 
*/
  
};

