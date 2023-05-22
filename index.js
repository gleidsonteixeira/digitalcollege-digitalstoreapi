const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
const host = `http://localhost:${port}`;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("so testando")
});

app.post('/sala', (req, res) => {
    res.send(JSON.stringify({message: 'Os dados chegaram', corpo: req.body}))
})

app.listen(port, () => {
    console.log(`Executando no link: ${host}`)
});

module.exports = app;