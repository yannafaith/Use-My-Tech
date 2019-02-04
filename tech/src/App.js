import React, { Component } from 'react';
import './App.css';
import SignInView from './views/SignInView';
import ItemListView from './views/ItemListView';
import ItemPageView from './views/ItemPageView';
import ProfileView from './views/ProfileView';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import styled from 'styled-components';

const StyledNav = styled.div`{
  margin-left: 44%;
}`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledNav>
          <Navigation/>
        </StyledNav>
        <div className='Routes'>
          <Route exact path='/' component={SignInView} />
          <Route path='/items' component={ItemListView} />
          <Route path='/item/:id' component={ItemPageView} />
          <Route path='/profile/:username' component={ProfileView} />
        </div>
      </div>
    );
  };
};

export default App;

// need to put header in Nav component
