import { useCallback } from "react";
import {
  addTask,
  removeTask,
  taskDrop,
  taskSwap,
  taskUpdate,
} from "../utils/businessLogic";
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/models";
import useTaskCollection from "./useTaskCollection";

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  const addEmptyTask = useCallback(() => {
    console.log(`Adding new empty task to ${column} column`);

    setTasks((allTasks) => addTask(allTasks, column));
  }, [column, setTasks]);

  const updateTask = useCallback(
    (id: TaskModel["id"], updatedTask: Omit<Partial<TaskModel>, "id">) => {
      console.log(`Updating task ${id} with ${JSON.stringify(updatedTask)}`);

      setTasks((allTasks) => taskUpdate(id, allTasks, column, updatedTask));
    },
    [column, setTasks]
  );

  const deleteTask = useCallback(
    (id: TaskModel["id"]) => {
      console.log(`Removing task ${id}..`);

      setTasks((allTasks) => removeTask(id, allTasks, column));
    },
    [column, setTasks]
  );

  const dropTaskFrom = useCallback(
    (from: ColumnType, id: TaskModel["id"]) => {
      setTasks((allTasks) => taskDrop(id, allTasks, column, from));
    },
    [column, setTasks]
  );

  const swapTasks = useCallback(
    (i: number, j: number) => {
      console.log(`Swapping task ${i} with ${j} in ${column} column`);

      setTasks((allTasks) => taskSwap(allTasks, column, i, j));
    },
    [column, setTasks]
  );

  return {
    tasks: tasks[column],
    addEmptyTask,
    updateTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
  };
}

export default useColumnTasks;
