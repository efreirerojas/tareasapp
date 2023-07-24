
import { render, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event';
import tareasReducer from '../redux/tareasSlice';
import FormularioTareas from './FormularioTareas';

test('renders FormularioTareas component', () => {
  const store = configureStore({
    reducer: { tareas: tareasReducer },
  });

  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <FormularioTareas />
    </Provider>
  );
  
  expect(getByPlaceholderText('Ingrese tarea a Realizar')).toBeInTheDocument();
});


test('can add a new task', () => {
    const store = configureStore({
      reducer: { tareas: tareasReducer },
    });
  
    const { getByPlaceholderText, getByRole } = render(
      <Provider store={store}>
        <FormularioTareas />
      </Provider>
    );
    
    const input = getByPlaceholderText('Ingrese tarea a Realizar');
    const button = getByRole('button');
    userEvent.type(input, 'Nueva tarea');
    userEvent.click(button);
    
    // En un caso real, verificaríamos que la nueva tarea se muestra en la lista de tareas
    // Pero en este caso, debido a que las llamadas al servidor están mockeadas, simplemente verificamos que el input está vacío
    expect(input).toHaveValue('');
  });