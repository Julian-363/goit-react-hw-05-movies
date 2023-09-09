import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import { searchMovies } from '../services/Movies.API';
import {
  MoviesContainer,
  MoviesTitle,
  SearchForm,
  SearchInput,
  SearchButton,
  MovieList,
  MovieItem,
} from '../styles/MoviesStyles';
import Loader from './Loader';

const Movies = ({ keyword }) => {
  const [query, setQuery] = useState(keyword || '');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const searchMoviesResult = await searchMovies(query);
      setMovies(searchMoviesResult);
      setLoading(false);
    } catch (error) {
      console.error('Error searching movies:', error);
      setLoading(false);
    }
  };


  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSearch();
    navigate('/movies');
  };

  return (
    <MoviesContainer>
      <MoviesTitle>Search Movies</MoviesTitle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search movies..."
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {loading ? (
        <Loader />
      ) : (
        <MovieList>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <div className="movie-title">{movie.title}</div>
              </Link>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </MoviesContainer>
  );
};

Movies.propTypes = {
  keyword: PropTypes.string,
};

export default Movies;
