const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('hello world!')
})

app.listen(1111, () => {
    console.log("Server started on 1111")
})