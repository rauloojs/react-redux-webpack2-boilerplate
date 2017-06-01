import React, { Component } from 'react';


export default class FlowItemDraggable extends Component {
  render() {
    return (
      <div id={this.props.id} className='flow-item-draggable'>
        <h3>FlowItemDraggable</h3>
      </div>
    );
  }
}
