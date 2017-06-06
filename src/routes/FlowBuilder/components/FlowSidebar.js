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
        <FlowItemsPalette flowItems={flowItems}/>
        <FlowCanvasSettingsContainer />
        <Box colorIndex='neutral-1'
          pad='small'
          full='vertical'>
          <Button label='Guardar' primary={true} onClick={this.onPutFlowDataClick.bind(this)} />
          <Button label='Volver al inicio'
          path='/' />
        </Box>
      </Sidebar>
    );
  }
}
