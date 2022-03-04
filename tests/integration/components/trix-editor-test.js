import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | trix-editor', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<TrixEditor />`);

    assert.ok(this.element, 'smoke test');
  });

  test('it renders inline component', async function (assert) {
    await render(hbs`<TrixEditor />`);

    const $trix = await find('[data-test-trix-editor]');

    assert.ok($trix, 'inline editor rendered');
  });

  test('it renders block component', async function (assert) {
    await render(hbs`
      <TrixEditor as |editor|>
        <editor.toolbar />
        <editor.editor />
      </TrixEditor>
    `);

    const $trix = await find('[data-test-trix-editor]');
    const $toolbar = await find('[data-test-trix-toolbar]');
    const $editor = await find('[data-test-trix-editor]');

    assert.ok($trix, 'block editor rendered');
    assert.ok($toolbar, 'editor toolbar rendered');
    assert.ok($editor, 'trix editor rendered');
  });

  test('block initial value works', async function (assert) {
    const initialValue = 'some text';

    this.set('initialValue', initialValue);

    await render(hbs`
      <TrixEditor as |editor|>
        <editor.toolbar />
        <editor.editor
          @initialValue={{this.initialValue}} />
      </TrixEditor>
    `);

    const $editor = await find('[data-test-trix-editor]');

    assert.ok($editor, 'trix editor rendered');
    assert.strictEqual(
      $editor.textContent,
      initialValue,
      'initialValue matches'
    );
  });

  test('block change event works', async function (assert) {
    assert.expect(3);

    const value = 'some text';

    this.set('handleTrixChangeEvent', ({ type, target }) => {
      assert.strictEqual(
        type,
        'trix-change',
        'event type equalt to trix-change'
      );
      assert.strictEqual(
        target.innerHTML,
        '<div><!--block-->some text</div>',
        'html value is correct'
      );
      assert.strictEqual(target.innerText, value, 'text value is correct');
    });

    await render(hbs`
      <TrixEditor as |editor|>
        <editor.toolbar />
        <editor.editor
          @trixChange={{this.handleTrixChangeEvent}}
        />
      </TrixEditor>
    `);

    const $editor = await find('[data-test-trix-editor]');

    await fillIn($editor, value);
  });
});
