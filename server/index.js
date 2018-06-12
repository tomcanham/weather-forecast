const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.resolve(__dirname, '../client/dist')))

app.listen(8080, () => console.log('Weather app listening on port 8080...'))