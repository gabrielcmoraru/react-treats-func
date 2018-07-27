import React, { Component, Fragment, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'Utilities';
import {  Modal } from 'Elements';
import User from './User';
import { UserContext } from './UserContext';



class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Gabe',
    email: 'john@doe.com'
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: '',
    })
  }

  render() {
    return(
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

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
          <User />
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

export default App;
