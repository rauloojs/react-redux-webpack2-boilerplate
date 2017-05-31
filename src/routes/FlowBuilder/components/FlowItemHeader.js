import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';


export default class FlowItemHeader extends Component {
  render() {
    let flowItem = this.props.flowItem;

    return (
      <div className='header'>
        <Box>
          <Label>
            {flowItem.name}
          </Label>
        </Box>
      </div>
    );
  }
}
