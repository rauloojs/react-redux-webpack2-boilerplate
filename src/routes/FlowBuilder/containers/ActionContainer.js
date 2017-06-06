import { connect } from 'react-redux'
import { openRightSidebar, selectFlowItem, selectAction } from '../modules/actions'
import Action from '../components/Action'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  openRightSidebar,
  selectFlowItem,
  selectAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
