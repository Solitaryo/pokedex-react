import React from 'react';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

import * as PokemonActions from '../../redux/actions/PokemonActions';
import PokemonGridListItem from './PokemonGridListItem';

class PokemonGridList extends React.Component {

  componentWillMount() {
    this.props.getPokemons();
  }

  render() {
    const { results } = this.props;
    return (
      <GridList cellHeight={180} style={{ width: '100%', height: 450 }}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Pokemon List</ListSubheader>
        </GridListTile>
        {results.map((pokemon, key) => (
          <PokemonGridListItem
            key={`pgli${key}`}
            name={pokemon.name}
            url={pokemon.url} />
        ))}
      </GridList>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPokemons() {
      dispatch(PokemonActions.getPokemons());
    }
  }
};

const mapStateToProps = state => ({
  ...state.pokemons
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonGridList);