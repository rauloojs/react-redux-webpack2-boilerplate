import React, { Component } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Form from 'grommet/components/Form';
import FlowForm from './FlowForm';
import FlowItemForm from './FlowItemForm';
import ConditionalFormContainer from '../containers/ConditionalFormContainer';
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
      case 'FLOW_ITEM':
        view = <FlowItemForm />;
        break;
      case 'CONDITIONAL':
        view = <ConditionalFormContainer />;
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
