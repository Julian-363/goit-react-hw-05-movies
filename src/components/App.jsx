import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Navigation from './Navigation';
import Loader from './Loader';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';

const App = () => {
  useEffect(() => {
    const lightbox = new SimpleLightbox('.movie-link');
    lightbox.on('show.simplelightbox', () => {
      document.body.style.overflow = 'hidden';
    });
    lightbox.on('closed.simplelightbox', () => {
      document.body.style.overflow = 'auto';
    });
  }, []);

  return (
    <Router>
      <Navigation />
      <Suspense fallback={<Loader />}></Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
