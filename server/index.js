const express= require('express')
const cors= require('cors')
const bodyparser= require('body-parser')
const userRoute = require('./routes/api/users.js')
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const PORT = 4000;
app.listen(PORT, (req,res)=>{
    console.log(`server is running at ${PORT}`)});
app.get('/',(req,res)=>{
    res.send('<h1>Server is running</h1>')
})
app.use('/api/users', userRoute)