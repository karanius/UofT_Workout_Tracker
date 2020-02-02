const mongoose = require('mongoose');
const URI = MONGODB_URI;

mongoose.connect( URI , {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, ()=>{
  console.log(' connected to DB ');
});