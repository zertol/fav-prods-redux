import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Nav/Navigation';
import Products from './containers/Products';
import Favorites from './containers/Favorites';


class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <main>
          <Route path="/" component={Products} exact />
          <Route path="/favorites" component={Favorites} />
        </main>
      </>
    )
  }
}

export default App;
