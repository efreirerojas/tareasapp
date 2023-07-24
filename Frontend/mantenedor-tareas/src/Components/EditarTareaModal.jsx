import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateDescripcionTarea } from '../redux/tareasSlice';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const EditarTareaModal = ({ tarea }) => {
  const [show, setShow] = useState(false);
  const [descripcion, setDescripcion] = useState(tarea.descripcion);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescripcion(tarea.descripcion);
  }, [tarea]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateDescripcionTarea({ 
      id: tarea.id, 
      descripcion, 
      vigente: tarea.vigente, 
      fechaCreacion: tarea.fechaCreacion 
    }));
    handleClose();
  };

  return (
    <>
      <Button className='mr-3' variant="warning" onClick={handleShow}>
        <FontAwesomeIcon icon={faPencil} size="lg" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
              />
            </Form.Group>
            <Button className='mt-2' variant="primary" type="submit">
              Guardar cambios
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditarTareaModal;
