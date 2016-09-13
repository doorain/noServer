angular.module('scoreCard').controller('homeCtrl', function($scope, service){
  $scope.updatePlayer1 = function(name){
    service.updatePlayer1(name);
  }
  $scope.updatePlayer2 = function(name){
    service.updatePlayer2(name);
  }
  $scope.updatePlayer3 = function(name){
    service.updatePlayer3(name);
  }
  $scope.updatePlayer4 = function(name){
    service.updatePlayer4(name);
  }

  $scope.name1 = service.getPlayer(0).name;
  $scope.name2 = service.getPlayer(1).name;
  $scope.name3 = service.getPlayer(2).name;
  $scope.name4 = service.getPlayer(3).name;

$scope.nextHole = function(player1, player2, player3, player4){

  $scope.player1score = service.playerScores1(player1.score);
   $scope.player1.score = "";
  $scope.player2score = service.playerScores2(player2.score);
  $scope.player2.score = "";
  $scope.player3score = service.playerScores3(player3.score);
  $scope.player3.score = "";
  $scope.player4score = service.playerScores4(player4.score);
  $scope.player4.score = "";



}
$scope.player1score = service.playerScores1();
$scope.player2score = service.playerScores2();
$scope.player3score = service.playerScores3();
$scope.player4score = service.playerScores4();

$scope.getHoleNumber = function(){
  service.nextHole();
}

// $scope.nextHole = function(player1, player2, player3, player4){
//   if($scope.player1score){
//     $scope.player1score += parseInt(player1.score);
//     }
//   else {
//     $scope.player1score = parseInt(player1.score);
//   }
//
//
//   if($scope.player2score){
//     $scope.player2score += parseInt(player2.score);
//     }
//   else {
//     $scope.player2score = parseInt(player2.score);
//   }
//
//
//   if($scope.player3score){
//     $scope.player3score += parseInt(player3.score);
//     }
//   else {
//     $scope.player3score = parseInt(player3.score);
//   }
//   $scope.player3.score = "";
//
//   if($scope.player4score){
//     $scope.player4score += parseInt(player4.score);
//     }
//   else {
//     $scope.player4score = parseInt(player4.score);
//   }
//   $scope.player4.score = "";
// }

})
