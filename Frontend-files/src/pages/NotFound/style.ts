import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 5rem;
    font-weight: 500;

    b {
      font-weight: bold;
      color: #3d348b;
      font-size: 6rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 300;
  }
`;
