import { connect } from 'react-redux'
import { getFlowData, setCanvasZoom,
  updateFlowItemPosition, addConditionalToQuestion, addActionToQuestion,
  connectQuestionToQuestion, connectConditionalToQuestion, connectActionToQuestion,
  detachQuestionFromQuestion, detachConditionalFromQuestion, detachActionFromQuestion,
 } from '../modules/actions'
import FlowBuilderView from '../components/FlowBuilderView'


const mapStateToProps = (state) => ({
  flow: state.flowBuilder.flow,
  ui: state.flowBuilder.ui
});

const mapDispatchToProps = {
  getFlowData,
  setCanvasZoom,
  addConditionalToQuestion,
  addActionToQuestion,
  connectQuestionToQuestion,
  connectConditionalToQuestion,
  connectActionToQuestion,
  detachQuestionFromQuestion,
  detachConditionalFromQuestion,
  detachActionFromQuestion,
  updateFlowItemPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowBuilderView);
