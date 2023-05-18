const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())

const port = process.env.PORT

app.get('/test', (req, res) => {
    res.json('text ok2');
})

app.listen(4000);