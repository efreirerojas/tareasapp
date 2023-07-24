import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import tareasReducer from '../redux/tareasSlice';
import Tarea from './Tarea';

test('renders Tarea component', () => {
  const tarea = {
    id: 1,
    descripcion: 'Test tarea',
    vigente: true,
    fechaCreacion: new Date().toISOString(),
  };
  
  const store = configureStore({
    reducer: { tareas: tareasReducer },
    preloadedState: { tareas: [tarea] },
  });

  const { getByText } = render(
    <Provider store={store}>
      <Tarea tarea={tarea} />
    </Provider>
  );
  
  expect(getByText('Test tarea')).toBeInTheDocument();
});

test('can mark a task as completed', () => {
    const tarea = {
      id: 1,
      descripcion: 'Test tarea',
      vigente: true,
      fechaCreacion: new Date().toISOString(),
    };
    
    const store = configureStore({
      reducer: { tareas: tareasReducer },
      preloadedState: { tareas: [tarea] },
    });
  
    const { getByRole } = render(
      <Provider store={store}>
        <Tarea tarea={tarea} />
      </Provider>
    );
    
    const checkbox = getByRole('checkbox');
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });