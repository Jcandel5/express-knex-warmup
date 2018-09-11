const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const listener = () => `Listening on port ${port}!`

app.listen(port, listener)

app.get('/', (req, res) => {
    res.send('The Route Works!')
})

console.log(`listening on ${port}`)