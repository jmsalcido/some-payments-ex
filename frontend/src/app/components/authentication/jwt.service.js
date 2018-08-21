(function() {
  "use strict";

  angular.module("frontend").factory("jwt", jwt);

  /** @ngInject */
  function jwt($window) {
    var service = {
      storeToken: storeJwt,
      getToken: getJwt
    };

    return service;

    function parseJwt(jwt) {
      var base64Url = jwt.split(".")[1];
      var base64 = base64Url.replace("-", "+").replace("_", "/");

      return angular.fromJson($window.atob(base64));
    }

    function storeJwt(jwt) {
      $window.localStorage["jwt"] = jwt;
    }

    function getJwt() {
      return $window.localStorage["jwt"];
    }
  }
})();
