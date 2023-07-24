import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTarea } from '../redux/tareasSlice';

const FormularioTareas = () => {
  const [titulo, setTitulo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTarea({ titulo, isComplete: false }));
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default FormularioTareas;