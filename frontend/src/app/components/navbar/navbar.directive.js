(function() {
  "use strict";

  angular.module("frontend").directive("appNavBar", appNavBar);

  /** @ngInject */
  function appNavBar() {
    var directive = {
      restrict: "E",
      templateUrl: "app/components/navbar/template.html",
      controller: "NavigationController",
      controllerAs: "vm"
    };

    return directive;
  }
})();
