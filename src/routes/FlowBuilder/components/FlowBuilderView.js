import React, { Component } from 'react';
import FlowSidebar from './FlowSidebar';
import FlowCanvasView from '../components/FlowCanvasView';
import Split from 'grommet/components/Split';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowBuilderView extends Component {
  resolveSourceId(sourceId) {
    let items = sourceId.split('_');

    if (items[0].startsWith('conditional')) {
      return {
        type: 'conditional',
        id: items[1]
      };
    } else {
      if (items[0].startsWith('action')) {
        return {
          type: 'action',
          id: items[1]
        };
      } else {
        return {
          type: ''
        };
      }
    }
  }
  componentDidMount() {
    this.props.getFlowData(this.props.params.flowId);

    let component = this;
    JsPlumb.ready(() => {
      JsPlumb.bind('connection', function(info) {
        let source = info.sourceId;
        let target = info.targetId;
        let sourceData = component.resolveSourceId(source);

        switch (sourceData.type) {
          case 'conditional':
            component.props.connectConditionalToQuestion(sourceData.id, target, source)
            break;
          case 'action':
            component.props.connectActionToQuestion(sourceData.id, target, source)
            break;
          default:
            component.props.connectQuestionToQuestion(source, target)
        }
      });

      JsPlumb.bind('connectionMoved', function(info) {
        let source = info.originalSourceId;
        let target = info.originalTargetId;
        let sourceData = component.resolveSourceId(source);

        switch (sourceData.type) {
          case 'conditional':
            component.props.detachConditionalFromQuestion(sourceData.id, target, source)
            break;
          case 'action':
            component.props.detachActionFromQuestion(sourceData.id, target, source)
            break;
          default:
            component.props.detachQuestionFromQuestion(source, target)
        }
      });

      JsPlumb.bind('connectionDetached', function(info) {
        let source = info.sourceId;
        let target = info.targetId;
        let sourceData = component.resolveSourceId(source);

        switch (sourceData.type) {
          case 'conditional':
            component.props.detachConditionalFromQuestion(sourceData.id, target, source)
            break;
          case 'action':
            component.props.detachActionFromQuestion(sourceData.id, target, source)
            break;
          default:
            component.props.detachQuestionFromQuestion(source, target)
        }
      });
    });
  }
  render() {
    let nodes = this.props.flow.nodes;
    let zoom = this.props.ui.zoom;

    return (
      <Split flex='right' priority='right' fixed={true}>
        <FlowSidebar />
        <FlowCanvasView zoom={zoom} nodes={nodes} />
      </Split>
    );
  }
}
