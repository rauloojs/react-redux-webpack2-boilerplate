import React, { Component } from 'react';
import FlowItemsPalette from './FlowItemsPalette';
import FlowCanvasSettings from './FlowCanvasSettings';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import { Link } from 'react-router'


export default class FlowSidebar extends Component {

  render() {
    let onZoomUpdate = this.props.onZoomUpdate;
    
    return (
      <Sidebar ref='sidebar' size='medium' full={true}>
        <Box colorIndex='neutral-1'
          full='vertical'
          pad='medium'>
          <Link to='/' activeClassName='page-layout__nav-item--active'>Home</Link>
          <FlowItemsPalette />
          <FlowCanvasSettings onZoomUpdate={onZoomUpdate}/>
        </Box>
      </Sidebar>
    );
  }
}
