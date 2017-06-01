import axios from 'axios';
import Api from '../../../modules/Api'

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


export const connectQuestionToQuestion = (sourceUuid, targetUuid) => ({
  type: 'CONNECT_QUESTION_TO_QUESTION',
  sourceUuid,
  targetUuid
});

export const connectConditionalToQuestion = (sourceUuid, targetUuid, conditional) => ({
  type: 'CONNECT_CONDITIONAL_TO_QUESTION',
  sourceUuid,
  targetUuid,
  conditional
});

export const connectActionToQuestion = (sourceUuid, targetUuid, action) => ({
  type: 'CONNECT_ACTION_TO_QUESTION',
  sourceUuid,
  targetUuid,
  action
});

export const detachQuestionFromQuestion = (sourceUuid, targetUuid) => ({
  type: 'DETACH_QUESTION_FROM_QUESTION',
  sourceUuid,
  targetUuid
});

export const detachConditionalFromQuestion = (sourceUuid, targetUuid, conditional) => ({
  type: 'DETACH_CONDITIONAL_FROM_QUESTION',
  sourceUuid,
  targetUuid,
  conditional
});

export const detachActionFromQuestion = (sourceUuid, targetUuid, action) => ({
  type: 'DETACH_ACTION_FROM_QUESTION',
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
