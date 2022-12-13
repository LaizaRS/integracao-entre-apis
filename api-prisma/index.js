const contatosRoutes = require ('./src/routes/routes')
const express = require ('express')

const app = express()
app.use(express.json())

app.use('/contatos', contatosRoutes)

app.get('/alive', (request, response) => {
    return response.json({message: "vivão"})
})


app.listen(6666)