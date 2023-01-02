import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Column from "./components/Column";
import DarkModeButton from "./components/DarkModeButton";
import { ColumnType } from "./utils/enums";

function App() {
  return (
    <>
      <DarkModeButton />
      <h1 className="text-3xl font-bold text-center">Kanban Board</h1>

      <div className=" px-4 py-10">
        <DndProvider backend={HTML5Backend}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
          </div>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
