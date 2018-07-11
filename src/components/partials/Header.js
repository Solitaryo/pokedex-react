import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
        <Typography variant="title" color="inherit">
          Pokedex
      </Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;