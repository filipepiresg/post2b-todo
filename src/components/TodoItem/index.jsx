import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo } from '~/store/modules/todo/actions';

import { Container, Content } from './styles';

function TodoItem({ item }) {
  const dispatch = useDispatch();

  const deleteTodo = useCallback(() => {
    dispatch(removeTodo(item.id));
  }, [dispatch, item.id]);

  // const updateTodo = useCallback(() => {
  //   dispatch(editTodo(item));
  // }, [dispatch, item]);

  return (
    <Container>
      <Content>
        <p>Title {item.title}</p>
        <span>Description {item.description}</span>
      </Content>
      <button type='button' onClick={deleteTodo}>
        <p>x</p>
      </button>
    </Container>
  );
}

export default TodoItem;
