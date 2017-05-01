angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/',
        template: '<h1>This is the home page</h1>',
        controller: ''
    })
    .state('about', {
        url: '/about',
        template: '<h1>About About About</h1>',
        controller: 'aboutCtrl'
    })
    .state('roster', {
        url: '/roster',
        templateUrl: 'roster/roster.html',
        controller: 'rosterCtrl'
    })
    .state('player', {
        url: '/player/:id',
        templateUrl: 'player/player.html',
        controller: 'playerCtrl'
    })

    $urlRouterProvider.otherwise('/');


})