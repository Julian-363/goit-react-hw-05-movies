import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  width: 1200px;
  margin: 80px auto;
  text-align: left;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 100px;
`;

export const ReviewTitle = styled.h2`
  color: #333;
  text-align: center;
  font-size: 30px;
`;

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 20px;
`;

export const ReviewAuthor = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #333;
  text-decoration: none;
  text-align: left;
`;

export const ReviewContent = styled.p`
  font-size: 16px;
  color: #666666;
  margin: 0;
`;
