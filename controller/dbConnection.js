const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect( URI , {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, ()=>{
  console.log(' connected to DB ');
});