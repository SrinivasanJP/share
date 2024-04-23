// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json()); // Parse JSON requests

app.post('/submit-data', (req, res) => {
    const inputData = req.body.inputData;
    console.log('Received data from client:', inputData);

    // You can perform further processing with the data here

    res.status(200).send('Data received successfully');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
