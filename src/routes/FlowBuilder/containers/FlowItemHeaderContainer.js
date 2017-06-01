import { connect } from 'react-redux'
import { addConditionalToQuestion, addActionToQuestion } from '../modules/actions'
import FlowItemHeader from '../components/FlowItemHeader'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addConditionalToQuestion,
  addActionToQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowItemHeader);
