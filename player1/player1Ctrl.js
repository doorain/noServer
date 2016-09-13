angular.module('scoreCard').controller('player1Ctrl', function($scope, service){
  $scope.name = service.getPlayer(0).name;
  $scope.score = service.playerScores1();

})
