(function() {
    "use strict";
  
    angular.module("frontend").service("PaymentService", PaymentService);
  
    /** @ngInject */
    function PaymentService($http, API) {
      var service = {
        getPayments: getPayments
      };
  
      return service;
  
      function getPayments(callback) {
        $http.get(API + "/payments/")
        .then(function(response) {
          callback(response.data);
        });
      }
    }
  })();
  