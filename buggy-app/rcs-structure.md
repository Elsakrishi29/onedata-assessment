## Project Name

Buggy App – Simulated Production Incident

## Objective

Simulate a production incident, reproduce it, analyze root cause, and propose a fix.

## Steps to Run the App

```bash
# Install dependencies
npm install

# Start the app
node app.js

# OR save logs
node app.js > app.log 2>&1
```

## Reproduce the Issue

```bash
# Hit the API multiple times
for i in {1..10}; do curl http://localhost:3000/api; done
```

## Logs

```
Error: Random crash occurred!
    at /path/to/app.js:...
```

## Root Cause

* The app throws an unhandled exception when counter % 5 === 0.

* In a real scenario, this could happen due to unhandled variables, failed DB calls, or memory issues.

## Impact

* Users see a 500 error.
* App may crash repeatedly if traffic continues.
* Simulates a real production failure scenario.

## Fix

```js
app.get('/api', (req, res) => {
    try {
        counter++;
        res.send({ message: 'Request successful', count: counter });
    } catch (err) {
        console.error(err);
        res.status(500).send('Something broke!');
    }
});
```