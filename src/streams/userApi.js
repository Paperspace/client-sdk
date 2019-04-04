/**
 *
 *
 * functions that end with 'Promise' will return a promise
 *
 * usage:
 *   api.createStream(node, vmInfo).then(function (stream) {
 *     stream.open();
 *     // stream.resize(x, y);
 *     // stream.destory();
 *   }, function (err) {
 *
 *   })
 */

/**
 *
 * unfortunately there is no way to map a message to a cross domain iframe without risk of ambiguity
 * therefore we use a communication token and a global registry to identify our iframes and stream
 * instances
 */
let communicationToken = 1;
const instances = {};
let host = 'https://paperspace.com';
if (process.env.STREAM_HOST) {
  host = process.env.STREAM_HOST;
}

window.addEventListener(
  'message',
  function handleMessage(msg) {
    const data = msg.data;
    const instance = instances[data.comToken];
    if (!instance) {
      // dead instance
      return;
    }
    if (!data || !data.payload) {
      return;
    }

    instance.handleMessageReceived(data.payload);
  },
  false
);

function StreamApi(domNode, vmInfo = {}) {
  return new Promise((resolve, reject) => {
    if (!vmInfo.machineId) {
      reject(new Error('Please provide a machineId to connect the stream to.'));
      return;
    }

    const comToken = communicationToken;
    communicationToken += 1;
    instances[comToken] = this;

    let intervalPoster = null;
    const iframe = document.createElement('iframe');
    const targetSrc = `${host}/machine/embed`;

    iframe.setAttribute('src', targetSrc);
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
    domNode.appendChild(iframe);

    function sendMessage(payload) {
      iframe.contentWindow.postMessage(
        {
          comToken: comToken,
          payload
        },
        '*'
      );
    }

    iframe.addEventListener(
      'load',
      () => {
        intervalPoster = setInterval(() => {
          sendMessage({ type: 'init' });
        }, 5000);
      },
      false
    );

    const stream = {
      open() {
        sendMessage({
          type: 'openvm',
          vmInfo
        });
      },

      destroy() {
        delete instances[comToken];

        iframe.parentNode.removeChild(iframe);
      }
    };

    this.handleMessageReceived = payload => {
      if (intervalPoster) {
        clearInterval(intervalPoster);
        intervalPoster = null;
      }

      if (payload.type === 'ready') {
        resolve(stream);
      }
    };
  });
}

const api = {
  createStream(domNode, vmInfo) {
    return new StreamApi(domNode, vmInfo);
  }
};

module.exports = api;
