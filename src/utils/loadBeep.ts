import trompeteAudio from '../assets/audio/trompete.mp3';

export function loadBeep() {
  const audio = new Audio(trompeteAudio);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Erro ao tocar áudio', error));
  };
}
