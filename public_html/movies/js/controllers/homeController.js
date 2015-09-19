/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var controllerModule = angular.module('workshopAppControllers');

controllerModule.controller('homeController', ['$scope', 'movieService', '_', function ($scope, movieService, _) {
        $scope.movie = {};
        $scope.movies = [];
        $scope.getAllMovies = function () {
            movieService.getAllMovies().then(function (response) {
                $scope.movies = response.data;
            });
        };

        $scope.createMovie = function () {
            movieService.createMovie($scope.movie).then(function (response) {
                $scope.getAllMovies();
                $scope.movie = {};
            });
        };
        
        $scope.getAllMovies();

    }]);


