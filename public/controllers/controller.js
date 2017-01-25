//alert("controller loaded");
var app = angular.module('currencyApp', []);


app.controller('mainCtrl', function($scope, $http){

  $http.get('/currency').then(function( data){
    console.log("i got the data", data);
    $scope.currency = data;
    console.log($scope.currency);
  });

  $scope.submit = function(){
    alert("subit button pressed");
    $http.post('/currency', $scope.ammount);
    console.log($scope.ammount);
  }

});
