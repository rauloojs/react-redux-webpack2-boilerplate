import React, { Component } from 'react';
import FlowItem from './FlowItem';
import Box from 'grommet/components/Box';


export default class FlowCanvas extends Component {
  render() {
    return (
      <Box justify='center'
          align='center'
          full='vertical'
          pad='medium'>
        <FlowItem />
      </Box>
    );
  }
}
