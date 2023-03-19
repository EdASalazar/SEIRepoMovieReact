import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import "../../styles.css";
import "./App.css";
import { movies } from "../../../data/data";
import MoviesDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="app">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route
              path="/movies/:movieName"
              element={<MoviesDetailsPage movies={movies} />}
            />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage setUSer={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
