import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Asegúrate de que la ruta es correcta.
import ListaTareas from './Components/ListaTareas';
import FormularioTareas from './Components/FormularioTareas';

function App() {
  return (
    <Provider store={store}>
      <div>
        <FormularioTareas />
        <ListaTareas />
      </div>
    </Provider>
  );
}

export default App;
