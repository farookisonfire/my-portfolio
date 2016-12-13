const express = require('express');

const PORT = process.env.PORT || 1337;
const NODE_ENV = process.env.NODE_ENV || 'development'
const app = express();
const data = ['nagata', 'kamuzora'];

app.get('/api/data', (req,res) => {
  res.send(data)
});

app.listen(PORT, () => {
  console.log('listening on ' + PORT)
});
