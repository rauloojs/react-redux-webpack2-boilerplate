import React, { Component } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Form from 'grommet/components/Form';
import FlowForm from './FlowForm';
import FlowItemForm from './FlowItemForm';
import ConditionalForm from './ConditionalForm';
import ActionForm from './ActionForm';


export default class RightSidebar extends Component {
  render() {
    let flow = this.props.flow;
    let rightSidebarView = this.props.rightSidebarView;
    let view = null;

    switch (rightSidebarView) {
      case 'FLOW':
        view = <FlowForm />;
        break;
      case 'QUESTION':
        view = <FlowItemForm />;
        break;
      case 'CONDITIONAL':
        view = <ConditionalForm />;
        break;
      case 'ACTION':
        view = <ActionForm />;
        break;
      default:

    }

    return (
      <div>
        <Sidebar ref='sidebar' size='large' colorIndex='light-2'>
          {view}
        </Sidebar>
      </div>
    );
  }
}
