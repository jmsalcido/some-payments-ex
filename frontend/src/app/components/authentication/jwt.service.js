(function() {
  "use strict";

  angular.module("frontend").service("jwt", jwt);

  /** @ngInject */
  function jwt($window) {
    var service = {
      deleteToken: removeJwt,
      storeToken: storeJwt,
      getToken: getJwt,
      parseToken: parseJwt
    };

    return service;

    function parseJwt(token) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace("-", "+").replace("_", "/");
      return angular.fromJson($window.atob(base64));
    }

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
