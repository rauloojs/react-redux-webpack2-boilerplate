import React, { Component } from 'react';
import FlowItemDraggable from './FlowItemDraggable';
import $ from 'jquery';
import 'jquery-ui';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';


export default class FlowItemsPalette extends Component {
  componentDidMount() {

    $('.flow-item-draggable').draggable({
      appendTo: 'body',
      stack: 'body',
      zIndex: 27000,
      helper: 'clone',
      start: function(e, ui){
         $(ui.helper).addClass('.grommet .grommetux-heading');
      }
    });

  }
  render() {
    let flowItems = this.props.flowItems;

    return (
      <Box flex='grow'
    justify='start'>
        <Menu primary={true}>
          {flowItems.map((flowItem, key) =>
            <Anchor key={key}>
              <FlowItemDraggable key={key} id={'fi-draggable-' + key} flowItem={flowItem} />
            </Anchor>
          )}
        </Menu>
      </Box>
    );
  }
}
