(function(){
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.name = "raunak";
        // $scope.say=function (){
        //     return "grind grind grind";
        // }
        // $scope.state="hungry";
        // $scope.feedronny=function(){
        //     $scope.state="fed";
        // };
    }
})()