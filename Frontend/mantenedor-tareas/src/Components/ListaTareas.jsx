import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTareas } from '../redux/tareasSlice';
import Tarea from './Tarea';

const ListaTareas = () => {
  const dispatch = useDispatch();
  const tareas = useSelector((state) => state.tareas);

  useEffect(() => {
    dispatch(fetchTareas());
  }, [dispatch]);

  return (
    <div>
      {tareas && tareas.map(tarea => (
        <Tarea key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
};

export default ListaTareas;
