import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
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
