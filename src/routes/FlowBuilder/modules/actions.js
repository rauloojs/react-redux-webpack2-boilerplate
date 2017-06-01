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
    return Api('flows/' + flowId + '/').then((flow) => {
        dispatch({
          type    : 'GET_FLOW_DATA',
          payload : flow.data
        });
      });
  };
};

export const setCanvasZoom = (zoom) => ({
  type: 'SET_CANVAS_ZOOM',
  zoom: zoom * 0.1
});


export const connectItemToItem = (sourceUuid, targetUuid) => ({
  type: 'CONNECT_ITEM_TO_ITEM',
  sourceUuid,
  targetUuid
});

export const connectConditionalToItem = (sourceUuid, targetUuid, conditional) => ({
  type: 'CONNECT_CONDITIONAL_TO_ITEM',
  sourceUuid,
  targetUuid,
  conditional
});

export const connectActionToItem = (sourceUuid, targetUuid, action) => ({
  type: 'CONNECT_ACTION_TO_ITEM',
  sourceUuid,
  targetUuid,
  action
});

export const detachItemFromItem = (sourceUuid, targetUuid) => ({
  type: 'DETACH_ITEM_FROM_ITEM',
  sourceUuid,
  targetUuid
});

export const detachConditionalFromItem = (sourceUuid, targetUuid, conditional) => ({
  type: 'DETACH_CONDITIONAL_FROM_ITEM',
  sourceUuid,
  targetUuid,
  conditional
});

export const detachActionFromItem = (sourceUuid, targetUuid, action) => ({
  type: 'DETACH_ACTION_FROM_ITEM',
  sourceUuid,
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

export const addItemToCanvas = (itemType, uuid, x, y) => ({
  type: 'ADD_ITEM_TO_CANVAS',
  itemType,
  uuid,
  x,
  y
});
