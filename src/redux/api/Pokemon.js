import Request from './Request';

class Pokemon {
  getPokemons() {
    return Request.connection('GET', 'pokemon')
  }
}

export default new Pokemon();