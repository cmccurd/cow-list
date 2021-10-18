

const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('./public'))

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.get('/api/cows', (req, res) => {
  res.send([{name: 'Buttercup', description: '...'}, {name: 'Daisy', description: '...'}]);
});

app.post('api/cows', (req, res) => {
  //save to db

  res.end();
});