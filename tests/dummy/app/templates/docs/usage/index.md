# Quickstart

In the most cases it would be enough just to use the inline variant of the component:

{{#docs-demo as |demo|}}
  {{#demo.example name="trix-simple.hbs"}}
    <TrixEditor
      @initialValue="some text" />
  {{/demo.example}}
  {{demo.snippet "trix-simple.hbs"}}
{{/docs-demo}}

Or you can customize the markup:

{{#docs-demo as |demo|}}
  {{#demo.example name="trix-has-block.hbs"}}
    <TrixEditor as |trix|>
      <p>Some HTML before toolbar</p>
      <trix.toolbar />
      <p>Some HTML between toolbar and editor</p>
      <trix.editor @initialValue="some text" />
      <p>Some HTML after editor</p>
    </TrixEditor>
  {{/demo.example}}
  {{demo.snippet "trix-has-block.hbs"}}
{{/docs-demo}}
