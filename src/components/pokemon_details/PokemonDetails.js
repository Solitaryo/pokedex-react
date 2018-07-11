import React from 'react';
import { connect } from 'react-redux';

import * as PokemonDetailsActions from '../../redux/actions/PokemonDetailsActions';
import Pokedex from './Pokedex';

class PokemonDetails extends React.Component {

  componentWillMount() {
    this.props.getPokemonDetails(this.props.match.params.pokemonId);
  }

  render() {
    const { match, pokemonDetails } = this.props;
    return (
      <div>
        <h1 style={{ marginTop: 20 }}> Pokemon number {match.params.pokemonId} </h1>
        <Pokedex
          number={match.params.pokemonId}
          name={pokemonDetails.name}
          types={pokemonDetails.types}
          height={pokemonDetails.height}
          weight={pokemonDetails.weight}
          abilities={pokemonDetails.abilities}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPokemonDetails(id) {
      dispatch(PokemonDetailsActions.getPokemonDetails(id));
    }
  }
};

const mapStateToProps = state => ({
  pokemonDetails: state.pokemon_details
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);