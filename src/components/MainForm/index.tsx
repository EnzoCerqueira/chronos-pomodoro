import { PlayCircleIcon } from 'lucide-react';
import Cycles from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';


export function MainForm() {
  return (
    <form className='form'>
      <div className='formRow'>
        <DefaultInput
          labelText={'Task:'}
          id='meuInput'
          type='text'
          placeholder='Ex: Estudar para a prova'
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
}
