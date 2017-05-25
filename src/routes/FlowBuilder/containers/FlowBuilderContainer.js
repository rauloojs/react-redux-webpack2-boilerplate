import { connect } from 'react-redux'
import { getFlowData } from '../modules/actions'
import FlowBuilderView from '../components/FlowBuilderView'


const mapDispatchToProps = {
  getFlowData
}

const mapStateToProps = (state) => ({
  flow: state.flow
})

export default connect(mapStateToProps, mapDispatchToProps)(FlowBuilderView)
