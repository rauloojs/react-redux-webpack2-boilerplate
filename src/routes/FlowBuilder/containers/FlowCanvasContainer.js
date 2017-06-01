import { connect } from 'react-redux'
import { addItemToCanvas } from '../modules/actions'
import FlowCanvasView from '../components/FlowCanvasView'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  addItemToCanvas
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowCanvasView);
