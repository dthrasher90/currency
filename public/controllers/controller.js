//alert("controller loaded");
var app = angular.module('currencyApp', []);


app.controller('mainCtrl', function($scope, $http) {


    function refresh() {
        location.reload();
    }

    $http.get(https://api.fixer.io/latest?base=USD).then(function(results) {
        console.log();
        $scope.GBPrate = results.data.rates.GBP;
        $scope.EURrate = results.data.rates.EUR;
        $scope.JPYrate = results.data.rates.JPY;
        $scope.KRWrate = results.data.rates.KRW;
        $scope.MXNrate = results.data.rates.MXN;
        $scope.AUDrate = results.data.rates.AUD;
        $scope.IDRrate = results.data.rates.IDR;
        console.log($scope.EURrate, $scope.GBPrate, $scope.JPYrate, $scope.MXNrate);

    });

    $http.get('/currency').then(function(data) {
        console.log("i got the data", data);
        $scope.currency = data.data.data;
        console.log(data.data.data);
    });

    $scope.$watch('currencyIndex', function(newCurrencyIndex, oldCurrencyIndex) {

        if ($scope.currencyIndex == 'AUD') {
            $scope.currencyIndexRate = $scope.AUDrate;
            console.log($scope.currencyIndexRate);
        }
        if ($scope.currencyIndex == 'EUR') {
            $scope.currencyIndexRate = $scope.EURrate;
            console.log($scope.currencyIndexRate);
        }

        if ($scope.currencyIndex == 'GBP') {
            $scope.currencyIndexRate = $scope.GBPrate;
            console.log($scope.currencyIndexRate);
        }

        if ($scope.currencyIndex == 'IDR') {
            $scope.currencyIndexRate = $scope.IDRrate;
            console.log($scope.currencyIndexRate);
        }

        if ($scope.currencyIndex == 'JPY') {
            $scope.currencyIndexRate = $scope.JPYrate;
            console.log($scope.currencyIndexRate);
        }
        if ($scope.currencyIndex == 'KRW') {
            $scope.currencyIndexRate = $scope.KRWrate;
            console.log($scope.currencyIndexRate);
        }


        if ($scope.currencyIndex == 'MXN') {
            $scope.currencyIndexRate = $scope.MXNrate;
            console.log($scope.currencyIndexRate);
        }

    })



    $scope.submit = function() {
        alert("subit button pressed");
        console.log($scope.currencyIndexRate);
        $scope.total = $scope.currencyIndexRate * $scope.amount;
        $scope.total = $scope.total.toFixed(2);
        console.log($scope.total)
        $http.post('/currency', {
                name: $scope.currencyIndex,
                amount: $scope.amount,
                rate: $scope.currencyIndexRate,
                total: $scope.total
            })
            .then(function(response) {
                console.log("post request made", response);

            }, function(response) {
                console.log("an error has occured");


            });

            refresh();

    }

    $scope.delete = function(data) {
        // alert("delete button pressed");
        console.log(data)
        // pass id as data attribute
        $http({
            method: 'DELETE',
            url: '/currency/' + data._id
            // data:  req.params._id
        }).then(function(response) {
            console.log('delete request was made');
        }, function(response) {
            console.log("a delete error has occured");
        });

        refresh();
    }


});
