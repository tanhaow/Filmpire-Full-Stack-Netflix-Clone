import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import useStyles from './styles';
// import useAlan from './Alan';

import { Movies, Actors, MovieInformation, NavBar, Profile } from './index';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  // useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar /> {/* No matter on which route we're, always show NavBar */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      {/* <div ref={alanBtnContainer} /> */}
    </div>
  );
}

export default App;