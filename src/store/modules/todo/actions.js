import * as TodoTypes from './types';

export function addTodo({ title, description, status }) {
  return {
    type: TodoTypes.ADD_TODO,
    payload: {
      title,
      description,
      status,
    },
  };
}

export function editTodo({ id, title, description, status }) {
  return {
    type: TodoTypes.EDIT_TODO,
    payload: {
      id,
      title,
      description,
      status,
    },
  };
}

export function removeTodo(id) {
  return {
    type: TodoTypes.REMOVE_TODO,
    payload: id,
  };
}
