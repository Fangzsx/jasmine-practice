const express = require('express');
const app = express();
const PORT = 3000;

const productRouter = require('./routers/products');

app.use('/', productRouter);


app.listen(PORT, () => {
    console.log(`listening with port ${PORT}`);
})
