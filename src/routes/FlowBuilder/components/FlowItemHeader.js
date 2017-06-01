import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';


export default class FlowItemHeader extends Component {
  onAddConditionalClick() {
    this.props.addConditionalToItem(this.props.flowItem.uuid);
  }
  onAddActionClick() {
    this.props.addActionToItem(this.props.flowItem.uuid);
  }
  render() {
    let flowItem = this.props.flowItem;

    return (
      <div className='header'>
        <Box>
          <Label>
            {flowItem.name}
          </Label>
          <button onClick={this.onAddConditionalClick.bind(this)}>Add conditional</button>
          <button onClick={this.onAddActionClick.bind(this)}>Add action</button>
        </Box>
      </div>
    );
  }
}
