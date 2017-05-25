import axios from 'axios';
import Api from '../../../modules/Api'

export const actions = {
  getFlowData
}
// ------------------------------------
// Actions
// ------------------------------------
export const getFlowData = (flowId) => {
  return (dispatch, getState) => {
    return Api('flows/' + flowId + '/').then((response) => {
        dispatch({
          type    : 'GET_FLOW_DATA',
          payload : response
        });
      });
  };
}
