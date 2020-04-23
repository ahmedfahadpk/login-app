const express = require('express');
const app = express();
const PORT = 8888;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});