import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    types: {},
  },
  reducers: {
    createTodo: (state, { payload }) => {
      const { type, todo, subtasks } = payload;
      const todoId = uuid();

      const subtasksWithTodoId = subtasks.map((subtask) => ({
        type,
        ...subtask,
        todoId,
        completed: false,
      }));

      const newTodo = {
        type,
        text: todo,
        completed: false,
        id: todoId,
        subtasks: subtasksWithTodoId,
      };

      if (state.types[type]) {
        state.types[type].push(newTodo);
      } else {
        state.types[type] = [newTodo];
      }
    },
    deleteTodo: (state, { payload }) => {
      const { type, id } = payload;
      const typeToSearch = state.types[type];

      const todoToRemove = typeToSearch.findIndex((todo) => todo.id === id);
      typeToSearch.splice(todoToRemove, 1);
    },
    deleteSubtask: (state, { payload }) => {
      const { type, id, todoId } = payload;
      const typeToSearch = state.types[type];

      const todo = typeToSearch.find((todo) => todoId === todo.id);
      const subtaskToRemove = todo.subtasks.findIndex(
        (subtask) => subtask.id === id
      );

      todo.subtasks.splice(subtaskToRemove, 1);
    },
    deleteType: (state, { payload: typeName }) => {
      const { [typeName]: typeToDelete, ...rest } = state.types;
      return {
        ...state,
        types: rest,
      };
    },
    toggleCompletedTodo: (state, { payload }) => {
      const { type, id } = payload;
      const typeToSearch = state.types[type];

      const todoToToggle = typeToSearch.find((todo) => todo.id === id);
      const isCompleted = !todoToToggle.completed;

      todoToToggle.completed = isCompleted;
      todoToToggle.subtasks = todoToToggle.subtasks.map((subtask) => ({
        ...subtask,
        completed: isCompleted,
      }));
    },
    toggleCompletedSubtask: (state, { payload }) => {
      const { type, id, todoId } = payload;
      const typeToSearch = state.types[type];

      const todo = typeToSearch.find((todo) => todoId === todo.id);
      const subtaskToToggle = todo.subtasks.find(
        (subtask) => subtask.id === id
      );

      subtaskToToggle.completed = !subtaskToToggle.completed;

      const subtasksCompleted = todo.subtasks.map(
        (subtask) => subtask.completed
      );

      if (subtasksCompleted.every(Boolean)) {
        todo.completed = true;
      } else {
        todo.completed = false;
      }
    },
    createType: (state, { payload: type }) => {
      if (!state.types[type]) {
        state.types[type] = [];
      }
    },
  },
});

export const {
  createTodo,
  deleteTodo,
  deleteType,
  toggleCompletedTodo,
  createType,
  deleteSubtask,
  toggleCompletedSubtask,
} = todosSlice.actions;

export default todosSlice.reducer;
