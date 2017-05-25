import { connect } from 'react-redux'
import { getFlowData } from '../modules/actions'
import FlowBuilderView from '../components/FlowBuilderView'


const mapStateToProps = (state) => ({
  flow: state.flow
});

const mapDispatchToProps = {
  getFlowData
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowBuilderView);
