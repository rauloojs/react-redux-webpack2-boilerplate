import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'flow_builder/:flowId',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, callBack) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const FlowBuilderContainer = require('./containers/FlowBuilderContainer').default
      const reducer = require('./modules/reducers').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'flow', reducer })

      /*  Return getComponent   */
      callBack(null, FlowBuilderContainer)

    /* Webpack named bundle   */
  }, 'flow_builder')
  }
})
