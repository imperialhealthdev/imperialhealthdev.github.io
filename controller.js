var app = angular.module('myApp', []);
app.controller('providersCtrl', function ($scope, $http) {
    $scope.quantity = 12;
    $scope.loading = true;
    $http.get("https://imperialhealthdev.github.io/providers.json").then(function (response) {
        
        $scope.myData = response.data.data;
        $scope.loading = false;
        
        
        var cities = [];
        $.each(response.data.data, function(index, value) {
        if ($.inArray(value.City, cities)==-1) {
        cities.push(value.City);
        }
        });
        $scope.filteredCity = cities;
        
        var states = [];
        $.each(response.data.data, function(index, value) {
        if ($.inArray(value.State, states)==-1) {
        states.push(value.State);
        }
        });
        $scope.filteredState = states;
        
        
        var languages = [];
        $.each(response.data.data, function(index, value) {
        if ($.inArray(value.Language, languages)==-1) {
        languages.push(value.Language);
        }
        });
        $scope.filteredLang = languages;
        
        
        var specialties = [];
        $.each(response.data.data, function(index, value) {
        if ($.inArray(value.Specialty, specialties)==-1) {
        specialties.push(value.Specialty);
        }
        });
        $scope.filteredSpecialty = specialties;
       
    
});
        


    $scope.clearFilter = function () {
        $scope.query = "";
        $scope.cityFilter = "";
        $scope.stateFilter = "";
        $scope.langFilter = "";
        $scope.specFilter = "";
    };


    $scope.loadMore = function () {
        var incremented = $scope.quantity + 36;
        $scope.quantity = incremented > $scope.myData.length ? $scope.myData.length : incremented;
    };
    

//unique filter

    });

app.directive("directiveWhenScrolled", function () {
    return function (scope, elm, attr) {
        var raw = elm[0];

        elm.bind('scroll', function () {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.directiveWhenScrolled);
            }
        });
    };
});