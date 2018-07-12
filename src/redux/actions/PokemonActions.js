import { GET_POKEMON_SUCCESS, GET_POKEMON_ERROR } from '../../constants/ApiConstants';
import Pokemon from '../api/Pokemon';

export function getPokemons() {
  return dispatch => {
    Pokemon.getPokemons()
      .then(res => res.json())
      .then(json => {
        dispatch({ type: GET_POKEMON_SUCCESS, data: json });
      })
      .catch(err => {
        dispatch({ type: GET_POKEMON_ERROR, data: err });
        // throw new Error(err);
      })
  }
}