const express = require('express')

const app = express()

app.get('/', (request, response) =>{
    response.send('Hello World')
})

const PORT = 3333
app.listen(PORT, () => console.log(`ola, estou na porta ${PORT}`))