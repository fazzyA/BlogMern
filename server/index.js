const express= require('express')
const cors= require('cors')
const bodyparser= require('body-parser')
const userRoute = require('./routes/api/users.js')
const postRoute = require('./routes/api/posts.js')
const dbconnect = require('./config/db.js')

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const PORT = 4000;
app.listen(PORT, (req,res)=>{
    console.log(`server is running at ${PORT}`)});
/// databse connection
dbconnect();

app.get('/',(req,res)=>{
    res.send('<h1>Server is running</h1>')
})
app.use('/api/users', userRoute)
app.use('/api/posts',postRoute)
