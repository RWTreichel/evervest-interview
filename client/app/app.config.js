(function() {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('comparisons');

    $stateProvider
      .state('comparisons', {
        url: '/comparisons',
        templateUrl: 'app/components/comparisons/comparisons.view.html',
        controller: 'ComparisonsController as comparisons'
      });
  }

})();
