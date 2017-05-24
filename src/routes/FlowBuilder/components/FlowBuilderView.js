import React, { Component } from 'react';
import FlowSidebar from './FlowSidebar';
import FlowCanvas from './FlowCanvas';
import Split from 'grommet/components/Split';


export default class FlowBuilderView extends Component {
  render() {
    return (
      <Split flex='right' priority='right' fixed={true}>
        <FlowSidebar />
        <FlowCanvas />
      </Split>
    );
  }
}
