const mongoose = require('mongoose');

async function dbconnect(){
   const db = await mongoose.connect('mongodb+srv://abeer123:abeer123@cluster0.hbedp.mongodb.net/Blogapp?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })
      console.log('mongo db is connected')
      
}

module.exports=dbconnect

