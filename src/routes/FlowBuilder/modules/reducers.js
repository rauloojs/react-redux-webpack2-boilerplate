import flowItemFactory from 'FlowUtils'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  ['GET_FLOW_DATA'] : (state, action) => {
    return Object.assign({}, state, {
      flow: action.payload
    });
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

    return Object.assign({}, state, {
      flow: {
        nodes: newNodes
      }
    });
  },
  ['CONNECT_CONDITIONAL_TO_ITEM'] : (state, action) => {
    console.log(action);
    return state;
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

    let newState = Object.assign({}, state, {
      flow: {
        nodes: newNodes
      }
    });

    return newState;
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

    let newState = Object.assign({}, state, {
      flow: {
        nodes: newNodes
      }
    });

    return newState;
  },
  ['ADD_CONDITIONAL_TO_ITEM'] : (state, action) => {
    console.log(action);
    return state;
  },
  ['ADD_ACTION_TO_ITEM'] : (state, action) => {
    console.log(action);
    return state;
  },
  ['ADD_ITEM_TO_CANVAS'] : (state, action) => {
    let item = state.flowItems.find(item => item.id === action.itemId);
    let newFlowItem = flowItemFactory(item.name, action.x, action.y,
                                      item.category, item.type, item.widget);
    let nodes = state.flow.nodes;

    return Object.assign({}, state, {
      flow: {
        nodes: [
          ...nodes,
          newFlowItem
        ]
      }
    })
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
