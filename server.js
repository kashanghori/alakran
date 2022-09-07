const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, '192.168.2.13', function (err) {
 if (err) {
   console.log(err)
    return
 }
 console.log('Listening at 192.168.2.13:3000\n')
});
