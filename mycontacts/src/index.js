const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello World! :D');
});

app.listen(3000, () => {
  console.log('server started: http://localhost:3000');
});
