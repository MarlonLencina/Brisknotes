import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  align-items: center;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  a {
    transition: 0.2s;

    &:hover {
      transform: scale(0.95);
      opacity: 0.8;
    }
  }
`;
export const Content = styled.section`
  display: flex;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;

  h1 {
    font-size: 5.8rem;
    font-weight: 500;

    b {
      font-weight: bold;
      color: #3d348b;
    }
  }

  strong {
    font-size: 2rem;
    font-weight: 300;
  }
`;
export const Ilustration = styled.section`
  pointer-events: none;
`;
