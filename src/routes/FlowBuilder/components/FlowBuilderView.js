import React, { Component } from 'react';
import FlowSidebarContainer from '../containers/FlowSidebarContainer';
import FlowCanvasContainer from '../containers/FlowCanvasContainer';
import RightSidebarContainer from '../containers/RightSidebarContainer';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import JsPlumb from 'JsPlumb'


export default class FlowBuilderView extends Component {
  resolveSourceId(sourceId) {
    let items = sourceId.split('_');

    if (items[0].startsWith('conditional')) {
      return {
        type: 'conditional',
        id: items[2],
        index: items[1]
      };
    } else {
      if (items[0].startsWith('action')) {
        return {
          type: 'action',
          id: items[2],
          index: items[1]
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
            component.props.connectConditionalToItem(sourceData.id, sourceData.index, target, source)
            break;
          case 'action':
            component.props.connectActionToItem(sourceData.id, sourceData.index, target, source)
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
            component.props.detachConditionalFromItem(sourceData.id, sourceData.index, target, source)
            break;
          case 'action':
            component.props.detachActionFromItem(sourceData.id, sourceData.index, target, source)
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
            component.props.detachConditionalFromItem(sourceData.id, sourceData.index, target, source)
            break;
          case 'action':
            component.props.detachActionFromItem(sourceData.id, sourceData.index, target, source)
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
    let flowId = this.props.params.flowId;
    let rightSidebar = null;

    if (this.props.ui.rightSidebarActive) {
      rightSidebar = <RightSidebarContainer />;
    }

    return (
      <Split flex='right' priority='right' fixed={true}>
        <FlowSidebarContainer flowItems={flowItems} flowId={flowId}/>
        <Split flex='left' priority='left' fixed={true}>
          <FlowCanvasContainer zoom={zoom} nodes={nodes} />
          {rightSidebar}
        </Split>
      </Split>
    );
  }
}
