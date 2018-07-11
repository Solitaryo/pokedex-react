import Request from './Request';

class PokemonDetails {
  getPokemonDetails(id) {
    return Request.connection('GET', `pokemon/${id}`)
  }
}

export default new PokemonDetails();