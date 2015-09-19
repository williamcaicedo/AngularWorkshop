/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var lodash = angular.module('lodash',[]);

lodash.factory('_', function(){
        return window._;
});

var controllerModule = angular.module('workshopAppControllers',[]);

controllerModule.controller('homeController',['$scope', 'rfc4122', '_',function($scope, idGen, _) {
        $scope.task = {};
        $scope.tasks = [];
        $scope.finishedTasks = [];
        
        $scope.createTask = function() {
            $scope.task.id = idGen.v4();
            $scope.tasks.push($scope.task);
            $scope.task = {};
        };
        $scope.finishTask = function(task) {
            $scope.finishedTasks.push(task);
            $scope.tasks = _.reject($scope.tasks,{'id':task.id});
           
        };
        $scope.reopenTask = function(task) {
            $scope.tasks.push(task);
            $scope.finishedTasks = _.reject($scope.finishedTasks,{'id':task.id});
        };
}]);


angular.module('workshopApp',['workshopAppControllers','uuid', 'lodash']);


