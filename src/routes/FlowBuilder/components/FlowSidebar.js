import React, { Component } from 'react';
import FlowItemsPalette from './FlowItemsPalette';
import FlowCanvasSettingsContainer from '../containers/FlowCanvasSettingsContainer';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import { Link } from 'react-router'


export default class FlowSidebar extends Component {
  onPutFlowDataClick() {
    this.props.putFlowData(this.props.flowId);
  }
  render() {
    let flowItems = this.props.flowItems;

    return (
      <Sidebar ref='sidebar' size='medium' full={true} colorIndex='neutral-1'>
        <Header pad='medium'
          justify='between'>
          <Title>
            Elementos
          </Title>
        </Header>
        <Box colorIndex='neutral-1'
          full='vertical'>
          <Link to='/' activeClassName='page-layout__nav-item--active'>Home</Link>
          <FlowItemsPalette flowItems={flowItems}/>
          <FlowCanvasSettingsContainer />
          <Button label='Guardar' primary={true} onClick={this.onPutFlowDataClick.bind(this)} />
        </Box>
      </Sidebar>
    );
  }
}
