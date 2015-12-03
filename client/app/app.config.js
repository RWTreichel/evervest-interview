(function() {
  'use strict';

  angular
    .module('app')
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
      })

      .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'app/components/about/partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: 'app/shared/table-data.html',
                controller: 'ScotchController as scotch'
            }
        }
      });
  }

})();