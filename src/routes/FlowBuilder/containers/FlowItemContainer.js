import { connect } from 'react-redux'
import { updateFlowItemPosition } from '../modules/actions'
import FlowItem from '../components/FlowItem'


const mapStateToProps = (state) => ({
  flow: state.flow
});

const mapDispatchToProps = {
  updateFlowItemPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowItem);
