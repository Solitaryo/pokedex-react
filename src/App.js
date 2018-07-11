import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'

import './assets/styles/app.css'
import History from './utils/History';
import Header from './components/partials/Header';
import PokemonGridList from './components/pokemon/PokemonGridList';
import PokemonDetails from './components/pokemon_details/PokemonDetails';

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <div className="App">
          <Header />
          <div>
            <Route exact path={'/'} component={PokemonGridList} />
            <Route path={'/pokemon/:pokemonId'} component={PokemonDetails} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
