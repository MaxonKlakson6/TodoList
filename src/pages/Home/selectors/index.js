import { createSelector } from "reselect";

export const typesSelector = (state) => state.todoList.types;

export const typesArraySelector = createSelector(typesSelector, (types) =>
  Object.entries(types)
);
