import React, { Component } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Form from 'grommet/components/Form';
import FlowForm from './FlowForm';


export default class RightSidebar extends Component {
  render() {
    let flow = this.props.flow;
    let rightSidebarView = this.props.rightSidebarView;
    let view = null;

    switch (rightSidebarView) {
      case 'FLOW':
        view = <FlowForm />;
        break;
      default:

    }

    return (
      <div>
        <Sidebar ref='sidebar' size='large' colorIndex='light-2'>
          <Form compact={false} fill={false} pad='small'>
            {view}
          </Form>
        </Sidebar>
      </div>
    );
  }
}
