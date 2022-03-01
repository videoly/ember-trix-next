# Quickstart

In most cases it would be enough just to use the inline variant of the component:

{{#docs-snippet name="trix-simple.hbs"}}
  <TrixEditor
    @trixChange={{this.trixChange}}
    @initialValue="some text" />
{{/docs-snippet}}

which will produce the default component:

<TrixEditor
    @trixChange={{this.trixChange}}
    @initialValue="some text" />

Or you can customize the markup:

{{#docs-snippet name="trix-has-block.hbs"}}
  <TrixEditor
    @initialValue="some text"
    as |trix|>
    <p>Some HTML before toolbar</p>
    <trix.toolbar />
    <p>Some HTML between toolbar and editor</p>
    <trix.editor @initialValue="some text" @trixChange={{this.trixChange}} />
    <p>Some HTML after editor</p>
  </TrixEditor>
{{/docs-snippet}}

<TrixEditor
  @trixChange={{this.trixChange}}
  @initialValue="some text"
  as |trix|>
  <p>Some HTML before toolbar</p>
  <trix.toolbar />
  <p>Some HTML between toolbar and editor</p>
  <trix.editor @initialValue="some text" @trixChange={{this.trixChange}} />
  <p>Some HTML after editor</p>
</TrixEditor>
