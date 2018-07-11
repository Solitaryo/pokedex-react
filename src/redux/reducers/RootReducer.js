import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import PokemonReducer from './PokemonReducer';
import PokemonDetailsReducer from './PokemonDetailsReducer';

const rootReducer = combineReducers({
  pokemons: PokemonReducer,
  pokemon_details: PokemonDetailsReducer
});

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }));
const store = createStore(rootReducer, middleware);

export default store;
