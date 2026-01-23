import type { Dispatch, SetStateAction } from "react";

export interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskContextType {
  tasks: TaskProps[];
  setTasks: Dispatch<SetStateAction<TaskProps[]>>;
}