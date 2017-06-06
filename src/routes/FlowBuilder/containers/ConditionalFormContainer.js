import { connect } from 'react-redux'
import { openRightSidebar} from '../modules/actions'
import Conditional from '../components/Conditional'


const mapStateToProps = (state) => ({
  conditional: state.flowBuilder.selectedConditional
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Conditional);
