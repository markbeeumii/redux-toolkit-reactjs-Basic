import { createSlice } from '@reduxjs/toolkit';
import { StatusEnum } from '../../types/enum';

export interface ITodos {
  id: number;
  text: string;
  status: string;
}

const initialState = {
  tasks: [] as ITodos[]
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({
        id: action?.payload?.id,
        text: action?.payload?.text,
        status: action?.payload.status || StatusEnum.PENDING
      });
    },
    deleteTodo: (state, action) => {
      //state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    }
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
