const express = require('express')

const { MongoClient, ObjectId } = require('mongodb');


const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'mongodb18oct2024';

const connectdb = async () => {
    console.log("connecting to db....  ")
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    return db;
}

exports.connectdb = connectdb;