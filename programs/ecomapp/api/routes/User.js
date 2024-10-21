const express = require('express');
const userRouter = express.Router();
const { connectdb } = require('../db/ConnectDb');
userRouter.get('/', (req, res) => {
  res.send('User route');
})

userRouter.post('/', async(req, res) => {
    try {
        const newUser = req.body;
        console.log("newUser ",newUser)
        let db = await connectdb();
        const result = await db.collection('users').insertOne(newUser);
        console.log("result ",result)
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while creating the product' });
    }
});

module.exports = userRouter;