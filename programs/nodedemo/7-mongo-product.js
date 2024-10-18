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

app.post('/products',async(req,res)=>{
    let product = req.body

    let db = await connectdb()
    const result = await db.collection('products').insertOne(product);
    res.send('Product added successfully');
})

app.get('/products',async(req,res)=>{
    let db = await connectdb();
    const products = await db.collection('products').find().toArray();
    res.json(products);
})


app.listen(port,()=>{
    console.log(`server is running on port - ${port}`)
})