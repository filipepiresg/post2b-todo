import React, { useCallback, useState, useRef } from 'react';
import { Button as RBButton, Form, Modal, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { addTodo } from '~/store/modules/todo/actions';

import TodoItem from '../TodoItem';

function TodoList({ data = [], title = '', type }) {
  const dispatch = useDispatch();
  const [showMdal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  const modalRef = useRef();

  const addItem = useCallback(
    ({ title: _title, description }) => {
      if (type) dispatch(addTodo({ title: _title, description, status: type }));

      setShowModal(false);
    },
    [dispatch, type]
  );

  return (
    <>
      <Card style={{ width: '25%', marginTop: 10 }} className='text-center'>
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
      {/* <Container>
        <Title>{title}</Title>
        <ul>
          {data.map((item) => (
            <TodoItem key={String(item.id)} item={item} type={type} />
          ))}
        </ul>
        <RBButton
          variant='outline-primary'
          type='submit'
          size='sm'
          block
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add Todo
        </RBButton>
      </Container> */}
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
