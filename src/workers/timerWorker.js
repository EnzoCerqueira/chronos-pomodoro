let isRunning = false;

self.onmessage = function (e) {
  // if(e && e.data && e.data.startDate){
  //   const startDate = e.data.startDate;
  //   console.log('Start date is ',startDate)
  // }else{
  //   console.error('Error: Received message with unexpected structure.',e.data);
  // }
  if (isRunning) return;

  isRunning = true;

  const state = e.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now();
  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};
