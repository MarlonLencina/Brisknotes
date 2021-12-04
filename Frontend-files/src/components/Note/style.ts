import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem;
  border: 2px solid #fff;
  border-radius: 1rem;

  & + div {
    margin-top: 2rem;
  }
`;

export const InfoNote = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const Tag = styled.div`
  height: 4rem;
  width: 8rem;
  border-radius: 1rem;
  background-color: #3d348b;
  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-left: 1rem;
  }
`;
export const TagsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    align-self: flex-end;
    background-color: #fff;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    border-style: none;

    svg {
      color: #3d348b;
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: #3d348b;
  }
`;
