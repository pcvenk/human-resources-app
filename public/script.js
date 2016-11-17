var app = angular.module('app', []);

app.controller('main', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){

    $scope.employees = [];
    $scope.firstName = $scope.lastName = '';

    $http.get('/employees')
        .then(function(data) {
            $scope.employees = data;
            $rootScope.$emit('log', 'GET /employees success');
        });

    $scope.add = function (){

        $http.post('/employees', {
            first: $scope.firstName,
            last: $scope.lastName
        }).then(function(data){
            $scope.employees.push(data);
            $scope.firstName = $scope.lastName = '';
            $rootScope.$emit('log', 'POST /employees success');
            });
    };

    $scope.remove = function(employee){

        $http.delete('/employees/' + employee.id)
            .then(function(data){
                $scope.employees = data;
                $rootScope.$emit('log', 'DELETE /employees success');
            });
    };
}]);

app.controller('logger', ['$scope', '$rootScope', function ($scope, $rootScope){

    $scope.events = [];
    $rootScope.$on('log', function (event, data){
        $scope.events.push(data.trim());
    });
}]);