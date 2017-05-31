import React, { Component } from 'react';
import FlowSidebar from './FlowSidebar';
import FlowCanvasView from '../components/FlowCanvasView';
import Split from 'grommet/components/Split';


export default class FlowBuilderView extends Component {
  componentDidMount() {
    this.props.getFlowData(this.props.params.flowId);
  }
  render() {
    let flow = this.props.flow;
    let setCanvasZoom = this.props.setCanvasZoom;
    let nodes = this.props.flow.nodes;
    let zoom = this.props.ui.zoom;

    return (
      <Split flex='right' priority='right' fixed={true}>
        <FlowSidebar onZoomUpdate={setCanvasZoom}/>
        <FlowCanvasView zoom={zoom} nodes={nodes} />
      </Split>
    );
  }
}
