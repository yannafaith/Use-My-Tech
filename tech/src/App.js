import React, { Component } from 'react';
import './App.css';
import SignInView from './views/SignInView';
import ItemListView from './views/ItemListView';
import ItemView from './views/ItemView';
import ProfileView from './views/ProfileView';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import styled from 'styled-components';

const StyledFooter = styled.footer`{
  // border: solid red 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  background-color: #0c1425;
}`;

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
        <StyledFooter>
          <p>@2019 Tech Plum</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Help</p>
        </StyledFooter>
      </div>
    );
  };
};

export default App;

// need to put header in Nav component
