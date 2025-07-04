import { createContext } from "react";
import type { TaskStateModel } from "../../components/models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskStateModel>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
