const express = require('express')
const cors = require('cors');

var bodyParser = require('body-parser')


var jsonParser = bodyParser.json()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();

//ROUTERS
const platformRouter =  require('./routes/api/platform')

app.use(cors({
    origin: true, // "true" will copy the domain of the request back
                  // to the reply. If you need more control than this
                  // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
                       // authenticated via either a session cookie
                       // or Authorization header. Otherwise the
                       // browser will block the response.

    methods: 'POST,GET,PUT,OPTIONS,DELETE' // Make sure you're not blocking
                                           // pre-flight OPTIONS requests
}));
app.use(jsonParser)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(urlencodedParser)
app.use('/api/v1/platform', platformRouter);



app.use("*", (req, res) => { res.status(404).send('<h1>Error 404 page not found</h1>') })

app.listen(3000, () => console.log("Server is listening on port 3000"))