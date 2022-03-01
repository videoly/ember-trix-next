# Editor

An editor can not be used without its parent component as a toolbar so you need to initialize the `<TrixEditor as |trix|>` component first. After that you can place `<trix.editor />` component in your markup. This component proxies all the events from the native Trix editor:

```
trixInitialize
trixChange
trixPaste
trixSelectionChange
trixFocus
trixBlur
trixFileAccept
trixAttachmentAdd
trixAttachmentRemove
```




{{#docs-snippet name="editor-events.hbs"}}
  <TrixEditor
    @initialValue="some text"
    as |trix|>
    <trix.toolbar />
    <trix.editor
      @trixInitialize={{this.trixInitialize}}
      @trixChange={{this.trixChange}}
      @trixPaste={{this.trixPaste}}
      @trixSelectionChange={{this.trixSelectionChange}}
      @trixFocus={{this.trixFocus}}
      @trixBlur={{this.trixBlur}}
      @trixFileAccept={{this.trixFileAccept}}
      @trixAttachmentAdd={{this.trixAttachmentAdd}}
      @trixAttachmentRemove={{this.trixAttachmentRemove}}
    />
  </TrixEditor>
{{/docs-snippet}}

<br/>

<TrixEditor
  @initialValue="some text"
  as |trix|>
  <trix.toolbar />
  <trix.editor
    @trixInitialize={{this.trixInitialize}}
    @trixChange={{this.trixChange}}
    @trixPaste={{this.trixPaste}}
    @trixSelectionChange={{this.trixSelectionChange}}
    @trixFocus={{this.trixFocus}}
    @trixBlur={{this.trixBlur}}
    @trixFileAccept={{this.trixFileAccept}}
    @trixAttachmentAdd={{this.trixAttachmentAdd}}
    @trixAttachmentRemove={{this.trixAttachmentRemove}}
  />
</TrixEditor>
