const crypto = require('crypto');

crypto.randomBytes(16, (err, buffer) => {
  const randomId = buffer.toString('hex');
  console.log(randomId);
});