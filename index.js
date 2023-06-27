const express = require('express');
const port = 7000;

const app = express()
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, () => {
    console.log('server started on port:- ', port)
})