import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  margin: 90px auto;
  padding: 80px;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

export const MovieTitle = styled.h1`
  color: #333;
`;

export const MovieInfo = styled.div`
  width: 1350px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const MovieImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 10px;
  margin-right: 30px;
`;

export const MovieDetailsContent = styled.div`
  flex: 1;
  list-style: none;
  margin-left: 20px;

  nav {
    ul {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;

      li {
        margin-top: 30px;
        margin-right: 20px;
        padding-right: 30px;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #333;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: darkgray;
  }
`;
