// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  ['GET_FLOW_DATA'] : (state, action) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
