//alert("controller loaded");
var app = angular.module('currencyApp', []);


app.controller('mainCtrl', function($scope, $http){



// app.config(function ($httpProvider) {
//     $httpProvider.defaults.transformRequest = function(data){
//         if (data === undefined) {
//             return data;
//         }
//         return $.param(data);
//     }
// });


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


      if($scope.currencyIndex == 'EUR') {
        $scope.currencyIndexRate = $scope.EURrate;
        console.log($scope.currencyIndexRate);
      }

      if($scope.currencyIndex == 'GBP') {
        $scope.currencyIndexRate = $scope.GBPrate;
         console.log($scope.currencyIndexRate);
      }

      if($scope.currencyIndex == 'JPY') {
        $scope.currencyIndexRate = $scope.JPYrate;
        console.log($scope.currencyIndexRate);
      }


      if($scope.currencyIndex == 'MXN') {
        $scope.currencyIndexRate = $scope.MXNrate;
        console.log($scope.currencyIndexRate);
      }

    })



  $scope.submit = function(newTotal){
    alert("subit button pressed");
    console.log($scope.amount);
    $scope.newTotal = $scope.currencyIndexRate * amount;
    console.log($scope.newTotal);
        $http.post('/currency',  {
              name: $scope.currencyIndex,
              amount: $scope.amount,
              rate: $scope.currencyIndexRate,
              total: $scope.newTotal
            })
        .then(function(response){
          console.log("post request made", response);

        }, function (response){
          console.log("an error has occured");

        });



  }


});
