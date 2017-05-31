import { connect } from 'react-redux'
import { getFlowData, setCanvasZoom } from '../modules/actions'
import FlowBuilderView from '../components/FlowBuilderView'


const mapStateToProps = (state) => ({
  flow: state.flowBuilder.flow,
  ui: state.flowBuilder.ui
});

const mapDispatchToProps = {
  getFlowData,
  setCanvasZoom
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowBuilderView);
