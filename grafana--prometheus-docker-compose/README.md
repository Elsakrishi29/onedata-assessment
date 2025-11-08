# grafana-prometheus-docker-compose

# Run the app

```bash
docker-compose up -d

# Node.js app 
http://localhost:7000

# Prometheus
http://localhost:9090

# Grafana
http://localhost:3001
# (username: admin, password: password)
```

## Open Grafana

* click `Connections`
* Click `Data Sources`

## Add Prometheus

* Click `Add data source`

* Choose Prometheus

* Fill in the URL: http://prometheus:9090

* Leave other settings default

* Click Save & Test → should say Data source is working

## Create a new Dashboard (Open Grafana)

* Click + → Dashboard
* Click Add new panel

## Add a metric to the panel

* In the `Query section`, choose `Prometheus` as the data source.

Type your metric name, for example:

```bash
node_requests_total
```
Click `Run Query` → you should see a graph.