import Component from '@glimmer/component';
import Trix from 'trix';

const getDefaultHTML = Trix.config.toolbar.getDefaultHTML;

export const BUTTONS = [
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
];

const buttons = {
  bold: {
    id: 'bold',
    title: 'Bold',
    key: 'b',
    type: 'attribute',
  },
  italic: {
    id: 'italic',
    title: 'Italic',
    key: 'i',
    type: 'attribute',
  },
  strike: {
    id: 'strike',
    title: 'Strikethrough',
    key: 's',
    type: 'attribute',
  },
  href: {
    id: 'href',
    title: 'Link',
    key: 'k',
    type: 'attribute',
  },
  heading1: {
    id: 'heading1',
    title: 'Heading',
    type: 'attribute',
  },
  quote: {
    id: 'quote',
    title: 'Quote',
    type: 'attribute',
  },
  code: {
    id: 'code',
    title: 'Code',
    type: 'attribute',
  },
  bullet: {
    id: 'bullet',
    title: 'Bullets',
    type: 'attribute',
  },
  number: {
    id: 'number',
    title: 'Numbers',
    type: 'attribute',
  },
  decreaseNestingLevel: {
    id: 'decreaseNestingLevel',
    title: 'Decrease Level',
    type: 'action',
  },
  increaseNestingLevel: {
    id: 'increaseNestingLevel',
    title: 'Increase Level',
    type: 'action',
  },
  attachFiles: {
    id: 'attachFiles',
    title: 'Attach Files',
    type: 'action',
  },
  undo: {
    id: 'undo',
    title: 'Undo',
    type: 'action',
  },
  redo: {
    id: 'redo',
    title: 'Redo',
    type: 'action',
  },
};

export default class TrixEditorToolbarComponent extends Component {
  buttons = BUTTONS;

  get isDefault() {
    return this.args.default ?? true;
  }

  constructor() {
    super(...arguments);

    if (this.isDefault) {
      Trix.config.toolbar.getDefaultHTML = getDefaultHTML;
    } else {
      Trix.config.toolbar.getDefaultHTML = () => null;
    }
  }

  get toolbarButtons() {
    return this.args.buttons ?? this.buttons;
  }

  get toolbarButtonsData() {
    return this.toolbarButtons.map((button) => buttons[button]);
  }
}
