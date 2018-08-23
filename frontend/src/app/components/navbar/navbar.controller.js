(function() {
  "use strict";

  angular
    .module("frontend")
    .controller("NavigationController", NavigationController);

  /** @ngInject */
  function NavigationController($scope, $location, authenticator) {
    var vm = this;

    vm.hasToken = hasToken;
    vm.isActive = isActive;
    vm.page_name = "Some Payments";

    function hasToken() {
      return authenticator.hasToken();
    }

    function isActive(path) {
      if (path === "/") {
        if ($location.path() === "/") {
          return "active";
        } else {
          return "";
        }
      }

      if ($location.path().substr(0, path.length) === path) {
        return "active";
      } else {
        return "";
      }
    }
  }
})();
