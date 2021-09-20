// server.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Server 2 Node.js app server 3002!')
})

app.listen(3003, () => {
    console.log('Server is up on 3002')
})
