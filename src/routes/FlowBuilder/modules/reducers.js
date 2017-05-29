// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  ['GET_FLOW_DATA'] : (state, action) => {
    return { flow: action.payload }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  console.log(handler);

  return handler ? handler(state, action) : state
}
