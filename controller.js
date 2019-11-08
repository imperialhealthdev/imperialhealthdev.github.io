var app = angular.module('myApp', []);
app.controller('providersCtrl', function($scope, $http) {
  $http.get("https://imperialhealthdev.github.io/providers.json").then(function(response) {
    $scope.myData = response.data.data;
  });
    $scope.quantity = 10;
});

