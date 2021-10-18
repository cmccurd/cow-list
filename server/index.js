const get = require('./modules/get.js');
const post = require('./modules/post.js')
const path = require('path');

const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


app.get('/api/cows', (req, res) => {
  get().then((val) => {
    console.log(val);
    res.send(val);
  })
});

app.post('/api/cows', (req, res) => {
  post(req.body).then((val) => {
    res.send(val);
  })
});