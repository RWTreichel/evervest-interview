(function() {
  'use strict';
  
  angular
    .module('disney')
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'nav': {
            templateUrl: 'app/components/nav/nav.view.html',
            controller: 'NavController as nav'
          }
        }
      });
  }

})();
