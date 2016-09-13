angular.module('scoreCard').controller('player2Ctrl', function($scope, service){
  $scope.name = service.getPlayer(1).name;
  $scope.score = service.playerScores2();
})
