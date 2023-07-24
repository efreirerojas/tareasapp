import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTarea, deleteTarea } from '../redux/tareasSlice';

const Tarea = ({ tarea }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(updateTarea({ ...tarea, isComplete: !tarea.isComplete }));
  };

  const handleDelete = () => {
    dispatch(deleteTarea(tarea.id));
  };

  return (
    <div>
      <input type="checkbox" checked={tarea.isComplete} onChange={handleComplete} />
      <span style={{ textDecoration: tarea.isComplete ? 'line-through' : 'none' }}>{tarea.titulo}</span>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default Tarea;
