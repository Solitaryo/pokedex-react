import {
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_ERROR
} from '../../constants/ApiConstants';
import PokemonDetails from '../api/PokemonDetails';

export function getPokemonDetails(id) {
  return dispatch => {
    PokemonDetails.getPokemonDetails(id)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: GET_POKEMON_DETAIL_SUCCESS, data: json });
      })
      .catch(err => {
        dispatch({ type: GET_POKEMON_DETAIL_ERROR, data: err });
        throw new Error(err);
      })
  }
}
