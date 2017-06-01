import { connect } from 'react-redux'
import { setCanvasZoom } from '../modules/actions'
import FlowCanvasSettings from '../components/FlowCanvasSettings'


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setCanvasZoom
};

export default connect(mapStateToProps, mapDispatchToProps)(FlowCanvasSettings);
