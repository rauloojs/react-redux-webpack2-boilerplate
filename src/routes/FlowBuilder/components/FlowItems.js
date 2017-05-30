import React, { Component } from 'react';
import FlowItem from './FlowItem';


export default class FlowItems extends Component {
  componentDidMount() {
      this.makeFlowItemsDraggable();
  }
  makeFlowItemsDraggable() {

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
