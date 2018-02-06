const express = require('express')

const app = express()

app.use(express.static('dist'))

app.listen(2134, () => console.log(2134))
