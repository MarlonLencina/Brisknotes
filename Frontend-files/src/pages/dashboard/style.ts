import styled from 'styled-components';

export const Container = styled.div``;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  img {
    transition: 0.2s;

    &:hover {
      transform: scale(0.95);
    }
  }
`;
