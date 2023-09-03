import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieCast } from '../services/Movies.API';
import {
  CastContainer,
  CastItem,
  CastImage,
  CastName,
  CastCharacter,
  CastList,
  CastTitle,
} from '../styles/CastStyles';
import { GoBackButton } from '../styles/ButtonStyles';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchMovieCast = async () => {
      const cast = await getMovieCast(movieId);
      setCast(cast);
    };

    fetchMovieCast();
  }, [movieId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <CastContainer>
      <CastTitle>Cast</CastTitle>
      <GoBackButton onClick={goBack}>Go Back</GoBackButton>
      <CastList>
        {cast.map(actor => (
          <CastItem key={actor.id}>
            <CastImage
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
            />
            <CastName>{actor.name}</CastName>
            <CastCharacter>{actor.character}</CastCharacter>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
