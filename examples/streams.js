import { streams } from '../src/index';

function stopStream(vmStreamElement, stopSteamBtn, stream) {
  stopSteamBtn.setAttribute('disabled', true);
  vmStreamElement.removeAttribute('style');
  stream.destroy();
}

let boundStopStream;

function startStream() {
  const vmStreamElement = document.querySelector('.vmStreamElement');
  const vmInfo = {
    machineId: document.querySelector('input.machineIdInput').value,
    accessToken: document.querySelector('input.accessTokenInput').value
  };
  streams.createStream(vmStreamElement, vmInfo).then((stream) => {
    const stopSteamBtn = document.querySelector('.stop-stream');
    if (typeof boundStopStream === 'function') {
      boundStopStream();
      stopSteamBtn.removeEventListener('click', boundStopStream);
    }
    boundStopStream = stopStream.bind(this, vmStreamElement, stopSteamBtn, stream);
    stopSteamBtn.addEventListener('click', boundStopStream);
    stopSteamBtn.removeAttribute('disabled');

    stream.open();
  });
}

function initialize() {
  const startStreamBtn = document.querySelector('.start-stream');
  startStreamBtn.addEventListener('click', startStream);
}

if (document.readyState === 'loading') {
  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  // `DOMContentLoaded` has already fired
  initialize();
}
