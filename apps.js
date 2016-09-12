angular.module('scoreCard', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeCtrl',
    templateUrl: 'home/home.html'
  })
  .state('player1', {
    url: '/player1',
    controller: 'player1Ctrl',
    templateUrl: 'player1/player1.html'
  })
  .state('player2', {
    url: '/player2',
    controller: 'player2Ctrl',
    templateUrl: 'player2/player2.html'
  })
  .state('player3', {
    url: '/player3',
    controller: 'player3Ctrl',
    templateUrl: 'player3/player3.html'
  })
  .state('player4', {
    url: '/player4',
    controller: 'player4Ctrl',
    templateUrl: 'player4/player4.html'
  })
})
