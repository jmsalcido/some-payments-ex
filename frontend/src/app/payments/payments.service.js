(function() {
    "use strict";
  
    angular.module("frontend").service("PaymentService", PaymentService);
  
    /** @ngInject */
    function PaymentService($http, API) {
      var service = {
        getPayments: getPayments,
        getPayment: getPayment,
        addPayment: addPayment,
        deletePayment: deletePayment,
        editPayment: editPayment
      };
  
      return service;
  
      function getPayments(callback) {
        $http.get(API + "/payments/")
        .then(function(response) {
          callback(response.data);
        });
      }

      function getPayment(id, callback) {
        $http.get(API + "/payments/" + id)
        .then(function(response) {
          callback(true, response.data);
        }, function(errorResponse) {
          callback(false, errorResponse.data);
        });
      }

      function addPayment(payment, callback) {
        $http.post(API + "/payments", payment)
        .then(function(response) {
          callback(true, response.data);
        }, function(errorResponse) {
          console.log(errorResponse);
          callback(false, errorResponse.data);
        })
      }

      function editPayment(id, payment, callback) {
        $http.put(API + "/payments/" + id, payment)
        .then(function(response) {
          callback(true, response.data);
        }, function(errorResponse) {
          callback(false, errorResponse.data);
        })
      }

      function deletePayment(id, callback) {
        $http.delete(API + "/payments/" + id)
        .then(function() {
          callback(true);
        }, function(errorResponse) {
          callback(false, errorResponse.data);
        })
      }

    }
  })();
  