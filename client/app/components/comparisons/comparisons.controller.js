(function() {
  'use strict';

  angular
    .module('comparisons')
    .controller('ComparisonsController', ComparisonsController);

  ComparisonsController.$inject = [];

  function ComparisonsController() {
    this.test = 'Hi there Evervest!'; 
  }

})();
