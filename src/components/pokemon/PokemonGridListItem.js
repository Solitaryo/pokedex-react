import React from 'react';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { GetPokemonNumber } from '../../utils/StringUtils';

const PokemonGridListItem = (props) => (
  <GridListTile>
    <img
      src={
        GetPokemonNumber(props.url) !== null ?
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${GetPokemonNumber(props.url)}.png`
          :
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }
      alt={props.name} />
    <GridListTileBar
      title={props.name}
      actionIcon={
        <IconButton href={`/pokemon/${GetPokemonNumber(props.url)}`}>
          <InfoIcon />
        </IconButton>
      }
    />
  </GridListTile>
);

PokemonGridListItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default PokemonGridListItem;