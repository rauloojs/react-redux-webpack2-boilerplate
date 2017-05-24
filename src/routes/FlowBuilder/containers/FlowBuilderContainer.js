import { connect } from 'react-redux'
import increment from '../modules/actions'
import FlowBuilderView from '../components/FlowBuilderView'


const mapDispatchToProps = {
  increment : () => increment(1)
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(FlowBuilderView)
