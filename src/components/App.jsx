import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import MovieInformation from "./MovieInformation/MovieInformation";
import Movies from "./Movies/Movies";
import Actors from "./Actors/Actors";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route path="movie" element={<MovieInformation />} />
          <Route path="actors" element={<Actors />} />
          <Route path="movies" element={<Movies />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
