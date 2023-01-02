import { ColumnType } from "./enums";

export type TaskModel = {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
};

export type DragItem = {
  index: number;
  id: TaskModel["id"];
  from: ColumnType;
};
export type AllTasks = {
  Todo: TaskModel[];
  "In Progress": TaskModel[];
  Blocked: TaskModel[];
  Completed: TaskModel[];
};
