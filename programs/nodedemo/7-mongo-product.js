const express = require('express')

const { MongoClient, ObjectId } = require('mongodb');

const port = 5000
app = express()

app.use(express.json());

const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'mongodb18oct2024';

const connectdb = async () => {
    console.log("connecting to db....  ")
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    return db;
} 
/**
app.post('/products',async(req,res)=>{
    let product = req.body

    let db = await connectdb()
    const result = await db.collection('products').insertOne(product);
    res.send('Product added successfully');
})

 */
app.post('/products', async (req, res) => {
    try {
        const newProduct = req.body;
        let db = await connectdb();
        const result = await db.collection('products').insertOne(newProduct);
        console.log("result ",result)
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while creating the product' });
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let db = await connectdb();
        const result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Product not found' });
        }
        res.send({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while deleting the product' });
    }
});


/**
app.get('/products',async(req,res)=>{
    let db = await connectdb();
    const products = await db.collection('products').find().toArray();
    res.json(products);
})

 */
app.get('/products', async (req, res) => {
    try {
        let db = await connectdb();
        const products = await db.collection('products').find().toArray();
        res.json(products);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching products' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let db = await connectdb();
        const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
        console.log("get by id ",product)
        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        }
        res.send(product);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching the product' });
    }
});

// Update product by ID
app.put('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        let db = await connectdb();
        const result = await db.collection('products').updateOne({ _id: new ObjectId(id) }, { $set: updateData });
        if (result.matchedCount === 0) {
            return res.status(404).send({ error: 'Product not found' });
        }
        res.send({ message: 'Product updated successfully' });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while updating the product' });
    }
});

// Delete product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        let db = await connectdb();
        const result = await db.collection('products').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            return res.status(404).send({ error: 'Product not found' });
        }
        res.send({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while deleting the product' });
    }
});


app.listen(port,()=>{
    console.log(`server is running on port - ${port}`)
})