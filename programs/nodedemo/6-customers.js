const express = require('express')
var cors = require('cors')
const port = 5000

const app = express()
app.use(cors())
app.use(express.json())


let customers = []

app.get('/customers', (req, res) => {
    res.json(customers)
}   )

app.post('/customers', (req, res) => {
    const customer = {
        id: customers.length + 1,
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        location: req.body.location,
        zipcode: req.body.zipcode
    }
    customers.push(customer)
    res.json(customer)
})

app.delete('/customers/:id', (req, res) => {
    const id = req.params.id
    const customer = customers.find(customer => customer.id === parseInt(id))
    const index = customers.indexOf(customer)
    customers.splice(index, 1)
    res.json(customer)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

