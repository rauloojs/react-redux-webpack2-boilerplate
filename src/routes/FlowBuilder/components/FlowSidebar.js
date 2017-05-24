import React, { Component } from 'react';
import FlowItemsPalette from './FlowItemsPalette';
import FlowCanvasSettings from './FlowCanvasSettings';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';


export default class FlowSidebar extends Component {
  render() {
    return (
      <Sidebar ref='sidebar' size='medium' full={true}>
        <Box colorIndex='neutral-1'
          full='vertical'
          pad='medium'>
          <FlowItemsPalette />
          <FlowCanvasSettings />
        </Box>
      </Sidebar>
    );
  }
}
