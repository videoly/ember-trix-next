(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Trix'],
      __esModule: true,
    };
  }

  define('trix', [], vendorModule);
})();
