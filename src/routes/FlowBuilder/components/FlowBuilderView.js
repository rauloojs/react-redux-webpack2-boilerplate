import React, { Component } from 'react';
import FlowSidebar from './FlowSidebar';
import FlowCanvas from './FlowCanvas';
import Split from 'grommet/components/Split';


export default class FlowBuilderView extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.getFlowData(this.props.params.flowId));
    return (
      <Split flex='right' priority='right' fixed={true}>
        <FlowSidebar />
        <FlowCanvas />
      </Split>
    );
  }
}
