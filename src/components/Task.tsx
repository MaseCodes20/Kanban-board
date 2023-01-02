import { TaskModel } from "../utils/models";
import { HiTrash } from "react-icons/hi2";
import { ChangeEvent } from "react";
import { useTaskDragAndDrop } from "../hooks/useTaskDragAndDrop";

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel["id"]) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({
  index,
  task,
  onDelete: handleDelet,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
}: TaskProps) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>({
    task,
    index,
    handleDropHover,
  });

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newTitle = e.target.value;

    handleUpdate(task.id, { ...task, title: newTitle });
  };

  const handleDeleteClick = () => {
    handleDelet(task.id);
  };
  return (
    <div
      ref={ref}
      className={`relative rounded-md w-[200px] shadow-xl pl-3 pr-7 pt-3 pb-1 cursor-grab ${
        task.color
      } ${isDragging && "opacity-50"}`}
    >
      <button
        className="absolute top-0 right-0 m-2 z-50"
        aria-label="delete-task"
        onClick={handleDeleteClick}
      >
        <HiTrash />
      </button>
      <textarea
        value={task.title}
        onChange={handleTitleChange}
        className="mt-3 min-h-[70px] max-h-[200px] bg-white/0 focus:border-none resize-none"
      >
        {task.title}
      </textarea>
    </div>
  );
}

export default Task;
