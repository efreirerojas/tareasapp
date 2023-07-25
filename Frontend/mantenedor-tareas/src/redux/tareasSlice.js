import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
  async (tarea, { dispatch, getState }) => {
    const tempId = Date.now();
    const tempTarea = { ...tarea, id: tempId, fechaCreacion: "2023-07-25T03:00:24.437+00:00" };

    dispatch(tareasSlice.actions.addTarea(tempTarea));

    try {
      const response = await axios.post('http://localhost:8080/api/tareas', tarea);
      dispatch(tareasSlice.actions.updateTarea({ ...response.data, tempId }));
    } catch (error) {
      dispatch(tareasSlice.actions.deleteTarea(tempId));
      console.error(error);
    }
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
  async (id, { dispatch }) => {
    dispatch(tareasSlice.actions.deleteTarea(id));
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
  reducers: {
    addTarea: (state, action) => {
      state.push(action.payload);
    },
    updateTarea: (state, action) => {
      const { tempId, ...tarea } = action.payload;
      const index = state.findIndex(t => t.id === tempId);
      if (index !== -1) {
        state[index] = tarea;
      }
    },
    deleteTarea: (state, action) => {
      const index = state.findIndex(t => t.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTareas.fulfilled, (state, action) => {
        return action.payload;
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
      });
  },
});

export default tareasSlice.reducer;
