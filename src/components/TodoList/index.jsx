import React, { useCallback, useState, useRef } from 'react';
import { Button as RBButton, Form, Modal, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import debounce from 'lodash/debounce';

import * as TodoStatus from '~/commom/todoStatus';
import { addTodo, changeStatus } from '~/store/modules/todo/actions';

import TodoItem from '../TodoItem';

function TodoList({ data = [], title = '', type }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);

  const [showMdal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', status: type });

  const modalRef = useRef();

  const addItem = useCallback(
    ({ title: _title, description, status }) => {
      dispatch(addTodo({ title: _title, description, status }));

      setShowModal(false);
    },
    [dispatch]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleTodo = useCallback(
    debounce(({ id, status }) => {
      dispatch(changeStatus(id, status));
    }, 500),
    [dispatch]
  );

  return (
    <>
      <Card
        style={{ width: '25%', marginTop: 10 }}
        className='text-center'
        onDrag={(e) => {
          e.preventDefault();
        }}
        onDragOver={(e) => {
          e.preventDefault();

          const card_id = e.dataTransfer.getData('card_id');

          const card = todos.filter((item) => item.id === card_id && item.status !== type)[0];

          if (!card) {
            // const _card = document.getElementById(card_id);
            // _card.style.display = 'block';
            return;
          }

          handleTodo({ id: card.id, status: type });
        }}
      >
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          {data.map((item) => (
            <TodoItem key={String(item.id)} item={item} type={type} />
          ))}
          <RBButton
            variant='outline-primary'
            type='submit'
            size='sm'
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add Todo
          </RBButton>
        </Card.Body>
      </Card>
      <Modal
        show={showMdal}
        onHide={() => {
          setShowModal(false);
        }}
        ref={modalRef}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create new todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='title'
                placeholder='Enter the title'
                value={newTodo.title}
                onChange={(ev) => setNewTodo({ ...newTodo, title: ev.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                type='description'
                placeholder='Enter the description'
                value={newTodo.description}
                onChange={(ev) => setNewTodo({ ...newTodo, description: ev.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                as='select'
                onChange={(ev) => setNewTodo({ ...newTodo, status: ev.target.value })}
              >
                <option>{TodoStatus.TODO}</option>
                <option>{TodoStatus.IN_PROGRESS}</option>
                <option>{TodoStatus.DONE}</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <RBButton
            size='sm'
            variant='primary'
            type='submit'
            onClick={() => {
              addItem(newTodo);
            }}
          >
            Submit
          </RBButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoList;
