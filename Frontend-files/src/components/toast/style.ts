import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
export const Toast = styled(animated.div)`
  background-color: white;
  padding: 1rem 2rem;
  color: #3d348b;
  border-radius: 1rem;
  margin: 2rem;
  display: flex;
  align-items: center;

  div {
    strong {
      font-size: 1.2rem;
    }
  }

  svg {
    color: #3d348b;
    font-size: 2.5rem;
    margin-right: 1rem;
  }
`;
