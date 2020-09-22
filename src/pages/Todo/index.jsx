import React from 'react';
import { useSelector } from 'react-redux';

import TodoList from '~/components/TodoList';

import * as TodoStatus from '../../commom/todoStatus';
import { Container, Content } from './styles';

function Todo() {
  const todos = useSelector((state) => state.todos.data);

  return (
    <Container>
      <Content>
        <TodoList
          title='Todo'
          data={todos.filter((item) => item.status === TodoStatus.TODO)}
          type={TodoStatus.TODO}
        />
        <TodoList
          title='Doing'
          data={todos.filter((item) => item.status === TodoStatus.IN_PROGRESS)}
          type={TodoStatus.IN_PROGRESS}
        />
        <TodoList
          title='Done'
          data={todos.filter((item) => item.status === TodoStatus.DONE)}
          type={TodoStatus.DONE}
        />
      </Content>
    </Container>
  );
}

export default Todo;
