import { streams } from '../src/index';

function stopStream(vmStreamElement, stopSteamBtn, stream) {
  stopSteamBtn.setAttribute('disabled', true);
  vmStreamElement.removeAttribute('style');
  stream.destroy();
}

let boundStopStream;

function startStream() {
  const vmStreamElement = document.querySelector('.vmStreamElement');
  const style = 'width: 100vw; height: calc(100vh - 23px);';
  vmStreamElement.setAttribute('style', style);
  const vmInfo = {
    machineId: document.querySelector('input.machineIdInput').value
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
  const accessTokenInput = document.querySelector('input.accessTokenInput');
  accessTokenInput.addEventListener('change', function updateAccessToken(event) {
    document.cookie = `jwt=${event.target.value}`;
  });
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
