const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
let MongoClient = require('mongodb').MongoClient;
const { collection } = require("./datamodel");
var Schema = mongoose.Schema;


const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //database connection 
  var schemaName = new Schema({
    request: String,
    time: Number
}, {
    collection: 'meds'
});
var schemaName1 = new Schema({
  request: String,
  time: Number
}, {
  collection: 'patients'
});
var Model = mongoose.model('Model', schemaName);
var Model1 = mongoose.model('Model1', schemaName1);
mongoose.connect('mongodb://localhost:27017/admin');


  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

  app.get('/meds', (req, res) =>
{ 
  Model.find({}, { projection: { _id: 0 } },function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});


app.get('/diseases', (req, res) =>
{ 
  Model.find({}, { projection: { _id: 0 } },function(err, result) {
    if (err) throw err;
    res.json(result).toarray();
  });
});
app.get('/patients', (req, res) =>
{ 
  Model1.find({}, { projection: { _id: 0 } },function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.get('/patient/:id', (req, res) =>
{ 
  Model1.findOne({"Id":req.params.id},function(err,result)
  {
    if(err)
      {
      console.log(err);
      }
      else
      {
          res.json(result); 
      }
  })
});



  app.post('/meds/:id', (req, res) =>
{ 
  console.log("ok",req.params.id);
  Model.findOne({"name":req.params.id},function(err,result)
  {
    if(err)
      {
      console.log(err);
      }
      else
      {
          res.json(result); 
      }
  })
});

  
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});