(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($location) {
    var vm = this;

    vm.classAnimation = '';
    vm.goToApp = goToApp;

    activate();

    function activate() {
      vm.classAnimation = 'bounceIn';
    }

    function goToApp() {
      $location.path("/payments")
    }
  }
})();
