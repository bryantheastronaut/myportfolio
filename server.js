const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.API_PORT || 9999;

app.use(bodyParser.json());

app.get('/posts.json', (req, res) => {
  let dataToSend;
  axios
    .get('https://medium.com/@bryantheastronaut?format=json')
    .then(posts => {
      console.log(posts.data);
      res.json({send: posts.data});
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
