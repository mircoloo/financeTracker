const express = require('express')
var bodyParser = require('body-parser')


var jsonParser = bodyParser.json()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();

//ROUTERS
const platformRouter =  require('./routes/api/platform')


app.use(jsonParser)
app.use(urlencodedParser)
app.use('/api/v1/platform', platformRouter);



app.use("*", (req, res) => { res.status(404).send('<h1>Error 404 page not found</h1>') })

app.listen(3000, () => console.log("Server is listening on port 3000"))