/*

  functions that end with 'Promise' will return a promise

 usage:
   api.createStream(node, vmInfo).then(function (stream) {
     stream.open();
     // stream.resize(x, y);
     // stream.destory();
   }, function (err) {

   })

*/

/*
unfortunately there is no way to map a message to a cross domain iframe without risk of ambiguity
therefore we use a communication token and a global registry to identify our iframes and stream instances
*/
var communicationToken = 1;
var instances = {};

window.addEventListener('message', function (msg) {
  var data = msg.data;
  var instance = instances[data.comToken];
  if (!instance) {
    // dead instance
    return;
  };
  if (!data || !data.payload) {
    return;
  }

  instance._handleMessageReceived(data.payload);
}, false);


var StreamApi = function (domNode, vmInfo) {
  return new Promise((resolve, reject) => {
    if (!vmInfo || !vmInfo.machineId) {
      reject(new Error('Please provide a machineId to connect the stream to.'));
    }

    var comToken = communicationToken;
    communicationToken += 1;
    instances[comToken] = this;

    var intervalPoster = null;
    var iframe = document.createElement('iframe');
    var targetSrc = 'http://localhost:3002/machine/' + vmInfo.machineId;
    iframe.setAttribute('src', targetSrc);
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    domNode.appendChild(iframe);

    function sendMessage(payload) {
      iframe.contentWindow.postMessage({
        comToken: comToken,
        payload
      }, '*');
    }

    iframe.addEventListener('load', () => {
      intervalPoster = setInterval(() => {
        sendMessage({ type: 'init' });
      }, 5000);
    }, false);

    var stream = {
      resize: function (x, y) {

      },

      open: function () {
        sendMessage({
          type: 'openvm',
          vmInfo
        })
      },

      destroy: function () {
        delete instances[comToken];

        iframe.parentNode.removeChild(iframe);
        iframe = null;
      }
    };

    this._handleMessageReceived = (payload) => {
      if (intervalPoster) {
        clearInterval(intervalPoster);
        intervalPoster = null;
      }

      if (payload.type === 'ready') {
        resolve(stream);
      }
    };
  });
};

var api = {
  createStream: function (domNode, vmInfo) {
    return new StreamApi(domNode, vmInfo);
  }
};

module.exports = api;
