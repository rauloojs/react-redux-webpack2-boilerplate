import React, { Component } from 'react';
import FlowItemDraggable from './FlowItemDraggable';
import $ from 'jquery';
import 'jquery-ui';


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
    return (
      <div>
        <FlowItemDraggable id='fi-draggable-1'/>
        <FlowItemDraggable id='fi-draggable-2'/>
        <FlowItemDraggable id='fi-draggable-3'/>
        <FlowItemDraggable id='fi-draggable-4'/>
        <FlowItemDraggable id='fi-draggable-5'/>
      </div>
    );
  }
}
