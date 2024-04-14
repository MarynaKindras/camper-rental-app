import styled from 'styled-components';

export const HomeTitle = styled.h1`
  margin-top: ${p => p.theme.spasing(6)};
  text-align: center;
  text-transform: uppercase;
  font-size: 50px;
  color: ${p => p.theme.colors.black};
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;
