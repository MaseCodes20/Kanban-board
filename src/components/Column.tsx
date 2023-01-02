import useColumnDrop from "../hooks/useColumnDrop";
import useColumnTasks from "../hooks/useColumnTasks";
import { ColumnType } from "../utils/enums";
import Task from "./Task";
import { HiPlus } from "react-icons/hi2";

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "bg-gray-600",
  "In Progress": "bg-blue-600",
  Blocked: "bg-red-600",
  Completed: "bg-green-600",
};

function Column({ column }: { column: ColumnType }) {
  const {
    tasks,
    addEmptyTask,
    updateTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDelete={deleteTask}
      onUpdate={updateTask}
      onDropHover={swapTasks}
    />
  ));

  return (
    <div className="">
      <div>
        <h2
          className={`p-2 rounded-lg w-fit text-white font-semibold ${ColumnColorScheme[column]}`}
        >
          {column}
        </h2>
      </div>
      <button
        className="w-full py-2 bg-gray-200/40 my-3 rounded-lg"
        aria-label="add-task"
        onClick={addEmptyTask}
      >
        <HiPlus className="mx-auto" />
      </button>

      <div
        ref={dropRef}
        className={`flex md:flex-col items-center h-[300px] md:h-[600px] p-4 gap-4 rounded-lg overflow-auto bg-gray-200/40 ${
          isOver && "opacity-80"
        }`}
      >
        {ColumnTasks}
      </div>
    </div>
  );
}

export default Column;
