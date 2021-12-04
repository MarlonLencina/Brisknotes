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

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  margin-top: 4rem;
`;

export const UserInfo = styled.div`
  flex: 1;

  h1 {
    font-size: 5rem;
  }

  p {
    font-size: 1.8rem;
    color: #3d348b;
  }
`;

export const ButtonNewNote = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid #3d348b;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  color: #3d348b;

  :hover {
    background-color: #3d348b;
    color: white;
  }

  svg {
    font-size: 4rem;
    margin-left: 2rem;
  }
`;

export const NotesContainer = styled.div``;
