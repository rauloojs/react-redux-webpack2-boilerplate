const uuidV4 = require('uuid/v4');


class FlowItemBase {
  constructor(name, x, y, itemType) {
    this.uuid = uuidV4();
    this.name = name;
    this.x = x;
    this.y = y;
    this.flow_item_type = itemType;
    this.actions = [];
    this.conditionals = [];
    this.description = '';
    this.is_required = false;
    this.next = null;
    this.previous = null;
    this.options = {};
    this.use_expression = false;
    this.weight = 0;
  }
}


const QUESTION_OPTIONS = {
  boolean: {
    question_type: 'boolean',
    negative_text: null,
    positive_text: null,
    widget: 'default'
  },
  text: {
    question_type: 'text',
    validation: 'any',
    widget: 'textfield'
  },
  single_choice: {
    question_type: 'single_choice',
    widget: 'default',
    choices: []
  },
  multiple_choice: {
    question_type: 'multiple_choice',
    widget: 'default',
    choices: []
  },
  block: {
    block_type: 'text',
    content: '',
    widget: 'default'
  },
  photo: {
    question_type: 'photo',
    format: 'jpg',
    width: 480,
    height: 640,
    quality: 89,
    widget: 'default'
  },
  date: {
    question_type: 'date',
    format: 'datetime'
  }
}


class Question extends FlowItemBase {
  constructor(name, x, y, itemType, questionType) {
    super(name, x, y, itemType);

    let options = QUESTION_OPTIONS[questionType]
    if (options) {
      this.options = Object.assign({}, options);
    } else {
      console.error('Question type not defined');
    }
  }
}


class Container extends FlowItemBase {
  constructor(name, x, y, itemType, containerType) {
    super(name, x, y, itemType);

    this.nodes = [];
  }
}


const flowItemFactory = (name, x=0, y=0, itemType, ...itemOptions) => {
  switch (itemType) {
    case 'block':
    case 'question':

      let questionType = itemOptions[0];
      let widget = itemOptions[1];
      return new Question(name, x, y, 'question', questionType, widget);

      break;
    case 'container':

      let containerType = itemOptions[0];
      return new Question(name, x, y, 'container', containerType);

      break;
    default:
      console.error('Item type not defined');
  }
}

export default flowItemFactory;
