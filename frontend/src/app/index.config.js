(function() {
  'use strict';

  angular
    .module('frontend')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $httpProvider.interceptors.push('httpInterceptor')
  }

})();
