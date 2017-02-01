//alert("controller loaded");
var app = angular.module('currencyApp', []);


app.controller('mainCtrl', function($scope, $http){

$scope.currencyIndex =null;



  $http.get('http://api.fixer.io/latest?base=USD').then(function(results){
    console.log(results);
    $scope.GBPrate = results.data.rates.GBP;
    $scope.EURrate= results.data.rates.EUR;
    $scope.JPYrate= results.data.rates.JPY;
    $scope.MXNrate= results.data.rates.MXN;
    console.log( $scope.EURrate, $scope.GBPrate, $scope.JPYrate, $scope.MXNrate);

  });

  $http.get('/currency').then(function(data){
    console.log("i got the data", data);
    $scope.currency = data.data.data;
    //onsole.log($scope.EURrate);
  });

    $scope.$watch('currencyIndex', function(newCurrencyIndex, oldCurrencyIndex){

    //  console.log(newCurrencyIndex, oldCurrencyIndex);
      $scope.currencyIndex = newCurrencyIndex;
    //  console.log($scope.currencyIndex);


      if($scope.currencyIndex = 'EUR') {
        $scope.currencyIndex = $scope.EURrate;
        console.log($scope.currencyIndexEUR);
        var newTotal = $scope.amount * $scope.currencyIndex;
        console.log(newTotal);


      } else

      if($scope.currencyIndex = 'GBP') {
        $scope.currencyIndex = $scope.GBPrate;
        // var newTotal = $scope.amount * $scope.currencyIndex;
        // console.log(newTotal);
      } else

      if($scope.currencyIndex = 'JPY') {
        $scope.currencyIndex = $scope.JPYrate;
        console.log($scope.currencyIndex);
      } else


      if(currencyIndex = 'MXN') {
        $scope.currencyIndex = $scope.MXNrate;
        console.log($scope.currencyIndex);
      }

      console.log(newTotal);
    })



  $scope.submit = function(newTotal){
    alert("subit button pressed");
        $http.post('/currency').then(function(data){
      //  console.log(newTotal);
      });


  }


});
