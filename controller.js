var app = angular.module('myApp', []);
app.controller('providerCtrl', function($scope, $http) {
  $http.get("/providers.json").then(function(response) {
    $scope.myData = response.data.records;
  });
});