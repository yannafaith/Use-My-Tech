import React, { Component } from 'react';
import Auth from './views/Auth.jsx';
import Market from './views/Market.jsx';
import Item from './views/Item.jsx';
import UserProfile from './views/UserProfile.jsx';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import { Footer } from './css/styledcomps.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className='Routes'>
          <Route exact path='/' component={Auth} />
          <Route path='/items' component={Market} />
          <Route path='/item/:id' component={Item} />
          <Route path='/profile/:username' component={UserProfile} />
        </div>
        <Footer>
          <p>Tech Plum 2019</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Help</p>
        </Footer>
      </div>
    );
  };
};

export default App;
