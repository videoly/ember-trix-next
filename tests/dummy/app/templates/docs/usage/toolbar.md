# Toolbar

A toolbar can not be used without its parent component so you need to initialize the `<TrixEditor as |trix|>` component first. After that you can place `<trix.toolbar @default={{true}} />` component in your markup.

A toolbar component accepts args below:

* `default` - a `boolean` that specifies wheather use or not the default trix toolbar;.
* `buttons` - `string[]` an array that specifies the buttons you need to use on the toolbar. Button name constants could be imported from the plugin

`import { BUTTONS } from '@videoly/ember-trix-next';`

The list of available buttons is

```
[
  'bold',
  'italic',
  'strike',
  'href',
  'heading1',
  'quote',
  'code',
  'bullet',
  'number',
  'decreaseNestingLevel',
  'increaseNestingLevel',
  'attachFiles',
  'undo',
  'redo',
]
```


{{#docs-demo as |demo|}}
  {{#demo.example name="toolbar-custom.hbs"}}
    <TrixEditor as |trix|>
      <trix.toolbar @default={{false}} />
      <trix.editor
        @trixChange={{this.handleTrixChangeEvent}}
        @initialValue="some text" />
    </TrixEditor>
  {{/demo.example}}
  {{demo.snippet "toolbar-custom.hbs"}}
{{/docs-demo}}


{{#docs-demo as |demo|}}
  {{#demo.example name="toolbar-custom-buttons.hbs"}}
    <!-- this.customButtons = ['bold', 'italic', 'strike', 'heading1', 'quote'] -->

    <TrixEditor as |trix|>
      <trix.toolbar @default={{false}} @buttons={{this.customButtons}} />
      <trix.editor
        @trixChange={{this.handleTrixChangeEvent}}
        @initialValue="some text" />
    </TrixEditor>
  {{/demo.example}}
  {{demo.snippet "toolbar-custom-buttons.hbs"}}
{{/docs-demo}}
