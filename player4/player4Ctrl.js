angular.module('scoreCard').controller('player4Ctrl', function($scope, service){
  $scope.name = service.getPlayer(3).name;
  $scope.score = service.playerScores4();
})
