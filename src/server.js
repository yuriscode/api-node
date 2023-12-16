const express = require('express')

const app = express()

const PORT = 3333
app.listen(PORT, () => console.log(`ola, estou na porta ${PORT}`))