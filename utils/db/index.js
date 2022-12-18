const mongoose = require("mongoose");
const db = process.env.MONGO_URI;

module.exports = {
  
    mongo: mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology:true
    }).then(()=> console.log('MongoDB connection successful'))
  }
  