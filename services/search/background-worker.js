const sqs = require('./sqs.js');
const db = require('./Database/index.js');
const redis = require('./Database/redis.js');

const addMessage = (body) => {
  sqs.sendToSQS(body);
};

const getMessage = () => {
  sqs.getFromSQS((err, data) => {
    if (data.Messages) {
      let message = data.Messages[0];
      let url = message.Body;
      let body = url.split('?query=');
      let page = parseInt(body[0][1]);
      let query = body[1].split('%20').join(' ');
      db.query(query, page)
        .then(result => {
          redis.set(url, JSON.stringify(result));
          return result;
        });
      sqs.deleteFromSQS(message.ReceiptHandle);
    }
  });
};


module.exports = {
  addMessage: addMessage,
  getMessage: getMessage
};
