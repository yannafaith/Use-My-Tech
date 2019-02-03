import React, { Component } from 'react';
import './App.css';
import SignInView from './views/SignInView';
import ItemListView from './views/ItemListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TechVault</h1>
        <SignInView />
        <ItemListView />
      </div>
    );
  };
};

export default App;

// need to put header in Nav component
// Need to declare routes here