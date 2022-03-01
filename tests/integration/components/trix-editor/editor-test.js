import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | trix-editor/editor', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    this.set('noop', () => {});
  });

  test('it renders', async function (assert) {
    await render(hbs`<TrixEditor::Editor @noop={{this.noop}} />`);

    assert.ok(this.element);
  });
});
