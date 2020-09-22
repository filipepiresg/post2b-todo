import * as TodoTypes from './types';

export function addTodo({ title, description }) {
  return {
    type: TodoTypes.ADD_TODO,
    payload: {
      title,
      description,
    },
  };
}

export function editTodo({ id, title, description }) {
  return {
    type: TodoTypes.EDIT_TODO,
    payload: {
      id,
      title,
      description,
    },
  };
}

export function removeTodo(id) {
  return {
    type: TodoTypes.REMOVE_TODO,
    payload: id,
  };
}
