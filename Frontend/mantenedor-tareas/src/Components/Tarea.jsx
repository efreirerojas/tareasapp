import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { updateTarea, deleteTarea } from '../redux/tareasSlice';
import { format, parseISO } from 'date-fns';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import EditarTareaModal from './EditarTareaModal';
import { Form } from 'react-bootstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tarea = memo(({ tarea }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(updateTarea({ ...tarea, vigente: !tarea.vigente }));
  };

  const handleDelete = () => {
    dispatch(deleteTarea(tarea.id));
  };

  const fechaFormateada = format(parseISO(tarea.fechaCreacion), 'dd-MM-yyyy HH:mm');

  return (
    <tr style={{ backgroundColor: !tarea.vigente ? '#ddd' : 'transparent' }}>
      <td>
        <Form>
          <Form.Check
            type="switch"
            checked={!tarea.vigente}
            onChange={handleComplete}
          />
        </Form>
      </td>
      <td style={{ textDecoration: !tarea.vigente ? 'line-through' : 'none' }}>{tarea.descripcion}</td>
      <td style={{ textDecoration: !tarea.vigente ? 'line-through' : 'none' }}>{fechaFormateada}</td>
      <td>
        {tarea.vigente ? (
          <Badge bg='success'>Vigente</Badge>
        ) : (
          <Badge bg='secondary'>No vigente</Badge>
        )}
      </td>
      <td>
        <EditarTareaModal tarea={tarea} />
        <Button variant="outline-danger" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} size="lg" /></Button>
      </td>
    </tr>
  );
});

export default Tarea;
