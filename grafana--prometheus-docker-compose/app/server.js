const express = require('express');
const client = require('prom-client');

const app = express();
const port = 7000;

// Counter metric
const counter = new client.Counter({
  name: 'node_requests_total',
  help: 'Total number of requests'
});

// Default metrics (CPU, memory)
client.collectDefaultMetrics();

// Increment counter on /
app.get('/', (req, res) => {
  counter.inc();
  res.send('Hello World!');
});

// /metrics endpoint for Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, '0.0.0.0', () => console.log(`App listening on http://0.0.0.0:${port}`));
  