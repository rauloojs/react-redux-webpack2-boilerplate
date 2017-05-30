import React, { Component } from 'react';
import FlowSidebar from './FlowSidebar';
import FlowCanvasView from '../components/FlowCanvasView';
import Split from 'grommet/components/Split';


export default class FlowBuilderView extends Component {
  componentDidMount() {
    this.props.getFlowData(this.props.params.flowId);
  }
  render() {
    let nodes = this.props.flow.nodes;
    let flow = this.props.flow;
    console.log(flow);

    return (
      <Split flex='right' priority='right' fixed={true}>
        <FlowSidebar />
        <FlowCanvasView nodes={nodes} />
      </Split>
    );
  }
}
