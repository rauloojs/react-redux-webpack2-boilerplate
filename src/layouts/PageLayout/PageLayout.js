import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import App from 'grommet/components/App';


export const PageLayout = ({ children }) => (
  <App className='flow-app' centered={false}>
    {/* <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink> */}
    {/* <Link to='/result_builder' activeClassName='page-layout__nav-item--active'>Result builder</Link> */}
    <div>
      {children}
    </div>
    {/* <FlowSidebar />
    <FlowCanvas /> */}
  </App>
);

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
