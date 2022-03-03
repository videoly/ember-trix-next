import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, fillIn, focus, blur } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | trix-editor/editor', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    this.set('noop', () => {});
  });

  test('it renders', async function (assert) {
    await render(hbs`<TrixEditor::Editor @noop={{this.noop}} />`);

    assert.ok(this.element, 'smoke test');
  });

  test('initial value works', async function (assert) {
    const initialValue = 'some text';

    this.set('initialValue', initialValue);

    await render(hbs`
      <TrixEditor::Editor
        @inputId="1"
        @initialValue={{this.initialValue}}
        @noop={{this.noop}} />
      `);

    const $editor = await find('[data-test-trix-editor]');

    assert.strictEqual($editor.textContent, initialValue);
  });

  test('event handlers works', async function (assert) {
    assert.expect(9);

    this.set('trixInitialize', ({ type }) => {
      console.log('trix-initialize');
      assert.strictEqual(type, 'trix-initialize', 'trix-initialize inited');
    });

    this.set('focusHandler', ({ type }) => {
      console.log('trix-focus');
      assert.strictEqual(type, 'trix-focus', 'trix-focus inited');
    });

    this.set('blurHandler', ({ type }) => {
      console.log('trix-blur');
      assert.strictEqual(type, 'trix-blur', 'trix-blur inited');
    });

    this.set('changeHandler', ({ type }) => {
      console.log('trix-change');
      assert.strictEqual(type, 'trix-change', 'trix-change inited');
    });

    this.set('selectionChangeHandler', ({ type }) => {
      console.log('trix-selection-change');
      assert.strictEqual(type, 'trix-selection-change', 'trix-selection-change inited');
    });

    this.set('pasteHandler', ({ type }) => {
      console.log('trix-paste');
      assert.strictEqual(type, 'trix-paste', 'trix-paste inited');
    });

    await render(hbs`
      <TrixEditor::Editor
        @inputId="1"
        @noop={{this.noop}}
        @trixInitialize={{this.trixInitialize}}
        @trixChange={{this.changeHandler}}
        @trixPaste={{this.pasteHandler}}
        @trixSelectionChange={{this.selectionChangeHandler}}
        @trixFocus={{this.focusHandler}}
        @trixBlur={{this.blurHandler}}
      />
      `);

    const $editor = await find('[data-test-trix-editor]');

    await focus($editor);
    await blur($editor);
    await fillIn($editor, 'test');

    const pasteData = new DataTransfer();
    pasteData.setData('text/plain', '123');

    const pasteEvent = new ClipboardEvent('paste', {
      clipboardData: pasteData,
    });

    $editor.dispatchEvent(pasteEvent);
  });
});
