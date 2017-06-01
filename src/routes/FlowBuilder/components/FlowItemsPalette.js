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
    let flowItems = this.props.flowItems;

    return (
      <div>
        {flowItems.map((flowItem, key) =>
          <FlowItemDraggable key={key} id={'fi-draggable-' + key} flowItem={flowItem} />
        )}
      </div>
    );
  }
}
