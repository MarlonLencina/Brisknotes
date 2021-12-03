import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;

  form {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    img {
      margin-bottom: 5rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin-top: 5rem;
    }

    strong {
      margin-top: 1rem;
      font-size: 1.7rem;
      color: white;
      font-weight: 500;
    }

    a {
      p {
        font-size: 1.7rem;
        color: #3d348b;
        font-weight: 700;
      }
    }
  }
`;
export const Text = styled.div`
  h1 {
    font-size: 5.8rem;
    font-weight: 500;

    b {
      font-weight: bold;
      color: #3d348b;
    }
  }
`;
