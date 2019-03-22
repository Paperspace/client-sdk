/*

  to be used inside the iframe

 usage:
   api.onOpenVmRequest = function (vmInfo) {
     // my openvm code
   }

   api.ready();

*/

// i like to define variables before they are used
// see api object below for interface
var comToken = 0;

var buffer = [];

var sendMessage = function (payload) {
  if (comToken === 0) {
    buffer.push(payload);
  } else {
    window.parent.postMessage({
      comToken,
      payload
    }, '*');
  };
}

// ---------------------------------------
// the api object

var api = {
  ready: function () {
    sendMessage({
      type: 'ready'
    });
  },
  onOpenVmRequest: function () {} // override with your event handler
};

// internal event handlers

var handleMessageReceived = function (payload) {
  if (payload.type === 'openvm') {
    api.onOpenVmRequest(payload.vmInfo);
  }
};

var sendBuffered = function () {
  var i = 0;
  for (i = 0; i < buffer.length; ++i) {
    sendMessage(buffer[i]);
  }
  buffer = [];
};

window.addEventListener('message', function (msg) {
  var data = msg.data;
  if (!data || !data.payload) {
    return;
  }
  if (comToken === 0 && data.comToken) {
    comToken = data.comToken;
    sendBuffered();
  };
  console.log(msg)
  handleMessageReceived(data.payload);
}, false);

module.exports = api;
