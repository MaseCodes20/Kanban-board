import { ColumnType } from "./enums";
import { pickRandomColor, swap } from "./helpers";
import { AllTasks, TaskModel } from "./models";

const MAX_TASK_PER_COLUMN = 100;

export const addTask = (allTasks: AllTasks, column: ColumnType): AllTasks => {
  const columnTasks = allTasks[column];

  if (columnTasks.length > MAX_TASK_PER_COLUMN) {
    console.log("Too many task!");
    return allTasks;
  }

  const newColumnTask: TaskModel = {
    id: crypto.randomUUID(),
    title: `New ${column} task`,
    color: pickRandomColor(),
    column,
  };

  return {
    ...allTasks,
    [column]: [newColumnTask, ...columnTasks],
  };
};

export const taskUpdate = (
  id: TaskModel["id"],
  allTasks: AllTasks,
  column: ColumnType,
  updatedTask: Omit<Partial<TaskModel>, "id">
): AllTasks => {
  const columnTasks = allTasks[column];

  return {
    ...allTasks,
    [column]: columnTasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    ),
  };
};

export const removeTask = (
  id: TaskModel["id"],
  allTasks: AllTasks,
  column: ColumnType
): AllTasks => {
  const columnTasks = allTasks[column];

  return {
    ...allTasks,
    [column]: columnTasks.filter((task) => task.id !== id),
  };
};

export const taskDrop = (
  id: TaskModel["id"],
  allTasks: AllTasks,
  column: ColumnType,
  from: ColumnType
): AllTasks => {
  const fromColumnTasks = allTasks[from];
  const toColumnTasks = allTasks[column];
  const movingTask = fromColumnTasks.find((task) => task.id === id);

  if (!movingTask) {
    return allTasks;
  }

  // remove the task from the original column and copy it within the destination column
  return {
    ...allTasks,
    [from]: fromColumnTasks.filter((task) => task.id !== id),
    [column]: [{ ...movingTask, column }, ...toColumnTasks],
  };
};

export const taskSwap = (
  allTasks: AllTasks,
  column: ColumnType,
  i: number,
  j: number
) => {
  const columnTasks = allTasks[column];

  return {
    ...allTasks,
    [column]: swap(columnTasks, i, j),
  };
};
