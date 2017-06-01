import React, { Component } from 'react';
import FlowItemsPalette from './FlowItemsPalette';
import FlowCanvasSettingsContainer from '../containers/FlowCanvasSettingsContainer';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import { Link } from 'react-router'


export default class FlowSidebar extends Component {

  render() {
    return (
      <Sidebar ref='sidebar' size='medium' full={true}>
        <Box colorIndex='neutral-1'
          full='vertical'
          pad='medium'>
          <Link to='/' activeClassName='page-layout__nav-item--active'>Home</Link>
          <FlowItemsPalette />
          <FlowCanvasSettingsContainer />
        </Box>
      </Sidebar>
    );
  }
}
