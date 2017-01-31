//alert("controller loaded");
var app = angular.module('currencyApp', []);


app.controller('mainCtrl', function($scope, $http){

  function converter(){
    // total=currencyIndex * amount;
    // console.log(total);
  }

  $http.get('/currency').then(function(data){
    console.log("i got the data", data);
    $scope.currency = data.data.data;
    console.log($scope.currency);
  });

  $scope.submit = function(){
    alert("subit button pressed");
        $http.post('/currency').then(function(data){

        console.log(data);
        console.log($scope.amount);
  //      converter();
      });


  }


});
