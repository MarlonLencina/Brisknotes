import React from 'react';
import { Icon } from '@iconify/react';
import { Container, InfoNote, TagsContainer, Actions, Tag } from './style';

export const NoteComponent: React.FC = () => {
  return (
    <Container>
      <InfoNote>
        <h1>levar o cachorro para passear</h1>
        <p>levar o cachorro para passear depois de acabar as tarefas</p>
        <TagsContainer>
          <Tag>
            <p>Rotina</p>
          </Tag>
          <Tag>
            <p>Rotina</p>
          </Tag>
          <Tag>
            <p>Rotina</p>
          </Tag>
        </TagsContainer>
      </InfoNote>
      <Actions>
        <button type="submit">
          <Icon icon="akar-icons:trash-bin" />
        </button>
        <p>24/2/2021</p>
      </Actions>
    </Container>
  );
};
