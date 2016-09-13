angular.module('scoreCard').controller('player3Ctrl', function($scope, service){
  $scope.name = service.getPlayer(2).name;
  $scope.score = service.playerScores3();
})
