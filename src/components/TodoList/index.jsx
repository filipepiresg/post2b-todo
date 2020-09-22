import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as TodoStatus from '~/commom/todoStatus';
import { addTodo } from '~/store/modules/todo/actions';

import TodoItem from '../TodoItem';
import { Container, Title, Button } from './styles';

function TodoList({ data = [], title = '', type = TodoStatus.TODO }) {
  const dispatch = useDispatch();

  const addItem = useCallback(
    ({ name, description }) => {
      dispatch(addTodo({ title: name, description, status: type }));
    },
    [dispatch, type]
  );

  return (
    <Container>
      <Title>{title}</Title>
      <ul>
        {data.map((item) => (
          <TodoItem key={String(item.id)} item={item} />
        ))}
      </ul>
      <Button
        onClick={() => {
          addItem({ name: '', description: '' });
        }}
      >
        +
      </Button>
      {/* <p>+</p> */}
    </Container>
  );
}

export default TodoList;
