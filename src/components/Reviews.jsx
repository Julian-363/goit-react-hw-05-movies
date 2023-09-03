import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieReviews } from '../services/Movies.API';
import {
  ReviewsContainer,
  ReviewTitle,
  ReviewsList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from '../styles/ReviewStyles';
import { GoBackButton } from '../styles/ButtonStyles';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchMovieReviews = async () => {
      const reviews = await getMovieReviews(movieId);
      setReviews(reviews);
    };

    fetchMovieReviews();
  }, [movieId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ReviewsContainer>
      <ReviewTitle>Reviews</ReviewTitle>
      <GoBackButton onClick={goBack}>Go Back</GoBackButton>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewAuthor>{review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <p>No reviews available</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
