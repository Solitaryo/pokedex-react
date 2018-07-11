import * as ApiConstants from '../../constants/ApiConstants';

const defaultState = {
  forms: [],
  abilities: [],
  stats: [],
  name: '',
  weight: 0,
  moves: [],
  sprites: {},
  held_items: [],
  location_area_encounters: '',
  height: 0,
  is_default: true,
  species: {},
  id: 0,
  order: 0,
  game_indices: [],
  base_experience: 0,
  types: []
};

const PokemonDetailsReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case ApiConstants.GET_POKEMON_DETAIL_SUCCESS: {
      return {
        ...state,
        ...action.data,
        error: false
      }
    }
    case ApiConstants.GET_POKEMON_DETAIL_ERROR: {
      return {
        ...state,
        error: action.data
      }
    }
    default: {
      return state;
    }
  }
}

export default PokemonDetailsReducer;