import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TrixEditorComponent extends Component {
  toolbarComponent = 'trix-editor/toolbar';
  editorComponent = 'trix-editor/editor';

  constructor() {
    super(...arguments);
    const now = Date.now();
    this.toolbarId = `trix-toolbar-${now}`;
    this.inputId = `trix-input-${now}`;
  }

  @action
  trixInitialize() {
    return this.args.trixInitialize && this.args.trixInitialize(...arguments);
  }

  @action
  trixChange() {
    return this.args.trixChange && this.args.trixChange(...arguments);
  }

  @action
  trixPaste() {
    return this.args.trixPaste && this.args.trixPaste(...arguments);
  }

  @action
  trixSelectionChange() {
    return this.args.trixSelectionChange && this.args.trixSelectionChange(...arguments);
  }

  @action
  trixFocus() {
    return this.args.trixFocus && this.args.trixFocus(...arguments);
  }

  @action
  trixBlur() {
    return this.args.trixBlur && this.args.trixBlur(...arguments);
  }

  @action
  trixFileAccept() {
    return this.args.trixFileAccept && this.args.trixFileAccept(...arguments);
  }

  @action
  trixAttachmentAdd() {
    return this.args.trixAttachmentAdd && this.args.trixAttachmentAdd(...arguments);
  }

  @action
  trixAttachmentRemove() {
    return this.args.trixAttachmentRemove && this.args.trixAttachmentRemove(...arguments);
  }
}
