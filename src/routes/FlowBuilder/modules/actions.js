import axios from 'axios';
import Api from 'Api'

export const actions = {
  getFlowData, setCanvasZoom
}
// ------------------------------------
// Actions
// ------------------------------------
export const getFlowData = (flowId) => {
  return (dispatch, getState) => {
    return Api('flows/' + flowId + '/?version=draft').then((flow) => {
      dispatch({
        type    : 'GET_FLOW_DATA',
        payload : flow.data
      });
    });
  };
};

export const putFlowData = (flowId) => ({
  type: 'PUT_FLOW_DATA',
  flowId
});

export const setCanvasZoom = (zoom) => ({
  type: 'SET_CANVAS_ZOOM',
  zoom: zoom * 0.1
});


export const connectItemToItem = (sourceUuid, targetUuid) => ({
  type: 'CONNECT_ITEM_TO_ITEM',
  sourceUuid,
  targetUuid
});

export const connectConditionalToItem = (sourceUuid, index, targetUuid, conditional) => ({
  type: 'CONNECT_CONDITIONAL_TO_ITEM',
  sourceUuid,
  index,
  targetUuid,
  conditional
});

export const connectActionToItem = (sourceUuid, index, targetUuid, action) => ({
  type: 'CONNECT_ACTION_TO_ITEM',
  sourceUuid,
  index,
  targetUuid,
  action
});

export const detachItemFromItem = (sourceUuid, targetUuid) => ({
  type: 'DETACH_ITEM_FROM_ITEM',
  sourceUuid,
  targetUuid
});

export const detachConditionalFromItem = (sourceUuid, index, targetUuid, conditional) => ({
  type: 'DETACH_CONDITIONAL_FROM_ITEM',
  sourceUuid,
  index,
  targetUuid,
  conditional
});

export const detachActionFromItem = (sourceUuid, index, targetUuid, action) => ({
  type: 'DETACH_ACTION_FROM_ITEM',
  sourceUuid,
  index,
  targetUuid,
  action
});

export const updateFlowItemPosition = (uuid, newX, newY) => ({
  type: 'UPDATE_FLOWITEM_POSITION',
  uuid,
  newX,
  newY
});

export const addConditionalToItem = (uuid) => ({
  type: 'ADD_CONDITIONAL_TO_ITEM',
  uuid
});

export const addActionToItem = (uuid) => ({
  type: 'ADD_ACTION_TO_ITEM',
  uuid
});

export const addChoiceToItem = (uuid) => ({
  type: 'ADD_CHOICE_TO_ITEM',
  uuid
});

export const addItemToCanvas = (itemId, x, y) => ({
  type: 'ADD_ITEM_TO_CANVAS',
  itemId,
  x,
  y
});

export const selectFlowItem = (flowItem) => ({
  type: 'SELECT_FLOW_ITEM',
  flowItem
});

export const selectAction = (action) => ({
  type: 'SELECT_ACTION',
  action
});

export const selectConditional = (conditional) => ({
  type: 'SELECT_CONDITIONAL',
  conditional
});

export const openRightSidebar = (view) => ({
  type: 'OPEN_RIGHT_SIDEBAR',
  view
});
