/**
 *
 * to be used inside the iframe
 *
 * @example
 *
 * api.onOpenVmRequest = function (vmInfo) {
 *  // my openvm code
 * }
 *
 * api.ready();
 */

// i like to define variables before they are used
// see api object below for interface
let comToken = 0;
let buffer = [];

function sendMessage(payload) {
  if (comToken === 0) {
    buffer.push(payload);
  } else {
    window.parent.postMessage(
      {
        comToken,
        payload
      },
      '*'
    );
  }
}

// ---------------------------------------
// the api object
const api = {
  ready() {
    sendMessage({ type: 'ready' });
  },
  publishEvent(parEvent, parValue) {
    sendMessage({
      type: 'event',
      name: parEvent,
      value: parValue
    });
  },
  onOpenVmRequest() {} // override with your event handler
};

// internal event handlers

function handleMessageReceived(payload) {
  if (payload.type === 'openvm') {
    api.onOpenVmRequest(payload.vmInfo);
  }
}

function sendBuffered() {
  buffer.forEach(msg => {
    sendMessage(msg);
  });
  buffer = [];
}

window.addEventListener(
  'message',
  function handleMessage(msg) {
    const data = msg.data;
    if (!data || !data.payload) {
      return;
    }
    if (comToken === 0 && data.comToken) {
      comToken = data.comToken;
      sendBuffered();
    }
    handleMessageReceived(data.payload);
  },
  false
);

module.exports = api;
