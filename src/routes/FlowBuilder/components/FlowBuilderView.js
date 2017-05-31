import React, { Component } from 'react';
import FlowSidebar from './FlowSidebar';
import FlowCanvasView from '../components/FlowCanvasView';
import Split from 'grommet/components/Split';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowBuilderView extends Component {
  componentDidMount() {
    this.props.getFlowData(this.props.params.flowId);

    let component = this;
    JsPlumb.ready(() => {
      JsPlumb.bind('connection', function(info) {
        let source = info.sourceId;
        let names = info.sourceId.split('_');
        let target = info.targetId;

        if (names[0].startsWith('conditional')) {
          component.props.connectConditionalToQuestion(names[1], target, source)
        } else {
          if (names[0].startsWith('action')) {
            component.props.connectActionToQuestion(names[1], target, source)
          } else {
            component.props.connectQuestionToQuestion(source, target)
          }
        }
      });

      JsPlumb.bind('connectionMoved', function(info) {
        console.log('connectionMoved');
      });

      JsPlumb.bind('connectionDetached', function(info) {
        console.log('connectionDetached');
      });
    });
  }
  render() {
    let flow = this.props.flow;
    let setCanvasZoom = this.props.setCanvasZoom;
    let nodes = this.props.flow.nodes;
    let zoom = this.props.ui.zoom;

    return (
      <Split flex='right' priority='right' fixed={true}>
        <FlowSidebar onZoomUpdate={setCanvasZoom}/>
        <FlowCanvasView zoom={zoom} nodes={nodes} connectQuestionToQuestion={this.props.connectQuestionToQuestion} />
      </Split>
    );
  }
}
