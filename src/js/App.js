import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Sidebar from 'grommet/components/Sidebar';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';


export default class SampleApp extends Component {
  render() {
    return (
      <App centered={false}>
        <Sidebar colorIndex='neutral-1'>
          <Header pad='medium'
            justify='between'>
            <Title>
              Title
            </Title>
          </Header>
          <Box flex='grow'
            justify='start'>
            <Menu primary={true}>
              <Anchor href='#'
                className='active'>
                First
              </Anchor>
              <Anchor href='#'>
                Second
              </Anchor>
              <Anchor href='#'>
                Third
              </Anchor>
            </Menu>
          </Box>
        </Sidebar>
      </App>
    );
  }
}
