import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks
export const fetchTareas = createAsyncThunk(
  'tareas/fetchTareas',
  async () => {
    const response = await axios.get('http://localhost:8080/api/tareas');
    console.log(response.data);
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

export const updateDescripcionTarea = createAsyncThunk(
  'tareas/updateDescripcion',
  async (tarea, { dispatch }) => {
    const { id, descripcion, vigente, fechaCreacion } = tarea;
    const response = await axios.put(`http://localhost:8080/api/tareas/${id}`, {
      id, 
      descripcion,
      vigente,
      fechaCreacion
    });
    dispatch(fetchTareas());
    return response.data;
  }
);

// Reducer
const tareasSlice = createSlice({
  name: 'tareas',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTareas.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTarea.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTarea.fulfilled, (state, action) => {
        const index = state.findIndex(tarea => tarea.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(updateDescripcionTarea.fulfilled, (state, action) => {
        const index = state.findIndex(tarea => tarea.id === action.payload.id);
        if (index !== -1) {
          state[index].descripcion = action.payload.descripcion;
        }
      })
      .addCase(deleteTarea.fulfilled, (state, action) => {
        return state.filter(tarea => tarea.id !== action.payload);
      });
  },
});

export default tareasSlice.reducer;
