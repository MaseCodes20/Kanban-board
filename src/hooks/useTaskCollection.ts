import { useLocalStorage } from "usehooks-ts";
import { ColumnType } from "../utils/enums";
import { TaskModel } from "../utils/models";

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>("tasks", {
    Todo: [
      {
        id: crypto.randomUUID(),
        column: ColumnType.TO_DO,
        title: "Task 1",
        color: "bg-blue-300",
      },
    ],
    "In Progress": [
      {
        id: crypto.randomUUID(),
        column: ColumnType.IN_PROGRESS,
        title: "Task 2",
        color: "bg-yellow-300",
      },
    ],
    Blocked: [
      {
        id: crypto.randomUUID(),
        column: ColumnType.BLOCKED,
        title: "Task 3",
        color: "bg-green-300",
      },
    ],
    Completed: [
      {
        id: crypto.randomUUID(),
        column: ColumnType.COMPLETED,
        title: "Task 4",
        color: "bg-teal-300",
      },
    ],
  });
}

export default useTaskCollection;
