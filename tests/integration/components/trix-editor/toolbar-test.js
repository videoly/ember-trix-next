import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | trix-editor/toolbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<TrixEditor::Toolbar @toolbarId="1" />`);

    assert.ok(this.element, 'smoke test');
  });

  test('it renders default toolbar by default', async function (assert) {
    await render(hbs`<TrixEditor::Toolbar @toolbarId="1" />`);

    const $defaultToolbar = await find('[data-test-trix-toolbar-default]');
    const $customToolbar = await find('[data-test-trix-toolbar-custom]');

    assert.ok($defaultToolbar, 'default toolbar is present');
    assert.notOk($customToolbar, 'custom toolbar is not present');
  });

  test('it renders custom toolbar', async function (assert) {
    await render(
      hbs`<TrixEditor::Toolbar @toolbarId="1" @default={{false}} />`
    );

    const $defaultToolbar = await find('[data-test-trix-toolbar-default]');
    const $customToolbar = await find('[data-test-trix-toolbar-custom]');

    assert.notOk($defaultToolbar, 'default toolbar is not present');
    assert.ok($customToolbar, 'custom toolbar is present');
  });

  test('it renders custom toolbar button', async function (assert) {
    assert.expect(6);
    const buttons = ['bold', 'italic', 'strike', 'heading1', 'quote'];

    this.set('buttons', buttons);
    await render(hbs`
      <TrixEditor::Toolbar @toolbarId="1" @default={{false}} @buttons={{this.buttons}} />
    `);

    const $customToolbar = await find('[data-test-trix-toolbar-custom]');
    const $buttons = $customToolbar.querySelectorAll(
      '[data-test-trix-toolbar-button]'
    );

    assert.strictEqual(
      $buttons.length,
      buttons.length,
      'buttons number matches'
    );

    buttons.forEach((button) => {
      assert.ok(
        $customToolbar.querySelector(`[data-trix-attribute="${button}"]`),
        `${button} is present`
      );
    });
  });
});
