const express = require('express');
const axios = require('axios');

// Create an instance of Express
const app = express();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Call a Python endpoint
app.get('/call-python', async (req, res) => {
    // Make a get request to the python application running on port 8080
    try {
    const response = await
    axios.get('http://python-app:8080/');
    res.send(response.data);
    }
    catch (error) {
        res.status(500).send('Error calling Python application endpoint');
    }
});

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});