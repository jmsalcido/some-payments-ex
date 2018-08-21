(function() {
  "use strict";

  angular.module("frontend").factory("httpInterceptor", httpInterceptor);

  /** @ngInject */
  function httpInterceptor($q, $location, jwt) {
    var interceptor = {
      request: request,
      responseError: responseError
    };

    return interceptor;

    function request(config) {
      config.headers = config.headers || {};

      var token = jwt.getToken();
      if (token) {
        config.headers.Authorization = "Bearer " + token;
      }

      return config;
    }

    function responseError(response) {
      var status = response.status;

      if (status === 401 || status === 403) {
        $location.path("login");
      }

      return $q.reject(response);
    }
  }
})();
