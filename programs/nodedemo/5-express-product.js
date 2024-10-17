const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

let products = [
    {
        id: 1,
        name: 'Laptop'
    },
    {
        id: 2,
        name: 'Mobile'
    },
    {
        id: 3,
        name: 'Tablet'
    },
    {
        id: 4,
        name: 'Smart Watch'
    }
]


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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})  

