import React, { Component } from 'react';
import './App.css';
import SignInView from './views/SignInView';
import ItemListView from './views/ItemListView';
import ItemView from './views/ItemView';
import ProfileView from './views/ProfileView';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
        <div className='Routes'>
          <Route exact path='/' component={SignInView} />
          <Route path='/items' component={ItemListView} />
          <Route path='/item/:id' component={ItemView} />
          <Route path='/profile/:username' component={ProfileView} />
        </div>
      </div>
    );
  };
};

export default App;

// need to put header in Nav component
