import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tareasReducer from '../redux/tareasSlice';
import ListaTareas from './ListaTareas';

test('renders ListaTareas component', () => {
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
      <ListaTareas />
    </Provider>
  );
  
  expect(getByText('Test tarea')).toBeInTheDocument();
});