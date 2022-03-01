'use strict';

module.exports = {
  name: require('./package').name,
  included() {
    this._super.included.apply(this, arguments);
    this.import('node_modules/trix/dist/trix.umd.js');
    this.import('vendor/shims/trix.js');
    this.import('node_modules/trix/dist/trix.css');
  },
};
