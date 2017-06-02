import { connect } from 'react-redux'
import { putFlowData } from '../modules/actions'
import FlowSidebar from '../components/FlowSidebar'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  putFlowData
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowSidebar);
