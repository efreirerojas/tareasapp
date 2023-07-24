import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTareas } from '../redux/tareasSlice';
import Tarea from './Tarea';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

const ListaTareas = () => {
  const dispatch = useDispatch();
  const tareas = useSelector((state) => state.tareas);

  useEffect(() => {
    dispatch(fetchTareas());
  }, [dispatch]);

  return (

    <Container className='pt-4'> 

      <Table hover>
        <thead>
          <tr>
            <th></th>
            <th>Descripción</th>
            <th>Fecha</th>
            <th>Status</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas && tareas.map(tarea => (
            <Tarea key={tarea.id} tarea={tarea} />
          ))}
        </tbody>
      </Table>

    </Container>

  );
};

export default ListaTareas;
