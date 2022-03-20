const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const app = express();
port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/',indexRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});