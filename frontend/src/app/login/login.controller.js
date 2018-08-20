(function() {
    'use strict';
  
    angular
      .module('frontend')
      .controller('LoginController', LoginController);
  
    /** @ngInject */
    function LoginController() {
      var vm = this;

      vm.foo = ['hola', 'adios'];
    }
  })();