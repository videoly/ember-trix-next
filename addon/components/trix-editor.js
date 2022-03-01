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

  noop() {}
}
