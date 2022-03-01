import Controller from '@ember/controller';

export default class DocsUsageEditorController extends Controller {
  trixInitialize() {
    console.log('trixInitialize', arguments);
  }
  trixChange() {
    console.log('trixChange', arguments);
  }
  trixPaste() {
    console.log('trixPaste', arguments);
  }
  trixSelectionChange() {
    console.log('trixSelectionChange', arguments);
  }
  trixFocus() {
    console.log('trixFocus', arguments);
  }
  trixBlur() {
    console.log('trixBlur', arguments);
  }
  trixFileAccept() {
    console.log('trixFileAccept', arguments);
  }
  trixAttachmentAdd() {
    console.log('trixAttachmentAdd', arguments);
  }
  trixAttachmentRemove() {
    console.log('trixAttachmentRemove', arguments);
  }
}
