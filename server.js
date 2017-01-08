const express = require('express');
const app = express();
PORT = process.env.PORT || 3000;

app.use(express.static('./'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: './'})
})
