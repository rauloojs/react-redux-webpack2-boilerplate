import { connect } from 'react-redux'
import { addItemToCanvas } from '../modules/actions'
import RightSidebar from '../components/RightSidebar'


const mapStateToProps = (state) => ({
  flow: state.flowBuilder.flow,
  rightSidebarView: state.flowBuilder.ui.rightSidebarView
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSidebar);
