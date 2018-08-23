(function() {
  "use strict";

  angular.module("frontend").controller("LogoutController", LogoutController);

  /** @ngInject */
  function LogoutController(authenticator, $location) {

    initialize();

    function initialize() {
      authenticator.logout();
      $location.path('/login');
    }
  }
})();
