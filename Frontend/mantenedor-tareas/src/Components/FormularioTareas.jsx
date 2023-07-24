import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTarea } from '../redux/tareasSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = () => {
  const [descripcion, setDescripcion] = useState("");
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      dispatch(addTarea({ descripcion, vigente: true }));
      setDescripcion("");
    }
    setValidated(true);
  };

  return (
    <Container>
      <h1 className='text-center pb-5'>Mantenedor de Tareas</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='justify-content-md-center'> 
          <Col sm={8}>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Ingrese tarea a Realizar"
                defaultValue=""
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Porfavor ingrese una tarea valida.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={4}><Button variant='dark' type="submit">
            <FontAwesomeIcon icon={faPlus} size="xl" style={{ color: "#ffffff", }} />
          </Button></Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormularioTareas;
