(function() {
  "use strict";

  angular.module("frontend").factory("jwt", jwt);

  /** @ngInject */
  function jwt($window) {
    var service = {
      deleteToken: removeJwt,
      storeToken: storeJwt,
      getToken: getJwt
    };

    return service;

    function storeJwt(jwt) {
      $window.localStorage["jwt"] = jwt;
    }

    function removeJwt() {
      $window.localStorage.removeItem("jwt");
    }

    function getJwt() {
      return $window.localStorage["jwt"];
    }
  }
})();
