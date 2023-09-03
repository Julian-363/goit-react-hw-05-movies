import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: midnightblue;
  box-shadow: 15px 15px 30px midnightblue, -15px -15px 30px #ffe3e3;
`;

export const MenuContainer = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 5px;
`;

export const MenuItem = styled.li`
  margin-right: 20px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;

  &:last-child {
    margin-right: 0;
  }

  a {
    color: darkgray;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: floralwhite;
    }
  }

  ${({ active }) =>
    active &&
    `
    a {
      color: darkgray;
    }
  `}
`;
