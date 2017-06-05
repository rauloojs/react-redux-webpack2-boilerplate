import flowItemFactory from 'FlowUtils';
import Api from 'Api';


const updateNodes = (state, newNodes) => {
  let flow = {...state.flow};

  return {
    ...state,
    flow: {
      ...flow,
      nodes: newNodes
    }
  };
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  ['GET_FLOW_DATA'] : (state, action) => {
    return Object.assign({}, state, {
      flow: action.payload
    });
  },
  ['PUT_FLOW_DATA'] : (state, action) => {
    Api('flows/' + action.flowId + '/', {
      method: 'PUT',
      data: state.flow,
    }).then((flow) => {
      console.log(flow.data);
    });
    return state
  },
  ['SET_CANVAS_ZOOM'] : (state, action) => {
    return Object.assign({}, state, {
      ui: {
        zoom: action.zoom
      }
    });
  },
  ['CONNECT_ITEM_TO_ITEM'] : (state, action) => {
    let sourceIndex = state.flow.nodes.findIndex(item => item.uuid === action.sourceUuid);
    let targetIndex = state.flow.nodes.findIndex(item => item.uuid === action.targetUuid);

    let newNodes = [...state.flow.nodes];
    newNodes[sourceIndex].next = action.targetUuid;
    newNodes[targetIndex].previous = action.sourceUuid;

    return updateNodes(state, newNodes);
  },
  ['CONNECT_CONDITIONAL_TO_ITEM'] : (state, action) => {
    console.log(action);
    let sourceIndex = state.flow.nodes.findIndex(item => item.uuid === action.sourceUuid);
    let targetIndex = state.flow.nodes.findIndex(item => item.uuid === action.targetUuid);
    let newNodes = [...state.flow.nodes];
    newNodes[sourceIndex].conditionals[action.index].next = targetIndex.uuid;

    return updateNodes(state, newNodes);
  },
  ['CONNECT_ACTION_TO_ITEM'] : (state, action) => {
    console.log(action);
    return state;
  },
  ['DETACH_ITEM_FROM_ITEM'] : (state, action) => {
    console.log(action);
    let sourceIndex = state.flow.nodes.findIndex(item => item.uuid === action.sourceUuid);
    let targetIndex = state.flow.nodes.findIndex(item => item.uuid === action.targetUuid);

    let newNodes = [...state.flow.nodes];
    newNodes[sourceIndex].next = null;
    newNodes[targetIndex].previous = null;

    return updateNodes(state, newNodes);
  },
  ['DETACH_CONDITIONAL_FROM_ITEM'] : (state, action) => {
    console.log(action);
    return state;
  },
  ['DETACH_ACTION_FROM_ITEM'] : (state, action) => {
    console.log(action);
    return state;
  },
  ['UPDATE_FLOWITEM_POSITION'] : (state, action) => {
    console.log(action);
    let itemIndex = state.flow.nodes.findIndex(item => item.uuid === action.uuid);

    let newNodes = [...state.flow.nodes];
    newNodes[itemIndex].x = action.newX;
    newNodes[itemIndex].y = action.newY;

    return updateNodes(state, newNodes);
  },
  ['ADD_CONDITIONAL_TO_ITEM'] : (state, action) => {
    console.log(action);
    let index = state.flow.nodes.findIndex(item => item.uuid === action.uuid);
    let newNodes = [...state.flow.nodes];
    newNodes[index] = {
      ...newNodes[index]
    };
    newNodes[index].conditionals = newNodes[index].conditionals.slice();
    newNodes[index].conditionals.push({
      actions: [],
      expression: null,
      next: null,
      value: null
    });

    return updateNodes(state, newNodes);
  },
  ['ADD_ACTION_TO_ITEM'] : (state, action) => {
    console.log(action);
    let index = state.flow.nodes.findIndex(item => item.uuid === action.uuid);
    let newNodes = [...state.flow.nodes];
    newNodes[index] = {
      ...newNodes[index]
    };
    newNodes[index].actions = newNodes[index].actions.slice();
    newNodes[index].actions.push({
      value: null
    });

    return updateNodes(state, newNodes);
  },
  ['ADD_CHOICE_TO_ITEM'] : (state, action) => {
    console.log(action);
    let index = state.flow.nodes.findIndex(item => item.uuid === action.uuid);
    let newNodes = [...state.flow.nodes];
    newNodes[index] = {
      ...newNodes[index],
      options: {
        ...newNodes[index].options
      }
    };
    newNodes[index].options.choices = newNodes[index].options.choices.slice();
    newNodes[index].options.choices.push({
      name: 'New choice',
      value: newNodes[index].options.choices.length + 1
    });

    return updateNodes(state, newNodes);
  },
  ['ADD_ITEM_TO_CANVAS'] : (state, action) => {
    let item = state.flowItems.find(item => item.id === action.itemId);
    let newFlowItem = flowItemFactory(item.name, action.x, action.y,
                                      item.category, item.type, item.widget);
    let newNodes = [...state.flow.nodes];
    newNodes.push(newFlowItem);

    return updateNodes(state, newNodes);
  }
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  flow: {
    nodes: []
  },
  ui: {
    zoom: 0.8
  },
  flowItems: [
    {
      id: 1,
      name: 'Pregunta de texto',
      category: 'question',
      type: 'text'
    },
    {
      id: 2,
      name: 'Pregunta booleana',
      category: 'question',
      type: 'boolean'
    },
    {
      id: 3,
      name: 'Pregunta de selección',
      category: 'question',
      type: 'single_choice'
    },
    {
      id: 4,
      name: 'Múltiple selección',
      category: 'question',
      type: 'multiple_choice'
    },
    {
      id: 5,
      name: 'Bloque de texto',
      category: 'block',
      type: 'text'
    },
    {
      id: 7,
      name: 'Pregunta de foto',
      category: 'question',
      type: 'photo'
    },
    {
      id: 8,
      name: 'Pregunta de fecha',
      category: 'question',
      type: 'date'
    }
  ]
}
export default function flowReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
