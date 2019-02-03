import React, { Component } from 'react';
import './App.css';
import SignInView from './views/SignInView';
import ItemListView from './views/ItemListView';
import ItemPageView from './views/ItemPageView';
import ProfileView from './views/ProfileView';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tech Vault Nav</h1>
        <div className='Routes'>
          <Route exact path='/' component={SignInView} />
          <Route path='/Vault' component={ItemListView} />
          <Route path='/Item' component={ItemPageView} />
          <Route path='/Profile' component={ProfileView} />
        </div>
      </div>
    );
  };
};

export default App;

// need to put header in Nav component
