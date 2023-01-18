import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="movie" element={<h1>Movie Information</h1>} />
          <Route path="actors" element={<h1>Actors</h1>} />
          <Route path="movies" element={<h1>Movies</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
