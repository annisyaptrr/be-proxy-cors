const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  request('https://frontend-test.rahmannauliaaa.workers.dev/questions', (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: 'error', message: error ? error.message : 'Request failed' });
    }
    try {
      const jsonData = JSON.parse(body);
      res.json(jsonData);
    } catch (parseError) {
      return res.status(500).json({ type: 'error', message: 'Response is not JSON' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
