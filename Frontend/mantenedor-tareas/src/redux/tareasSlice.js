import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acciones
const FETCH_TAREAS_SUCCESS = 'tareas/fetchTareasSuccess';
const ADD_TAREA_SUCCESS = 'tareas/addTareaSuccess';
const UPDATE_TAREA_SUCCESS = 'tareas/updateTareaSuccess';
const DELETE_TAREA_SUCCESS = 'tareas/deleteTareaSuccess';

// Thunks
export const fetchTareas = createAsyncThunk(
  'tareas/fetchTareas',
  async () => {
    const response = await axios.get('http://localhost:8080/api/tareas');
    return response.data;
  }
);

export const addTarea = createAsyncThunk(
  'tareas/addTarea',
  async (tarea) => {
    const response = await axios.post('http://localhost:8080/api/tareas', tarea);
    return response.data;
  }
);

export const updateTarea = createAsyncThunk(
  'tareas/updateTarea',
  async (tarea) => {
    const response = await axios.put(`http://localhost:8080/api/tareas/${tarea.id}`, tarea);
    return response.data;
  }
);

export const deleteTarea = createAsyncThunk(
  'tareas/deleteTarea',
  async (id) => {
    await axios.delete(`http://localhost:8080/api/tareas/${id}`);
    return id;
  }
);

// Reducer
const initialState = [];

const tareasReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAREAS_SUCCESS:
      return action.payload;
    case ADD_TAREA_SUCCESS:
      return [...state, action.payload];
    case UPDATE_TAREA_SUCCESS:
      return state.map(tarea => tarea.id === action.payload.id ? action.payload : tarea);
    case DELETE_TAREA_SUCCESS:
      return state.filter(tarea => tarea.id !== action.payload);
    default:
      return state;
  }
}

export default tareasReducer;
