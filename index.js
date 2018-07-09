const express = require('express')

const bodyParser = require('body-parser');
const massive = require('massive')
require('dotenv').config();

const app = express();
app.use = (bodyParser.json());

massive(process.env.CONNECTION_STRINGpostgres).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))


const port = (3000);
app.listen(port, (e) => { console.log(`Listening on port ${port}.`); })

app.post('./api/product', products_controller.create)
app.get('./api/products', product_controller.getAll)
app.get('./api/products/id', product_controller.getOne)
app.put('./api/products/id', product_controller.Update)
app.delete('./api/products/id', product_controller.delete)