(function() {
  'use strict';

  angular
    .module('myApp')
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/partial-home.html'
      })

      // nested list with custom controller
      .state('home.list', {
          url: '/list',
          templateUrl: 'app/components/home/partial-home-list.html',
          controller: function($scope) {
              $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
          }
      })

      // nested list with just some random string data
      .state('home.paragraph', {
          url: '/paragraph',
          template: 'I could sure use a drink right now.'
      });

      // .state('about', {

      // });
  }
})();
