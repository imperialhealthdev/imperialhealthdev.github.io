var app = angular.module('myApp', []);
app.controller('providersCtrl', function($scope, $http) {
$scope.quantity = 12; 
     
  $http.get("https://imperialhealthdev.github.io/providers.json").then(function(response) {
      $scope.myData = response.data.data;
  });
    
      $scope.clearFilter = function() {
      $scope.query = "";
      $scope.cc = {};
    };
    
  $scope.loadMore = function() {
      var incremented = $scope.quantity + 36;
      $scope.quantity = incremented > $scope.myData.length ? $scope.myData.length : incremented;
    };
    
});


//filter to remove duplicates for dropdown buttons and show unique values
app.filter('unique', function () {

        return function (items, filterOn) {

            
            if (filterOn === false) {
                return items;
            }

            if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
                var hashCheck = {}, newItems = [];

                var extractValueToCompare = function (item) {
                    if (angular.isObject(item) && angular.isString(filterOn)) {
                        return item[filterOn];
                    } else {
                        return item;
                    }
                };

                angular.forEach(items, function (item) {
                    var valueToCheck, isDuplicate = false;

                    for (var i = 0; i < newItems.length; i++) {
                        if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                            isDuplicate = true;
                            break;
                        }
                    }
                    if (!isDuplicate) {
                        newItems.push(item);
                    }

                });
                items = newItems;
            }
            return items;
        };
    });

app.directive("directiveWhenScrolled", function() {
  return function(scope, elm, attr) {
    var raw = elm[0];

    elm.bind('scroll', function() {
      if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
        scope.$apply(attr.directiveWhenScrolled);
      }
    });
  };
});