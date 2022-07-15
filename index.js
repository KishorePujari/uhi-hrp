const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }))
app.use(bodyParser.json({limit: '200mb'}));
let HRPInfo = {};
try {
    const jsonString = fs.readFileSync("./HRPInfo.json");
    HRPInfo = JSON.parse(jsonString);
} catch (err) {
    console.log(err);
    return;
}

app.post("/", (req, resp) => {
    console.log('/POST');
    resp.status(200).send("HOME via POST"); 
});

app.get("/", (req, resp) => {
    console.log('/GET');
    resp.status(200).send("HOME"); 
});

app.get("/locations", (req, resp) => {
    console.log('GET /locations');
    resp.status(200).send("Locations"); 
});
app.get("/name_search", (req, resp) => {
    console.log('/name_search');
    resp.status(200).send("Name"); 
});
app.get("/specialization", (req, resp) => {
    console.log('GET /specialization');
    resp.status(200).send("specialization"); 
});
app.use( (req,res) => { res.status(404).send("Unknown request"); } )
app.listen(port, ()=> {console.log('On port ${port}');})
