import { PlayCircleIcon } from 'lucide-react';
import Cycles from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { useRef } from 'react';
import type { TaskModel } from '../models/taskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export const MainForm = () => {
  const { state ,setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle)
  console.log(nextCycle);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: {...prevState.config},
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, //Conferir
        formattedSecondsRemaining: '00:00', //Conferir
        tasks: [...prevState.tasks, newTask]
      };
    })

    console.log(taskName);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='formRow'>
        <DefaultInput
          labelText={'Task:'}
          id='meuInput'
          type='text'
          placeholder='Ex: Estudar para a prova'
          ref={taskNameInput}
        />
      </div>

      <div className='formRow'>
        <p>O próximo intervalo é de 25 minutos</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
};
