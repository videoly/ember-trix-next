import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from 'dummy/config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    /* Your docs routes go here */
    this.route('usage', function () {
      this.route('toolbar');
      this.route('editor');
    });
  });
});
