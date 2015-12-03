(function() {
  'use strict';

  angular
    .module('disney.nav')
    .controller('NavController', NavController);

  NavController.$inject = [];

  function NavController() {
    this.tabs = [
      {
        title: 'Yo',
        active: true,
        content: 'Whaaat'
      },
      {
        title: 'Hey',
        active: false,
        content: 'Nooooooo!'
      }
    ];
  }

})();
