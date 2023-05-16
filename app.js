const express = require('express');
const app = express();
const port = 8000;
const host = `http://localhost:${port}`;


app.get('/', (req, res) => {
    res.send("so testando")
});

app.listen(port, () => {
    console.log(`Executando no link: ${host}`)
});

