import { connect } from 'react-redux'
import { openRightSidebar, selectFlowItem, selectConditional } from '../modules/actions'
import Conditional from '../components/Conditional'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  openRightSidebar,
  selectFlowItem,
  selectConditional
};

export default connect(mapStateToProps, mapDispatchToProps)(Conditional);
