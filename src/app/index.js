'use strict';

import MainCtrl from './main/main.controller';
import PaperCtrl from './paper/paper.controller';
import nl2br from './components/nl2br/nl2br';

angular.module('metron', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial', 'LocalStorageModule'])
  .controller('MainCtrl', MainCtrl)
  .controller('PaperCtrl', PaperCtrl)
  
  .filter('nl2br', nl2br)
  
  //@ngInject
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('paper', {
        url: '/papers/:id',
        templateUrl: 'app/paper/paper.html',
        controller: 'PaperCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  
  //@ngInject
  .run(function($window, $rootScope){
    $rootScope.$window = $window;
  });
