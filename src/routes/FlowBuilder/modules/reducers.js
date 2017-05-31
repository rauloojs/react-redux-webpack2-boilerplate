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
  ['CONNECT_QUESTION_TO_QUESTION'] : (state, action) => {
    console.log(action);
    return state;
  },
  ['CONNECT_CONDITIONAL_TO_QUESTION'] : (state, action) => {
    console.log(action);
    return state;
  },
  ['CONNECT_ACTION_TO_QUESTION'] : (state, action) => {
    console.log(action);
    return state;
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
    zoom: 1
  }
}
export default function flowReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
