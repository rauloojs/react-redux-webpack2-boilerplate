import { connect } from 'react-redux'
import { getFlowData, setCanvasZoom,
  updateFlowItemPosition, addConditionalToItem, addActionToItem,
  connectItemToItem, connectConditionalToItem, connectActionToItem,
  detachItemFromItem, detachConditionalFromItem, detachActionFromItem,
 } from '../modules/actions'
import FlowBuilderView from '../components/FlowBuilderView'


const mapStateToProps = (state) => ({
  flow: state.flowBuilder.flow,
  ui: state.flowBuilder.ui
});

const mapDispatchToProps = {
  getFlowData,
  setCanvasZoom,
  addConditionalToItem,
  addActionToItem,
  connectItemToItem,
  connectConditionalToItem,
  connectActionToItem,
  detachItemFromItem,
  detachConditionalFromItem,
  detachActionFromItem,
  updateFlowItemPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowBuilderView);
