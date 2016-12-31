const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const feed = require('rss-to-json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/posts.json', (req, res) => {
  feed.load('https://medium.com/feed/@bryantheastronaut', (err, rss) => {
    if (err) throw err;
    res.json({mediumData: rss});
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
