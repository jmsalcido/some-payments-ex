(function() {
  "use strict";

  angular.module("frontend").service("authenticator", authenticator);

  /** @ngInject */
  function authenticator($http, jwt, API) {
    // todo create the API.

    var service = {
      login: login,
      register: register,
      logout: logout,
      hasToken: hasToken,
      tokenInfo: tokenInfo
    };

    return service;

    function login(email, password, callback) {
      return authenticate(
        $http.post(API + "/auth/login", {
          email: email,
          password: password
        }),
        callback
      );
    }

    function register(
      username,
      email,
      password,
      password_confirmation,
      callback
    ) {
      return authenticate(
        $http.post(API + "/signup", {
          name: username,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }),
        callback
      );
    }

    function authenticate(promise, callback) {
      return promise.then(
        function(response) {
          callback(storeToken(response), response.data);
        },
        function(response) {
          callback(false, response.data);
        }
      );
    }

    function storeToken(response) {
      var token = response.data.auth_token;
      var success = false;
      if (token) {
        jwt.storeToken(token);
        success = true;
      }

      return success;
    }

    function hasToken() {
      return jwt.getToken() ? true : false;
    }

    function logout() {
      jwt.deleteToken();
    }

    function tokenInfo() {
      return jwt.parseToken(jwt.getToken());
    }

  }
})();
