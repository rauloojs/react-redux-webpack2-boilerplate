import React, { Component } from 'react';
import FlowItemContainer from '../containers/FlowItemContainer';
import JsPlumb from 'JsPlumb'


export default class FlowItemContainers extends Component {
  render() {
    let flowItems = this.props.flowItems;

    return (
      <div className='flowItems'>
        {flowItems.map((flowItem, key) =>
          <FlowItemContainer key={key} flowItem={flowItem} />
        )}
      </div>
    );
  }
}
