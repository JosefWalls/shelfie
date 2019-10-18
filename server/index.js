const express = require('express');
const massive = require('massive');
const {inventory, createProduct, deleteProduct} = require ("./controller")
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
    console.log("db connected")
})
.catch(error => {
    console.log(error)
})

app.get("/api/inventory", inventory);
app.post('/api/product', createProduct)
app.delete('/api/product/:id', deleteProduct)

app.listen(5050, () => {
    console.log("Henlo 5050")
})