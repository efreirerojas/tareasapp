import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tareasReducer from '../redux/tareasSlice';
import EditarTareaModal from './EditarTareaModal';

test('renders EditarTareaModal component', () => {
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
      <EditarTareaModal tarea={tarea} />
    </Provider>
  );
  
  expect(getByText('Editar Tarea')).toBeInTheDocument();
});