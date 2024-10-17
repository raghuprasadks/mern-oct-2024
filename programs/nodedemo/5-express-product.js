const express = require('express')

const app = express()
const port = 3000
// middleware
app.use(express.json())

let products =  [] 



app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id === parseInt(id))
    res.json(product)
} )

app.post('/products', (req, res) => {
    console.log("request body is ", req.body)   
    const product = {
        id: products.length + 1,
        name: req.body.name
    }
    products.push(product)
    res.json(product)
})

app.put('/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id === parseInt(id))
    product.name = req.body.name
    res.json(product)
})

app.delete('/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id === parseInt(id))
    const index = products.indexOf(product)
    products.splice(index, 1)
    res.json(product)
})  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})  

