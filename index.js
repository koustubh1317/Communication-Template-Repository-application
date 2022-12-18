 require("dotenv").config();
 const express = require('express');
 const app = express()

// require('./utils/express/index')(app, express)
// require('./dependencies')


require('./routes')(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    'Server is running on ' +
      process.env.PORT 
     
  )
 
)

module.exports = app;