angular.module('scoreCard').service('service', function(){
  var players = [{},{},{},{}];
  this.updatePlayer1 = function(name){
    players[0].name = name;
    return players;
  }
  this.updatePlayer2 = function(name){
    players[1].name = name;
    return players;
  }
  this.updatePlayer3 = function(name){
    players[2].name = name;
    return players;
  }
  this.updatePlayer4 = function(name){
    players[3].name = name;
    return players;
  }
  this.getPlayer = function(number){
    return players[number]
  }
var counter1 = 0;
this.playerScores1 = function(scores){
  if (scores){
    counter1 += parseInt(scores);
  }
  return counter1;
}
var counter2 = 0;
this.playerScores2 = function(scores){
  if (scores){
    counter2 += parseInt(scores);
  }
  return counter2;
}
var counter3 = 0;
this.playerScores3 = function(scores){
  if (scores){
    counter3 += parseInt(scores);
  }
  return counter3;
}
var counter4 = 0;
this.playerScores4 = function(scores){
  if (scores){
    counter4 += parseInt(scores);
  }
  return counter4;
}

var hole = 1;

this.getHoleNumber = function(){
  hole = hole++;
  return hole;
}
this.nextHole = function(){
  return hole;
}

})
