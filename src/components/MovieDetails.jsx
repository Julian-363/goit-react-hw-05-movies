import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/Movies.API';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {
  MovieDetailsContainer,
  MovieTitle,
  MovieInfo,
  MovieImage,
  MovieDetailsContent,
  StyledLink,
} from '../styles/MovieDetailsStyles';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    const lightbox = new SimpleLightbox('.movie-image');
    lightbox.on('show.simplelightbox', () => {
      document.body.style.overflow = 'hidden';
    });
    lightbox.on('closed.simplelightbox', () => {
      document.body.style.overflow = 'auto';
    });
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <MovieDetailsContainer>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieInfo>
        <MovieImage
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieDetailsContent>
          <p>Release Date: {movie.release_date ? movie.release_date : 'N/A'}</p>
          <p>Overview: {movie.overview}</p>
          <nav>
            <ul>
              <li>
                <StyledLink to={`cast`}>Cast</StyledLink>
              </li>
              <li>
                <StyledLink to={`reviews`}>Reviews</StyledLink>
              </li>
            </ul>
          </nav>
        </MovieDetailsContent>
        <Outlet />
      </MovieInfo>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
