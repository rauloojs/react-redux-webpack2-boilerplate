import React, { Component } from 'react';
import FlowItemHeader from './FlowItemHeader';
import Choices from './Choices';
import Conditionals from './Conditionals';
import Actions from './Actions';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowItem extends Component {
  componentDidMount() {
    this.makeFlowItemDraggable();
  }
  makeFlowItemDraggable() {
    let uuid = this.props.flowItem.uuid;

    if (uuid) {
      JsPlumb.ready(() => {
        JsPlumb.draggable(uuid, {
          stop: function (e) {
            console.log(e.pos[0], e.pos[1]);
            // component.props.dispatch(updateCanvasItemPosition(component.props.item.id, e.pos[0], e.pos[1]))
          }
          // containment: true
        });
      });
    }
  }
  render() {
    let flowItem = this.props.flowItem || {};
    let choices = [];
    let conditionals = [];
    let actions = [];
    let newStyle = {left: flowItem.x, top: flowItem.y}
    // let conditionals = this.props.flowItem.conditionals;
    // let choices = this.props.flowItem.options.choices;
    // let actions = this.props.flowItem.actions;

    return (
      <div className='flow-item' id={flowItem.uuid} style={newStyle}>
        <p>FlowItem</p>
        <FlowItemHeader flowItem={flowItem}/>
        <Choices choices={choices}/>
        <Conditionals conditionals={conditionals}/>
        <Actions actions={actions}/>
      </div>
    );
  }
}
