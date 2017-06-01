import React, { Component } from 'react';
import FlowSidebar from './FlowSidebar';
import FlowCanvasContainer from '../containers/FlowCanvasContainer';
import Split from 'grommet/components/Split';
import JsPlumb from 'JsPlumb'


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
            component.props.connectConditionalToItem(sourceData.id, target, source)
            break;
          case 'action':
            component.props.connectActionToItem(sourceData.id, target, source)
            break;
          default:
            component.props.connectItemToItem(source, target)
        }
      });

      JsPlumb.bind('connectionMoved', function(info) {
        let source = info.originalSourceId;
        let target = info.originalTargetId;
        let sourceData = component.resolveSourceId(source);

        switch (sourceData.type) {
          case 'conditional':
            component.props.detachConditionalFromItem(sourceData.id, target, source)
            break;
          case 'action':
            component.props.detachActionFromItem(sourceData.id, target, source)
            break;
          default:
            component.props.detachItemFromItem(source, target)
        }
      });

      JsPlumb.bind('connectionDetached', function(info) {
        let source = info.sourceId;
        let target = info.targetId;
        let sourceData = component.resolveSourceId(source);

        switch (sourceData.type) {
          case 'conditional':
            component.props.detachConditionalFromItem(sourceData.id, target, source)
            break;
          case 'action':
            component.props.detachActionFromItem(sourceData.id, target, source)
            break;
          default:
            component.props.detachItemFromItem(source, target)
        }
      });
    });
  }
  render() {
    let nodes = this.props.flow.nodes;
    let zoom = this.props.ui.zoom;
    let flowItems = this.props.flowItems;

    return (
      <Split flex='right' priority='right' fixed={true}>
        <FlowSidebar flowItems={flowItems}/>
        <FlowCanvasContainer zoom={zoom} nodes={nodes} />
      </Split>
    );
  }
}
