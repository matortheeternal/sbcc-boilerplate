const express = require('express');
const cors = require('cors');
const { getRouter } = require('./restService');
const { loadApp } = require('./loader');

loadApp();

const router = getRouter();
const app = express();

app.use(express.json());
app.use(cors());
app.disable('x-powered-by');

app.use('/api/v1', [router]);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', err => {
  console.error('ERROR: ', err);
});
