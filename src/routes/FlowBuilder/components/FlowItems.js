import React, { Component } from 'react';
import FlowItem from './FlowItem';
import JsPlumb from '../../../modules/JsPlumb'


export default class FlowItems extends Component {
  componentDidMount() {
    this.makeFlowItemsDraggable();
  }
  makeFlowItemsDraggable() {
    JsPlumb.ready(() => {
      console.log(document.querySelectorAll('.flow-item'));
      JsPlumb.draggable(document.querySelectorAll('.flow-item'), {
        stop: function (e) {
          console.log(e.pos[0], e.pos[1]);
          // component.props.dispatch(updateCanvasItemPosition(component.props.item.id, e.pos[0], e.pos[1]))
        },
        containment: true
      });
    });
  }
  render() {
    let flowItems = this.props.flowItems;

    return (
      <div className='flowItems'>
        <p>FlowItems</p>
        {flowItems.map((flowItem, key) =>
          <FlowItem key={key} flowItem={flowItem}/>
        )}
      </div>
    );
  }
}
