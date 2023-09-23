const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path')


// dotenv configration

dotenv.config();

// rest object
const app = express();


// middleware

app.use(cors());
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname,'./client/build')))



// routes
app.use('/api.v1/portfolio',require('./routes/portfolioRoute'))


app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));

});


// app.get('/',(req,res)=> {
// res.send('<h1> Welcome To Node Server</h1>');
// });



// port
const PORT=process.env.PORT || 8080;




// listen
app.listen(PORT,() =>{
    console.log( `Server running on PORT ${PORT} ` );

});




