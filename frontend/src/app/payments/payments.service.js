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
        editPayment: editPayment,
        importCsv: importCsv
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

      function importCsv(file, callback) {
        var formData = new FormData();
        formData.append("file", file);

        var request = {
          method: 'POST',
          url: API + '/payments/import',
          data: formData,
          headers: {'Content-Type': undefined }
        }

        $http(request).then(function(response) {
          callback(true, response.data);
        }, function(response) {
          callback(false, response.data);
        });
      }

    }
  })();
  