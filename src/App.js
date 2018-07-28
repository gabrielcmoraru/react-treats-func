import React, { Component, Fragment, createContext } from 'react';
import { Transition } from "react-spring";

import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import User from './User';
import UserProvider from './UserProvider';
import Drag from './Drag';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Modal>
              <h1>Still In Modal</h1>
            </Modal>
          </header>
          <Drag />
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                <h1>Still In Modal</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

const Header = styles => (
  <Card
    style={{
      opacity: styles.opacity,
      background: styles.bg,
      overflow: 'hidden',
      height: styles.height
    }}
  >
    <h1>Still In Modal</h1>
    <h3>{styles.value}</h3>
  </Card>
);

export default App;
