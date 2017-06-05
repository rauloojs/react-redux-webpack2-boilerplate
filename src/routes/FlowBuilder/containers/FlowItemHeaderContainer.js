import { connect } from 'react-redux'
import { addConditionalToItem, addActionToItem, addChoiceToItem } from '../modules/actions'
import FlowItemHeader from '../components/FlowItemHeader'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addConditionalToItem,
  addActionToItem,
  addChoiceToItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowItemHeader);
