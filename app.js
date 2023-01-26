(function(){
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.name = "raunak";
        $scope.lunchItems = "";
        $scope.message = "";

        $scope.checkLunch = function() {
            if ($scope.lunchItems === "" || !$scope.lunchItems.trim()) {
                $scope.message = "Please enter data first";
            } else {
                var items = $scope.lunchItems.split(",");
                var count = items.length;
                if (count <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }
        };
    }
})()