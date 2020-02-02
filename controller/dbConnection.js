const mongoose = require('mongoose');
const URI = "mongodb://localhost/workout";

mongoose.connect( URI , {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, ()=>{
  console.log(' connected to DB ');
});