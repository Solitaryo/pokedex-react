import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/styles/pokedex.css';
import { ToTitleCase } from '../../utils/StringUtils';

const Pokedex = (props) => (
  <div id="pokedex">
    <div id="left">
      <div id="logo"></div>
      <div id="bg_curve1_left"></div>
      <div id="bg_curve2_left"></div>
      <div id="curve1_left">
        <div id="buttonGlass">
          <div id="reflect"> </div>
        </div>
        <div id="miniButtonGlass1"></div>
        <div id="miniButtonGlass2"></div>
        <div id="miniButtonGlass3"></div>
      </div>
      <div id="curve2_left">
        <div id="junction">
          <div id="junction1"></div>
          <div id="junction2"></div>
        </div>
      </div>
      <div id="screen">
        <div id="topPicture">
          <div id="buttontopPicture1"></div>
          <div id="buttontopPicture2"></div>
        </div>
        <div id="picture">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.number}.png`}
            alt="psykokwak"
            height="170" />
        </div>
        <div id="buttonbottomPicture"></div>
        <div id="speakers">
          <div className="sp"></div>
          <div className="sp"></div>
          <div className="sp"></div>
          <div className="sp"></div>
        </div>
      </div>
      <div id="bigbluebutton"></div>
      <div id="barbutton1"></div>
      <div id="barbutton2"></div>
      <div id="cross">
        <div id="leftcross">
          <div id="leftT"></div>
        </div>
        <div id="topcross">
          <div id="upT"></div>
        </div>
        <div id="rightcross">
          <div id="rightT"></div>
        </div>
        <div id="midcross">
          <div id="midCircle"></div>
        </div>
        <div id="botcross">
          <div id="downT"></div>
        </div>
      </div>
    </div>
    <div id="right">
      <div id="stats">
        <strong>Name :</strong> {ToTitleCase(props.name)}<br />
        <strong>Type :</strong> {props.types.map(type => `${ToTitleCase(type.type.name)}, `)}<br />
        <strong>Height :</strong> {props.height}<br />
        <strong>Weight :</strong> {props.weight} lbs.<br /><br />
        <strong>Abilities :</strong> {props.abilities.map(ability => `${ToTitleCase(ability.ability.name)}, `)}<br />
      </div>
      <div id="blueButtons1">
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
      </div>
      <div id="blueButtons2">
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
      </div>
      <div id="miniButtonGlass4"></div>
      <div id="miniButtonGlass5"></div>
      <div id="barbutton3"></div>
      <div id="barbutton4"></div>
      <div id="yellowBox1"></div>
      <div id="yellowBox2"></div>
      <div id="bg_curve1_right"></div>
      <div id="bg_curve2_right"></div>
      <div id="curve1_right"></div>
      <div id="curve2_right"></div>
    </div>
  </div>
);

Pokedex.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.array,
  height: PropTypes.number,
  weight: PropTypes.number,
  abilities: PropTypes.array
};

export default Pokedex;