// server.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(' Node.js app server one 3001!')
})

app.listen(3001, () => {
    console.log('Server is up on 3001')
})
