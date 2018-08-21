(function() {
  "use strict";

  angular.module("frontend").factory("authenticator", authenticator);

  /** @ngInject */
  function authenticator($http, API) {
    // todo create the API.

    var service = {
      login: login,
      register: register
    };

    return service;

    function login(username, password) {
      return $http.post(API + "/auth/login", {
        username: username,
        password: password
      });
    }

    function register(username, password) {
      // TODO implement me
      console.log("stub implementation");

      return $http.post(API + "/auth/register", {
        username: username,
        password: password
      });
    }
  }
})();
