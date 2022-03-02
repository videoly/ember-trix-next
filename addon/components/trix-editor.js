import Component from '@glimmer/component';

export default class TrixEditorComponent extends Component {
  constructor() {
    super(...arguments);
    const now = Date.now();
    this.toolbarId = `trix-toolbar-${now}`;
    this.inputId = `trix-input-${now}`;
  }

  noop() {}
}
