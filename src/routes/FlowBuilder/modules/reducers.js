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
    console.log(action);
    return state;
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
    return state;
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
    return state;
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
    }
  ]
}
export default function flowReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
