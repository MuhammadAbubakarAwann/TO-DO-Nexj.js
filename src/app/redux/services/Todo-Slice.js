import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  editingTodo: null,
};

export const fetchAllTodos = createAsyncThunk('todos/fetchAll', async () => {
  const response = await fetch('/api/todos');
  return await response.json();
});

export const addTodo = createAsyncThunk('todos/add', async (title) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  return await response.json();
});

export const deleteTodo = createAsyncThunk('todos/delete', async (id) => {
  await fetch('/api/todos', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  return id;
});

export const editTodo = createAsyncThunk('todos/edit', async ({ id, newTitle }) => {
  const response = await fetch('/api/todos', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, newTitle }),
  });
  return await response.json();
});


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    startEdit: (state, action) => {
      state.editingTodo = action.payload;
    },
    cancelEdit: (state) => {
      state.editingTodo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.editingTodo = null;
      });
  },
});

export const { startEdit, cancelEdit } = todosSlice.actions;
export default todosSlice.reducer;
