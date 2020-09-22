import React, { useCallback, useState, useRef } from 'react';
import {
  Button as RBButton,
  Form,
  Modal,
  Container as RBContainer,
  Row,
  Col,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { removeTodo, editTodo } from '~/store/modules/todo/actions';

import { Container, InfoTitle, InfoDescription } from './styles';

function TodoItem({ item }) {
  const dispatch = useDispatch();

  const [isEditable, setEditable] = useState(false);
  const [todo, setTodo] = useState({
    ...item,
  });

  const modalRef = useRef();

  const deleteTodo = useCallback(() => {
    dispatch(removeTodo(item.id));
    setEditable(false);
  }, [dispatch, item.id]);

  const updateTodo = useCallback(() => {
    if (
      todo.title !== item.title ||
      todo.description !== item.description ||
      todo.status !== item.status
    )
      dispatch(editTodo(todo));
    setEditable(false);
  }, [todo, item.title, item.description, item.status, dispatch]);

  return (
    <>
      <Container
        onClick={() => {
          setEditable(true);
        }}
        draggable
        // onDragOver={(ev) => {
        //   // if (type) console.tron.log('drag over', type);
        // }}
        // onDrag={(ev) => {
        //   // if (type) console.tron.log('drag', type);
        //   // console.tron.log('drag', Object.keys(e));
        // }}
      >
        <RBContainer>
          <Row>
            <Col>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoDescription>{item.description}</InfoDescription>
            </Col>
          </Row>
        </RBContainer>
      </Container>

      <Modal
        show={isEditable}
        onHide={() => {
          setEditable(false);
        }}
        ref={modalRef}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='title'
                placeholder='Enter the title'
                value={todo.title}
                onChange={(ev) => setTodo({ ...todo, title: ev.target.value })}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                type='description'
                placeholder='Enter the description'
                value={todo.description}
                onChange={(ev) => setTodo({ ...todo, description: ev.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <RBButton
            size='sm'
            variant='danger'
            type='submit'
            onClick={() => {
              deleteTodo();
            }}
          >
            Delete
          </RBButton>
          <RBButton
            size='sm'
            variant='primary'
            type='submit'
            onClick={() => {
              updateTodo(todo);
            }}
          >
            Submit
          </RBButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoItem;
