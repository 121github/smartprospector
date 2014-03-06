'use strict';


angular.module('smartprospectorApp').controller('SearchCtrl', function($rootScope, $scope, searchCompanies, geolocation, Geocoder) {
  $rootScope.pageTitle = 'Search';
  $rootScope.loading = false;
  $scope.preSearch = true;
  $scope.search = {};

  $scope.getPostcode = function() {
    geolocation.getLocation().then(function(data) {
//console.log(data);
      Geocoder.addressForLatLng(data.coords.latitude, data.coords.longitude).then(function(data) {
        $scope.search.postcode = data.postcode;
      });
    });
  };

  $scope.items = [
    {type: 'Companies', desc: 'Search for a business'},
    {type: 'Contacts', desc: 'Search for a person'},
    {type: 'Maps', desc: 'Search for an address'}
  ];


  //set the default search type
  $scope.type = "Companies";
  $scope.description = "Search for a business";

  $scope.selectItem = function(item) {

    $scope.type = item.type;
    $scope.description = item.desc;

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

  $scope.doSearch = function(params) {
    searchCompanies.query(
            params, function(response) {
      if (response[0]) {
        $scope.msg = "";
        $scope.records = response;

      } else {
        $scope.msg = "No results found";
        $scope.records = {};
      }
      //for some reason this only works once when you submit the search???
      $scope.filterIcon = "glyphicon-plus";
      $scope.searchPanelState = true;
      $scope.resultsIcon = "glyphicon-minus";
      $scope.resultsPanelState = true;
      $scope.preSearch = false;
    });
  };

//sets the initial panel icons
  $scope.resultsIcon = 'glyphicon-plus';
  $scope.filterIcon = 'glyphicon-minus';



  $scope.toggleSearchPanel = function(panelState) {
    if (panelState === false) {
      $scope.filterIcon = "glyphicon-minus";
      $scope.searchPanelState = true;
    } else {
      $scope.filterIcon = "glyphicon-plus";
      $scope.searchPanelState = false;
    }
  };

  $scope.toggleResultsPanel = function(panelState) {
    if (panelState === true) {
      $scope.resultsIcon = "glyphicon-minus";
      $scope.resultsPanelState = true;
    } else {
      $scope.resultsIcon = "glyphicon-plus";
      $scope.resultsPanelState = false;
    }
  };

});

//show results as table using ng-grid
//$scope.myData = Results;
//$scope.searchResults = { data: 'myData' }; 


;

