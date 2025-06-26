import type { TaskModel } from './taskModel';

export type TaskStateModel = {
  tasks: TaskModel[]; //histórico, MainForm
  secondsRemaining: number; //CountDown, historico, MainForm, Button
  formattedSecondsRemaining: string; //Título, CountDown
  activeTask: TaskModel | null; //CountDown, historico, MainForm, Button
  currentCycle: number; //Home
  config: {
    workTime: number; //MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};
