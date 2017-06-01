import { connect } from 'react-redux'
import { addConditionalToItem, addActionToItem } from '../modules/actions'
import FlowItemHeader from '../components/FlowItemHeader'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addConditionalToItem,
  addActionToItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowItemHeader);
