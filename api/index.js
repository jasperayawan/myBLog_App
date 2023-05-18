const express = require('express')
const app = express();

const port = process.env.PORT

app.get('/test', (req, res) => {
    res.json('text ok2');
})

app.listen(4000);