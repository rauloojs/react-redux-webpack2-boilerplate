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
