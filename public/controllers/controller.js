//alert("controller loaded");
var app = angular.module('currencyApp', []);


app.controller('mainCtrl', function($scope, $http){


  $http.get('http://api.fixer.io/latest?base=USD').then(function(results){
    console.log(results);
    $scope.GBPrate = results.data.rates.GBP;
    $scope.EURrate= results.data.rates.EUR;
    $scope.JPYrate= results.data.rates.JPY;
    $scope.MXNrate= results.data.rates.MXN;
    console.log($scope.GBPrate, $scope.EURrate, $scope.JPYrate, $scope.MXNrate);


    console.log(currencyIndex);

  });

  $http.get('/currency').then(function(data){
    console.log("i got the data", data);
    $scope.currency = data.data.data;
    //onsole.log($scope.EURrate);
  });

    $scope.$watch('currencyIndex', function(currencyIndex){
      $scope.currencyIndex = currencyIndex;
  //    console.log($scope.currencyIndex);
      if(currencyIndex = 'EUR') {
        $scope.currencyIndex = $scope.EURrate;
        console.log($scope.currencyIndex);
      }
      if(currencyIndex = 'GBP') {
        $scope.currencyIndex = $scope.GBPrate;
        console.log($scope.currencyIndex);
      }
      if(currencyIndex = 'JPY') {
        $scope.currencyIndex = $scope.JPYrate;
        console.log($scope.currencyIndex);
      }
      if(currencyIndex = 'MXN') {
        $scope.currencyIndex = $scope.MXNrate;
        console.log($scope.currencyIndex);
      }
    })



  $scope.submit = function(){
    alert("subit button pressed");
        $http.post('/currency').then(function(data){
        console.log(data);
      });


  }


});
