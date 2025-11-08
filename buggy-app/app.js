const express = require('express');
const app = express();
const port = 3000;

let counter = 0; // intentional buggy variable

app.get('/api', (req, res) => {
    counter++;
    // BUG: random crash
    if (counter % 5 === 0) {
        // simulate a crash
        throw new Error('Random crash occurred!');
    }
    res.send({ message: 'Request successful', count: counter });
});

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Buggy app listening at http://localhost:${port}`);
});
